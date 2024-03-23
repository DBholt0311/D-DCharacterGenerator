const alignment = (state = '', action) => {
    if (action.type === 'ALIGNMENT_TO_ADD') {
  
      return action.payload;
    }
    return state;
  };

  export default alignment;