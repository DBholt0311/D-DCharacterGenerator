import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Name from "../Name/Name";

   

function CharConfirmation() {
  const dispatch = useDispatch();
  const newAbilityScores = useSelector((store) => store.abilityScores);
  const newHitPoints = useSelector((store) => store.hitPoints);
  const newBackground = useSelector((store) => store.background);
  const newClass = useSelector((store) => store.charClass);
  const newRace = useSelector((store) => store.race);
return(
  <div>
    <p>Str: {newAbilityScores.strength}</p>
    <p>Dex: {newAbilityScores.dex}</p>
    <p>Con: {newAbilityScores.con}</p>
    <p>Wis: {newAbilityScores.wis}</p>
    <p>Int: {newAbilityScores.int}</p>
    <p>Cha: {newAbilityScores.cha}</p>
    <p>HP: {newHitPoints}</p>
    <p>Background: {newBackground}</p>
    <p>Class: {newClass}</p>
    <p>Race: {newRace}</p>
  </div>
)
  };


export default CharConfirmation;
