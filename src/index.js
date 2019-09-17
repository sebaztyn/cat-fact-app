import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

console.log('Working!!!!!');

render(<App />, document.getElementById("root"));
