import React from "react";



 function diceRoller(max) {
  return (1 + Math.floor(Math.random() * max));
};

export function abilityScoreGenerator() {
    return diceRoller(6) + diceRoller(6) + diceRoller(6);
};



