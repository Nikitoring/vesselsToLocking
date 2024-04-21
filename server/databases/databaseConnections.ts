import sqlite3 from 'sqlite3'
// const path = require('path')

const dbPath = './ships.db'

sqlite3.verbose()
const db = new sqlite3.Database(dbPath, (err: Error | null) => {
  if (err) {
    console.error('Database connection error:', err.message)
  }
  console.log('Connected to the SQLite database.')
})
export { db }
