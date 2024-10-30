import axios from "axios";
import { takeLatest, put, select } from "redux-saga/effects";

function* createChar(action) {
  try {
    const response = yield axios.post("/api/characters", action.payload);
    const characterId = response.data.id;
    yield put({ type: 'SET_CHAR_ID', payload: characterId });

  } catch (error) {
    console.log("Character creation failed", error);
  }
}

function* updateChar(action) {
  const charId = yield select(state => state.charId)
  try {
    yield axios.put(`/api/characters/${charId}`, action.payload);
  } catch (error) {
    console.log("Character update failed", error);
  }
}

function* characterSaga() {
  yield takeLatest("CREATE_CHAR", createChar);
  yield takeLatest("UPDATE_CHAR", updateChar);
}

export default characterSaga;
