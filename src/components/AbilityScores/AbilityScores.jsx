import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Components
import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";

//MUI
import { Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AbilityScores = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId);
  const scoreBonus = useSelector((store) => store.abilityScoreBonus);
  const [randomScores, setRandomScores] = useState({});
  const [scoreTotals, setScoreTotals] = useState({});
  const [selectedAbilities, setSelectedAbilities] = useState(Array(6).fill(''));
  const abilities = ['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence', 'Charisma'];



  const handleRandomScores = (event) => {
    const scores ={
      one: abilityScoreGenerator(),
      two: abilityScoreGenerator(), 
      three: abilityScoreGenerator(),
      four: abilityScoreGenerator(),
      five: abilityScoreGenerator(),
      six: abilityScoreGenerator(),
    }
    setRandomScores(scores);
  }

  const handleChange = (index) => (event) => {
    const newAbility = event.target.value;
    const newSelectedAbilities = [...selectedAbilities];
    newSelectedAbilities[index] = newAbility;
    setSelectedAbilities(newSelectedAbilities);
  }
  
  const handleUpdateScores = (event) => {
    let totals = {
      strength: randomScores.one + scoreBonus.strength,
      dexterity: randomScores.two + scoreBonus.dexterity,
      constitution: randomScores.three + scoreBonus.constitution,
      wisdom: randomScores.four + scoreBonus.wisdom,
      intelligence: randomScores.five + scoreBonus.intelligence,
      charisma: randomScores.six + scoreBonus.charisma,
    }
    setScoreTotals(totals);
  const str = {
    id: charId,
    column: 'strength',
    update: totals.strength,
  };
  const dex = {
    id: charId,
    column: 'dexterity',
    update: totals.dexterity,
  };
  const con = {
    id: charId,
    column: 'constitution',
    update: totals.constitution,
  };
  const wis = {
    id: charId,
    column: 'wisdom',
    update: totals.wisdom,
  };
  const int = {
    id: charId,
    column: 'intelligence',
    update: totals.intelligence,
  };
  const cha = {
    id: charId,
    column: 'charisma',
    update: totals.charisma,
  };
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: str });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: dex });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: con });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: wis });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: int });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: cha });
};

  
  return (
    <div>
      <h1>Ability Scores</h1>
      <Box sx={{ minWidth: 120 }}>
      {selectedAbilities.map((selected, index) => (
        <FormControl key={index} sx={{ m: 1, minWidth: 140 }} size="small">
          <InputLabel id={`attribute-label-${index}`}>Select Attribute</InputLabel>
          <Select
            labelId={`attribute-label-${index}`}
            id={`attribute-${index}`}
            value={selected}
            label="Select Attribute"
            onChange={handleChange(index)}
          >
            {abilities.map((ability) => (
              !selectedAbilities.includes(ability) || ability === selected ? (
                <MenuItem key={ability} value={ability}>{ability}</MenuItem>
              ) : null
            ))}
          </Select>
        </FormControl>
      ))}
      <button onClick={handleRandomScores}>GENERATE</button>
    </Box>
      <Button>
      <Link to="/class">BACK</Link>
      </Button>
      <Button onClick={handleUpdateScores}>
      NEXT
      </Button>
    </div>
)
};

export default AbilityScores;