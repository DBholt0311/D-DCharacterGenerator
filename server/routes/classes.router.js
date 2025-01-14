const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get("/", rejectUnauthenticated, (req, res) => {
    let query = `
    SELECT * FROM "classes";
    `;
    pool
    .query(query)
    .then((result) => {
        res.send(result.rows);
    })    
});

router.get("/:name", rejectUnauthenticated, (req, res) => {
  const className = req.params.name;
  let query = `
  SELECT * FROM "classes"
  WHERE name = $1;`;
  pool
  .query(query, [className]).then((result) => {
    res.send(result.rows);
  });
});

module.exports = router;