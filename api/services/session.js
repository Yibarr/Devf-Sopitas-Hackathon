const client = require('../db')

const getDate = async (id) => {
  try {
    const query = await client.query('SELECT NOW() ',[id], (err, res) => {
      if (err) {
        console.error(err)
      }
      console.log(err)
      return res
    })
    return query
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getDate
}