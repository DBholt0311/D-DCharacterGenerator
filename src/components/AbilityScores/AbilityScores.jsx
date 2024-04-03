import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";
import { hitPointCalc } from "../DiceRollers/DiceRoller";

function AbilityScores({
  charStrength,
  charDexterity,
  charConstitution,
  charWisdom,
  charIntelligence,
  charCharisma,
  charHp,
}) {
  const dispatch = useDispatch();
  const className = useSelector((store) => store.charClass);
  const raceName = useSelector((store) => store.race);
  let [abilityScores, setAbilityScores] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });
  let [hitPoints, setHitPoints] = useState();

  const handleStrengthChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      strength: event.target.value,
    });
  };

  const handleDexterityChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      dexterity: event.target.value,
    });
  };

  const handleConstitutionChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      constitution: event.target.value,
    });
  };

  const handleWisdomChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      wisdom: event.target.value,
    });
  };

  const handleIntelligenceChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      intelligence: event.target.value,
    });
  };

  const handleCharismaChange = (event) => {
    setAbilityScores({
      ...abilityScores,
      charisma: event.target.value,
    });
  };

  const handleRandomAbilities = (event) => {
    event.preventDefault();
    let newAbilityScores = {
      strength: abilityScoreGenerator(),
      dexterity: abilityScoreGenerator(),
      constitution: abilityScoreGenerator(),
      wisdom: abilityScoreGenerator(),
      intelligence: abilityScoreGenerator(),
      charisma: abilityScoreGenerator(),
    };

    setAbilityScores(newAbilityScores);
    console.log(abilityScores);
  };

  const handleHpChange = (event) => {
    const newHp = event.target.value;
    setHitPoints(newHp);
  };

  useEffect(() => {
    setAbilityScores({});
    setHitPoints([]);
  }, []);

  const handleHpRoll = (event) => {
    event.preventDefault();
    let hitDie = 0;
    if (className === "barbarian") {
      hitDie = 12;
    } else if (className === "ranger" || "paladin" || "fighter") {
      hitDie = 10;
    } else if (
      className === "warlock" ||
      "rogue" ||
      "monk" ||
      "druid" ||
      "cleric" ||
      "bard"
    ) {
      hitDie = 8;
    } else if (className === "wizard" || "sorcerer") {
      hitDie = 6;
    }
    setHitPoints(
      hitPointCalc(hitDie) + Math.floor((abilityScores.constitution - 10) / 2)
    );
    console.log("d", hitDie);
    console.log(abilityScores, hitPoints);
  };

  const handleClickSubmitScores = () => {
    dispatch({ type: "HIT_POINTS", payload: hitPoints });
    dispatch({ type: "ABILITY_SCORE", payload: abilityScores });
  };

  return (
    <div>
      <h1>Ability Scores</h1>
      <form>
        <label>Strength</label>
        <input
          onChange={handleStrengthChange}
          placeholder={abilityScores.strength}
          id="strength"
        />
        <label>Dexterity</label>
        <input
          onChange={handleDexterityChange}
          placeholder={abilityScores.dexterity}
          id="dexterity"
        />
        <label>Constitution</label>
        <input
          onChange={handleConstitutionChange}
          placeholder={abilityScores.constitution}
          id="constitution"
        />
        <label>Wisdom</label>
        <input
          onChange={handleWisdomChange}
          placeholder={abilityScores.wisdom}
          id="Wisdom"
        />
        <label>Intelligence</label>
        <input
          onChange={handleIntelligenceChange}
          placeholder={abilityScores.intelligence}
          id="intelligence"
        />
        <label>Charisma</label>
        <input
          onChange={handleCharismaChange}
          placeholder={abilityScores.charisma}
          id="charisma"
        />
        <button onClick={handleRandomAbilities}>Random</button>
      </form>
      <p>HP here</p>
      <form>
        <label>HP</label>
        <input
          onChange={handleHpChange}
          placeholder={hitPoints}
          id="hitPoints"
        />
        <button onClick={handleHpRoll}>roll</button>
      </form>
    </div>
  );
}

export default AbilityScores;
