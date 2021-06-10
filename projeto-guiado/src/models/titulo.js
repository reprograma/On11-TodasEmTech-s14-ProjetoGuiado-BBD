// id: autogerado e obrigatório
// nome: texto e obrigatório
// genero: texto e obrigatório ->
// descricao: texto e obrigatório
// criadoEm: data gerada automaticamente e obrigatório
// estudio: referencia do estudio cadastrado previamente obrigatório

const mongoose = require('mongoose')

const tituloSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    estudio:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'estudio'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('titulo', tituloSchema )