import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import Name from "../Name/Name";
import AlignmentsList from "../Alignment/AlignmentsList";

function CharConfirmation() {
  const newAbilityScores = useSelector((store) => store.abilityScores);
  const newHitPoints = useSelector((store) => store.hitPoints);
  const newBackground = useSelector((store) => store.background);
  const newClass = useSelector((store) => store.charClass);
  const newRace = useSelector((store) => store.race);
  const userId = useSelector((store) => store.user);
  const newAlignment = useSelector((store) => store.alignment);
  const newName = useSelector((store) => store.name);
  


  const [newChar, setNewChar] = useState({
    name: newName,
    charClass: newClass,
    background: newBackground,
    alignment: newAlignment,
    exp: 0,
    lvl: 1,
    race: newRace,
    hp: newHitPoints,
    str: newAbilityScores.strength,
    dex: newAbilityScores.dexterity,
    con: newAbilityScores.constitution,
    wis: newAbilityScores.wisdom,
    int: newAbilityScores.intelligence,
    cha: newAbilityScores.charisma,
    user: userId.id,
  });

  console.log(newChar);

  const createNewChar = () => {
    axios.post("/api/characters", newChar).then((response) => {
      console.log("response:", response.data);
    });

    useEffect(() => {
      setNewChar();
    }, []);
  };
  return (
    <div>
      <Name />
      <AlignmentsList />
      <p>Str: {newAbilityScores.strength}</p>
      <p>Dex: {newAbilityScores.dexterity}</p>
      <p>Con: {newAbilityScores.constitution}</p>
      <p>Wis: {newAbilityScores.wisdom}</p>
      <p>Int: {newAbilityScores.intelligence}</p>
      <p>Cha: {newAbilityScores.charisma}</p>
      <p>HP: {newHitPoints}</p>
      <p>Background: {newBackground}</p>
      <p>Class: {newClass}</p>
      <p>Race: {newRace}</p>
      <button onClick={createNewChar}>
        <Link to="/user">Accept</Link>
      </button>
    </div>
  );
}

export default CharConfirmation;
