import axios from "axios";
import { takeLatest, select } from "redux-saga/effects";

function* createChar(action) {
  try {
    yield axios.post("/api/characters", action.payload);
  } catch (error) {
    console.log("Character creation failed", error);
  }
}

function* updateChar(action) {
  const charId = yield select(state => state.CharId)
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
