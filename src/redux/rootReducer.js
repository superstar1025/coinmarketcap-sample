import { combineReducers } from 'redux';

// reducers
import testReducer from './reducers/testReducer';
import coinmarketcapReducer from './reducers/coinmarketcapReducer';


const reducerMap = {
  test: testReducer,
  coinmarketcap: coinmarketcapReducer,
};

const rootReducer = combineReducers(reducerMap);

export default rootReducer;
