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
  const charID = req.params.id;
  let query = `
  SELECT * FROM "characters"
  WHERE id = $1;`;
  pool
  .query(query, [charID]).then((result) => {
    res.send(result.rows);
  });
});

router.post('/', (req, res) => {
  const newChar = req.body;
  const sqlText = `
  INSERT INTO "characters" ("character_name", "class", "level", "background", "race",
   "alignment", "experience_points", "strength", "dexterity", "constitution", "wisdom",
    "intelligence", "charisma", "hit_points", "user_id"
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, 15);`;
  pool
      .query(sqlText, [newChar.name, newChar.newClass, newChar.level,  newChar.background, newChar.race, 
        newChar.alignment, newChar.exp, newChar.strength, newChar.dexterity, newChar.constitution, 
        newChar.wisdom, newChar.intelligence, newChar.charisma, newChar.hp, newChar.user])
      .then((result) => {
          console.log(`character created`, newChar);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

router.put('/:id', (req, res) => {
  const newChar = req.body;
  const charId= req.params.id;
  const queryText = `UPDATE "characters" SET "character_name", "class", "level", "background", "race",
  "alignment", "experience_points", "strength", "dexterity", "constitution", "wisdom",
   "intelligence", "charisma", "hit_points" = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  WHERE "id" = $15;`;
  pool
    .query(queryText, [newChar.name, newChar.newClass, newChar.level,  newChar.background, newChar.race, 
      newChar.alignment, newChar.exp, newChar.strength, newChar.dexterity, newChar.constitution, 
      newChar.wisdom, newChar.intelligence, newChar.charisma, newChar.hp, newChar.user, charId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
  const CharId = req.params.id;
  const queryText = `DELETE FROM "characters" WHERE id = $1;`;

  pool
      .query(queryText, [CharId])
      .then((response) => {
          res.sendStatus(200);
      })
      .catch((err) => {
          console.error(err);
          res.sendStatus(500);
      });
});


module.exports = router;
