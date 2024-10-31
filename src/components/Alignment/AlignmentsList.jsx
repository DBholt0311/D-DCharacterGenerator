import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

function AlignmentsList() {
  const dispatch = useDispatch();
  const [chosenAlignment, setChosenAlignment] = useState('');

  useEffect(() => {
    setChosenAlignment('');
  }, []);

  const handleAlignmentSelect = (event) => {
    const alignment = event.target.value;
    setChosenAlignment(alignment);
    dispatch({type: "ALIGNMENT_TO_ADD", payload: alignment });
  }

  const handleUpdateAlignment = (event) => {
    dispatch({
      type: "UPDATE_CHAR",
      payload: {
        column: "alignment",
        data: chosenAlignment,
      },
    });
  };

  return (
    <div>
      <Box sx={{ maxWidth: 160}}>
      <FormControl variant="standard" fullWidth>
  <InputLabel value={chosenAlignment} id="Alignments">Alignment</InputLabel>
  <Select
    labelId="Alignments-label"
    label="Alignment"
    value={chosenAlignment}
    onChange={handleAlignmentSelect}
  >
    <MenuItem value={'Lawful Good'}>Lawful Good</MenuItem>
    <MenuItem value={'Chaotic Good'}>Chaotic Good </MenuItem>
    <MenuItem value={'Neutral Good'}>Neutral Good</MenuItem>
    <MenuItem value={'Lawful Neutral'}>Lawful Neutral</MenuItem>
    <MenuItem value={'True Neutral'}>True Neutral</MenuItem>
    <MenuItem value={'Chaotic Neutral'}>Chaotic Neutral</MenuItem>
    <MenuItem value={'Lawful Evil'}>Lawful Evil</MenuItem>
    <MenuItem value={'Chaotic Evil'}>Chaotic Evil</MenuItem>
    <MenuItem value={'Neutral Evil'}>Neutral Evil</MenuItem>

  </Select>
</FormControl>
      </Box>
      <Button><Link to="abilityscores">Back</Link></Button>
      <Button onClick={handleUpdateAlignment}><Link to="name">Next</Link></Button>
  </div>
  );
}
export default AlignmentsList;
