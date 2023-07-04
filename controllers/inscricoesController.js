const Inscricao = require('../models/Inscricao')
const Curso = require('../models/Curso')
const User = require('../models/User')

const getInscricoes = async (req, res)=> {
    try {
        const incricoes = await Inscricao.findAll()
        res.json(incricoes)
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    } 
}

const addInscricao = async (req,res) => {
    try {
        const { userId, cursoId } = req.body

        const inscricao = await Inscricao.create({
            userId, cursoId
        })

        const curso = await Curso.findByPk(cursoId)

        const user = await User.findByPk(userId)

        if (!user) {
            return res.status(404).json({message: 'Usuario not find'})
        }

        if (!curso) {
            return res.status(404).json({message : 'Curso not find'})
        }
        now = new Date
        if (!curso.dataInicio > now) {
            return res.status(404).json({message : 'Curso expirado'})
        }

        await inscricao.save()

        res.json(inscricao)
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    }
}

const cancelInscricao = async (req,res) => {
    try {
        const { inscricaoId } = req.body

        await Inscricao.upsert({
            id: req.body.inscricaoId,
            dataInicio: new Date,
            cancelado: true
        })

        const inscricao = await Inscricao.findByPk(inscricaoId)

        if (!inscricao) {
            return res.status(404).json({message: 'Inscricao not find'})
        }
         res.json(inscricao)
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
    }
}

module.exports={getInscricoes, addInscricao, cancelInscricao}