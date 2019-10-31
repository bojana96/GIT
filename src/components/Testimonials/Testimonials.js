import React from 'react';
import { MDBContainer, MDBCol, MDBCard, MDBCardBody,MDBIcon,MDBRow } from 'mdbreact';


class  Testimonials extends React.Component {
    constructor(props){
      super(props);
      this.state={
        clicked:false
      };
    } 
   
   
     render(){
   
     return (


<MDBContainer className="testimonial">

  <h2 className="h1-responsive font-weight-bold my-5">
   <i>Testimonials</i> 
  </h2>
  <p className="dark-grey-text w-responsive mx-auto mb-5">
   
  </p>
  <MDBRow className="text-center">
    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
      <MDBCard testimonial>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            alt=""
            className="rounded-circle img-fluid"
         
       />
        <MDBCardBody>
          <h4 className="font-weight-bold mb-4">John Doe</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <MDBIcon icon="quote-left" className="pr-2" />
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
      <MDBCard testimonial>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            alt=""
            className="rounded-circle img-fluid"
         
       />
        <MDBCardBody>
          <h4 className="font-weight-bold mb-4">John Doe</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <MDBIcon icon="quote-left" className="pr-2" />
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
      <MDBCard testimonial>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            alt=""
            className="rounded-circle img-fluid"
         
       />
        <MDBCardBody>
          <h4 className="font-weight-bold mb-4">John Doe</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <MDBIcon icon="quote-left" className="pr-2" />
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow className="text-center">
    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
      <MDBCard testimonial>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            alt=""
            className="rounded-circle img-fluid"
         
       />
        <MDBCardBody>
          <h4 className="font-weight-bold mb-4">John Doe</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <MDBIcon icon="quote-left" className="pr-2" />
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol lg="3" col-md="6" className="mb-lg-0 mb-4">
      <MDBCard testimonial>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            alt=""
            className="rounded-circle img-fluid"
         
       />
        <MDBCardBody>
          <h4 className="font-weight-bold mb-4">John Doe</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <MDBIcon icon="quote-left" className="pr-2" />
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol lg="3" col-md="6" className="mb-lg-0 mb-4">
      <MDBCard testimonial>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            alt=""
            className="rounded-circle img-fluid"
         
       />
        <MDBCardBody>
          <h4 className="font-weight-bold mb-4">John Doe</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <MDBIcon icon="quote-left" className="pr-2" />
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  

  </MDBContainer>
     );
     }
    }
    export default Testimonials;