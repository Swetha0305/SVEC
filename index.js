import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import UnionBank from './UnionBank';
import States from './components/States';
import StatesInFunctionalComponent from './components/StatesInFunctionalComponent';
import ListRendering from './components/ListRendering';
import FormRendering from './components/FormRendering';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <FormRendering/> */}
    {/* <App /> */}
     {/* <Functional/> 
     <UnionBank/> 
     <States/>  
    <ListRendering/>
     <StatesInFunctionalComponent/>  */}
     <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
