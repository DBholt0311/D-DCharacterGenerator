import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import CharId from './charId.reducer';
import raceList from './raceList.reducer';
import displayRace from './displayRace.reducer';
import classList from './classList.reducer';
import displayClass from './displayClass.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  CharId,
  raceList,
  displayRace,
  classList,
  displayClass,
});

export default rootReducer;
