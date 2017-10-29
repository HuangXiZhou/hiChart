const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/hiChart'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongo connect success')
})

const User = mongoose.model('usrer', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))

// User.create({
//   user: 'react',
//   age: 20
// }, (err, doc) => {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// User.find({}, (err, doc) => {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(doc)
//   }
// })

User.remove({age:20}, (err, doc) => {
  console.log(doc)
})

const app = express()

app.listen(9093, () => {
  console.log('app is listening in the port 9093')
})