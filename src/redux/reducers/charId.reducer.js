const CharId = (state = [0], action) => {
    if (action.type === 'CHAR_ID') {
      return action.payload;
    }
    return state;
  };
  
  export default CharId;