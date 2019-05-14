const express = require('express');


const poemRoute = express.Router();

const db = require('../data/knexConfig');

poemRoute.get('/poems', async (req, res) => {
    console.log('req.body');
    const user = req.body;
        try {
            const [ users ] = await db('users');
            res.status(200).json({users})
        } catch (error) {
            res.status(500).json({error})
        }
});

poemRoute.get('/:id', async (req, res) => {
        try {
            const [ user ] = await db('users').where({ id: req.params.id });
            res.status(200).json({user})
        } catch (error) {
            res.status(500).json({error})
        }
});


module.exports = poemRoute;