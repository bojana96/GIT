import React, { useState } from 'react';
import { Nav, NavItem,NavLink} from 'reactstrap';
import Logo from "../../Images/Empower.png";
import {Redirect } from 'react-router-dom'
const Navigation = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    function imageClick() {

    }
    return (
        <div>
            <Nav tabs >
                <NavItem>

                        < img
                            src={Logo}
                            width="100"
                            align="right"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Empower logo"
                            onClick={() => Redirect("/")}
                    />

                </NavItem>
                <NavItem>
                    <NavLink href="/" >
                        <b>Home</b>
                    </NavLink>
                </NavItem>

            <NavItem>
                    <NavLink href="/aboutUs"><b>About Us</b></NavLink>
            </NavItem>
                <NavItem>
                <NavLink href="/donate"><b>Donate</b></NavLink>
            </NavItem>
                <NavItem>
                    <NavLink href="/contactUs"><b>Contact Us</b></NavLink>
                </NavItem>
            </Nav>

        </div>
    );
}

export default Navigation;