const express = require('express')
const router = express.Router()

const { agregarPerrito } = require('../controllers/perrito.controllers')

router.route('/perrito').post(agregarPerrito)

module.exports = router
