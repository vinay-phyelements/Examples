const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/users')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.post("/v1/createUser", (req, res) => {
  userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/v1/", (req, res) => {
  userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/v1/getUser/:id", (req, res) => {
  const id = req.params.id
  userModel.findById(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put("/v1/updateUser/:id", (req, res) => {
  const id = req.params.id
  userModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }, { new: true })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete("/v1/deleteUser/:id", (req, res) => {
  const id = req.params.id
  userModel.findByIdAndDelete(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running at port 3001")
})
