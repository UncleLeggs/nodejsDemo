import { Document, Schema, model } from 'mongoose'

interface ArticleDocument extends Document {
  headline: string
  description: string
  articleBody: string
}

const articleSchema = new Schema<ArticleDocument>({
  headline: { type: String, required: true },
  description: { type: String, required: true },
  articleBody: { type: String, required: true },
})

export const ArticleModel = model<ArticleDocument>('Article', articleSchema)

export interface Result {
  url: string
}

export interface Article {
  headline: string
  dateline: string
  datePublished: string
  dateModified: string
  description: string
  articleBody: string
  author: Author
  publisher: Publisher
  mainEntityOfPage: MainEntityOfPage
}

interface Author {
  '@type': string
  name: string
}
interface Publisher {
  '@type': string
  name: string
}
interface MainEntityOfPage {
  '@type': string
  '@id': string
}
