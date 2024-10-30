import axios from "axios";
import { takeLatest, put, select } from "redux-saga/effects";

function* selectClass(action) {
  
  //fetch races from Database
  yield put({ type: 'SET_DISPLAY_CLASS', payload: '' });
  try {
    const classesResponse = yield axios.get("/api/classes");
    const classes = classesResponse.data;
    yield put({ type: 'SET_CLASS_LIST', payload: classes });

  } catch (error){
    console.log('Error fetching class list:', error);
  }
}

function* displayClass(action) {
//pull all data for display race
try {
  const classResponse = yield axios.get(`/api/classes/${action.payload}`)
  const displayClass = classResponse.data[0];
  console.log(`DISPLAY:`, displayClass);

  yield put({ type: 'SET_DISPLAY_CLASS', payload: displayClass });
} catch (error){
  console.log('Error displaying chosen class:', error);
}
}

function* updateClass(action) {
  //updates character class in DB
  const charId = yield select(state => state.charId)
  try {
    yield axios.put(`/api/characters/${charId}`, action.payload);
  } catch (error) {
    console.log('Character update failed', error);
  }
}


function* classSaga() {
  yield takeLatest("FETCH_CLASSES", selectClass);
  yield takeLatest("FETCH_DISPLAY_CLASS", displayClass);
  yield takeLatest("UPDATE_CLASS", updateClass);
}

export default classSaga;
