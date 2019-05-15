const db = require('../data/knexConfig');

module.exports = {
    getCommentsByPoemId
}

function getCommentsByPoemId(poemId) {
    return db('comment').where({poem_id: poemId})
}