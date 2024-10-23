import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//Components
import "./RaceList.css";

function RaceList({ charRace }) {
  const dispatch = useDispatch();
  const [chosenRace, setChosenRace] = useState("");


  useEffect(() => {
    setChosenRace("");
  }, []);

  const handleRaceSelect = (event) => {
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({ type: "RACE_TO_ADD", payload: newRace });
 }


  axios
    .get(`https://www.dnd5eapi.co/api/races/${chosenRace}`, chosenRace)
    .then ((response) => {
      console.log("RESPONSE:", response.data);
    })
    .catch((err) => {
      console.error(err);
    });


  const handleUpdateRace = (event) => {
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
            <MenuItem vlaue={"half-elf"}>Half-Elf</MenuItem>
            <MenuItem value={"half-orc"}>Half-Orc</MenuItem>
            <MenuItem value={"halfling"}>Halfling</MenuItem>
            <MenuItem value={"human"}>Human</MenuItem>
            <MenuItem value={"tiefling"}>Tiefling</MenuItem>
          </Select>
        </FormControl>
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
