const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')

//Criar um titulo -> POST -> save()
router.post('/', controller.criaTitulo)

//Ler todos os titulos -> GET -> find()
router.get('/', controller.mostraTitulos)

//Ler todos os títulos da Marvel -> Get - find()
router.get('/marvel', controller.mostraTitulosMarvel)
//Ler todos os títulos da Ghibli -> Get - find()

//Ler todos os títulos da Pixar -> Get - find()

//Atualizar um título

//Deletar um título


module.exports = router