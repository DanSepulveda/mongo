const conectarDB = require('../config/database')

const agregarPerrito = async (req, res) => {
  try {
    const perrito = req.body
    const cliente = await conectarDB()
    const db = cliente.db('prueba')
    const collection = db.collection('perros')
    let resultado = await collection.insertOne(perrito)
    console.log(resultado)
    res.json({ success: true, message: 'Perrito agregado' })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}

module.exports = { agregarPerrito }
