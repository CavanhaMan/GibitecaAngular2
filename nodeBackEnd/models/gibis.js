const Sequelize = require('sequelize');
const db = require('../config/database');

const Gibi = db.define('gibi',{
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

module.exports = Gibi;