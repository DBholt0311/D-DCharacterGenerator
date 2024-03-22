import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./RaceList.css";

function RaceList() {
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
    setChosenRace(event.target.value);
    console.log(chosenRace);
    dispatch({type: "RACE_TO_ADD", payload: chosenRace });
  }

  return (
    <div>
    <h1>Races</h1>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      {races.map((race) => (
        <tr key={race.id}>
          <td><button value={race.name} onClick={handleRaceSelect}>{race.name}</button></td>
        </tr>
      ))}
    </table>
  </div>
  );
}
export default RaceList;
