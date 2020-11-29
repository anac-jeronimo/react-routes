import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink activeStyle={{color: "red"}} exact to='/'>Home</NavLink>
                </li>
                <li>
                <NavLink activeStyle={{color: "red"}} to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink activeStyle={{color: "red"}} to='/contactme'>Contact me</NavLink> 
                </li>
                <li>
                <NavLink activeStyle={{color: "red"}} to='/projects'>Projects</NavLink> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;