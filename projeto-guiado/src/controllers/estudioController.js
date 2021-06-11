const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const criaEstudio = async (req, res) => {
    const estudio = new Estudio({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })

    const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
    if(estudioJaExiste) {
        return res.status(409).json({error: "Estudio já cadastrado!"})
    }

    try {
        const novoEstudio = await estudio.save()
        res.status(201).json(novoEstudio)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
}

const mostraEstudios = async (req, res) => {
    try {
        const estudios = await Estudio.find()
        return res.status(200).json(estudios)
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    
}

//Update estudio
//encotrar esse estudio, a partir id pelo route params

const atualizaEstudio = async (req, res)=> {
    const encontraEstudio = await Estudio.findById(req.params.id)
    if(encontraEstudio == null) {
        return res.status(404).json({message: 'estudio não encontrado.'})
    }

    if (req.body.nome != null) {
        encontraEstudio.nome = req.body.nome
    }

    try {
        //salvar no banco de dados a alteracao
        const estudioAtualizado = await encontraEstudio.save()
        //mandar a resposta com o nome alterado    
        res.status(200).json(estudioAtualizado)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

//Deleta estudio

const deletaEstudio = async (req, res) => {
    const encontraEstudio = await Estudio.findById(req.params.id)
    if(encontraEstudio == null) {
        return res.status(404).json({message: 'estudio não encontrado.'})
    }

    try {
        await encontraEstudio.remove()
        res.status(200).json({message: 'foi deletado com sucesso'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    } 
}

module.exports = { 
    criaEstudio,
    mostraEstudios,
    atualizaEstudio,
    deletaEstudio
}

