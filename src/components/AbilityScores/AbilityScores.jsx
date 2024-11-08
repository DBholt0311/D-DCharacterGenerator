import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";
import { Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AbilityScores = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId);
  const scoreBonus = useSelector((store) => store.abilityScoreBonus);

  // State for storing generated scores and selected scores
  const [randomScores, setRandomScores] = useState([]);
  const [selectedScores, setSelectedScores] = useState({
    strength: '',
    dexterity: '',
    constitution: '',
    wisdom: '',
    intelligence: '',
    charisma: '',
  });

  const abilities = ['strength', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma'];

  // Generate random scores when the button is clicked
  const handleRandomScores = () => {
    const scores = [
      abilityScoreGenerator(),
      abilityScoreGenerator(),
      abilityScoreGenerator(),
      abilityScoreGenerator(),
      abilityScoreGenerator(),
      abilityScoreGenerator(),
    ].map((score, index) => ({ id: index + 1, value: score })); // Starting from 1 for score IDs
    setRandomScores(scores);
  };

  // Handle score selection for each ability
  const handleScoreChange = (ability) => (event) => {
    const selectedId = event.target.value;  // Get selected score's id
    const selectedScore = randomScores.find(score => score.id === selectedId);

    if (!selectedScore) return;

    // If the selected score is already assigned to an ability, swap it
    const prevAbility = Object.keys(selectedScores).find(
      (key) => selectedScores[key] === selectedScore.id
    );

    if (prevAbility && prevAbility !== ability) {
      // Swap the score value in the selectedScores object
      const newSelectedScores = { ...selectedScores };

      // Swap the values between abilities
      const temp = newSelectedScores[ability];
      newSelectedScores[ability] = newSelectedScores[prevAbility];
      newSelectedScores[prevAbility] = temp;

      setSelectedScores(newSelectedScores);
    } else {
      // Otherwise, just assign the score to the current ability
      setSelectedScores((prevScores) => ({
        ...prevScores,
        [ability]: selectedScore.id,
      }));
    }
  };

  // Handle updating scores to Redux
  const handleUpdateScores = () => {
    // Ensure all abilities are assigned a score
    if (Object.values(selectedScores).includes('')) {
      alert('Please assign all ability scores before proceeding.');
      return;
    }

    // Create an object with the selected scores assigned to abilities
    const totals = abilities.reduce((acc, ability) => {
      const selectedScoreId = selectedScores[ability];
      const selectedScore = randomScores.find(score => score.id === selectedScoreId);
      acc[ability] = selectedScore.value + scoreBonus[ability];
      return acc;
    }, {});

    // Dispatch the updated scores to Redux
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

      {/* Show generated random scores */}
      <Box sx={{ minWidth: 120, marginBottom: 2 }}>
        {randomScores.length > 0 && (
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {randomScores.map((score) => (
              <Box key={score.id} sx={{ textAlign: 'center' }}>
                <p>Score {score.id}: {score.value}</p>
              </Box>
            ))}
          </Box>
        )}
        <Button variant="contained" onClick={handleRandomScores}>GENERATE</Button>
      </Box>

      {/* Ability selection form */}
      <Box sx={{ minWidth: 120 }}>
        {abilities.map((ability, index) => (
          <FormControl key={index} sx={{ m: 1, minWidth: 140 }} size="small">
            <InputLabel id={`attribute-label-${index}`}>{ability}</InputLabel>
            <Select
              labelId={`attribute-label-${index}`}
              id={`attribute-${index}`}
              value={selectedScores[ability] || ''} // Use selectedScores to track selections, default to ''
              label="Select Score"
              onChange={handleScoreChange(ability)}
            >
              {/* Default empty option */}
              <MenuItem value={''}>Select Score</MenuItem>

              {/* Render the available random scores in the dropdown */}
              {randomScores.map((score) => (
                <MenuItem key={score.id} value={score.id}> {/* Use score.id as the value */}
                  {/* Display both value and id next to the score */}
                  {score.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>

      {/* Navigation buttons */}
      <Box sx={{ marginTop: 2 }}>
        <Button component={Link} to="/class">BACK</Button>
        <Button variant="contained" onClick={handleUpdateScores}>NEXT</Button>
      </Box>
    </div>
  );
};

export default AbilityScores;
