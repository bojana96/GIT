import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask,MDBContainer,MDBBtn } from
"mdbreact";
import Story1 from "../../Images/Story1.jpg";

class  CarouselPage extends React.Component {
    constructor(props){
        super(props);
    }
    Clicked() {
        window.location.href = "https://www.unwomen.org/en/news/stories/2018/1/a-day-in-the-life-marie-sophie-pettersson";
    }
    render(){
  return (

    
    <MDBContainer className="border border-0">
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
            
          <MDBView>
             
          <img src={Story1} className="rounded-circle z-depth-1 img-fluid" />
                            <h5 className="font-weight-bold dark-grey-text my-4">
                                I want to help other women”—Rohingya women strive to reclaim a life of dignity
                            </h5>
                           
                                <MDBBtn outline color="gray" onClick={this.Clicked}>
                                    Read More
                            </MDBBtn>
                           
         
          </MDBView>
          <MDBCarouselCaption>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}
}
export default CarouselPage;