const express = require('express');


const poemRoute = express.Router();

const db = require('../data/knexConfig');

poemRoute.get('/', async (req, res) => {
    const user = req.body;
        try {
            const poems = await db('poems');
            res.status(200).json(poems)
        } catch (error) {
            res.status(500).json({error})
        }
});

poemRoute.get('/:id', async (req, res) => {
        try {
            const [ poem ] = await db('poems').where({ id: req.params.id });
            res.status(200).json(poem);
        } catch (error) {
            res.status(500).json({error})
        }
});

module.exports = poemRoute;