import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;

let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';

import "./assets/scss/main.scss";

ReactDOM.render(<App />, document.getElementById('app'));