const express = require('express');


const userRoute = express.Router();

const db = require('../data/knexConfig');

userRoute.get('/users', async (req, res) => {
    console.log('req.body');
    const user = req.body;
        try {
            const [ users ] = await db('users');
            res.status(200).json({users})
        } catch (error) {
            res.status(500).json({error})
        }
});


module.exports = userRoute;