import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { itemReducer, userReducer } from '../reducers'

var store
export default {

  configure: (initialState) => { // initialState can be null

    const reducers = combineReducers({ // insert reducers here
      user: userReducer,
      item: itemReducer
    });

    if (initialState) {
      store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
      );

      return store
    }

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    return store
  },

  currentStore: () => {
    return store
  }
}
