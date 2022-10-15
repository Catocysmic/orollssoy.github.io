import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from './Weather'
import Title from './Title';
import Iss from './Iss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
        <Weather />
        <Title />
        <Iss />
    </div>
        <App />
  </React.StrictMode>
);
