import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CharConfirmation() {
    let currentClass = useSelector((store) => store.charClass)
    let currentRace = useSelector((store) => store.race);
    let currentBackground = useSelector((store) => store.background);
    let currentAbilityScores = useSelector((store) => store.abilityScore);
    let currentHp = useSelector((store) => store.hitPoints);
    let user = useSelector((store) => store.user);

    const createChar = (event) => {
      dispatch = useDispatch();
      event.preventDefault();
  
      dispatch({
        type: 'CREATE_CHAR',
        payload: {
          class: currentClass,
          race: currentRace,
          background: currentBackground,
          hp: currentHp,
          strength: currentAbilityScores.strength,
          dexterity: currentAbilityScores.dexterity,
          constitution: currentAbilityScores.constitution,
          wisdom: currentAbilityScores.wisdom,
          intelligence: currentAbilityScores.intelligence,
          charisma: currentAbilityScores.charisma,
          user_id: user.id,
        },
      });
    };

    return (
        <div>
            <p>Name: </p>
            <p>Race: {currentRace}</p>
            <p>Class: {currentClass}</p>
            <p>Background: {currentBackground}</p>
            <p>Hp: {currentHp}</p>
            <p>Strength: {currentAbilityScores.strength}</p>
            <p>Dexterity: {currentAbilityScores.dexterity}</p>
            <p>Constitution: {currentAbilityScores.constitution}</p>
            <p>Wisdom: {currentAbilityScores.wisdom}</p>
            <p>Intelligence: {currentAbilityScores.intelligence}</p>
            <p>Charisma: {currentAbilityScores.charisma}</p>
            <p>user: {user.id}</p>
            <button onClick={createChar}>Accept</button>
        </div>
    )
}

export default CharConfirmation;