const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const usuariosControllers = require('../controllers/usuariosControllers.js')
const distribuidorasControllers = require('../controllers/distribuidorasControllers.js')
const areaDeConcessaoControllers = require('../controllers/areaDeConcessaoControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rota usuario
routes.get('/usuarios', usuariosControllers.index)
routes.post('/usuarios', usuariosControllers.store)
routes.put('/usuarios/:id', usuariosControllers.update)
routes.delete('/usuarios/:id', usuariosControllers.delete)
routes.get('/usuarios/:id', usuariosControllers.indexId)

// rota distribuidora
routes.get('/distribuidoras', distribuidorasControllers.index)
routes.post('/distribuidoras', distribuidorasControllers.store)
routes.put('/distribuidoras/:id', distribuidorasControllers.update)
routes.delete('/distribuidoras/:id', distribuidorasControllers.delete)
routes.get('/distribuidoras/:id', distribuidorasControllers.indexId)

// rota area de concessao
routes.get('/areaconcessao', areaDeConcessaoControllers.index)
routes.post('/areaconcessao', areaDeConcessaoControllers.store)
routes.put('/areaconcessao/:id', areaDeConcessaoControllers.update)
routes.delete('/areaconcessao/:id', areaDeConcessaoControllers.delete)
routes.get('/areaconcessao/:id', areaDeConcessaoControllers.indexId)



module.exports = routes

