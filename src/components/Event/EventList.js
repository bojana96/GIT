import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from './Event.js';
import { Link } from 'react-router-dom';
import cover from "../../Images/upcoming.gif";
import './AddEvent.css';
import {  MDBRow, MDBCol, MDBIcon,  MDBInput, MDBBtn , MDBContainer } from "mdbreact";
import Footer from '../Footer/Footer.js';





const EventsPageContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10% 10%;
`;

const Header = styled.div`
  padding-bottom: 20px;
  h1 {
    display: block;
    margin: 0;
    font-size: 48px;
    color: #8597A3;
  }
`;

const EventsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Hr = styled.hr`

`;



class EventList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { events } = this.props;
        console.log("EVENTz", events)
        console.log("VID OBJEKT", typeof events, {events})
        const visibleEvents = events

        return (
            <div>
                

            <MDBContainer>
            <EventsPageContainer>
                
                        <img src={cover} className="img-fluid z-depth-1 " alt="" />
                    



                <MDBRow>
                    <MDBCol md="12" className="mb-3">
                
                    {/* <img className="img" src={cover}/> */}
                    <Hr/>
                    <EventsContainer>
                        {
                            visibleEvents &&
                            visibleEvents.map((event) => <Event event={event} />)}
                    </EventsContainer>
                    
                    <Hr/>
                    

                    <Link to='/addevent/'> <b>ADD EVENT</b></Link>
                    <Hr/>
                    {/* <div>
                        <ExtendButton onClick={this.toggleExpanded}>{(this.state.expanded ? <i style={{fontSize: 50}}></i> : <i style={{fontSize: 40}}></i>)}</ExtendButton>
                    </div>*/}
                
                </MDBCol>
                </MDBRow>

                
                </EventsPageContainer>
                </MDBContainer>
                <Footer/>
            </div>
        );
    }
}

EventList.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
    }))
};

export default EventList;
