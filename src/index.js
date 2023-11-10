import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);

// const name = 'ikan';

// const ueRoot = ReactDOM.createRoot(document.getElementById('ue'));
// ueRoot.render(
//   <>
//     <Test name={name}/>
//     <App/>
//   </>
// )

// const myelements = (
//   <ul>
//     <li>hello</li>
//     <li>there</li>
//   </ul>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelements);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
