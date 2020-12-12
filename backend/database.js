const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const { config } = require('./config')

const getDatabase = async () => {
  const adapter = new FileSync(config.databaseFile)
  const db = low(adapter)
  
  // set defaults
  await db.defaults({ 
    submissions: []
  }).write()
  
  return db
}

module.exports = { getDatabase }