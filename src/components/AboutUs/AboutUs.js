import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import Picture1 from '../../Images/Dina.jpg';
import Picture2 from '../../Images/Maja.jpg';
import Picture3 from '../../Images/Bojana.jpg';
import OurPurpose from "./OurPurpose";
import Team from "./Team";

const AboutUs = () => {
    return (
  <div>
        <OurPurpose/>
  <br/>
        <Team/>
  </div>
    );
}

export default AboutUs;