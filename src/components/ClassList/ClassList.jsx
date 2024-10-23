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
import "./ClassList.css";

function ClassList() {
  const dispatch = useDispatch();
  const [chosenClass, setChosenClass] = useState("");


  useEffect(() => {
    setChosenClass("");
  }, []);

  const handleClassSelect = (event) => {
    const newClass = event.target.value;
    setChosenClass(newClass);
    dispatch({ type: "CLASS_TO_ADD", payload: newClass });

  }

  axios
  .get(`https://www.dnd5eapi.co/api/classes/${chosenClass}`, chosenClass)
  .then ((response) => {
    console.log("RESPONSE:", response.data);
  })
  .catch((err) => {
    console.error(err);
  });

  const handleUpdateClass = (event) => {
    dispatch({
      type: "UPDATE_CHAR",
      payload: {
        column: "class",
        data: chosenClass,
      },
    });
  };

  return (
    <div>
      <h1 class="title">Select Your Class</h1>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="class-menu">Class</InputLabel>
          <Select
            labelId="select-class-label"
            id="select-class"
            value={chosenClass}
            label="Class"
            onChange={handleClassSelect}
          >
              <MenuItem value={"barbarian"}>Barbarian</MenuItem>
              <MenuItem value={"bard"}>Bard</MenuItem>
              <MenuItem value={"cleric"}>Cleric</MenuItem>
              <MenuItem value={"druid"}>Druid</MenuItem>
              <MenuItem value={"fighter"}>Fighter</MenuItem>
              <MenuItem value={"monk"}>Monk</MenuItem>
              <MenuItem value={"paladin"}>Paladin</MenuItem>
              <MenuItem value={"ranger"}>Ranger</MenuItem>
              <MenuItem value={"rogue"}>Rogue</MenuItem>
              <MenuItem value={"sorcerer"}>Sorcerer</MenuItem>
              <MenuItem value={"warlock"}>Warlock</MenuItem>
              <MenuItem value={"wizard"}>Wizard</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button>
        <Link to="/races">Back</Link>
      </Button>
      <Button onClick={handleUpdateClass} className="next">
        <Link to="/background">Next</Link>
      </Button>
    </div>
  );
}
export default ClassList;
