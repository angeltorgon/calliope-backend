const express = require('express');


const userRoute = express.Router();

const db = require('../data/knexConfig');

userRoute.get('/users', async (req, res) => {
    const user = req.body;
        try {
            const users = await db('user');
            res.status(200).json({users})
        } catch (error) {
            res.status(500).json({error})
        }
});

userRoute.get('/:id', async (req, res) => {
        try {
            const [ user ] = await db('user').where({ id: req.params.id });
            res.status(200).json({user})
        } catch (error) {
            res.status(500).json({error})
        }
});

userRoute.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await db('user').where({id: req.params.id}).delete();
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = userRoute;