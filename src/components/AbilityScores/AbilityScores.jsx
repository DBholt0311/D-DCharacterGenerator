import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./AbilityScores.css";
import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";
import { hitPointCalc } from "../DiceRollers/DiceRoller";

function AbilityScores() {
  const dispatch = useDispatch();
  const className = useSelector((store) => store.charClass);
  let [hitPoints, setHitPoints] = useState([]);
  let [abilityScores, setAbilityScores] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });

  const handleStrengthChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      strength: event.target.value,
    });
  };

  const handleDexterityChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      dexterity: event.target.value,
    });
  };

  const handleConstitutionChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      constitution: event.target.value,
    });
  };

  const handleWisdomChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      wisdom: event.target.value,
    });
  };

  const handleIntelligenceChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      intelligence: event.target.value,
    });
  };

  const handleCharismaChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      charisma: event.target.value,
    });
  };

  const handleRandomAbilities = (event) => {
    event.preventDefault();
    let hitDie = 0;
    if (className === "barbarian") {
      hitDie = 12;
    } else if (className === "ranger" || "paladin" || "fighter") {
      hitDie = 10;
    } else if (
      className === "warlock" ||
      "rogue" ||
      "monk" ||
      "druid" ||
      "cleric" ||
      "bard"
    ) {
      hitDie = 8;
    } else if (className === "wizard" || "sorcerer") {
      hitDie = 6;
    }
    let newAbilityScores = {
      strength: abilityScoreGenerator(),
      dexterity: abilityScoreGenerator(),
      constitution: abilityScoreGenerator(),
      wisdom: abilityScoreGenerator(),
      intelligence: abilityScoreGenerator(),
      charisma: abilityScoreGenerator(),
    };

    let HP = hitDie;

    setHitPoints(HP);
    dispatch({ type: "HP_TO_ADD", payload: HP });


    setAbilityScores({
      str: newAbilityScores.strength,
      dex: newAbilityScores.dexterity,
      con: newAbilityScores.constitution,
      wis: newAbilityScores.wisdom,
      int: newAbilityScores.intelligence,
      cha: newAbilityScores.charisma,
    });
    dispatch({ type: "ABS_TO_ADD", payload: newAbilityScores });
  };

  useEffect(() => {
    setAbilityScores({});
    setHitPoints([]);
  }, []);

  return (
    <div>
      <h1 className="title">Ability Scores</h1>
      <Box       
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}>
        <TextField
          className="abilityScore"
          label="Strength"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={abilityScores.str}
          onChange={handleStrengthChange}
        />
        <TextField
          className="abilityScore"
          label="Dexterity"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={abilityScores.dex}
          onChange={handleDexterityChange}
        />
        <TextField
          className="abilityScore"
          label="Constitution"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={abilityScores.con}
          onChange={handleConstitutionChange}
        />
        <TextField
          className="abilityScore"
          label="Wisdom"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={abilityScores.wis}
          onChange={handleWisdomChange}
        />
        <TextField
          className="abilityScore"
          label="Intelligence"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={abilityScores.int}
          onChange={handleIntelligenceChange}
        />
        <TextField
          className="abilityScore"
          label="Charisma"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={abilityScores.cha}
          onChange={handleCharismaChange}
        />
      </Box>
      <Box
      marginLeft={2}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}>
        <Button
          variant="contained"
          size="small"
          onClick={handleRandomAbilities}
        >
          Generate Ability Scores
        </Button>
      </Box>
      <Box       
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}>
      <Button>
        <Link to="/background">Back</Link>
      </Button>
      <Button className="next">
        <Link to="/charConfirmation">Next</Link>
      </Button>
      </Box>
    </div>
  );
}

export default AbilityScores;
