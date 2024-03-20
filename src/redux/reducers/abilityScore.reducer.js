const abilityScore = (state = [0], action) => {
  if (action.type === 'ABILITY_SCORE') {
    return action.payload;
  }
  return state;
};

// user will be on the redux state at:
// state.user
export default abilityScore;
