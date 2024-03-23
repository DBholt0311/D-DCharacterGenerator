const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  let query = `
    SELECT * FROM "characters"
    WHERE characters.user_id = $1;`;
  pool.query(query, [req.user.id]).then((result) => {
    res.send(result.rows);
  });
});


router.post('/', (req, res) => {
  const newChar = req.body;
  const sqlText = `INSERT INTO "characters" (user_id)
                      VALUES ($1)`;
  pool
      .query(sqlText, [newChar.id])
      .then((result) => {
          console.log(`character created`, newChar);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});


module.exports = router;
