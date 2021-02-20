import React, { Component } from 'react';
import GitHubLogo from './Pictures/GitHubLogo.png';
import LinkedInLogo from './Pictures/LinkedInLogo.png';

class Contact extends Component {
    render() {
        return (
            <div id="main-container">  
                <div className="center"> 
                    <br></br>  <br></br> <br></br>         
                    <h1>Contact</h1>          
                    <p className="center">Feel free to contact me anytime.</p>   
                    <br></br> <br></br> <br></br>
                    <h3>juliana.ny2008@gmail.com</h3> 
                    <h3>+1(347)3575454</h3>  
                    <a href="https://github.com/yulia-2008">
                        <img className="logo" src={GitHubLogo}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/yuliya-yurkevich-b82a591b8/">
                        <img  className="logo" src={LinkedInLogo}></img>
                    </a>                   
                </div>   
            </div>
        );
    }
}

export default Contact;
