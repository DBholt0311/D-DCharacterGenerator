
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');


router.get("/", (req, res) => {
    let query = `
    SELECT * FROM "races";
    `;
    pool
    .query(query)
    .then((result) => {
        res.send(result.rows);
    })    
});

router.get("/:id", (req, res) => {
    const raceId = req.params.id;
    let query = `
    SELECT * FROM "races"
    WHERE id = $1;`;
    pool
    .query(query, [raceId]).then((result) => {
      res.send(result.rows);
    });
  });

module.exports = router;
