const express = require('express');
const bcryptjs = require('bcryptjs');

const authRoute = express.Router();

const db = require('../data/knexConfig');

authRoute.post('/signup', async (req, res) => {
    const user = req.body;
    if (user.firstName && user.lastName && user.username && user.email && user.password ) {
        try {
            const hash = bcryptjs.hashSync(user.password, 14);
            user.password = hash;
            const [ id ] = await db('users').insert(user);
            res.status(200).json({id})
        } catch (err) {
            console.log(err)
            res.status(500).json({err})
        }
    }
});


module.exports = authRoute;