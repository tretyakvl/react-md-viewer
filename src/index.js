import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Marked from 'marked';
import DOMPurify from 'dompurify'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const test = '# React Random Quote Machine'
console.log(DOMPurify.sanitize(Marked(test)));