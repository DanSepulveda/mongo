require('dotenv').config()

const { MongoClient } = require('mongodb')
const user = process.env.MONGOUSER
const password = process.env.MONGOPASSWORD
const uri = `mongodb+srv://${user}:${password}@cluster0.wpvdx.mongodb.net/?retryWrites=true&w=majority`

async function conectarDB() {
  let client
  try {
    client = new MongoClient(uri)
    await client.connect()
    console.log('Database connected')
    return client
  } catch (error) {
    console.log('Error')
  }
}

module.exports = conectarDB
