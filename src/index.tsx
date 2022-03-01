import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.headers.common = {
  "X-API-Key":`${process.env.REACT_APP_WHURDAL_API_KEY}`,
};
axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', {"lookupID":"views"});   

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

