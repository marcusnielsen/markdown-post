var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var ContentEditable = require("react-contenteditable").default;
require("./styles/style.css");

ReactDOM.render(
  routes, document.getElementById('app')
);
