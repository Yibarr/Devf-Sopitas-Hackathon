require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors =  require('cors')
const ngrok = require('ngrok');
const app = express()
const port = process.env.PORT || 5000

const routes = require('./routes')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


app.use('/api/v1', routes)

app.get('/', ( _ , res) => {
  const welcomeMsg = routes.stack.reduce(
    (acc, layer) => `${acc} \n <li>/api/v1${layer.route.path}</li>`,
    '<h1>Mi Changarro API </h1><h3>Routes:</h3>'
  )
  res.send(
    welcomeMsg
  )
})

app.listen(port, (err) => {
  if (!err) {
    console.log(`App initialized on PORT: ${port}`)
  } else {
    console.log(err)
  }
})

(async function () {
  const url = await ngrok.connect(port);
  console.log(url);
})();