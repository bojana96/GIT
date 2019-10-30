import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBt,MDBView } from "mdbreact";

const Purpose = () => {
    return (

        <section className="my-5">
            <h1 className="h1-responsive font-weight-bold text-center my-5">
                <i>  What do we do?</i>
            </h1>
            <h2 className="lead grey-text w-responsive text-center mx-auto mb-5">
                <i> Our goal is to support women that need help to make changes in the world</i>
            </h2>

            <MDBRow >

                <MDBCol md="2" className="md-0 mb-5">

                    <MDBRow>

                        <MDBCol lg="2" md="4" size="4">
                            <MDBIcon icon="globe" size="3x" className="purple-text" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="9">
                            <h4 className="font-weight-bold">Connect</h4>
                            <p className="grey-text">
                                The more you praise and celebrate your life,
                                the more there is in life to celebrate
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="4" size="4">
                            <MDBIcon icon="comment" size="3x" className="pink-text" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold"> Support </h4>
                            <p className="grey-text">
                                The picture that we take with our camera is the imagination
                                you want to create with reality.
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="4">
                            <MDBIcon icon="donate" size="3x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Donate</h4>
                            <p className="grey-text">
                                Words and magic were in the beginning one and the same thing,
                                and even today words retain much of their magical power.
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>

    );
}

export default Purpose;