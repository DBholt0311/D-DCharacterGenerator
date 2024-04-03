const hitPoints = (state = 0, action) => {
    if (action.type === 'HP_TO_ADD') {
      return action.payload;
    }
    return state;
  };

  export default hitPoints;
  