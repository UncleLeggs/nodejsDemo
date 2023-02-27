import { Article, ArticleModel, Result } from './types'
import { JSDOM } from 'jsdom'
import axios from 'axios'
import { articleSelector, baseSelector, baseUrl, headers } from './constants'
import { chunks, wait } from '../util'

async function getPaginationData(url?: string): Promise<Result[]> {
  const urls = await axios(url ?? baseUrl, { headers })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .then((html) => {
      const dom = new JSDOM(html).window.document
      if (!dom) throw new Error(`Nothing to parse`)
      return Array.from(dom.querySelectorAll(url ? `${articleSelector} > ${baseSelector}` : baseSelector))?.flatMap(
        (element) => {
          if (!element.textContent) return []
          return { url: element.textContent }
        }
      )
    })
    .catch((error) => console.error(error))
  if (!urls || !urls.length) return []
  return urls
}

async function getArticles(urls: string[]): Promise<Article[]> {
  // WARNING: Can clearly overload the server is to many requests are sent at once ex:
  // return await Promise.all(urls.map(async (url) => await getArticleContent(url)))
  // therefor we use for cycle
  const results: Article[] = []
  for (const url in urls) {
    await wait(3000)
    const result = await getArticleContent(url)
    if (!result) continue
    results.push(result)
  }
  return results
}

async function getArticleContent(url: string): Promise<Article | undefined> {
  const articleDetails = await axios(url, { headers })
    .then((response) => response.data)
    .then((html) => {
      const dom = new JSDOM(html).window.document
      if (!dom) throw new Error(`Nothing to parse`)
      return Array.from(dom.querySelectorAll('script'))?.flatMap((element) => {
        if (!element.textContent?.includes(`"@id":"${url}"`)) return []
        return JSON.parse(element.textContent) as Article
      })[0]
    })
    .catch((error) => console.error(error))
  if (!articleDetails) return undefined
  return articleDetails
}

export async function getData(): Promise<void> {
  const urlList = await getPaginationData()
  console.log(urlList)

  for (const url in urlList) {
    for (const chunk of [...chunks(await getPaginationData(url), 10)]) {
      const articles = (await getArticles(chunk.map((item) => item.url))).map((item) => {
        return {
          headline: item.headline,
          description: item.description,
          articleBody: item.articleBody,
        }
      })
      ArticleModel.insertMany(articles)
        .then(() => {
          console.log('Data saved successfully!')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
