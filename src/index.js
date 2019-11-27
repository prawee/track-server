const express = require('express')

const app = express()

const mongoUri = `mongodb+srv://admin:p@ssw0rd@development-vt4z8.mongodb.net/test?retryWrites=true&w=majority`

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
