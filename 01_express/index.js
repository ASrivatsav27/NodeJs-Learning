const express = require('express')
const app = express()
const port = 8000


app.get('/', (req, res) => {
  res.end('Homepage')
})
app.get('/contact-us', (req, res) => {
  res.end('You can contact me and my email address')
})
app.post('/tweets', (req, res) => {
    res.status(201).end('Tweet Created success')
})
app.get('/tweets', () => {
    res.end('Here are your tweets')
})
app.listen(port, () => {
    console.log(`Server is running on PORT {port}`)
})

