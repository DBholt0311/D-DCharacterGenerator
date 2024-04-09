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


function BackgroundList() {
  const dispatch = useDispatch();
  const [backgrounds, setBackgrounds] = useState([]);
  const [chosenBackground, setChosenBackground] = useState('');


  const fetchBackgrounds = () => {

    axios
      .get("/api/backgrounds")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let backgroundList = response.data
        setBackgrounds(backgroundList);
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBackgrounds([]);
    setChosenBackground('');
  }, []);

  const handleBackgroundSelect = (event) => {
    const newBackground = event.target.value;
    setChosenBackground(newBackground);
    dispatch({type: "BACKGROUND_TO_ADD", payload: newBackground });
  }

  return (
    <div>
    <h1>Choose Your Background</h1>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="background-menu">Background</InputLabel>
        <Select
          labelId="select-background-label"
          id="select-background"
          value={chosenBackground}
          label="Background"
          onChange={handleBackgroundSelect}
        >
          {backgrounds.map((background) => (
              <MenuItem key={background.id} value={background.name}>{background.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <p>Background: {chosenBackground}</p>
    <button><Link to="/class">Back</Link></button>
    <button><Link to="/abilityScores">Next</Link></button>
  </div>
  );
}
export default BackgroundList;