import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navigation from "../Navigation/Navigation";
import Logo from "../../Images/Logo.png";
import AboutUs from "../AboutUs/AboutUs";
import Donate from "../Donate/Donate";
import Map from "../ContactUs/Map";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ContactUs from "../ContactUs/ContactUs";
import FooterPage from '../Footer/Footer';


function App() {
    // debugger
  return (

          <div className="App">
              <Navigation/>
              <Router>
              <Switch>
                  <Route path="/aboutUs" component={AboutUs}/>
                  <Route path="/donate" component={Donate}/>
                  <Route path="/contactUs" component={ContactUs}/>
                  <Route path="/" exact component={HomePage}/>
              </Switch>
              </Router>
            <FooterPage/>
          </div>
  );
}

export default App;
