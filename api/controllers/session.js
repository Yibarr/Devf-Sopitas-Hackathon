const express = require('express')
const router = express.Router()

router.use( '/solo/solito',(req,res) => {
  res.send('Hola mundo')
})

router.post('/:id',async (req, res) => {
  try {
    const params = req.params
    
    if (!params.id) {
      throw new Error('Oye veniste sin id')
    }

   // const session = getSessionById(params.id)


    res.send(session)
  } catch (error) {
    res.send({error: error.message})
  }
})

module.exports = router