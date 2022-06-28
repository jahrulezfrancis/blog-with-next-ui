import React from 'react';
import { NavLink } from "react-router-dom";
import "./navigation.css"

const NavigationBar = () => {
    return (
        <div className="nav-container">
            <h2>logo</h2>
            <ul>
                <>
                    <li>
                        <NavLink to="./Home">
                           <span className='nav-text'>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-me" >
                        <span className='nav-text'>About Me</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="./Contact-Me" >
                        <span className='nav-text'>Contact me</span>
                        </NavLink>
                    </li>
                </>
            </ul>
        </div >
    );
}
export default NavigationBar;

