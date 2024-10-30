import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const RacesComponent = () => {
  const dispatch = useDispatch();
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
          <p>{displayRace.name}</p>
          <p>{displayRace.description}</p>
          </Box>
        </Grid>
      </Grid>
      <Button>
        <p>back</p>
      </Button>
      <Button>
      <Link to="/class">Next</Link>
      </Button>
    </div>
  );
};

export default RacesComponent;