var React = require('react');
var ReactDOM = require('react-dom');
var pkg = require('./package.json');

ReactDOM.render(
  <h1>{pkg.name}, brought to you by React!</h1>,
  document.getElementById('app')
);
