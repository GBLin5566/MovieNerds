const React = require('react');
const { render } = require('react-dom');
const App = require('./App');

require('./style.css');

render(<App />, document.getElementById('root'));
