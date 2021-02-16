import React, { Component } from 'react';
import GitHubLogo from './GitHubLogo.png';
import LinkedInLogo from './LinkedInLogo.png';

class Contact extends Component {
    render() {
        return (
            <div id="main-container">
                <h2>Contact</h2>
                <p> I am open to job, collaboration, startups.</p>
                <p>Feel free to contact me anytime.</p> 
                <h3>juliana.ny2008@gmail.com</h3> 
                <h3>+1(347)3575454</h3>  
                <a href="https://github.com/yulia-2008">
                    <img className="logo" src={GitHubLogo}></img>
                </a>
                <a href="https://www.linkedin.com/in/yuliya-yurkevich-b82a591b8/">
                    <img  className="logo" src={LinkedInLogo}></img>
                </a>
            </div>
        );
    }
}

export default Contact;
