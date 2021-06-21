import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import IconsNavbar from './Components/IconsNavbar';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminPanel from './Components/AdminPanel';
document.body.style.background = '#0C1326';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <IconsNavbar />
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/admin" exact>
        <AdminPanel />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
