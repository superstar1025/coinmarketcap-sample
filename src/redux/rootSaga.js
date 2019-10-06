import { all } from 'redux-saga/effects';
import { testSaga } from './sagas/test';
import { coinmarketcapSaga } from './sagas/coinmarketcap';


export default function* rootSaga() {
  yield all([
    testSaga(),
    coinmarketcapSaga(),
  ]);
}
