const abilityScore = (state = {}, action) => {
  if (action.type === 'ABILITY_SCORE') {
    return action.payload;
  }
  return state;
};

export default abilityScore;
