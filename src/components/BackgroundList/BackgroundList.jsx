import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function BackgroundList() {
  const dispatch = useDispatch();
  const [backgrounds, setBackgrounds] = useState([]);
  const [chosenBackground, setChosenBackground] = useState('');

  const fetchBackGrounds = () => {
    console.log("in fetchBackgrounds function");

    axios
      .get("/api/backgrounds")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let backgroundsList = response.data;
        setBackgrounds(backgroundsList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBackGrounds();
    setChosenBackground('');
  }, []);

  const handleBackgroundSelect = (event) => {
    const newBackground = event.target.value;
    setChosenBackground(newBackground);
    dispatch({type: "BACKGROUND_TO_ADD", payload: newBackground });
}

  return (
    <div>
      <Box sx={{ maxWidth: 160}}>
      <FormControl variant="standard" fullWidth>
  <InputLabel value={chosenBackground} id="Backgrounds">Background</InputLabel>
  <Select
    labelId="Backgrounds-label"
    label="Background"
    value={''}
    onChange={handleBackgroundSelect}
  >
          {backgrounds.map((background) => (
        <div key={background.id}>
          <MenuItem value={background.name}>{background.name}</MenuItem>
        </div>
      ))}

  </Select>
</FormControl>
    <p> Background: {chosenBackground}</p>
      </Box>
  </div>
  );
}
export default BackgroundList;
