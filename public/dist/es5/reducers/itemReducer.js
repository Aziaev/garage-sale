"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var initialState = _interopRequire(require("../initial-state"));

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var updated = Object.assign({}, state);

  switch (action.type) {
    case "ITEM_ADDED":
      var all = [].concat(_toConsumableArray(updated.all), [action.data]);
      updated.all = all;
      return updated;
    default:
      return updated;
  }
};