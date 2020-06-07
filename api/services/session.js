const client = require('../db')

const getDate = async () => {
  try {
    const query = await client.query('SELECT DATE_NOW() ')
    
    console.log(query)
    return query
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  getDate
}