"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Item = require("../presentation").Item;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Results = (function (Component) {
  function Results() {
    _classCallCheck(this, Results);

    _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
    this.state = {
      item: {
        position: { lat: 40.708703, lng: -73.999974 }
      }
    };
  }

  _inherits(Results, Component);

  _prototypeProperties(Results, null, {
    updateItem: {
      value: function updateItem(attr, event) {
        var updated = Object.assign({}, this.state.item);
        updated[attr] = event.target.value;
        this.setState({
          item: updated
        });
      },
      writable: true,
      configurable: true
    },
    addItem: {
      value: function addItem() {
        var newItem = Object.assign({}, this.state.item);
        newItem.id = this.props.item.all.length + 1;
        newItem.key = "" + (this.props.item.all.length + 1);
        newItem.defaultAnimation = 2;
        this.props.addItem(newItem);
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var items = this.props.item.all || [];
        console.log("this.props.item = " + JSON.stringify(this.props.item));
        return React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
              "div",
              { className: "row" },
              items.map(function (item, i) {
                return React.createElement(Item, { key: item.id, item: item });
              })
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-lg-4 col-md-6 col-sm-6" },
                React.createElement(
                  "div",
                  { className: "card" },
                  React.createElement(
                    "div",
                    { className: "card-header text-center", "data-background-color": "purple" },
                    React.createElement(
                      "h4",
                      { className: "title" },
                      "New item"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "card-content" },
                    React.createElement(
                      "div",
                      { className: "table-responsive table-upgrade" },
                      React.createElement(
                        "div",
                        { className: "card-content" },
                        React.createElement("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "item name",
                          onChange: this.updateItem.bind(this, "label")
                        }),
                        React.createElement("input", {
                          type: "text",
                          className: "form-control",
                          placeholder: "item price",
                          onChange: this.updateItem.bind(this, "price")
                        }),
                        React.createElement(
                          "button",
                          { className: "btn btn-success", onClick: this.addItem.bind(this) },
                          "Add item"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Results;
})(Component);

var stateToProps = function (state) {
  return {
    item: state.item
  };
};

var dispatchToProps = function (dispatch) {
  return {
    addItem: function (item) {
      return dispatch(actions.addItem(item));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);