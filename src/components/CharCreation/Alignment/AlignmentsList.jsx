import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AlignmentsList() {
  const dispatch = useDispatch();
  const [alignments, setAlignments] = useState([]);
  const [chosenAlignment, setChosenAlignment] = useState('');

  const fetchAlignments = () => {
    console.log("in fetchAlignments function");

    axios
      .get("/api/alignments")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setAlignments(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchAlignments();
    setChosenAlignment();
  }, []);

  const handleAlignmentSelect = (event) => {
    const alignment = event.target.value;
    setChosenAlignment(alignment);
    dispatch({type: "ALIGNMENT_TO_ADD", payload: alignment });
  }

  return (
    <div>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Alignment</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Alignment"
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
    <p> Alignment: {chosenAlignment}</p>
  </div>
  );
}
export default AlignmentsList;
