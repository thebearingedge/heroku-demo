const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello, heroku')
})

app.listen(process.env.PORT)
