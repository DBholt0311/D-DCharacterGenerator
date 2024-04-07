const displayClass = (state = {}, action) => {
    if (action.type === 'CLASS_TO_DISPLAY') {
      return action.payload;
    }
    return state;
  };

  export default displayClass;