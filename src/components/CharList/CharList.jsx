import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./CharList.css";

function CharList() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const user = useSelector((store) => store.user);

  let newChar = {
    id: user.id,
  };

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
    fetchCharacters([]);
  }, []);

  const selectChar = (event) => {
    const id = Number.parseInt(event.target.innerHTML);
    dispatch({ type: "CHAR_ID", payload: id });
    console.log(id);
  };

  const deleteChar = (event) => {
    
    axios
      .delete(`/api/characters/${id}`, id)
      .then((response) => {
        console.log("RESPONSE:", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              <td onClick={selectChar}>
                <Link to="/charSheet">{char.id}</Link>
              </td>
              <td><button onClick={deleteChar}>Delete</button></td>
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
