const hitPoints = (state = "", action) => {
    if (action.type === 'NAME_TO_ADD') {
      return action.payload;
    }
    return state;
  };

  export default hitPoints;
  