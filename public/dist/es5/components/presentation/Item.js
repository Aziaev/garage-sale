"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  var item = props.item;

  return React.createElement(
    "div",
    { className: "col-lg-3 col-md-6 col-sm-6" },
    React.createElement(
      "div",
      { className: "card card-stats" },
      React.createElement(
        "div",
        { className: "card-header", "data-background-color": "orange" },
        React.createElement(
          "i",
          { className: "material-icons" },
          "content_copy"
        )
      ),
      React.createElement(
        "div",
        { className: "card-content" },
        React.createElement(
          "p",
          { className: "category" },
          item.label
        ),
        React.createElement(
          "h3",
          { className: "title" },
          item.price,
          React.createElement(
            "small",
            null,
            "$"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "card-footer" },
        React.createElement(
          "div",
          { className: "stats" },
          React.createElement(
            "i",
            { className: "material-icons text-danger" },
            "warning"
          ),
          React.createElement(
            "a",
            { href: "#pablo" },
            "Get More Space..."
          )
        )
      )
    )
  );
};