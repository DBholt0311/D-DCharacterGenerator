import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* createChar(action) {
  try {

    yield axios.post('/api/characters', action.payload);

  } catch (error) {
    console.log('Chararacter creation failed', error);
  }
}

function* charCreationSaga() {
  yield takeLatest('CREATE_CHAR', createChar);
}

export default charCreationSaga;
