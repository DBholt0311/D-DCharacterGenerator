import axios from "axios";
import { takeLatest, select } from "redux-saga/effects";

function* updateAbilityScores(action) {
    //updates character ability scores in DB
    const charId = yield select(state => state.charId)
    try {
      yield axios.put(`/api/characters/${charId}`, action.payload);
    } catch (error) {
      console.log('Character update failed', error);
    }
  }

function* abilityScoreSaga() {
  yield takeLatest("UPDATE_ABILITY_SCORES", updateAbilityScores);
}

export default abilityScoreSaga;