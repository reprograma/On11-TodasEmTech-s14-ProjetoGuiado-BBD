const express = require('express')
const app = express()

//conectar db
const db = require('./src/data/database')
db.connect() 

app.use(express.json())

//usar as rotas
const titulo = require('./src/routes/titulos.routes')
const estudio = require('./src/routes/estudios.routes')

app.use('/titulos', titulo)
app.use('/estudios', estudio)

app.listen(3333, ()=> console.log('Servidor rodando!'))