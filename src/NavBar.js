import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Yuliya from './Pictures/Yuliya.jpg';

class NavBar extends Component {
    render() {
        return (            
            <div id="nav-bar">  
            <h1>Yuliya Yurkevich</h1>
            <h3>Fullstack Software Developer</h3>
                <img id="image" src={Yuliya} alt="yulia-picture"></img> <br></br>
                      
                <Link  to='/'> About </Link> <br></br>                

                <Link  to='/projects'> Projects </Link> <br></br>
                  
                <Link  to='/blog'> Blog </Link> <br></br>
                          
                <Link  to='/resume'> Resume </Link> <br></br>
                   
                <Link  to='/contact'> Contact </Link>              
             </div> 
        );
    }
}

export default NavBar;
 