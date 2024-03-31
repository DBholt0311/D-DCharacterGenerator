import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./AlignmentsList.module.css";

//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AlignmentsList({charAlignment}) {
  const dispatch = useDispatch();
  const [chosenAlignment, setChosenAlignment] = useState('');
  let currentAlignment = charAlignment;

  useEffect(() => {
    setChosenAlignment(charAlignment);
  }, []);

  const handleAlignmentSelect = (event) => {
    const alignment = event.target.value;
    setChosenAlignment(alignment);
    dispatch({type: "ALIGNMENT_TO_ADD", payload: alignment });
  }

  return (
    <div>
      <Box sx={{ maxWidth: 160}}>
      <FormControl variant="standard" fullWidth>
  <InputLabel value={chosenAlignment} id="Alignments">Alignment</InputLabel>
  <Select
    labelId="Alignments-label"
    label="Alignment"
    value={currentAlignment}
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
  </div>
  );
}
export default AlignmentsList;
