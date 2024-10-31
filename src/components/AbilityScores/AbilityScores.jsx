import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";

const AbilityScores = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId);
  const scoreBonus = useSelector((store) => store.abilityScoreBonus);
  const [abilityScores, setAbilityScores] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
  });
  const handleRandomAbilities = (event) => {
    const scores ={
      one: abilityScoreGenerator(),
      two: abilityScoreGenerator(), 
      three: abilityScoreGenerator(),
      four: abilityScoreGenerator(),
      five: abilityScoreGenerator(),
      six: abilityScoreGenerator(),
    }
    setAbilityScores(scores);
  }
  
  return (
    <div>
      <h1>Ability Scores</h1>
      <button onClick={handleRandomAbilities}>click here</button>
      <p>one: {abilityScores.one}</p>
      <p>two: {abilityScores.two}</p>
      <p>three: {abilityScores.three}</p>
      <p>four: {abilityScores.four}</p>
      <p>five: {abilityScores.five}</p>
      <p>six: {abilityScores.six}</p>

    </div>
)
};

export default AbilityScores;