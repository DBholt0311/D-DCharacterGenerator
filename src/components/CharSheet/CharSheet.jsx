import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";

import AlignmentsList from "../Alignment/AlignmentsList"
import BackgroundList from "../BackgroundList/BackgroundList";
import AbilityScores from "../AbilityScores/AbilityScores";
import ClassList from "../ClassList/ClassList";
import RaceList from "../RaceList/RaceList";
import Name from "../Name/Name";


function CharSheet() {
  const newId = useSelector((store) => store.CharId);
  const [char, setChar] = useState(newId);

  const fetchCharacters = () => {
    axios
      .get(`/api/characters/${newId}`, newId)
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let newChar = {
          name: response.data[0].character_name,
          class: response.data[0].class,
          race: response.data[0].race,
          background: response.data[0].background,
          alignment: response.data[0].alignment,
          exp: response.data[0].experience_points,
          lvl: response.data[0].level,
          hp: response.data[0].hit_points,
          strength: response.data[0].strength,
          dexterity: response.data[0].dexterity,
          constitution: response.data[0].constitution,
          wisdom: response.data[0].wisdom,
          intelligence: response.data[0].intelligence,
          charisma: response.data[0].charisma,
        };
        setChar(newChar);
        console.log(newChar);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setChar([]);
  }, []);

  const deleteChar = (event) => {
    const id = newId;
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
            <Name />
            <ClassList />
            <RaceList />
            <BackgroundList />
            <AlignmentsList />
            <Input placeholder={char.exp}></Input>
            <Input placeholder={char.lvl}></Input>
            <AbilityScores />
          <button onClick={deleteChar}>
            <Link to="/user">Delete</Link>
          </button>
    </div>
  );
}

export default CharSheet;
