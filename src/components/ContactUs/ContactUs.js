import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Map from "./Map";
import Footer from "../Footer/Footer";

const ContactUs = () => {
    return (
        <div>
        <div>
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                <i> Let us know how WE can help </i>
            </h2>
            <p className="text-center w-responsive mx-auto pb-5">

            </p>
            <MDBRow>
                <MDBCol lg="5" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody>

                            <div className="md-form">
                                <MDBInput
                                    icon="user"
                                    label="Your name"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-name"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="envelope"
                                    label="Your email"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-email"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="tag"
                                    label="Subject"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-subject"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                    icon="pencil-alt"
                                    label="Icon Prefix"
                                    iconClass="grey-text"
                                    type="textarea"
                                    id="form-text"
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="secondary">
                                    Submit <MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="7">
                    <div>

                        <Map/>



                    </div>
                    <br />
                    <MDBRow className="text-center">
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="purple" className="accent-1">
                                <MDBIcon icon="map-marker-alt" />
                            </MDBBtn>
                            <p><b>Skopje,1000</b></p>
                            <p className="mb-md-0"><b>North Macedonia</b></p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="purple" className="accent-1">
                                <MDBIcon icon="phone" />
                            </MDBBtn>
                            <p><b>+389 223 305</b></p>
                            <p className="mb-md-0"><b>Mon - Fri, 8:00-17:00</b></p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="purple" className="accent-1">
                                <MDBIcon icon="envelope" />
                            </MDBBtn>

                            <p className="mb-md-0"><b>empower@gmail.com</b></p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
        </div>

        <Footer/>
        </div>
    );
}

export default ContactUs;