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
  const [char, setChar] = useState();
  let currentName = useSelector((store) => store.characterName);
  let currentClass = useSelector((store) => store.charClass);
  let currentRace = useSelector((store) => store.race);
  let currentBackground = useSelector((store) => store.background);
  let currentAbilityScores = useSelector((store) => store.abilityScore);
  let currentHp = useSelector((store) => store.hitPoints);
  let user = useSelector((store) => store.user);
  let currentAlignment = useSelector((store) => store.alignment);
  let [newCharDisplay, setNewCharDisplay] = useState({
    name: currentName,
    newClass: currentClass,
    race: currentRace,
    background: currentBackground,
    alignment: currentAlignment,
    hp: currentHp,
    level: 1,
    exp: 0,
    strength: currentAbilityScores.strength,
    dexterity: currentAbilityScores.dexterity,
    constitution: currentAbilityScores.constitution,
    wisdom: currentAbilityScores.wisdom,
    intelligence: currentAbilityScores.intelligence,
    charisma: currentAbilityScores.charisma,
    user: user.id,
  });

  
  const fetchCharacters = () => {
    axios
      .get(`/api/characters/${newId}`, newId)
      .then((response) => {
        let newChar = {};
        if (newId === 0) {
          console.log("NewChar", newId)
          newChar = newCharDisplay;
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
        setNewCharDisplay()
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setChar({});
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
    });
  };

  return (
    <div>
      <Name charName={newCharDisplay.name}/>
      <ClassList  charClass={newCharDisplay.newClass}/>
      <RaceList charRace={newCharDisplay.race} />
      <BackgroundList charBackground={newCharDisplay.background} />
      <AlignmentsList charAlignment={newCharDisplay.alignment}/>
      <Input placeholder={char.exp}></Input>
      <Input placeholder={char.lvl}></Input>
      <AbilityScores />
      <button onClick={createNewChar}>Accept</button>
      <button onClick={deleteChar}>
        <Link to="/user">Delete</Link>
      </button>
    </div>
  );
}

export default CharSheet;
