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
import "./ClassList.css";

function ClassList() {
  const dispatch = useDispatch();
  const [classes, setClasses] = useState([]);
  const [chosenClass, setChosenClass] = useState('');


  const fetchClasses = () => {

    axios
      .get("/api/classes")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let classList = response.data
        setClasses(classList);
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchClasses([]);
    setChosenClass('');
  }, []);

  const handleClassSelect = (event) => {
    const newClass = event.target.value;
    setChosenClass(newClass);
    dispatch({type: "CLASS_TO_ADD", payload: newClass });
  }

  return (
    <div>
    <h1>Choose Your Class</h1>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="class-menu">Class</InputLabel>
        <Select
          labelId="select-class-label"
          id="select-class"
          value={chosenClass}
          label="Class"
          onChange={handleClassSelect}
        >
          {classes.map((classItem) => (
              <MenuItem key={classItem.id} value={classItem.name}>{classItem.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <p>Race: {chosenClass}</p>
    <button><Link to="/background">Next</Link></button>
  </div>
  );
}
export default ClassList;