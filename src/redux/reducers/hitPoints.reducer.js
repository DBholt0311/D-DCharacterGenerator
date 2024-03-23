const hitPoints = (state = 0, action) => {
    if (action.type === 'HIT_POINTS') {
      return action.payload;
    }
    return state;
  };
  
  export default hitPoints;
  