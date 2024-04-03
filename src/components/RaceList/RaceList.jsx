import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//Components
import "./RaceList.css";

function RaceList({charRace}) {
  const dispatch = useDispatch();
  const [races, setRaces] = useState([]);
  const [chosenRace, setChosenRace] = useState('');


  const fetchRaces = () => {
    console.log("in fetchRaces function");

    axios
      .get("/api/races")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let raceList = response.data
        setRaces(raceList);
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchRaces([]);
    setChosenRace('');
  }, []);

  const handleRaceSelect = (event) => {
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({type: "RACE_TO_ADD", payload: newRace });
  }

  return (
    <div>
    <h1>Choose Your Race</h1>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="race-menu">Race</InputLabel>
        <Select
          labelId="select-race-label"
          id="select-race"
          value={chosenRace}
          label="Race"
          onChange={handleRaceSelect}
        >
          {races.map((race) => (
              <MenuItem key={race.id} value={race.name}>{race.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <p>Race: {chosenRace}</p>
    <button><Link to="/class">Next</Link></button>
  </div>
  );
}
export default RaceList;