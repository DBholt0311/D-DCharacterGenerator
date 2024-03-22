import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* createChar(action) {
  try {
    yield axios.post('/api/characters/new', action.payload);
    
    yield put({ type: 'CREATE_CHAR', payload: action.payload });
  } catch (error) {
    console.log('Error with char creation:', error);
  }
}

function* newCharSaga() {
  yield takeLatest('new', createChar);
}

export default newCharSaga;
