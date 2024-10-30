import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//Components
import "./ClassList.css";

//MUI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const classesComponent = () => {
  const dispatch = useDispatch();
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
            {classList.map((charClass) => (
              <MenuItem key={charClass.id} value={charClass.name}>
                {charClass.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid marginLeft={5} container spacing={6}>
        <Grid item xs={10}>
          <Box>
          <p>{displayClass.name}</p>
          <p>{displayClass.description}</p>
          </Box>
        </Grid>
      </Grid>
      <Button>
        <p>back</p>
      </Button>
      <Button>
        <p>next</p>
      </Button>
    </div>
  );
};

export default classesComponent;
// function ClassList() {
//   const dispatch = useDispatch();
//   const [chosenClass, setChosenClass] = useState("");


//   useEffect(() => {
//     setChosenClass("");
//   }, []);

//   const handleClassSelect = (event) => {
//     const newClass = event.target.value;
//     setChosenClass(newClass);
//     dispatch({ type: "CLASS_TO_ADD", payload: newClass });

//   }

//   const fetchClasses = () => {
//     axios
//       .get("/api/backgrounds")
//       .then((response) => {
//         console.log("RESPONSE:", response.data);
//         let backgroundList = response.data;
//         setBackgrounds(backgroundList);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleUpdateClass = (event) => {
//     dispatch({
//       type: "UPDATE_CHAR",
//       payload: {
//         column: "class",
//         data: chosenClass,
//       },
//     });
//   };

//   return (
//     <div>
//       <h1 class="title">Select Your Class</h1>
//       <Box sx={{ minWidth: 120 }}>
//         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//           <InputLabel id="class-menu">Class</InputLabel>
//           <Select
//             labelId="select-class-label"
//             id="select-class"
//             value={chosenClass}
//             label="Class"
//             onChange={handleClassSelect}
//           >
//               <MenuItem value={"barbarian"}>Barbarian</MenuItem>
//               <MenuItem value={"bard"}>Bard</MenuItem>
//               <MenuItem value={"cleric"}>Cleric</MenuItem>
//               <MenuItem value={"druid"}>Druid</MenuItem>
//               <MenuItem value={"fighter"}>Fighter</MenuItem>
//               <MenuItem value={"monk"}>Monk</MenuItem>
//               <MenuItem value={"paladin"}>Paladin</MenuItem>
//               <MenuItem value={"ranger"}>Ranger</MenuItem>
//               <MenuItem value={"rogue"}>Rogue</MenuItem>
//               <MenuItem value={"sorcerer"}>Sorcerer</MenuItem>
//               <MenuItem value={"warlock"}>Warlock</MenuItem>
//               <MenuItem value={"wizard"}>Wizard</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//       <Button>
//         <Link to="/races">Back</Link>
//       </Button>
//       <Button onClick={handleUpdateClass} className="next">
//         <Link to="/background">Next</Link>
//       </Button>
//     </div>
//   );
// }
// export default ClassList;
