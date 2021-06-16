import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import IconsNavbar from './Components/IconsNavbar';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';

document.body.style.background = '#0C1326';

ReactDOM.render(
  <React.StrictMode>
    <IconsNavbar />
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
