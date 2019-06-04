const knex = require('knex');
const knexConfig  = require('../knexfile');

const db = knex(knexConfig[dbEnv]);

module.exports = db;