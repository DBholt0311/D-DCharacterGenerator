const newChar = (state = {}, action) => {
    if (action.type === 'CREATE_CHAR') {
  
      return action.payload;
    }
    return state;
  };

  export default newChar;