const { Sequelize, DataTypes } = require('sequelize')

const db = require('../database/conn')

const User = require('../models/User')
const Curso = require('../models/Curso')

const Inscricao = db.define('Inscricao', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dataCancelamento: {
    type: DataTypes.DATE
  },
  cancelado: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

Inscricao.belongsTo(User)
Inscricao.belongsTo(Curso)

module.exports = Inscricao