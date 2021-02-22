import React, { Component } from 'react';
import Pic1 from './Pictures/Pic1.jpg';
import Pic2 from './Pictures/Pic2.jpg';
import Pic3 from './Pictures/Pic3.jpg';


class About extends Component {
    state={
        photo: Pic1,
        dot1Style: {backgroundColor: "white", border: "1px solid grey"},
        dot2Style: {},
        dot3Style: {}
    }

    styleCurrent = {backgroundColor: "white", border: "1px solid grey"}

    nextPhoto = () => {
        if (this.state.photo === Pic1){
            this.setState({photo: Pic2, 
                           dot1Style: {},
                           dot2Style: this.styleCurrent
            })
        }
        if (this.state.photo === Pic2 ){
            this.setState({photo: Pic3,
                            dot2Style: {},
                            dot3Style: this.styleCurrent                         
            })
        }
        if (this.state.photo === Pic3 ){
            this.setState({photo: Pic1,
                            dot3Style: {},
                            dot1Style: this.styleCurrent                         
            })
        }        
    }
    prevPhoto = () => {
        if (this.state.photo === Pic1){
            this.setState({photo: Pic3,
                           dot1Style: {},
                           dot3Style: this.styleCurrent,
                           btnStyle: {opacity: "0.6"}
            })
        }

        if (this.state.photo === Pic3){
            this.setState({photo: Pic2,
                           dot3Style: {},
                           dot2Style: this.styleCurrent,
                           btnStyle: {opacity: "0.6"}
            })
        }
        if (this.state.photo === Pic2 ){
            this.setState({photo: Pic1,
                          dot2Style: {},
                          dot1Style: this.styleCurrent,
                          btnStyle: {opacity: "0.6"}         
            })
        }
        
    }



    render() {  
        return (
        <div id="main-container">
            <div id="header">
                <h1>About me</h1> 
                <p>Get to know me</p>
            <hr id="width-100"/>
            </div>  
            
            <br></br> 
            <div id="flex-about">
                <div id="picture-container" style={this.props.style}>  
                    <img id="picture" src={this.state.photo} alt="yuliya-pict"></img>
                    <button  id="next"  alt="prev button" onClick={this.nextPhoto} > NEXT </button>                 
                    <button  id="prev"  alt="prev button" onClick={this.prevPhoto} > PREV </button>
                    <button id="dot1" style={this.state.dot1Style}></button>
                    <button id="dot2" style={this.state.dot2Style}></button>
                    <button id="dot3" style={this.state.dot3Style}></button>
                </div>
                <div id="text-container">
                    <p>Hello! My name is Yuliya and I am a Full Stack Software Engineer
                        with a Bachelor’s degree in Law and over five years
                        of customer service and hospitality experience. 
                        A year ago I moved into a new career
                        that will always keep me learning.
                        In October 2020 I have graduated from Flatiron School as a Software Engineer.
                        I am open to a job, collaboration and startups.
                    </p>     
                    <b>Short term goals:</b>
                    <p>• Release my first android application. </p>
                    <b>Long term goals:</b>
                    <p>• Develop mobile application that serve millions of users.</p>
                    <p>• Hike the Appalachian Trail. </p> 
                    <br></br> 
                  
                   
                    <h4 className="center">Tech Stack</h4>
                    <div id="flex-tech-stack">
                        <div id="tech-flex-item">
                            <p>HTML</p> <hr/>
                            <p>CSS</p><hr/>
                            <p>Ruby</p><hr/>
                            <p>API</p><hr/>
                            <p>Ruby-on-Rails</p>
                        </div>
                        <div id="tech-flex-item">
                            <p>JavaScript</p><hr/>
                            <p>React.js</p><hr/>
                            <p>Material UI</p><hr/>
                            <p>React Router</p><hr/>                     
                            <p>React Native</p>
                          
                        </div>
                        <div id="tech-flex-item">
                            
                            <p>PostgreSQL</p><hr/>
                            <p>SQLite</p><hr/>
                            <p>Heroku</p><hr/>
                            <p>GitHub</p><hr/>
                            <p>Cloudinary Storage</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        );
    }
}

export default About;

{/* <a href="#" class="previous">&laquo; Previous</a>
<a href="#" class="next">Next &raquo;</a>

<a href="#" class="previous round">&#8249;</a>
<a href="#" class="next round">&#8250;</a>

a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .previous {
    background-color: #f1f1f1;
    color: black;
  }
  
  .next {
    background-color: #4CAF50;
    color: white;
  }
  
  .round {
    border-radius: 50%; */}
