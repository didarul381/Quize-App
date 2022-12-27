import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserContext from './Module58/context/UserContext';
import Module58 from './Module58/Module58';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import App1 from './App1';
//import Apps from './Apps';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
    <Module58></Module58>
    </UserContext>
    {/* <Apps></Apps> */}
    {/* <App1></App1> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
