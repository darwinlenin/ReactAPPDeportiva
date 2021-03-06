import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/home-page/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage name="Darwin Palma" images="Projects" type='note'/>
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
