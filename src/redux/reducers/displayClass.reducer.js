const displayClass = (state = {}, action) => {
    if (action.type === 'SET_DISPLAY_CLASS') {
        return action.payload;
      }
      return state;
  };
  
  export default displayClass;