import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { hitPointCalc } from "../../DiceRollers/DiceRoller";

function HitPoints() {
    const dispatch = useDispatch();
    let abilityScores = useSelector((store) => store.abilityScore);
    let currentHitPoints = useSelector((store) => store.hitPoints);
  let [hitPoints, setHitPoints] = useState();

  const handleHpChange = (event) => {
    setHitPoints(event.target.value);
  };

  useEffect(() => {
    setHitPoints();
  }, []);

  const handleHpRoll = () => {
    setHitPoints(hitPointCalc(8));
    dispatch({ type: "HIT_POINTS", payload: abilityScores });
}

    return (
        <div>
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
    )
}

export default HitPoints;