import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./RaceList.css";

function RaceList({}) {
  const dispatch = useDispatch();
  const [races, setRaces] = useState([]);
  const [chosenRace, setChosenRace] = useState('');

  const fetchRaces = () => {
    console.log("in fetchRaces function");

    axios
      .get("https://api.open5e.com/races")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setRaces(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchRaces();
    setChosenRace([charRace]);
  }, []);

  const handleRaceSelect = (event) => {
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({type: "RACE_TO_ADD", payload: newRace });
  }

  return (
    <div>
    <h1>Races</h1>
    
  </div>
  );
}
export default RaceList;
