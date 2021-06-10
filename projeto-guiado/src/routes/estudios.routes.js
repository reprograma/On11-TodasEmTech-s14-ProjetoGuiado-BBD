const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')

//create -> POST -> save()
router.post('/', controller.criaEstudio)

//read -> GET -> find()
router.get('/', controller.mostraEstudios)

//update -> PATCH -> getById() ou findOne() e save()

//delete -> DELETE -> getById() ou findOne() e remove()

module.exports = router