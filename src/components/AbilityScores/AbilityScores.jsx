import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { abilityScoreGenerator } from "../DiceRollers/DiceRoller";
import { hitPointCalc } from "../DiceRollers/DiceRoller";

function AbilityScores() {
  const dispatch = useDispatch();
  const className = useSelector((store) => store.charClass)
  let [hitPoints, setHitPoints] = useState([]);
  let [abilityScores, setAbilityScores] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });

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

    setAbilityScores({
      str: newAbilityScores.strength,
      dex: newAbilityScores.dexterity,
      con: newAbilityScores.constitution,
      wis: newAbilityScores.wisdom,
      int: newAbilityScores.intelligence,
      cha: newAbilityScores.charisma,
    });
    dispatch({ type: "ABS_TO_ADD", payload: newAbilityScores });
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
    let HP = hitPointCalc(hitDie) + Math.floor((abilityScores.con - 10) / 2)
    setHitPoints(HP);
    dispatch({ type: "HP_TO_ADD", payload: HP });
    console.log("d", hitDie);
    console.log(abilityScores, hitPoints);
  };

  return (
    <div>
      <h1>Ability Scores</h1>
      <form>
        <label>Strength</label>
        <input
          onChange={handleStrengthChange}
          placeholder={abilityScores.str}
          id="strength"
        />
        <label>Dexterity</label>
        <input
          onChange={handleDexterityChange}
          placeholder={abilityScores.dex}
          id="dexterity"
        />
        <label>Constitution</label>
        <input
          onChange={handleConstitutionChange}
          placeholder={abilityScores.con}
          id="constitution"
        />
        <label>Wisdom</label>
        <input
          onChange={handleWisdomChange}
          placeholder={abilityScores.wis}
          id="Wisdom"
        />
        <label>Intelligence</label>
        <input
          onChange={handleIntelligenceChange}
          placeholder={abilityScores.int}
          id="intelligence"
        />
        <label>Charisma</label>
        <input
          onChange={handleCharismaChange}
          placeholder={abilityScores.cha}
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
      <button><Link to="/background">Back</Link></button>
      <button className="next"><Link to="/charConfirmation">Next</Link></button>
    </div>
  );
}

export default AbilityScores;
