import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//MUI
import Input from "@mui/material/Input";
import AlignmentsList from "../Alignment/AlignmentsList";
import BackgroundList from "../BackgroundList/BackgroundList";
import AbilityScores from "../AbilityScores/AbilityScores";
import ClassList from "../ClassList/ClassList";
import RaceList from "../RaceList/RaceList";
import Name from "../Name/Name";

function CharSheet() {
  const newId = useSelector((store) => store.CharId);
  const user = useSelector((store) => store.user.id);
  const character = useSelector((store) => store.character)
  const [currentChar, setCurrentChar] = useState({
    name: character.name,
    charClass: character.charClass,
    background: character.background,
    alignment: character.cha,
    hp: character.hp,
    str: character.str,
    dex: character.dex,
    con: character.con,
    wis: character.wis,
    int: character.int,
    cha: character.cha,
    user_id: user,
  });
  
  const fetchCharacters = () => {
    axios
      .get(`/api/characters/${newId}`, newId)
      .then((response) => {
        let newChar = {};
        if (newId === 0) {
          newChar = currentChar;

        } else {
          console.log('existing char', newId)
          console.log("RESPONSE:", response.data);
          newChar = {
            name: response.data[0].character_name,
            class: response.data[0].class,
            race: response.data[0].race,
            background: response.data[0].background,
            alignment: response.data[0].alignment,
            exp: 0,
            lvl: 1,
            hp: response.data[0].hit_points,
            strength: response.data[0].strength,
            dexterity: response.data[0].dexterity,
            constitution: response.data[0].constitution,
            wisdom: response.data[0].wisdom,
            intelligence: response.data[0].intelligence,
            charisma: response.data[0].charisma,
          };
        }
        setChar(newChar);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setCurrentChar({});
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

  const createNewChar = () => {
    axios.post("/api/characters", newCharDisplay).then((response) => {
      console.log("response:", response.data);
      dispatchEvent({ type: action, payload: "CHARACTER_TO_ADD"})
    });
  };

  return (
    <div>
      <Name charName={character.name}/>
      <ClassList />
      <RaceList />
      <BackgroundList />
      <AlignmentsList />
      <Input />
      <Input />
      <AbilityScores />
      <button onClick={createNewChar}>Accept</button>
      <button onClick={deleteChar}>
        <Link to="/user">Delete</Link>
      </button>
    </div>
  );
}

export default CharSheet;
