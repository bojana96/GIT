import React from 'react';
import Quotes from '../Quotes/Quotes';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Stories from './Stories';
import Footer from '../Footer/Footer';
import FU from "./FU.css";



class QuotesAndStories extends React.Component{

    render(){
return(
    <div >
    <div className="dina">
    <MDBRow >
    <MDBCol size="11">
            <Stories/>
     </MDBCol>
    </MDBRow>
    <div className="vtora">
    <MDBRow>

     <MDBCol size="10" >
                <Quotes/>
     </MDBCol>
    </MDBRow>
    </div>
    </div>
    <Footer/>
    </div>
    
);

    }
}
export default QuotesAndStories;