const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.get("/", (req, res) => {
    let query = `
    SELECT * FROM "classes";
    `;
    pool
    .query(query)
    .then((result) => {
        res.send(result.rows);
    })    
});

router.get("/:id", (req, res) => {
  const classId = req.params.id;
  let query = `
  SELECT * FROM "classes"
  WHERE id = $1;`;
  pool
  .query(query, [classId]).then((result) => {
    res.send(result.rows);
  });
});

router.get("/hit_die", (req, res) => {
    const className = req.params.name;
    let query = `
    SELECT "hit_die" from "classes" where "name" = $1;`;
    pool
    .query(query, [className]).then((result) => {
      res.send(result.rows);
    });
  });

module.exports = router;