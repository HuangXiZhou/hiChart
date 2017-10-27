const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/hiChart'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongo connect success')
})
const app = express()

app.listen(9093, () => {
  console.log('app is listening in the port 9093')
})