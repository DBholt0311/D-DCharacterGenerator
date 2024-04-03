const background = (state = 'Background', action) => {
    if (action.type === 'BACKGROUND_TO_ADD') {
      return action.payload;
    }
    return state;
  };

  export default background;
  