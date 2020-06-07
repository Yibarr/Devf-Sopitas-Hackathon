const { Client } = require('pg')

const client = new Client()

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

module.exports = {
  query: async (text, params) => {
      client.connect()
      const start = Date.now()
      const duration = Date.now() - start
      const response = await client.query(text)
      console.log('executed query', { text, duration })
      return response
  }
}