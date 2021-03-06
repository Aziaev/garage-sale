"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "nav",
        { className: "pull-left" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Home"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Company"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Portfolio"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Blog"
            )
          )
        )
      ),
      React.createElement(
        "p",
        { className: "copyright pull-right" },
        "© 2017",
        React.createElement(
          "a",
          { href: "http://www.creative-tim.com" },
          "Creative Tim"
        ),
        ", made with love for a better web"
      )
    )
  );
};