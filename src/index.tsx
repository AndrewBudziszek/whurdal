import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import './index.css';

axios.defaults.headers.common = {
  "X-API-Key": `${process.env.REACT_APP_WHURDAL_API_KEY}`,
};

if (process.env.REACT_APP_WHURDAL_ENV !== 'dev' && process.env.REACT_APP_API_URL) {
  console.log = () => { }
  axios.put(process.env.REACT_APP_API_URL, { "lookupID": "views" });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

