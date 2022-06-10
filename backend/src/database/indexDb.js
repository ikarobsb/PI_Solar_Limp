const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

// Importando Models
const usuarios = require('../api/models/usuariosModels')
const distribuidoras = require('../api/models/distribuidorasModels')
const areaconcessao = require('../api/models/areaDeConcessaoModels')


const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

usuarios.init(conexao)
distribuidoras.init(conexao)
areaconcessao.init(conexao)


module.exports = conexao;
