const raceList = (state = [], action) => {
    if (action.type === 'SET_RACE_LIST') {
        return action.payload;
      }
      return state;
  };
  
  export default raceList;