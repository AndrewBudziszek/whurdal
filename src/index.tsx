import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { getTodaysWord } from './assets/wordList';

axios.defaults.headers.common = {
  "X-API-Key":`${process.env.REACT_APP_WHURDAL_API_KEY}`,
};
axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', {"lookupID":"views"});   

let localStorageWord = localStorage.getItem('todaysWord');
if(JSON.parse(localStorageWord!) != getTodaysWord()) {
  localStorage.removeItem('inProgress');
  localStorage.removeItem('tries');
  localStorage.removeItem('currentGuessIndex');
  localStorage.setItem('todaysWord', JSON.stringify(getTodaysWord()));
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

