import React, { Component } from 'react';
// import picture from './picture.jpg';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div>
                    <h2>About me</h2>
                    <p>Get to know me</p>
                    {/* <img id="picture" src={picture} alt="yuliya-pict"></img>  */}
                </div>
                <div>
                    <p>Hello! My name is Yuliya and I am a Full Stack Software Engineer
                        with a Bachelor’s degree in Law and over five years
                        of customer service and hospitality experience. 
                        A year ago I moved into a new career
                        that will always keep me learning.
                        In October 2020 I have graduated from Flatiron School as a Software Engineer.
                    </p><br></br>

                    <h4>Tech Stack</h4>
                    <div id="flex">
                        <div>
                            <p>• HTML</p>
                            <p>• CSS</p>
                            <p>• Ruby</p>
                            <p>• Ruby on Rails</p>
                            <p>• JavaScript</p>
                            <p>• React.js</p>
                            <p>• React Router</p>
                        </div>
                        <div>
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
        );
    }
}

export default About;
