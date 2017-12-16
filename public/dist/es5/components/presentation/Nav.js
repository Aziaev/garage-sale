"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  return React.createElement(
    "nav",
    { className: "navbar navbar-transparent navbar-absolute" },
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "button",
          { type: "button", className: "navbar-toggle", "data-toggle": "collapse" },
          React.createElement(
            "span",
            { className: "sr-only" },
            "Toggle navigation"
          ),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" })
        ),
        React.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          " Material Dashboard "
        )
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse" },
        React.createElement(
          "ul",
          { className: "nav navbar-nav navbar-right" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#pablo", className: "dropdown-toggle", "data-toggle": "dropdown" },
              React.createElement(
                "i",
                { className: "material-icons" },
                "dashboard"
              ),
              React.createElement(
                "p",
                { className: "hidden-lg hidden-md" },
                "Dashboard"
              )
            )
          ),
          React.createElement(
            "li",
            { className: "dropdown" },
            React.createElement(
              "a",
              { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
              React.createElement(
                "i",
                { className: "material-icons" },
                "notifications"
              ),
              React.createElement(
                "span",
                { className: "notification" },
                "5"
              ),
              React.createElement(
                "p",
                { className: "hidden-lg hidden-md" },
                "Notifications"
              )
            ),
            React.createElement(
              "ul",
              { className: "dropdown-menu" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Mike John responded to your email"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "You have 5 new tasks"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "You're now friend with Andrew"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Another Notification"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Another One"
                )
              )
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#pablo", className: "dropdown-toggle", "data-toggle": "dropdown" },
              React.createElement(
                "i",
                { className: "material-icons" },
                "person"
              ),
              React.createElement(
                "p",
                { className: "hidden-lg hidden-md" },
                "Profile"
              )
            )
          )
        ),
        React.createElement(
          "form",
          { className: "navbar-form navbar-right", role: "search" },
          React.createElement(
            "div",
            { className: "form-group  is-empty" },
            React.createElement("input", { type: "text", className: "form-control", placeholder: "Search" }),
            React.createElement("span", { className: "material-input" })
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-white btn-round btn-just-icon" },
            React.createElement(
              "i",
              { className: "material-icons" },
              "search"
            ),
            React.createElement("div", { className: "ripple-container" })
          )
        )
      )
    )
  );
};