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

router.get("/:id", (req, res) => {

  let id = req.body;
  let query = `
  SELECT * FROM "characters"
  WHERE characters.user_id = $1
  && character.id = $2;`;
  pool
  .query(query, [req.user.id, id])
})

router.post('/', (req, res) => {
  const newChar = req.body;
  const sqlText = `INSERT INTO "characters" ("character_name", "class", "level", "background", "race", "alignment", "experience_points", "Strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "hit_points", "user_id"
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`;
  pool
      .query(sqlText, [newChar.name, newChar.class, newChar.level,  newChar.race, newChar.background, 
        newChar.alignment, newChar.exp, newChar.hp, newChar.strength, newChar.dexterity, newChar.constitution, 
        newChar.wisdom, newChar.intelligence, newChar.charisma, newChar.user])
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
