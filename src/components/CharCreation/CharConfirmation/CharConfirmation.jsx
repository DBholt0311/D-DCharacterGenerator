import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CharConfirmation() {
    let currentName = useSelector((store) => store.characterName)
    let currentClass = useSelector((store) => store.charClass)
    let currentRace = useSelector((store) => store.race);
    let currentBackground = useSelector((store) => store.background);
    let currentAbilityScores = useSelector((store) => store.abilityScore);
    let currentHp = useSelector((store) => store.hitPoints);
    let user = useSelector((store) => store.user);
    let currentAlignment = useSelector((store) => store.alignment);
    
    let [Char, setChar] = useState({
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

const createNewChar = () => {
  axios
  .post("/api/characters", Char)
  .then((response) => {
    console.log('response:', response.data)

  })};

    return (
        <div>
            <p>Name: {currentName}</p>
            <p>Race: {currentRace}</p>
            <p>Class: {currentClass}</p>
            <p>Alignment: {currentAlignment}</p>
            <p>Background: {currentBackground}</p>
            <p>Hp: {currentHp}</p>
            <p>Strength: {currentAbilityScores.strength}</p>
            <p>Dexterity: {currentAbilityScores.dexterity}</p>
            <p>Constitution: {currentAbilityScores.constitution}</p>
            <p>Wisdom: {currentAbilityScores.wisdom}</p>
            <p>Intelligence: {currentAbilityScores.intelligence}</p>
            <p>Charisma: {currentAbilityScores.charisma}</p>
            <p>user: {user.id}</p>
            <button onClick={createNewChar}><Link to="/user">Accept</Link></button>
        </div>
    )
}

export default CharConfirmation;