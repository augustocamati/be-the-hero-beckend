const express = require('express');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');

const routes = express.Router()

const ongsController = require('./controllers/ongsController')


/**
 * TIPOS DE METODOS
 * 
 * get: buscar/ listar
 * post: criar
 * put: alterar
 * delete: deletar/apagar
 */


/**
 * TIPOS DE PARAMETROS  
 * 
 * 
 * query: parametros enviados pela rota pelo ? (filtros e paginação) ex: http://localhost:3333/blog?page=3
 * request.query
 * 
 * route: para identificar recursos http://localhost:3333/id
 * const id = request.params
 * 
 * body: o corpo da requisição (criar ou alterar)
 * const body = request.body
 * 
 */


routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.store);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.store)
routes.delete('/incidents/:id', incidentsController.delete)


module.exports = routes