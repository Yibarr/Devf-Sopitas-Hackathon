const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = {
  query: async (text, params, callback) => {
    const start = Date.now()
    const duration = Date.now() - start
    console.log('executed query', { text, duration })
    const response = await pool.query(text, params)
    console.log(response)
    return callback(response)
  },
  getClient: (callback) => {
    pool.connect((err, client, done) => {
      const query = client.query
      client.query = (...args) => {
        client.lastQuery = args
        return query.apply(client, args)
      }
      const timeout = setTimeout(() => {
        console.error('A client has been checked out for more than 5 seconds!')
        console.error(`The last executed query on this client was: ${client.lastQuery}`)
      }, 5000)
      const release = (err) => {
        done(err)
        clearTimeout(timeout)
        client.query = query
      }
     return callback(err, client, release)
    })
  }
}