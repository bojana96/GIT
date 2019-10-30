import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBt,MDBView, MDBBtn } from "mdbreact";
import {Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
class  Purpose extends React.Component{

    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }
   
     /* routeChange=() =>{
        <Redirect to="/donate" />

        
  }*/

    render(){
    return (

       
            <section className="text-center my-5">
              <h2 className="h1-responsive font-weight-bold my-5">
               <i> What do we do ?</i>
              </h2>
              <h1 className="lead grey-text w-responsive mx-auto mb-5">
            <i>Our goal is to support women that need help to make changes in the world</i>
              </h1>
              <MDBRow>
                <MDBCol md="4">
                  <MDBIcon icon="globe" size="4x" className="purple-text" />
                  <h5 className="font-weight-bold my-4">Connect</h5>
                  <h6 className="grey-text mb-md-0 mb-5">
                    When doing our research we are looking for girls and women that need <br/>
                    our help and the help from the others.
                  </h6>
                </MDBCol>
                <MDBCol md="4">
                  <MDBIcon icon="donate" size="4x" className="blue-text" />
                  <h5>
                  <a href="/donate" className="font-weight-bold my-4">Donate</a> </h5>
                  <h6 className="grey-text mb-md-0 mb-5">
                   Why do we donate? <br/>
                   <li>Help Those in need</li>
                   <li>Experience More Pleasure</li> 
                   <li>Bring More Meaning to Somebodys' Life</li> 
                   <li>Motivate Friends and Family</li>
                   <li>Realize that Every Little Bit Helps</li> 
                   
                  </h6>
                </MDBCol>
                <MDBCol md="4">
                  <MDBIcon far icon="comments" size="3x" className="orange-text" />
                  <h5 className="font-weight-bold my-4">Support</h5>
                  <h6 className="grey-text mb-md-0 mb-5">
                  Women don’t just deserve more opportunities to advance -- they’ve earned them.<br/>
                  Now, it’s up to businesses to fight unconscious biases and provide women with <br/>
                  the resources and pathways they need to make the most of their talents.
                  </h6>
                </MDBCol>
              </MDBRow>
            </section>
        );
      }
}


export default Purpose;