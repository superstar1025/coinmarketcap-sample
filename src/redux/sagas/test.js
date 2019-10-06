import { put, takeEvery } from 'redux-saga/effects';
import { testAction } from '../constants';

function* adAuthentication(action) {
  try {
    if (action.payload) {
      yield put({
        type: testAction.TEST_REQUEST,
        brands: action.payload,
      });
    }
  } catch (err) {
    yield put({ type: testAction.TEST_FAILURE, error: err });
  }
}

export function* testSaga() {
  yield takeEvery(testAction.TEST_REQUEST, adAuthentication);
}
