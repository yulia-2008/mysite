import React, { Component } from 'react';
import Yuliya from './Pictures/Yuliya.jpg';

class About extends Component {
    render() {
        return (
            <div id="main-container">
                <h1>About me</h1>
                <p>Get to know me</p>
                <div id="flex">
                    <div>    
                        <img id="picture" src={Yuliya} alt="yuliya-pict"></img> 
                    </div>
                    <div id="padding">
                        <p id="no-margin">Hello! My name is Yuliya and I am a Full Stack Software Engineer
                            with a Bachelor’s degree in Law and over five years
                            of customer service and hospitality experience. 
                            A year ago I moved into a new career
                            that will always keep me learning.
                            In October 2020 I have graduated from Flatiron School as a Software Engineer.
                        </p><br></br>

                        <h4>Tech Stack</h4>
                        <div id="flex">
                            <div id="flex-item">
                                <p>• HTML</p>
                                <p>• CSS</p>
                                <p>• Ruby</p>
                                <p>• Ruby on Rails</p>
                                <p>• JavaScript</p>
                                <p>• React.js</p>
                                <p>• React Router</p>
                            </div>
                            <div id="flex-item">
                                <p>• Material UI</p>
                                <p>• React Native</p>
                                <p>• PostgreSQL</p>
                                <p>• SQLite</p>
                                <p>• Cloudinary Storage</p>
                                <p>• Heroku</p>
                                <p>• GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default About;
