const character = (state = {}, action) => {
    if (action.type === 'CHAR_TO_ADD') {
      return action.payload;
    }
    return state;
  };

  export default character;