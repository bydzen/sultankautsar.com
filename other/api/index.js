const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/api/v1')
})

app.get('/api/v1', (req, res) => {
  res.json({
    title: 'Sultan Kautsar Base API',
    message: 'Welcome to Base URL',
    baseURL: 'https://sultankautsar.com/api/v1',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
