const express = require('express')
const cors = require('cors');
const usersRouter = require('./routes/users')
const app = express()

app.use(cors());

app.get('/test', (req, res) => {
  res.json({ "users": ["user1", "user2", "user3"] })
})

app.use('/users', usersRouter)

app.listen(3000)