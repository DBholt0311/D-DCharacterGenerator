const charClass = (state = 'Class', action) => {
    if (action.type === 'CLASS_TO_ADD') {
      return action.payload;
    }
    return state;
  };

  export default charClass;
  