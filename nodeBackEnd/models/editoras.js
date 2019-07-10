const Sequelize = require('sequelize');
const db = require('../config/database');

const Editora = db.define('editora',{
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Editora;