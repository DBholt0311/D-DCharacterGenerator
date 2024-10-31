const abilityScores = (state = {}, action) => {
    if (action.type === 'SET_ABILITY_SCORES') {
      return action.payload;
    }
    return state;
  };

  export default abilityScores;