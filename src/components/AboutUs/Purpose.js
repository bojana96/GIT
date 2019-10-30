import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBt,MDBView } from "mdbreact";

const LearnMore = () => {
    return (

        <section className="my-5">
            <h1 className="h1-responsive font-weight-bold text-center my-5">
                What do we offer?
            </h1>
            <h3 className="lead grey-text w-responsive text-center mx-auto mb-5">
                The key operative word here is planning.
                All events – from bridal showers to milestone birthday celebrations to big corporate gatherings – begin with a plan of some sort.
                The initial discussions with clients regarding event ideas, themes, desirable dates and budget guidelines
                are all part of the event planning process.
            </h3>

            <MDBRow >

                <MDBCol md="4" className="md-0 mb-5">

                    <MDBRow>

                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="comments" size="2x" className="purple-text" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Your Dream Celebration</h4>
                            <p className="grey-text">
                                The more you praise and celebrate your life,
                                the more there is in life to celebrate
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="camera" size="2x" className="pink-text" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold"> Every Moment Captured </h4>
                            <p className="grey-text">
                                The picture that we take with our camera is the imagination
                                you want to create with reality.
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                    <MDBRow>
                        <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Magic</h4>
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

export default LearnMore;