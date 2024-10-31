const abilityScoreBonus = (state = {}, action) => {
    if (action.type === 'SET_SCORE_BONUS') {
      return action.payload;
    }
    return state;
  };

  export default abilityScoreBonus;