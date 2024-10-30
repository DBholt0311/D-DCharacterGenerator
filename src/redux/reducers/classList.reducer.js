const classList = (state = [], action) => {
    if (action.type === 'SET_CLASS_LIST') {
        return action.payload;
      }
      return state;
  };
  
  export default classList;