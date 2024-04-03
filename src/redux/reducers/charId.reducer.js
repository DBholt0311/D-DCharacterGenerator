const charId = (state = [], action) => {
    if (action.type === 'CHAR_ID') {
      return action.payload;
    }
    return state;
  };
  
  export default charId;