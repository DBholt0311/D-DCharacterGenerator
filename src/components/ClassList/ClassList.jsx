import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ClassList = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId)
  const classList = useSelector((store) => store.classList);
  const displayClass = useSelector((store) => store.displayClass);
  const [chosenClass, setChosenClass] = useState("");

  useEffect(() => {
    dispatch({ type: "FETCH_CLASSES",});
  }, [dispatch]);

  const handleDisplayClass = (event) => {
    const newClass = event.target.value;
    setChosenClass(newClass);
    dispatch({ type: "FETCH_DISPLAY_CLASS", payload: newClass });
  };

  const handleUpdateClass = (event) => {
    const data = {
      id: charId,
      column: 'class',
      update: chosenClass,
    };
    dispatch({ type: "UPDATE_CHAR", payload: data });
  };

  return (
    <div>
      <h1 className="title">Choose Your Class</h1>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
          <InputLabel id="class-menu">Class</InputLabel>
          <Select
            labelId="select-class-label"
            id="select-class"
            value={chosenClass}
            label="class"
            onChange={handleDisplayClass}
          >
            {classList.map((newClass) => (
              <MenuItem key={newClass.id} value={newClass.name}>
                {newClass.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid marginLeft={5} container spacing={6}>
        <Grid item xs={10}>
          <Box>
          <p>{displayClass.name}</p>
          <p>Hit Die: D{displayClass.hit_die}</p>
          </Box>
        </Grid>
      </Grid>
      <Button>
      <Link to="/race">BACK</Link>
      </Button>
      <Button onClick={handleUpdateClass}>
      <Link to="/abilityScores">NEXT</Link>
      </Button>
    </div>
  );
};

export default ClassList;