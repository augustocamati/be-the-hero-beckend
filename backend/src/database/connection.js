const knex = require('knex')
const configiration = require('../../knexfile')

const connection = knex(configiration.development)

module.exports = connection