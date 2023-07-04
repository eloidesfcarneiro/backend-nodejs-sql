const { Sequelize, DataTypes } = require('sequelize')

const db = require('../database/conn')

const Curso = db.define('Curso', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  }
  },
)

module.exports = Curso