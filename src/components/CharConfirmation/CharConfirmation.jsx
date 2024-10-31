import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Box, TextField } from "@mui/material";

function CharConfirmation() {
  const newId = useSelector((store) => store.CharId);
  const [char, setChar] = useState({});
  const [charUpdate, setCharUpdate] = useState({
    xp: char.exp,
    level: char.lvl,
    hit_points: char.hp,
    str: char.strength,
    dex: char.dexterity,
    con: char.constitution,
    wis: char.wisdom,
    int: char.intelligence,
    cha: char.charisma,
  });

  const fetchCharacters = () => {
    axios
      .get(`/api/characters/${newId}`, newId)
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let newChar = {
          name: response.data[0].character_name,
          charClass: response.data[0].class,
          race: response.data[0].race,
          background: response.data[0].background,
          alignment: response.data[0].alignment,
          exp: response.data[0].experience_points,
          lvl: response.data[0].level,
          hp: response.data[0].hit_points,
          strength: response.data[0].strength,
          dexterity: response.data[0].dexterity,
          constitution: response.data[0].constitution,
          wisdom: response.data[0].wisdom,
          intelligence: response.data[0].intelligence,
          charisma: response.data[0].charisma,
          charId: response.data[0].id,
        };
        console.log(newChar);
        setChar(newChar);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setChar({});
  }, []);

  const handleHpChange = (event) => {
    setChar({
      ...char,
      hp: event.target.value,
    });
  };

  const handleExpChange = (event) => {
    setChar({
      ...char,
      exp: event.target.value,
    });
  };

  const handleLvlChange = (event) => {
    setChar({
      ...char,
      lvl: event.target.value,
    });
  };

  const handleStrChange = (event) => {
    setChar({
      ...char,
      strength: event.target.value,
    });
  };

  const handleDexChange = (event) => {
    setChar({
      ...char,
      dexterity: event.target.value,
    });
  };

  const handleConChange = (event) => {
    setChar({
      ...char,
      constitution: event.target.value,
    });
  };

  const handleWisChange = (event) => {
    setChar({
      ...char,
      wisdom: event.target.value,
    });
  };

  const handleIntChange = (event) => {
    setChar({
      ...char,
      intelligence: event.target.value,
    });
  };

  const handleChaChange = (event) => {
    setChar({
      ...char,
      charisma: event.target.value,
    });
  };

  function handleCharUpdate() {
    axios
      .put(`/api/characters/${newId}`, char)
      .then((response) => {
        console.log("response:", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <p>Name: {char.name}</p>
      <p>Race: {char.race}</p>
      <p>Class: {char.charClass}</p>
      <p>Background: {char.background}</p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
        >
      <p>Alignment: {char.alignment}</p>
          <TextField
            className="abilityScore"
            label="Experience"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.exp}
            onChange={handleExpChange}
          />
          <TextField
            className="abilityScore"
            label="Level"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.lvl}
            onChange={handleLvlChange}
          />
          <TextField
            className="abilityScore"
            label="Hit Points"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.hp}
            onChange={handleHpChange}
          />
          <TextField
            className="abilityScore"
            label="Strength"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.strength}
            onChange={handleStrChange}
          />
          <TextField
            className="abilityScore"
            label="Dexterity"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.dexterity}
            onChange={handleDexChange}
          />
          <TextField
            className="abilityScore"
            label="Constitution"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.constitution}
            onChange={handleConChange}
          />
          <TextField
            className="abilityScore"
            label="Wisdom"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.wisdom}
            onChange={handleWisChange}
          />
          <TextField
            className="abilityScore"
            label="Intelligence"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.intelligence}
            onChange={handleIntChange}
          />
          <TextField
            className="abilityScore"
            label="Charisma"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={char.charisma}
            onChange={handleChaChange}
          />
        </Box>
        <Button onClick={handleCharUpdate}>
          <Link to="/user">Update</Link>
        </Button>
    </div>
  );
}

export default CharConfirmation;
