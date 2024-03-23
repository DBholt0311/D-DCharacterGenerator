import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import "./CharList.css";


function CharList() {
  const [characters, setCharacters] = useState([]);
  const user = useSelector((store) => store.user)

  let newChar = {
    id: user.id,
  }

  const fetchCharacters = () => {
    console.log("in fetchOrders function");

    axios
      .get("/api/characters")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setCharacters(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <table>
        <thead>
        <tr>
          <th>level</th>
          <th>Name</th>
          <th>race</th>
          <th>class</th>
        </tr>
        </thead>
        <tbody>
        {characters.map((char) => (
          <tr key={char.id}>
            <td>{char.level}</td>
            <td>{char.character_name}</td>
            <td>{char.race}</td>
            <td>{char.class}</td>
            <td>
              <button><Link to="/charSheet">Select</Link></button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <button>
        <Link to="/PgOne">New Char</Link>
      </button>
    </div>
  );
}
export default CharList;
