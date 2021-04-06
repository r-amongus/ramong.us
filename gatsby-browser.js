/**
 * Copyright (c) /r/AmongUs
 */

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

// Import global styles
require('normalize.css');
require('./src/css/reset.css');
require('./src/prism-styles');
require('./src/css/algolia.css');

// Expose React and ReactDOM as globals for console playground
window.React = React;
window.ReactDOM = ReactDOM;

// A stub function is needed because Gatsby won't load this file otherwise
exports.onClientEntry = () => {};
