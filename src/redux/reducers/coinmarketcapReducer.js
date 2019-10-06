import * as iassign from 'immutable-assign';
import {
  CoinMarketCapAction,
} from '../constants';

const initialState = {
  coinmarketcapData: {
    loading: false,
    coinmarketcap: {
      status: {},
      data: [],
    },
    error: null,
  },
};

const coinmarketcapReducer = (state = initialState, action) => {
  switch (action.type) {
    case CoinMarketCapAction.GET_LISTING_LATEST_REQUEST:
      return iassign(
        state,
        state => state.coinmarketcapData.loading,
        () => true,
      );
    case CoinMarketCapAction.GET_LISTING_LATEST_SUCCESS:
      return iassign(
        state,
        (s) => {
          s.coinmarketcapData = {
            loading: false,
            coinmarketcap: action.payload || {
              status: {},
              data: [],
            },
          };

          return s;
        },
      );
    case CoinMarketCapAction.GET_LISTING_LATEST_FAILURE:
      return iassign(
        state,
        (s) => {
          s.coinmarketcapData = {
            loading: false,
            coinmarketcap: {
              status: {},
              data: [],
            },
            error: action.error,
          };

          return s;
        },
      );

    default:
      return state;
  }
};

export default coinmarketcapReducer;
