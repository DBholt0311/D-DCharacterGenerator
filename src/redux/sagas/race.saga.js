import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* selectRace(action) {
  //fetch races from Database
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
  console.log(`DISPLAY:`, displayRace);

  yield put({ type: 'SET_DISPLAY_RACE', payload: displayRace });
} catch (error){
  console.log('Error displaying chosen race:', error);
}
}


function* raceSaga() {
  yield takeLatest("FETCH_RACES", selectRace);
  yield takeLatest("FETCH_DISPLAY_RACE", displayRace);
}

export default raceSaga;
