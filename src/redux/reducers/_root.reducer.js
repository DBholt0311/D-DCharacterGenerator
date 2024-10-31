import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import charId from './charId.reducer';
import raceList from './raceList.reducer';
import displayRace from './displayRace.reducer';
import classList from './classList.reducer';
import displayClass from './displayClass.reducer';
import abilityScoreBonus from './abilityScoreBonus.reducer';
import abilityScores from './abilityScores.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  charId,
  raceList,
  displayRace,
  classList,
  displayClass,
  abilityScoreBonus,
  abilityScores,
});

export default rootReducer;
