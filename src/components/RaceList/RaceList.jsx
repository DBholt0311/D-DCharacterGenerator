import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//MUI
import { Box, InputLabel, MenuItem, FormControl, Select, Button, Grid } from "@mui/material";

const RaceList = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId)
  const raceList = useSelector((store) => store.raceList);
  const displayRace = useSelector((store) => store.displayRace);
  const [chosenRace, setChosenRace] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_RACES",});
  }, [dispatch]);

  const handleDisplayRace = (event) => {
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({ type: "FETCH_DISPLAY_RACE", payload: newRace });
  };

  const handleUpdateRace = (event) => {
    const data = {
      id: charId,
      column: 'race',
      update: chosenRace,
    };
    dispatch({ type: "UPDATE_CHAR", payload: data });
  };

  return (
    <div>
      <h1 className="title">Choose Your Ancestry</h1>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
          <InputLabel id="race-menu">Race</InputLabel>
          <Select
            labelId="select-race-label"
            id="select-race"
            value={chosenRace}
            label="race"
            onChange={handleDisplayRace}
          >
            {raceList.map((race) => (
              <MenuItem key={race.id} value={race.name}>
                {race.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid marginLeft={5} container spacing={6}>
        <Grid item xs={10}>
          <Box>
          <h4>Ability Score Bonuses</h4>
          <p>Strength: {displayRace.strength}</p>
          <p>Dexterity: {displayRace.dexterity}</p>
          <p>Constitution: {displayRace.constitution}</p>
          <p>Wisdom: {displayRace.wisdom}</p>
          <p>Intelligence: {displayRace.intelligence}</p>
          <p>Charisma: {displayRace.charisma}</p>
          </Box>
        </Grid>
      </Grid>
      <Button>
        <p>BACK</p>
      </Button>
      <Button onClick={handleUpdateRace}>
      <Link to="/class">NEXT</Link>
      </Button>
    </div>
  );
};

export default RaceList;