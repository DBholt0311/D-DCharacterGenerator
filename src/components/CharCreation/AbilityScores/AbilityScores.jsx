import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { abilityScoreGenerator } from "../../DiceRollers/DiceRoller";
import { hitPointCalc } from "../../DiceRollers/DiceRoller";

function AbilityScores() {
  const dispatch = useDispatch();
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

  const handleRandomAbilities = () => {
    setAbilityScores({
        ...abilityScores,
        strength: abilityScoreGenerator(),
        dexterity: abilityScoreGenerator(),
        constitution: abilityScoreGenerator(),
        wisdom: abilityScoreGenerator(),
        intelligence: abilityScoreGenerator(),
        charisma: abilityScoreGenerator(),
    });
    console.log(abilityScores);
  };

  const handleHpChange = (event) => {
    setHitPoints(event.target.value);
  };

  useEffect(() => {
    setAbilityScores([]);
    setHitPoints([]);
  }, []);


  const handleHpRoll = () => {
    setHitPoints(hitPointCalc(8) + abilityScores.constitution);
    console.log(abilityScores, hitPoints)
}

const handleClickSubmitScores = () => {
  dispatch({ type: "HIT_POINTS", payload: hitPoints });
  dispatch({ type: "ABILITY_SCORE", payload: abilityScores });
}

  return (
    <div>
      <h1>Ability Scores</h1>
      <form>
        <input
          onChange={handleStrengthChange}
          placeholder={abilityScores.strength}
          id="strength"
        />
        <label>Strength</label>
        <input
          onChange={handleDexterityChange}
          placeholder={abilityScores.dexterity}
          id="dexterity"
        />
        <label>Dexterity</label>
        <input
          onChange={handleConstitutionChange}
          placeholder={abilityScores.constitution}
          id="constitution"
        />
        <label>Constitution</label>
        <input
          onChange={handleWisdomChange}
          placeholder={abilityScores.wisdom}
          id="Wisdom"
        />
        <label>Wisdom</label>
        <input
          onChange={handleIntelligenceChange}
          placeholder={abilityScores.intelligence}
          id="intelligence"
        />
        <label>Intelligence</label>
        <input
          onChange={handleCharismaChange}
          placeholder={abilityScores.charisma}
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
            placeholder={hitPoints}
            id="hitPoints"
          />
          <button onClick={handleHpRoll}>roll</button>
            </form>
        <button type="submit" onClick={handleClickSubmitScores}><Link to="/CharConfirmation">Accept</Link>></button>
    </div>
  )
}

export default AbilityScores;
