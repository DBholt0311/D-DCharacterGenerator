const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.get("/", (req, res) => {
    let query = `
    SELECT * FROM "backgrounds";
    `;
    pool
    .query(query)
    .then((result) => {
        res.send(result.rows);
    })    
})

router.get("/:id", (req, res) => {
    const backgroundId = req.params.id;
    let query = `
    SELECT * FROM "backgrounds"
    WHERE id = $1;`;
    pool
    .query(query, [backgroundId]).then((result) => {
      res.send(result.rows);
    });
  });

module.exports = router;