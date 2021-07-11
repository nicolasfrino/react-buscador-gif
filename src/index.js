import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import GifExpertApp from './GifExpertApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<GifExpertApp defaultCategories = {['Vegeta']}/>,divRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

