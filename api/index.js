const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

const session = require('./controllers/session')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/session',session)

app.listen(port, (err) => {
  if (!err) {
    console.log(`App initialized on PORT: ${port}`)
  } else {
    console.log(err)
  }
})