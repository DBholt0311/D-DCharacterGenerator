const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET /api/characters");
  pool
    .query('SELECT * from "characters";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERROR GET /api/characters", error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
