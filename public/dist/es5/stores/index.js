"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var createStore = _redux.createStore;
var thunk = _interopRequire(require("redux-thunk"));

var _reducers = require("../reducers");

var itemReducer = _reducers.itemReducer;
var mapReducer = _reducers.mapReducer;
var userReducer = _reducers.userReducer;


var store;
module.exports = {

  configure: function (initialState) {
    // initialState can be null

    var reducers = combineReducers({ // insert reducers here
      user: userReducer,
      item: itemReducer,
      mapCenter: mapReducer
    });

    if (initialState) {
      store = createStore(reducers, initialState, applyMiddleware(thunk));

      return store;
    }

    store = createStore(reducers, applyMiddleware(thunk));

    return store;
  },

  currentStore: function () {
    return store;
  }
};