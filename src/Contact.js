import React, { Component } from 'react';
import GitHUbLogo from './GitHubLogo.jpg';
import LinedInLogo from './LinkedInLogo.jpg';

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
                    <img src={GitHubLogo}></img>
                </a>
                <a href="https://www.linkedin.com/in/yuliya-yurkevich-b82a591b8/">
                    <img src={LinkedInLogo}></img>
                </a>
            </div>
        );
    }
}

export default Contact;
