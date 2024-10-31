import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";
import { Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AbilityScores = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId);
  const scoreBonus = useSelector((store) => store.abilityScoreBonus);
  const [randomScores, setRandomScores] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });
  const [selectedAbilities, setSelectedAbilities] = useState(Array(6).fill(''));
  const abilities = ['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence', 'Charisma'];

  const handleRandomScores = () => {
    const scores = {
      strength: abilityScoreGenerator(),
      dexterity: abilityScoreGenerator(),
      constitution: abilityScoreGenerator(),
      wisdom: abilityScoreGenerator(),
      intelligence: abilityScoreGenerator(),
      charisma: abilityScoreGenerator(),
    };
    setRandomScores(scores);
  };

  const handleAbilityChange = (index) => (event) => {
    const newAbility = event.target.value;
    const newSelectedAbilities = [...selectedAbilities];
    newSelectedAbilities[index] = newAbility;
    setSelectedAbilities(newSelectedAbilities);
  };

  const handleUpdateScores = () => {
    const totals = {
      strength: randomScores.strength + scoreBonus.strength,
      dexterity: randomScores.dexterity + scoreBonus.dexterity,
      constitution: randomScores.constitution + scoreBonus.constitution,
      wisdom: randomScores.wisdom + scoreBonus.wisdom,
      intelligence: randomScores.intelligence + scoreBonus.intelligence,
      charisma: randomScores.charisma + scoreBonus.charisma,
    };

    Object.entries(totals).forEach(([key, value]) => {
      dispatch({
        type: "UPDATE_ABILITY_SCORES",
        payload: {
          id: charId,
          column: key,
          update: value,
        },
      });
    });
  };

  return (
    <div>
      <h1>Ability Scores</h1>
      <Box sx={{ minWidth: 120 }}>
        {selectedAbilities.map((selected, index) => {
          const abilityKey = abilities[index].toLowerCase();
          return (
            <FormControl key={index} sx={{ m: 1, minWidth: 140 }} size="small">
              <InputLabel id={`attribute-label-${index}`}>
                {randomScores[abilityKey] !== undefined ? randomScores[abilityKey] : 0}
              </InputLabel>
              <Select
                labelId={`attribute-label-${index}`}
                id={`attribute-${index}`}
                value={selected}
                label="Select Attribute"
                onChange={handleAbilityChange(index)}
              >
                {abilities.map((ability) => (
                  !selectedAbilities.includes(ability) || ability === selected ? (
                    <MenuItem key={ability} value={ability}>{ability}</MenuItem>
                  ) : null
                ))}
              </Select>
            </FormControl>
          );
        })}
        <Button variant="contained" onClick={handleRandomScores}>GENERATE</Button>
      </Box>
      <Button component={Link} to="/class">BACK</Button>
      <Button variant="contained" onClick={handleUpdateScores}>NEXT</Button>
    </div>
  );
};

export default AbilityScores;
