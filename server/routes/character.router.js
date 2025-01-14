const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get("/", rejectUnauthenticated, (req, res) => {
  let query = `
    SELECT * FROM "characters"
    WHERE characters.user_id = $1;`;
  pool.query(query, [req.user.id]).then((result) => {
    res.send(result.rows);
  });
});

router.get("/:id", rejectUnauthenticated, (req, res) => {
  const charID = req.params.id;
  let query = `
  SELECT * FROM "characters"
  WHERE id = $1;`;
  pool.query(query, [charID]).then((result) => {
    res.send(result.rows);
  });
});

router.post("/", rejectUnauthenticated, (req, res) => {
  const newChar = req.body;
  const sqlText = `INSERT INTO "characters" ("character_name", "class", "race", "alignment","experience", "level", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "hit_points", "user_id"
  )
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING id;`;
  pool
    .query(sqlText, [
      newChar.name,
      newChar.charClass,
      newChar.race,
      newChar.alignment,
      newChar.exp,
      newChar.lvl,
      newChar.str,
      newChar.dex,
      newChar.con,
      newChar.int,
      newChar.wis,
      newChar.cha,
      newChar.hp,
      req.user.id,
    ])

    .then((result) => {
      const characterId = result.rows[0].id
      console.log(`Char ID:`, characterId);
      console.log(`character created`, newChar);
      res.status(201).json({ id: characterId });
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.put("/:id", rejectUnauthenticated, (req, res) => {
  const updateChar = req.body;
  const query = `
  UPDATE "characters" SET ${updateChar.column} = $1 where id = $2;`;

  pool
  .query(query, [updateChar.update, updateChar.id])
  .then((response) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
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
