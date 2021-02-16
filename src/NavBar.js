import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import picture from './picture.jpg';

class NavBar extends Component {
    render() {
        return (            
            <div id="nav-bar">  
            <h1>Yuliya Yurkevich</h1>
            <h3>Fullstack Software Developer</h3>
                <img id="image" src={picture} alt="yulia-picture"></img>  
                      
                <NavLink  to='/'> About </NavLink> <br></br>                

                <NavLink  to='projects'> Projects </NavLink> <br></br>
                  
                <NavLink  to='/blog'> Blog </NavLink> <br></br>
                          
                <NavLink  to='/resume'> Resume </NavLink> <br></br>
                   
                <NavLink  to='/contact'> Contact </NavLink>              
             </div> 
        );
    }
}

export default NavBar;
 