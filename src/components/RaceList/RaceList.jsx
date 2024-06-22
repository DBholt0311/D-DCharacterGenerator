import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [races, setRaces] = useState([]);
  const [chosenRace, setChosenRace] = useState("");
  const [displayRace, setDisplayRace] = useState({});

  const fetchRaces = () => {
    console.log("in fetchRaces function");

    axios
      .get("/api/races")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let raceList = response.data;
        setRaces(raceList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchRaces([]);
    setChosenRace("");
  }, []);

  const handleRaceSelect = (event) => {
    let id = 0;
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({ type: "RACE_TO_ADD", payload: newRace });

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
        console.log("Display:", displayRace);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
            {races.map((race) => (
              <MenuItem key={race.id} value={race.name}>
                {race.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <img src={displayRace.portrait} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" alignItems="left" fontSize={15}>
            <p>{displayRace.desc}</p>
          </Box>
        </Grid>
      </Grid>
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
