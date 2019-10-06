import { put, takeEvery, call } from 'redux-saga/effects';
import { CoinMarketCapAction } from '../constants';
import { getListingLatestApi } from '../utils/api';

function* getListingLatest(action) {
  try {
    const response = yield call(getListingLatestApi, action.payload);
    if (response) {
      yield put({ type: CoinMarketCapAction.GET_LISTING_LATEST_SUCCESS, payload: response });
    }
  } catch (err) {
    yield put({ type: CoinMarketCapAction.GET_LISTING_LATEST_FAILURE, error: err });
  }
}

export function* coinmarketcapSaga() {
  yield takeEvery(CoinMarketCapAction.GET_LISTING_LATEST_REQUEST, getListingLatest);
}