
const getSessionById = async (req, res) => {
  try {
    const params = req.params
    
    if (!params.id) {
      throw new Error('Oye veniste sin id')
    }

    res.send(session)
  } catch (error) {
    res.send({error: error.message})
  }
}

module.exports = {
  getSessionById
}