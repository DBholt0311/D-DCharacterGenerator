const displayRace = (state = {}, action) => {
    if (action.type === 'SET_DISPLAY_RACE') {
        return action.payload;
      }
      return state;
  };
  
  export default displayRace;