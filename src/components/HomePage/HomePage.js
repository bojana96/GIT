import {BrowserRouter as Router} from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Donate from "../Donate/Donate";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../Images/Logo.jpg";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="body">
            <img src={Logo} className="logo"/>
        </div>
    );
}
export default HomePage;