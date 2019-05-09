const knex = require('knex');
const knexConf  = require('../knexfile');

const db = knex(knexConfig[development]);

module.exports = db;