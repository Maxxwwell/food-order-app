/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Reorder } from '@mui/icons-material';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const toggleHandler = () => {
        setShowLinks(!showLinks);
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={showLinks ? "open" : "close"}>
                <img src={logo} />
                <div className="mobileLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleHandler}>
                    <Reorder />
                </button>
            </div>

        </div>
    )
}

export default Navbar;
