import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BackgroundList({charBackground}) {
  const dispatch = useDispatch();
  const [chosenBackground, setChosenBackground] = useState("");
  let currentBackground = charBackground;

  useEffect(() => {
    setChosenBackground(charBackground);
  }, []);

  const handleBackgroundSelect = (event) => {
    let newBackground = event.target.value;
    setChosenBackground(newBackground);
    dispatch({ type: "BACKGROUND_TO_ADD", payload: newBackground });
  };

  return (
    <div>
      <Box sx={{ maxWidth: 160 }}>
        <FormControl variant="standard" fullWidth>
          <InputLabel value={chosenBackground} id="Backgrounds">
            Background
          </InputLabel>
          <Select
            labelId="Backgrounds-label"
            label="Background"
            value={currentBackground}
            onChange={handleBackgroundSelect}
          >
            <MenuItem value={"acolyte"}>acolyte</MenuItem>
            <MenuItem value={"criminal"}>criminal</MenuItem>
            <MenuItem value={"folk hero"}>folk hero</MenuItem>
            <MenuItem value={"nobel"}>nobel</MenuItem>
            <MenuItem value={"sage"}>sage</MenuItem>
            <MenuItem value={"soldier"}>soldier</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default BackgroundList;
