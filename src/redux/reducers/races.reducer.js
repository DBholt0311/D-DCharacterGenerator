const race = (state = '', action) => {
    if (action.type === 'RACE_TO_ADD') {
  
      return action.payload;
    }
    return state;
  };

  export default race;