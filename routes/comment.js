const express = require('express');
const db = require('../data/knexConfig');
const restricted = require('./poem');

const commentRoute = express.Router();

commentRoute.get('/', restricted, async (req, res) => {
    try {
        const comments = await db('comment');
        res.status(200).json({comments})
    } catch (error) {
        res.status(500).json({error})   
    }
});

commentRoute.get('/:id', async (req, res) => {
    console.log(req)
    try {
        const comments = await db('comment').where({poem_id: req.params.id})
        res.status(200).json({comments})
    } catch (error) {
        res.status(500).json({error})   
    }
});

commentRoute.post('/', async (req,res) => {
    const comment = req.body;
    try {
        const addedCommentId = await db('comment').insert(comment);
        res.status(200).json({addedCommentId});
    } catch (error) {
        res.status(500).json({error})
    }
});

commentRoute.put('/:id', async (req,res) => {
    const commentId = req.params.id;
    const comment = req.body;
    try {
        const updatedComment = await db('comment').where({id: commentId}).update(comment);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({error})
    }
});

commentRoute.delete('/:id', async (req,res) => {
    const commentId = req.params.id;
    try {
        const deletedComment = await db('comment').where({id: commentId}).delete();
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(500).json({error})
    }
});

module.exports = commentRoute;