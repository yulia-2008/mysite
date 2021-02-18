import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Yuliya from './Pictures/Yuliya.jpg';

class NavBar extends Component {
    render() {
        return (          
                <div id="nav-bar"> 
                    <div> 
                        <h1 className="white">Yuliya Yurkevich</h1>
                        <p id="medium" className="white">Fullstack Software Engineer</p>
                        
                        <br></br>
                    </div> 
                    <img id="avatar" src={Yuliya} alt="yulia-picture"></img> 
                    
                    <div class="dropdown">
                        <button class="dropbtn" > Menu</button>
                        <div class="dropdown-content">
                        <p><Link  to='/'> About </Link> </p>  <br></br>            
                        <p><Link  to='/projects'> Projects </Link> </p> <br></br>                
                        <p><Link  to='/blog'> Blog </Link> </p>   <br></br>                   
                        <p><Link  to='/resume'> Resume </Link> </p>  <br></br>                
                        <p><Link  to='/contact'> Contact </Link> </p>
                        </div>
                    </div>
                </div> 
             
        );
    }
}

export default NavBar;
 