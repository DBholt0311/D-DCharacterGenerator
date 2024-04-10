import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Name from "../Name/Name";
import AlignmentsList from "../Alignment/AlignmentsList";

import Button from "@mui/material/Button";

function CharConfirmation() {
  const history= useHistory();
  const dispatch = useDispatch();
  const newAbilityScores = useSelector((store) => store.abilityScores);
  const newHitPoints = useSelector((store) => store.hitPoints);
  const newBackground = useSelector((store) => store.background);
  const newClass = useSelector((store) => store.charClass);
  const newRace = useSelector((store) => store.race);
  const userId = useSelector((store) => store.user);
  const newAlignment = useSelector((store) => store.alignment);
  const newName = useSelector((store) => store.name);

  const createNewChar = () => {
    dispatch({ type: "CREATE_CHAR", payload: {
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
    }})
    history.push('/user');
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
      <Button onClick={createNewChar}>
Accept
      </Button>
    </div>
  );
}

export default CharConfirmation;
