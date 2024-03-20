const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const query = 
  `SELECT * FROM "characters"`

  pool
  .query(query)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('error: get all chars', err);
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
