const express = require('express');
const poemRoute = express.Router();
const db = require('../data/knexConfig');
const jwt = require('jsonwebtoken');

const Comments = require('./helpers');


const secret = process.env.SECRET || "let's keep this a secret";

function restricted(req, res, next) {
    if(req.headers.authorization) {
        const token = req.headers.authorization;
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json(err)
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({message: "Missing token."})
    }
}

poemRoute.get('/poems', restricted, async (req, res) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const poems = await db('poem');
            const comments = await db('comment');
            const poemsWithComments = poems.map(poem => {
                const poemComments = comments.filter( comment => comment.poem_id === poem.id);
                return {
                    ...poem,
                    comments: poemComments
                }
            })
            res.status(200).json(poemsWithComments)
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(405).json({message: "Must provide token."})
    }
});

poemRoute.get('/:id/poems', restricted, async (req, res) => {
    const token = req.decodedJwt;
    if (token) {
        try {
            const poems = await db('poem').where({user_id: req.params.id});
            const comments = await db('comment');
            const poemsWithComments = poems.map(poem => {
                const poemComments = comments.filter( comment => comment.poem_id === poem.id);
                return {
                    ...poem,
                    comments: poemComments
                }
            })
            res.status(200).json(poemsWithComments);
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(405).json({message: "Must provide token."})
    }
});

poemRoute.get('/:id', restricted, async (req, res) => {

    const poem = await db('poem').where({id:req.params.id});
    const comments = await db('comment').where({poem_id: req.params.id});

    const response = {
        ...poem,
        comments: comments
    }
        res.status(200).json(response)

});

poemRoute.post('/poems', async (req, res) => {
    const poem = req.res.body;
    try {
        const poemId = await db('poem').insert(poem);
        res.status(200).json({poemId})
    } catch (error) {
        res.status(500).json({error})
    }
});

module.exports = poemRoute;