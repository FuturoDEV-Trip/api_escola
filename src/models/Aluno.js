const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Usuario = connection.define('alunos', {
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.ENUM(['Aluno','Professor'])
    }
})

module.exports = Aluno


