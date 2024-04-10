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
import Grid  from "@mui/material/Grid";


//Components
import "./RaceList.css";

function RaceList({charRace}) {
  const dispatch = useDispatch();
  const [races, setRaces] = useState([]);
  const [chosenRace, setChosenRace] = useState('');
  const [displayRace, setDisplayRace] = useState({});

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
    let id = 0;
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({type: "RACE_TO_ADD", payload: newRace });

    switch (newRace) {
      case "Dragonborn":
        id = 1;
        break;
      case "Dwarf":
        id = 2;
        break;
      case "Elf":
        id = 3;
        break;
      case "Gnome":
        id = 4;
        break;
      case "Half-Elf":
        id = 5;
        break;
      case "Halfling":
        id = 6;
        break;
      case "Half-Orc":
        id = 7;
        break;
      case "Human":
        id = 8;
        break;
      case "Tiefling":
        id = 9;
        break;
      default:
    }

    axios
    .get(`/api/races/${id}`, id)
    .then((response) => {
      console.log("RESPONSE:", response.data);
      const raceResponse = {
        displayName: response.data[0].name,
        desc: response.data[0].description,
        portrait: response.data[0].portrait_url,
 
      };
      setDisplayRace(raceResponse);
      console.log('Display:', displayRace);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className="raceBody">

    <h1>Choose Your Race</h1>
    <Box 
    sx={{ minWidth: 120 }}>
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
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
    <Grid container spacing={6}>
  <Grid item xs={4}>
    <Box
    marginTop={6}
    height={500}
    width={500}
    display="flex"
    alignItems="center"
    >
    <img src={displayRace.portrait} />
    </Box>
  </Grid>
  <Grid item xs={4}>
    <Box 
        marginTop={20}
        height={300}
        width={800}
        display="flex"
        alignItems="left"
        fontSize={20}
    >
    <p>{displayRace.desc}</p>
    </Box>
  </Grid>
</Grid>
<button><Link to="/user">Back</Link></button>
<button className="next"><Link to="/class">Next</Link></button>
  </div>
  );
}
export default RaceList;