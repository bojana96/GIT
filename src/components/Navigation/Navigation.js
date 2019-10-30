import React, { useState } from 'react';
import { Nav, NavItem,NavLink} from 'reactstrap';
import Logo from "../../Images/Empower.png";
import {Redirect } from 'react-router-dom'
import './Navigation.css';
const Navigation = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    function imageClick() {

    }
    return (
        <div className="bla">
            <Nav>
                <NavItem >
                        <a href="/">
                        < img
                            src={Logo}
                            width="200"
                            align="right"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Empower logo"
                            onClick={() => Redirect("/")}
                    />
                    </a>

                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        <b>Home</b>
                    </NavLink>
                </NavItem>

            <NavItem>
                    <NavLink href="/aboutUs"><b>About</b></NavLink>
            </NavItem>
                <NavItem>
                <NavLink href="/donate"><b>Donate</b></NavLink>
            </NavItem>
                <NavItem>
                    <NavLink href="/events"><b>Events</b></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contactUs"><b>Contact</b></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/testimonials"><b>Testimonials</b></NavLink>
                </NavItem>
            </Nav>

        </div>
    );
}

export default Navigation;