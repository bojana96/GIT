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
import Testimonials from '../Testimonials/Testimonials';




const STATE_STORAGE_KEY = 'state';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id: '1234567',
                    name: 'Конференција „200 Жени Претприемачки“',
                    date: '21/11/2019',
                    time: '21:00',
                    place: 'Ragusa360 Rooftop',
                    description: 'По трет пат во Македонија се случува настанот „Конференција за 200 Жени Претприемачки“, кој оваа година ќе биде збогатен и со избор на „Нај-жена на годината“. На конференцијата ќе присуствуваат: жени сопственички на бизнис, жени со неограничени претприемачки идеи, жени кои се менаџери, жени кои се лидери во својата професија (директорки во корпорации, докторки, наставнички, спортистки итн). Но, жени на кои им недостига охрабрување да го направат следниот чекор.  '

                    
                },
                {
                    id: '1234568',
                    name: 'Нашминкај се САМА III',
                    date: '06/11/2019',
                    time: '17:00',
                    place: 'КАРИЕРА ПЛУС',
                    description: ' Нашминкај се САМА III e еднодневен семинар во Скопје, наменет за сите девојки, дами и госпоѓи кои се заинтересирани не само да научат нови makeu up техники ,трендови и трикови, туку и да ги подобрат оние кои секојдневно ги применуваат ,притоа осознавајќи кој вид на шминка најдобро ги истакнува нивните црти и прилега на нивниот лик.'

                   
                },
                {
                    id: '1234569',
                    name: 'Обука за ЈОГА Инструктори',
                    date: '09/11/2019',
                    time: '10:00' ,
                    place: 'Yoga Studio Lotus ',           
                    description: 'Јога Студио Лотос организира трета обука за јога инструктори. Курсот ќе се одржува за време на викендите (сабота и недела) во текот на три месеци.За да аплицирате потребно е да имате претходно искуство со јога.'
                    
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
        this.setState(updatedState, console.log(this.state.events));
    }


    updateLocalStorageWithState(updatedState) {
        localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(updatedState));
    }


    componentDidMount() {
        const savedState = localStorage.getItem('state');
        if (!savedState) {
            this.updateLocalStorageWithState(this.state);
        } else {
            this.setState({events:JSON.parse(savedState).events}, console.log(this.state.events));
        }
        console.log(savedState, JSON.parse(savedState))
        setTimeout(()=>console.log(this.state.events),3000)
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
                  <Route exact path="/addevent" render={() => <AddEvent events={this.state.events} addNewEvent={this.addNewEvent}/>}/>
                  <Route path="/contactUs" component={ContactUs}/>
                  <Route path="/events" component={EventList}/>
                  <Route path="/testimonials" component={Testimonials}/>
                  <Route path="/" exact component={HomePage}/>
              </Switch>
              </Router>

            
          </div>
  );
}
}

export default App;
