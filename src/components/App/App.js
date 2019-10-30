import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navigation from "../Navigation/Navigation";
import Logo from "../../Images/Logo.png";
import AboutUs from "../AboutUs/AboutUs";
import Donate from "../Donate/Donate";
import Event from "../Event/Event";
import AddEvent from "../Event/AddEvent";
import EventList from "../Event/EventList";
import Map from "../ContactUs/Map";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ContactUs from "../ContactUs/ContactUs";


const STATE_STORAGE_KEY = 'state';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id: '1234567',
                    name: 'Event1',
                    description: 'First Event ',
                    place: 'Public Room',
                    date: '30/10/2019',
                    time: '21:00'
                },
                {
                    id: '1234568',
                    name: 'Event2',
                    description: ' ',
                    place: 'Casa Bar',
                    date: '30/11/2019',
                    time: '21:00'
                },
                {
                    id: '1234569',
                    name: 'Event3',
                    description: 'Liquid',
                    place: ' ',
                    date: '30/10/2019',
                    time: '21:00'
                }]
        };
        this.addNewEvent = this.addNewEvent.bind(this);
    }

    addNewEvent(event) {
        const updatedState = {
            ...this.state,
            events: [...this.state.events, event]
        };
        this.updateLocalStorageWithState(updatedState);
        this.setState(updatedState);
    }


    updateLocalStorageWithState(updatedState) {
        localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(updatedState));
    }


    componentDidMount() {
        const savedState = localStorage.getItem('state');
        if (!savedState) {
            this.updateLocalStorageWithState(this.state);
        } else {
            this.setState(JSON.parse(savedState));
        }
    }
    render() {
        const { events } = this.state;
    // debugger
        return (

          <div className="App">
              <Navigation/>
              <Router>
              <Switch>
                  <Route path="/aboutUs" component={AboutUs}/>
                  <Route path="/donate" component={Donate}/>
                  <Route exact path="/events" render={() => <EventList events={events}/>}/>
                  <Route exact path="/addevent" render={() => <AddEvent events={this.state.events} addEvent={this.addEvent}/>}/>
                  <Route path="/contactUs" component={ContactUs}/>
                  <Route path="/" exact component={HomePage}/>
              </Switch>
              </Router>

          </div>
  );
}
}

export default App;
