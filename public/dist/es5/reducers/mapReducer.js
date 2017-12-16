"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var initialState = _interopRequire(require("../initial-state"));

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var updated = Object.assign({}, state);

  switch (action.type) {
    case "CENTER_CHANGED":
      updated.mapCenter = action.data;
      return updated;
    default:
      return updated;
  }
};