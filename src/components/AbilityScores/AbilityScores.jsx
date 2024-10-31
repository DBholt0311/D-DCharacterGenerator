import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Components
import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";

//MUI
import Button from "@mui/material/Button";

const AbilityScores = () => {
  const dispatch = useDispatch();
  const charId = useSelector((store) => store.charId);
  const scoreBonus = useSelector((store) => store.abilityScoreBonus);
  const [randomScores, setRandomScores] = useState({});
  const [scoreTotals, setScoreTotals] = useState({});



  const handleRandomScores = (event) => {
    const scores ={
      one: abilityScoreGenerator(),
      two: abilityScoreGenerator(), 
      three: abilityScoreGenerator(),
      four: abilityScoreGenerator(),
      five: abilityScoreGenerator(),
      six: abilityScoreGenerator(),
    }
    setRandomScores(scores);
  }
  
  const handleUpdateScores = (event) => {
    let totals = {
      strength: randomScores.one + scoreBonus.strength,
      dexterity: randomScores.two + scoreBonus.dexterity,
      constitution: randomScores.three + scoreBonus.constitution,
      wisdom: randomScores.four + scoreBonus.wisdom,
      intelligence: randomScores.five + scoreBonus.intelligence,
      charisma: randomScores.six + scoreBonus.charisma,
    }
    setScoreTotals(totals);
  const str = {
    id: charId,
    column: 'strength',
    update: totals.strength,
  };
  const dex = {
    id: charId,
    column: 'dexterity',
    update: totals.dexterity,
  };
  const con = {
    id: charId,
    column: 'constitution',
    update: totals.constitution,
  };
  const wis = {
    id: charId,
    column: 'wisdom',
    update: totals.wisdom,
  };
  const int = {
    id: charId,
    column: 'intelligence',
    update: totals.intelligence,
  };
  const cha = {
    id: charId,
    column: 'charisma',
    update: totals.charisma,
  };
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: str });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: dex });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: con });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: wis });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: int });
  dispatch({ type: "UPDATE_ABILITY_SCORES", payload: cha });
};

  
  return (
    <div>
      <h1>Ability Scores</h1>
      <button onClick={handleRandomScores}>click here</button>
      <h2>Bonuses</h2>
      <p>str: {scoreBonus.strength}</p>
      <p>dex: {scoreBonus.dexterity}</p>
      <p>con: {scoreBonus.constitution}</p>
      <p>wis: {scoreBonus.wisdom}</p>
      <p>int: {scoreBonus.intelligence}</p>
      <p>cha: {scoreBonus.charisma}</p>
      <h2>Generated Scores</h2>
      <p>str: {randomScores.one}</p>
      <p>dex: {randomScores.two}</p>
      <p>con: {randomScores.three}</p>
      <p>wis: {randomScores.four}</p>
      <p>int: {randomScores.five}</p>
      <p>cha: {randomScores.six}</p>
      <h2>Score total</h2>
      <p>str: {scoreTotals.strength}</p>
      <p>dex: {scoreTotals.dexterity}</p>
      <p>con: {scoreTotals.constitution}</p>
      <p>wis: {scoreTotals.wisdom}</p>
      <p>int: {scoreTotals.intelligence}</p>
      <p>cha: {scoreTotals.charisma}</p>
      <Button>
      <Link to="/class">BACK</Link>
      </Button>
      <Button onClick={handleUpdateScores}>
      NEXT
      </Button>
    </div>
)
};

export default AbilityScores;