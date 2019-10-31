import React from "react";
import ContactUs from "../ContactUs/ContactUs";

import Axios from "axios";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Quote from "./Quote";
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
class Quotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }


  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    Axios.get('http://localhost:8080/quote/all')
      .then(res => {
        // const quotes = res.data;
        this.setState({ quotes: res.data });

      })
  };

  render() {

    var listItems = this.state.quotes.map((quote) => {

      return (

        <Quote quote={quote}
        />


      );
    });

    return (
      /*<div className="col">
        <h1>Quotes</h1>
        
        {this.state.quotes.map(quote => <div>{quote.content} {quote.author} </div>
        )
        }
  
      </div>*/
      <div className="bla">
        <ul className="list-group">
          {listItems}
        </ul>
      </div>

    );
  }



};



export default Quotes;