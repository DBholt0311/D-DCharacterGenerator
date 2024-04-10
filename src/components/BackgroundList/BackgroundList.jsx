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
import Button from "@mui/material/Button";

function BackgroundList() {
  const dispatch = useDispatch();
  const [backgrounds, setBackgrounds] = useState([]);
  const [chosenBackground, setChosenBackground] = useState("");
  const [displayBackground, setDisplayBackground] = useState({});

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
    setChosenBackground("");
  }, []);

  const handleBackgroundSelect = (event) => {
    let id = 0;
    const newBackground = event.target.value;
    setChosenBackground(newBackground);
    dispatch({ type: "BACKGROUND_TO_ADD", payload: newBackground });

    switch (newBackground) {
      case "Acolyte":
        id = 1;
        break;
      case "Criminal":
        id = 2;
        break;
      case "Folk Hero":
        id = 3;
        break;
      case "Nobel":
        id = 4;
        break;
      case "Sage":
        id = 5;
        break;
      case "Soldier":
        id = 6;
        break;
      default:
    }

    axios
    .get(`/api/backgrounds/${id}`, id)
    .then((response) => {
      console.log("RESPONSE:", response.data);
      const backgroundResponse = {
        displayName: response.data[0].name,
        desc: response.data[0].description,
      };
      setDisplayBackground(backgroundResponse);
      console.log('Display:', displayBackground);
    })
    .catch((err) => {
      console.error(err);
    });
};

  return (
    <div>
    <h1 class="title">Choose Your Background</h1>
    <Box sx={{ minWidth: 120 }}>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
    <p>{displayBackground.displayName}</p>
    <p>{displayBackground.desc}</p>
    <Button><Link to="/class">Back</Link></Button>
    <Button ><Link to="/abilityScores">Next</Link></Button>
  </div>
  );
}
export default BackgroundList;