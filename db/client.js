const { Client } = require('pg')

// Use your own db name
const dbName = 'cars'

const client = new Client({
  connectionString:
    process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : undefined,
})

module.exports = client
