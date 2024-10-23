import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

// Components
import "./RaceList.css";

function RaceList() {
  const dispatch = useDispatch();
  const [chosenRace, setChosenRace] = useState("");
  const [displayRace, setDisplayRace] = useState({ 
    name: '',
    speed: '',
    alignment: '',
    age: '',
    size: '',
    size_description: '',
    languages: ''

  });

  useEffect(() => {
    if (chosenRace) {
      axios
        .get(`https://www.dnd5eapi.co/api/races/${chosenRace}`)
        .then((response) => {
          console.log("RESPONSE:", response.data);
          setDisplayRace({ 
            name: response.data.name,
            speed: response.data.speed,
            alignment: response.data.alignment,
            age: response.data.age,
            size: response.data.size,
            size_description: response.data.size_description,
            languages: response.data.language_desc
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [chosenRace]);

  const handleRaceSelect = (event) => {
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({ type: "RACE_TO_ADD", payload: newRace });
  };

  const handleUpdateRace = () => {
    dispatch({
      type: "UPDATE_CHAR",
      payload: {
        column: "race",
        data: chosenRace,
      },
    });
  };

  return (
    <div>
      <h1 className="title">Select Your Ancestry</h1>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
          <InputLabel id="race-menu">Race</InputLabel>
          <Select
            labelId="select-race-label"
            id="select-race"
            value={chosenRace}
            label="Race"
            onChange={handleRaceSelect}
          >
            <MenuItem value={"dragonborn"}>Dragonborn</MenuItem>
            <MenuItem value={"dwarf"}>Dwarf</MenuItem>
            <MenuItem value={"elf"}>Elf</MenuItem>
            <MenuItem value={"gnome"}>Gnome</MenuItem>
            <MenuItem value={"half-elf"}>Half-Elf</MenuItem> {/* Corrected typo */}
            <MenuItem value={"half-orc"}>Half-Orc</MenuItem>
            <MenuItem value={"halfling"}>Halfling</MenuItem>
            <MenuItem value={"human"}>Human</MenuItem>
            <MenuItem value={"tiefling"}>Tiefling</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <p>Race: {displayRace.name}</p>
        <p>Speed: {displayRace.speed}</p>
        <p>Alignment: {displayRace.alignment}</p>
        <p>Age: {displayRace.age}</p>
        <p>Size: {displayRace.size_description}</p>
        <p>Languages: {displayRace.languages}</p>
      </Box>
      <Button>
        <Link to="/user">Back</Link>
      </Button>
      <Button onClick={handleUpdateRace} className="next">
        <Link to="/class">Next</Link>
      </Button>
    </div>
  );
}

export default RaceList;