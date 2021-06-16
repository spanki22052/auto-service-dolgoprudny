import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import IconsNavbar from './Components/IconsNavbar';
import './main.css';

document.body.style.background = '#0C1326';

ReactDOM.render(
  <React.StrictMode>
    <IconsNavbar />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
