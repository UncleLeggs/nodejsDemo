import express from 'express'
import mongoose from 'mongoose'
import config from '../config'
import { ArticleModel } from './getdata/types'
import { getData } from './getdata/data-fetcher'
import fetch from 'node-fetch'

// Define constants
const app = express()
const port = config.port
const mongoUri = config.mongodbUri

mongoose.set('strictQuery', false)
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB database:', error)
  })

app.get('/', (req, res) => {
  res.send('Getting Data')
})

app.get('/api/latestData', async (req, res) => {
  try {
    const latestData = await ArticleModel.find().sort({ _id: -1 }).limit(1)
    res.status(200).send(latestData)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

// Start the server and fetch the data in the background
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`)
  await getData()
  console.log(`Finished gathering data`)
})

setInterval(async () => {
  try {
    const response = await fetch(`http://localhost:${port}/api/latestData`)
    const latestData = await response.json()
    console.log('Latest data:', latestData)
  } catch (err) {
    console.error('Error fetching latest data:', err)
  }
}, 20000)
