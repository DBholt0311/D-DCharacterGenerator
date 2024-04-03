const abilityScores = (state = {}, action) => {
    if (action.type === 'ABS_TO_ADD') {
      return action.payload;
    }
    return state;
  };

  export default abilityScores;
  