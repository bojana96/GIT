import React from 'react';
import Grid from 'antd/lib/card/Grid';
import Testimonials from './Stories';
import Quotes from '../Quotes/Quotes';
import { Col, Row } from 'antd';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Stories from './Stories';
import Slika from '../../Images/Hands.jpg';

class QuotesAndStories extends React.Component{

    render(){
return(
    <MDBContainer className="prikazni">
    <MDBRow>
       
    <MDBCol size="12">
            <Stories/>
     </MDBCol>

    
       
    </MDBRow>
    <MDBRow>
        <MDBCol size="8">
                <Quotes/>
     </MDBCol>
     <MDBCol size="4">
         <img src={Slika} className="pic"></img>
     </MDBCol>
    </MDBRow>
    </MDBContainer>
);

    }
}
export default QuotesAndStories;