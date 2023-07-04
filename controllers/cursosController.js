const Curso = require('../models/Curso')

const getCurso = async (req, res) => {
    try {
        const curso = await Curso.findAll()
        res.json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error')
    }
}

const addCurso = async (req, res) => {
    try {
        const{descricao, dataInicio} = req.body
        const curso = await Curso.create({
            descricao, dataInicio
        });
        res.json(curso)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error')
    }
}

module.exports={getCurso, addCurso}