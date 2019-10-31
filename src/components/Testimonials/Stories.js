import React from 'react';
import { MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBRow } from 'mdbreact';

import Story1 from "../../Images/Story1.jpg";
import Story2 from "../../Images/Story2.jpg";
import Story3 from "../../Images/Story3.jpg";
import Story4 from "../../Images/Story4.jpg";
import Story5 from "../../Images/Story5.jpg";
import Story6 from "../../Images/Story6.jpg";


class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }
    Clicked() {
        window.location.href = "https://www.unwomen.org/en/news/stories/2018/1/a-day-in-the-life-marie-sophie-pettersson";
    }
    Clicked1(){
        window.location.href = "https://www.unwomen.org/en/news/stories/2017/10/a-day-in-the-life-of-catherine-wolf";
    }
    Clicked2(){
        window.location.href = "https://www.unwomen.org/en/news/stories/2017/6/a-day-in-the-life--hadeel-al-zoubi";
    } 
    Clicked3(){
        window.location.href="https://www.unwomen.org/en/news/stories/2016/2/chasing-hard-hitting-womens-stories-in-tanzania";

    }
    Clicked4(){
        window.location.href="https://www.unwomen.org/en/news/stories/2016/6/boosting-incomes-and-hope-in-rural-mexico-and-central-america";
    }
    Clicked5(){
        window.location.href="https://www.unwomen.org/en/news/stories/2016/3/finding-inspiration-amid-devastation";
    }
    render() {

        return (
            <div >
                <div>
   <div className="text-center">
                    <h3 className="h1-responsive font-weight-bold my-5">
                        <i> Stories </i>
                    </h3>
                    </div>
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-3">
                            <img src={Story1} className="rounded-circle z-depth-1 img-fluid" />
                            <h5 className="font-weight-bold dark-grey-text my-4">
                                I want to help other women”—Rohingya women strive to reclaim a life of dignity
                            </h5>
                            <div className="text-center">
                                <MDBBtn outline color="gray" onClick={this.Clicked}>
                                    Read More
                            </MDBBtn>
                            </div>

                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-3">
                            <img src={Story2} className="rounded-circle z-depth-1 img-fluid" />
                            <h5 className="font-weight-bold dark-grey-text my-4">
                                Empowering women in the farthest corners of Armenia
                            </h5>
                            <br/>
                            <div className="text-center">
                                <MDBBtn outline color="gray" onClick={this.Clicked1}>
                                    Read More
                            </MDBBtn>
                            </div>



                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-3">
                            <img src={Story3} className="rounded-circle z-depth-1 img-fluid" alt="sample Avatar" />
                            <h5 className="font-weight-bold dark-grey-text my-4">
                            Finding a new normal in the Za’atari refugee camp
                            </h5>
                           <br/>
                            <div className="text-center">
                                <MDBBtn outline color="gray" onClick={this.Clicked2}>
                                    Read More
                            </MDBBtn>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </div>
                <div>
                    <br />
                    <br />
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Story4} className="rounded-circle z-depth-1 img-fluid" />
                            <h5 className="font-weight-bold dark-grey-text my-4">
                            Chasing hard-hitting women’s stories in Tanzania
                            </h5>
                            <br/>
                            <div className="text-center">
                                <MDBBtn outline color="gray" onClick={this.Clicked3}>
                                    Read More
                            </MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Story5} className="rounded-circle z-depth-1 img-fluid" />
                            <h5 className="font-weight-bold dark-grey-text my-4">Boosting incomes and hope in rural Mexico and Central America</h5>

                            <div className="text-center">
                                <MDBBtn outline color="gray" onClick={this.Clicked4}>
                                    Read More
                            </MDBBtn>
                            </div>

                        </MDBCol>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                            <img src={Story6} className="rounded-circle z-depth-1 img-fluid" alt="sample Avatar" />
                            <h5 className="font-weight-bold dark-grey-text my-4">
                            Finding inspiration amid devastation in Fiji
                            </h5>
                            <br/>
                            <div className="text-center">
                                <MDBBtn outline color="gray" onClick={this.Clicked5}>
                                    Read More
                            </MDBBtn>
                            </div>

                        </MDBCol>
                    </MDBRow>

                </div>
            </div>
        );
    }
}
export default Stories;