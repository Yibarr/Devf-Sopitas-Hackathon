const express = require('express')
const router = express.Router()

router.use( '/',(req,res) => {
  res.send('Hola')
})

module.exports = router