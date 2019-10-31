import React from 'react';
import { MDBContainer, MDBCol, MDBCard, MDBCardBody,MDBIcon,MDBRow } from 'mdbreact';

import Picture1 from '../../Images/Dina.jpg';
import Picture2 from '../../Images/Maja.jpg';
import Picture3 from '../../Images/Bojana.jpg';
class  Testimonials extends React.Component {
    constructor(props){
      super(props);
      this.state={
        clicked:false
      };
    } 
     render(){

     return (
<div > 
          <div>
              
                    <h3 className="h1-responsive font-weight-bold my-5" color="#E4D0C0">
                        <i> Testimonials </i>
                    </h3>
                
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Picture1} className="rounded-circle z-depth-1 img-fluid"/>
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Dina Poturovik
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Graphic Designer </h6>
                            <h5 className="text-primary  mb-3">Graphic Designer with 4 years of experience </h5>
                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Picture2} className="rounded-circle z-depth-1 img-fluid"/>
                            <h4 className="font-weight-bold dark-grey-text my-4">Maja Naumoska</h4>

                            <h6 className="text-uppercase grey-text mb-3">
                                Front-end Developer
                            </h6>
                            <h5 className="text-primary  mb-3">Front-end Developer with 4 years of experience </h5>


                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Picture3} className="rounded-circle z-depth-1 img-fluid" alt="sample Avatar"/>
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Bojana Peshovska
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Back-End Developer</h6>
                            <h5 className="text-primary  mb-3">Back-end Developer with 6 years of experience </h5>

                        </MDBCol>
                    </MDBRow>
                    </div>
                    <div>
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Picture1} className="rounded-circle z-depth-1 img-fluid"/>
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Dina Poturovik
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Graphic Designer </h6>
                            <h5 className="text-primary  mb-3">Graphic Designer with 4 years of experience </h5>
                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Picture2} className="rounded-circle z-depth-1 img-fluid"/>
                            <h4 className="font-weight-bold dark-grey-text my-4">Maja Naumoska</h4>

                            <h6 className="text-uppercase grey-text mb-3">
                                Front-end Developer
                            </h6>
                            <h5 className="text-primary  mb-3">Front-end Developer with 4 years of experience </h5>


                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Picture3} className="rounded-circle z-depth-1 img-fluid" alt="sample Avatar"/>
                            <h4 className="font-weight-bold dark-grey-text my-4">
                                Bojana Peshovska
                            </h4>
                            <h6 className="text-uppercase grey-text mb-3">Back-End Developer</h6>
                            <h5 className="text-primary  mb-3">Back-end Developer with 6 years of experience </h5>

                        </MDBCol>
                    </MDBRow>

                    </div>
        </div>
     );
     }
    }
    export default Testimonials;