const express = require('express');
const poemRoute = express.Router();
const db = require('../data/knexConfig');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || "let's keep this a secret";

function restricted(req, res, next) {
    if(req.headers.authorization) {
        const token = req.headers.authorization;
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json(err)
            } else {
                console.log(decodedToken)
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({message: "Missing token."})
    }
}

poemRoute.get('/', restricted, async (req, res) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const poems = await db('poems');
            res.status(200).json(poems)
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(405).json({message: "Must provide token."})
    }
});

poemRoute.get('/:id', restricted, async (req, res) => {
    try {
        const [poem] = await db('poems').where({ id: req.params.id });
        res.status(200).json(poem);
    } catch (error) {
        res.status(500).json({ error })
    }
});

module.exports = poemRoute;