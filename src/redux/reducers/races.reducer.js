const raceList = (state = [], action) => {
    if (action.type === 'RACE_OPTIONS') {
  
      return action.payload;
    }
    return state;
  };

  export default raceList;