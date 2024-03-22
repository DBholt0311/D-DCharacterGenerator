const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.get("/", (req, res) => {

    let query = `
    SELECT * FROM "characters"
    WHERE characters.user_id = $1;`;
    pool
    .query(query, [req.user.id])
    .then((result) => {
        res.send(result.rows);
    })    
})

router.post('/new', (req, res) => {
    const newClass = req.body.class;
    const background = req.body.background;
    const race = req.body.race;
    const str = req.body.strength;
    const dex = req.body.dexterity;
    const con = req.body.constitution;
    const wis = req.body.wisdom;
    const int = req.body.intelligence;
    const char = req.body.char;
    const hp = req.body.hp;
    const user = req.body.class;

    const query = `
    INSERT INTO "characters" ("class",
    "background", "race", "Strength", "dexterity",
    "constitution", "intelligence", "wisdom",
    "charisma", "hit_points", "user_id"
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
    pool
    .query(query, [newClass, background, race, str, dex, con, wis, int, char, hp, user])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Char creation failed: ', err);
      res.sendStatus(500);
    })
})

module.exports = router;