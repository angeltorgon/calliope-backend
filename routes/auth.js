const express = require('express');


const authRoute = express.Router();

const db = require('../data/knexConfig');

authRoute.post('/signup', async (req, res) => {
    console.log('req.body')
    const user = req.body;
    if (user.firstName && user.lastName && user.username && user.email && user.password ) {
        try {
            const [ id ] = await db('users').insert(user);
            res.status(200).json({id})
        } catch (error) {
            res.status(500).json({error})
        }
    }
});


module.exports = authRoute;