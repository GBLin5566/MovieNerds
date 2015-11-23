const React = require('react');
const { render } = require('react-dom');
const App = require('./App');

require('./style.css');
require('bootstrap');

render(<App />, document.getElementById('root'));
