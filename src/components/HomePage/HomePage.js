import {BrowserRouter as Router} from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Donate from "../Donate/Donate";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../Images/Logo.jpg";
import Background from '../../Images/Webp.net-resizeimage (1).jpg';
import './HomePage.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const HomePage = () => {
    return (
        <div>
             <div div className="background">
             <img src={Background} className="slika"/>
             <div className="name">
             </div>   
             <h6 className="tek"> BE THE CHANGE YOU WANT <br/>TO SEE IN THE WORLD !!! </h6>
             <div className="parafraf">
             <p><i><b> <b>Empowering women </b> means giving them means to be financially <br/>
              and intellectually independent in their choices on <br/>
               one side, and on the other side,
               it also means seeding the belief <br/> that they are equal to everyone else and that they have <br/>
               the same rights and can choose what and where to be and to do <br/> in their lives. <br/></b></i></p>
                </div>
        </div>
        
        <div className="text">
          
          <a href="https://facebook.com">
            <FaFacebook size="2em" color="black"/>
          </a> 

          <a href="https://instagram.com">
            <FaInstagram size="2em" color="black"/>
          </a>

          <a href="https://twitter.com">
            <FaTwitter size="2em" color="black"/>
          </a>

          <a href=" https://www.linkedin.com/">
          <FaLinkedin size="2em" color="black"/>
          </a>
        </div>
        <div className="text-right">
            <div className="pozicija">
                            <MDBBtn outline color="secondary">
                             <a href="../../AboutUs/AboutUs"> About </a> <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                            </div>
        </div>

        </div>
    );
}
export default HomePage;