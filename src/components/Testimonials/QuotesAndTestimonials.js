import React from 'react';
import Grid from 'antd/lib/card/Grid';
import Testimonials from './Testimonials';
import Quotes from '../Quotes/Quotes';
import { Col, Row } from 'antd';
import { MDBRow, MDBCol } from 'mdbreact';

class QuotesAndTestimonials extends React.Component{

    render(){
return(
    <MDBRow>
       
    <MDBCol size="6">
            <Testimonials/>
     </MDBCol>

    <MDBCol size="6">
                <Quotes/>
     </MDBCol>
       
    </MDBRow>
);

    }
}
export default QuotesAndTestimonials;