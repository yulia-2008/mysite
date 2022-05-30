import React, { Component } from 'react';
import GitHubLogo from './Pictures/GitHubLogo.png';

class Contact extends Component {
    render() {
        return (
            <div id="main-container">  
                <div id="header">
                    <h1>Contact</h1> 
                    <p>Feel free to contact me anytime.</p>
                    <hr id="width-100"/>
                </div>  
                <div className="center">                
                    <h3>juliana.ny2008@gmail.com</h3> 
                    <a href="https://github.com/yulia-2008">
                        <img className="logo" src={GitHubLogo}></img>
                    </a> 
                </div>   
            </div>
        );
    }
}

export default Contact;
