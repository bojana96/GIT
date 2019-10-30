import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import pic from "../../Images/picName.jpg";
import pic from "../../Images/download.png";

const Card = styled.div`
    margin: 10%;
    width: 28%;
    background-color: white;
      font-family: Vedana;
      cursor: pointer;
`;

const Image = styled.div``;

const InfoContainer = styled.div`
  background-color: white;
  padding: 20px 0 10px 0;
  
    text-align: center;
    font-size: 30px;
      
`;

const ImageContainer = styled.div`
`

const Title = styled.h1`
  color: #4A545A;
  margin: 0 0 9.76px;
  font-size: 20px;
  

`;

const Desc = styled.h1`
  margin-top: 0 0 9.76px;
  font-size: 15px;
  color: #4C5357;
  
`;

const Date = styled.h1`
  color: #8597A3;
  font-size: 13px;
  display: flex;
  background-color: #EAF0F4;
  padding: 3px 8px;

`;

const Place = styled.h1`
 color: #8597A3;
  font-size: 13px;
  background-color: #EAF0F4;
  padding: 3px 8px;



`;

const Event = ({ event }) => {
    //const { event } = this.props.event;
    // const { eventType } = event;

    return (

        <Card onClick={"window.location='http://google.com';"}>
            <InfoContainer>
                <Image>
                     <img src={pic}/>
                </Image>
                <Title>
                    {event.name}
                </Title>
                <Desc>
                    {event.description}
                </Desc>
                <Date>
                    {event.date} - {event.time}
                </Date>

            </InfoContainer>
        </Card>
    )
};

Event.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        image: PropTypes.string
    })
};

export default Event;