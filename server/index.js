// Express server
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const path = require('path')

const { PORT } = require('../config')
const socketio = require('socket.io')

// Body-parsing Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static-File Serving Middleware
app.use(express.static(path.join(__dirname, '..', 'dist')))

// Sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});

const server = app.listen(PORT, () => {
  console.log(`Server now listening on port: ${PORT}`)
});

const io = socketio(server)
require('./socket')(io)
