import React from "react";
import Picture from '../../Images/Women.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './Donate.css';
import Footer from "../Footer/Footer";

const Donate = () => {
    return (
        <div>
        <MDBContainer className="fixed">
            <h1> Donate Today </h1>
            <h1 className="h5 text-center mb-4"></h1>
            <MDBRow>
                <MDBCol md="6">
                    <form>

                        <div className="grey-text">
                            <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Organization"
                                icon="globe"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Phone Number"
                                icon="mobile-alt"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                            label="Amount"
                            icon="hand-holding-usd"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />
                            <MDBInput
                                type="textarea"
                                rows="2"
                                label="Your message"
                                icon="pencil-alt"
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn outline color="secondary">
                               Submit <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </div>
                        <div>
                            <img src={Picture} className="pic" />
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>

        </MDBContainer>

        <Footer/>
        </div>

);




};

export default Donate;