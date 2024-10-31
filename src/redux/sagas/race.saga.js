import axios from "axios";
import { takeLatest, put, select } from "redux-saga/effects";

function* selectRace(action) {
  
  //fetch races from Database
  yield put({ type: 'SET_DISPLAY_RACE', payload: '' });
  try {
    const racesResponse = yield axios.get("/api/races");
    const races = racesResponse.data;
    yield put({ type: 'SET_RACE_LIST', payload: races });

  } catch (error){
    console.log('Error fetching race list:', error);
  }
}

function* displayRace(action) {
//pull all data for display race
try {
  const raceResponse = yield axios.get(`/api/races/${action.payload}`)
  const displayRace = raceResponse.data[0];
  const abilityBonus = {
    strength: displayRace.strength,
    dexterity: displayRace.dexterity,
    constitution: displayRace.constitution,
    wisdom: displayRace.wisdom,
    intelligence: displayRace.intelligence,
    charisma: displayRace.charisma,
  }

  yield put({ type: 'SET_SCORE_BONUS', payload: abilityBonus });
  yield put({ type: 'SET_DISPLAY_RACE', payload: displayRace });
} catch (error){
  console.log('Error displaying chosen race:', error);
}
}

function* updateRace(action) {
  //updates character race in DB
  const charId = yield select(state => state.charId)
  try {
    yield axios.put(`/api/characters/${charId}`, action.payload);
  } catch (error) {
    console.log('Character update failed', error);
  }
}


function* raceSaga() {
  yield takeLatest("FETCH_RACES", selectRace);
  yield takeLatest("FETCH_DISPLAY_RACE", displayRace);
  yield takeLatest("UPDATE_RACE", updateRace);
}

export default raceSaga;
