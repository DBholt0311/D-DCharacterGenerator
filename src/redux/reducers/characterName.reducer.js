const characterName = (state = 'Name', action) => {
    if (action.type === 'NAME_TO_ADD') {
      return action.payload;
    }
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default characterName;
  