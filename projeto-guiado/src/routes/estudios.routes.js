const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')

//create -> POST -> save()
router.post('/', controller.criaEstudio)

//read -> GET -> find()
router.get('/', controller.mostraEstudios)

//update -> PATCH -> getById() ou findOne() e save()
router.patch('/:id', controller.atualizaEstudio)
//delete -> DELETE -> getById() ou findOne() e remove()
router.delete('/:id', controller.deletaEstudio)
module.exports = router