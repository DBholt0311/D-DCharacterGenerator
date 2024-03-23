import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./BackgroundsList.css";

function BackgroundsList() {
  const dispatch = useDispatch();
  const [backgrounds, setBackgrounds] = useState([]);
  const [chosenBackground, setChosenBackground] = useState('');

  const fetchBackGrounds = () => {
    console.log("in fetchBackgrounds function");

    axios
      .get("/api/backgrounds")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setBackgrounds(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBackGrounds();
    setChosenBackground('');
  }, []);

  const handleBackgroundSelect = (event) => {
    const newBackground = event.target.value;
    setChosenBackground(newBackground);
    dispatch({type: "BACKGROUND_TO_ADD", payload: newBackground });
  }

  return (
    <div>
    <h1>Backgrounds</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {backgrounds.map((background) => (
        <tr key={background.id}>
          <td><button value={background.name} onClick={handleBackgroundSelect}>{background.name}</button></td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
  );
}
export default BackgroundsList;
