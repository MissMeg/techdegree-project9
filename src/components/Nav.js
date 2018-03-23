///////////////////IMPORTS///////////////
//importing in the necessary items
import React from 'react';
import {NavLink} from 'react-router-dom';


//Nav links for each page
const Nav = props => (
    <nav className="main-nav">
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/flowers'>Flowers</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/tokyo'>Tokyo</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
        </ul>
    </nav>
);

export default Nav;