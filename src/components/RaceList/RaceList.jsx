import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./RaceList.css";

function RaceList({charRace}) {
  const dispatch = useDispatch();
  const [races, setRaces] = useState([]);
  const [chosenRace, setChosenRace] = useState('');

  const fetchRaces = () => {
    console.log("in fetchRaces function");

    axios
      .get("/api/races")
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
    setChosenRace([]);
  }, []);

  const handleRaceSelect = (event) => {
    const newRace = event.target.value;
    setChosenRace(newRace);
    dispatch({type: "RACE_TO_ADD", payload: newRace });
  }

  return (
    <div>
    <h1>Races</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {races.map((race) => (
        <tr key={race.id}>
          <td><button value={race.name} onClick={handleRaceSelect}>{race.name}</button></td>
        </tr>
      ))}
      </tbody>
    </table>
    <p>Race: {chosenRace}</p>
    <button><Link to="/class">Next</Link></button>
  </div>
  );
}
export default RaceList;