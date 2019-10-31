import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import Picture1 from '../../Images/Dina.jpg';
import Picture2 from '../../Images/Maja.jpg';
import Picture3 from '../../Images/Bojana.jpg';
import OurPurpose from "./OurPurpose";
import Team from "./Team";
import Purpose from "./Purpose";
import Footer from "../Footer/Footer";

const AboutUs = () => {
    return (
  <div>
        <Purpose/>
  <br/>
        <Team/>

        <Footer/>
  </div>
    );
}

export default AboutUs;