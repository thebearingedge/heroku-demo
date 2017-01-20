var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var events = []

app.get('/', function (req, res) {
  res.json(events)
})

app.post('/events', function (req, res) {
  events.push(req.body)
  res.sendStatus(202)
})

app.listen(process.env.PORT)
