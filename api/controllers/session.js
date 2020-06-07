const { getDate } = require('../services/session')

const getSessionById = async (req, res) => {
  try {
    const params = req.params
    
    if (!params.id) {
      throw new Error('Oye veniste sin id')
    }
    const date = await getDate()
    console.log(date)
    res.send(date)
  } catch (error) {
    res.send({error: error.message})
  }
}

module.exports = {
  getSessionById
}