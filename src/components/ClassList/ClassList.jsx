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

//Components
import "./ClassList.css";

function ClassList() {
  const dispatch = useDispatch();
  const [classes, setClasses] = useState([]);
  const [chosenClass, setChosenClass] = useState("");
  const [displayClass, setDisplayClass] = useState({});

  const fetchClasses = () => {
    axios
      .get("/api/classes")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let classList = response.data;
        setClasses(classList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchClasses([]);
    setChosenClass("");
  }, []);

  const handleClassSelect = (event) => {
    let id = 0;
    const newClass = event.target.value;
    setChosenClass(newClass);
    dispatch({ type: "CLASS_TO_ADD", payload: newClass });

    switch (newClass) {
      case "Barbarian":
        id = 1;
        break;
      case "Bard":
        id = 2;
        break;
      case "Cleric":
        id = 3;
        break;
      case "Druid":
        id = 4;
        break;
      case "Fighter":
        id = 5;
        break;
      case "Monk":
        id = 6;
        break;
      case "Paladin":
        id = 7;
        break;
      case "Ranger":
        id = 8;
        break;
      case "Rogue":
        id = 9;
        break;
      case "Sorcerer":
        id = 10;
        break;
      case "Warlock":
        id = 11;
        break;
      case "Wizard":
        id = 12;
        break;
      default:
    }

    axios
    .get(`/api/classes/${id}`, id)
    .then((response) => {
      console.log("RESPONSE:", response.data);
      const classResponse = {
        displayName: response.data[0].name,
        hd: response.data[0].hit_die,
        desc: response.data[0].description,
        portrait: response.data[0].portrait_url,
 
      };
      setDisplayClass(classResponse);
      console.log('Display:', displayClass);
    })
    .catch((err) => {
      console.error(err);
    });
};

  return (
    <div>
      <h1>Choose Your Class</h1>
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
            {classes.map((classItem) => (
              <MenuItem key={classItem.id} value={classItem.name}>
                <img className="class_icon" src={classItem.icon_url} />
                {classItem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <button><Link to="/races">Back</Link></button>
      <button className="next">
        <Link to="/background">Next</Link>
      </button>
      <h2>{displayClass.displayName}</h2>
      <img src={displayClass.portrait} />
      <p>{displayClass.desc}</p>
      
    </div>
  );
}
export default ClassList;
