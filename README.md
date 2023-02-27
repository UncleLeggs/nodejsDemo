# nodejsDemo

Repository for demonstration of nodeJS knowledge

Node js server with help of express

Objective: request articles from https://www.telegraaf.nl/ process data and save to a db

Reason: To demonstrate the volnurability of paid articles as the contents are available on the source code of the page in the script selector

What is done:

- TS development env is set up,
- parsing logic,
- db set up for articles (can be improved with separate collection for authors, date markings etc...)

Problems: Cloudfare is blocking all attempts so far
Possible Solution: try using puppeteer/ residential proxy
