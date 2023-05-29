const express = require('express')
const app = express()

app.get('/display', (req, res) => {
  res.setHeader('Cache-Control', 'no-store')
  res.json({ 'users': [1, 2, 3] })
})

app.get('/error', (req, res) => {
  res.setHeader('Cache-Control', 'no-store')
  res.status(500).json({ status: 'server error' })
})

app.get('/download', (req, res) => {
  res.setHeader('Cache-Control', 'no-store')
  res.download('server.js')
})

const userRouter = require('./routes/users')

app.use(express.json())
app.use('/users', userRouter)

app.listen(5000, () => { console.log(`Server started on port 5000`) })