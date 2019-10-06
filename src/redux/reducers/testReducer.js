import * as iassign from 'immutable-assign';
import {
  testAction,
} from '../constants';

const initialState = {
  testLists: {
    loading: false,
    brands: [],
    error: null,
  },
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case testAction.TEST_REQUEST:
      return iassign(
        state,
        state => state.testLists.loading,
        () => true,
      );
    case testAction.TEST_SUCCESS:
      return iassign(
        state,
        (s) => {
          s.testLists = {
            loading: false,
            brands: action.brands,
          };

          return s;
        },
      );
    case testAction.TEST_FAILURE:
      return iassign(
        state,
        (s) => {
          s.testLists = {
            loading: false,
            brands: [],
            error: action.error,
          };

          return s;
        },
      );

    default:
      return state;
  }
};

export default testReducer;
