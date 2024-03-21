import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./RaceList.css";

function RaceList() {
  const [races, setRaces] = useState([]);

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
  }, []);

  return (
    <div>
      <h1>backgrounds</h1>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        {races.map((race) => (
          <tr key={race.id}>
            <td>{race.name}</td>
            <td>
              <button>Select</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default RaceList;
