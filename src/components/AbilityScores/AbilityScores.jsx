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
        <input
          onChange={handleStrengthChange}
          placeholder={charStrength}
          id="strength"
        />
        <label>Strength</label>
        <input
          onChange={handleDexterityChange}
          placeholder={charDexterity}
          id="dexterity"
        />
        <label>Dexterity</label>
        <input
          onChange={handleConstitutionChange}
          placeholder={charConstitution}
          id="constitution"
        />
        <label>Constitution</label>
        <input
          onChange={handleWisdomChange}
          placeholder={charWisdom}
          id="Wisdom"
        />
        <label>Wisdom</label>
        <input
          onChange={handleIntelligenceChange}
          placeholder={charIntelligence}
          id="intelligence"
        />
        <label>Intelligence</label>
        <input
          onChange={handleCharismaChange}
          placeholder={charCharisma}
          id="charisma"
        />
        <label>Charisma</label>
        <button onClick={handleRandomAbilities}>Random</button>
      </form>
      <p>HP here</p>
      <form>
        <label>HP</label>
        <input
          onChange={handleHpChange}
          placeholder={charHp}
          id="hitPoints"
        />
        <button onClick={handleHpRoll}>roll</button>
      </form>
      <button type="submit" onClick={handleClickSubmitScores}>
        <Link to="/CharConfirmation">Accept</Link>
      </button>
    </div>
  );
}

export default AbilityScores;
