const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');


router.get("/", (req, res) => {
    console.log('char get route');
    console.log('is authenticated', req.isAuthenticated());
    console.log('user', req.user);
    let query = `
    SELECT * FROM "characters"
    WHERE characters.user_id = $1;`;
    pool
    .query(query, [req.user.id])
    .then((result) => {
        res.send(result.rows);
    })    
})

module.exports = router;