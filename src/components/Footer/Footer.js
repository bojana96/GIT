import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBCardFooter,MDBBtn } from "mdbreact";
import './Footer.css';
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
const FooterPage = () => {
  return (
    <div className="futer">
   <MDBCardFooter>
    
      <div class="nav">
        <MDBContainer className="text-right md-5">
          
            <a href="https://facebook.com">
           <FaFacebook size="2em" color="black"/>
            </a>
            
            <span> </span>
          
            <a href="https://instagram.com">
              <FaInstagram size="2em" color="black"/>
            </a>
            <span></span>
          
            <a href="https://twitter.com">
              <FaTwitter size="2em" color="black"/>
            </a>
          <span>
            </span> 
            
            <a href=" https://www.linkedin.com/">

            <FaLinkedin size="2em" color="black"/>
            </a>
        </MDBContainer>
       
      </div> 
      
      </MDBCardFooter>
      </div>
  );
}

export default FooterPage;