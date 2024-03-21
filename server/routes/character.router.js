const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.get("/", (req, res) => {

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