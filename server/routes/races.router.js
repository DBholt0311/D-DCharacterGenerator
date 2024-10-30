
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');


router.get("/", rejectUnauthenticated, (req, res) => {
    let query = `
    SELECT * FROM "races";
    `;
    pool
    .query(query)
    .then((result) => {
        res.send(result.rows);
    })    
});

router.get("/:name", rejectUnauthenticated, (req, res) => {
    const raceName = req.params.name;
    let query = `
    SELECT * FROM "races"
    WHERE name = $1;`;
    pool
    .query(query, [raceName]).then((result) => {
      res.send(result.rows);
    });
  });

module.exports = router;
