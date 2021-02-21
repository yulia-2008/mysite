import React, { Component } from 'react';
import Photo from './Pictures/Photo.jpg';
import Photo1 from './Pictures/Photo1.jpg';
import Photo2 from './Pictures/Photo2.jpg';


class About extends Component {
    state={
        photo: Photo,
        dot1Style: {backgroundColor: "white"},
        dot2Style: {},
        dot3Style: {}
    }

    nextPhoto = () => {
        if (this.state.photo === Photo){
            this.setState({photo: Photo1, 
                           dot1Style: {},
                           dot2Style: {backgroundColor: "white"}
            })
        }
        if (this.state.photo === Photo1 ){
            this.setState({photo: Photo2,
                            dot2Style: {},
                            dot3Style: {backgroundColor: "white"}                         
            })
        }
        if (this.state.photo === Photo2 ){
            this.setState({photo: Photo,
                            dot3Style: {},
                            dot1Style: {backgroundColor: "white"}                          
            })
        }        
    }
    prevPhoto = () => {
        if (this.state.photo === Photo){
            this.setState({photo: Photo2,
                           dotStyle: {},
                           dot3Style: {backgroundColor: "white"},
                           btnStyle: {opacity: "0.6"}
            })
        }

        if (this.state.photo === Photo2){
            this.setState({photo: Photo1,
                           dot3Style: {},
                           dot2Style: {backgroundColor: "white"},
                           btnStyle: {opacity: "0.6"}
            })
        }
        if (this.state.photo === Photo1 ){
            this.setState({photo: Photo,
                          dot2Style: {},
                          dot1Style: {backgroundColor: "white"},
                          btnStyle: {opacity: "0.6"}         
            })
        }
        
    }



    render() {  console.log("2", this.props.style);
        return (
        <div id="main-container">
            <div id="header">
                <h1>About me</h1> 
                <p>Get to know me</p>
            <hr id="width-100"/>
            </div>  
            
            <br></br> <br></br>
            <div id="flex">
                <div id="picture-container" style={this.props.style}> 
              
                    <img id="picture" src={this.state.photo} alt="yuliya-pict"></img>
                    <button  id="next"  alt="prev button" onClick={this.nextPhoto} > NEXT </button>                 
                    <button  id="prev"  alt="prev button" onClick={this.prevPhoto} > PREV </button>
                    <button id="dot1" style={this.state.dot1Style}></button>
                    <button id="dot2" style={this.state.dot2Style}></button>
                    <button id="dot3" style={this.state.dot3Style}></button>
                </div>
                <div id="text-container">
                    <p id="no-margin">Hello! My name is Yuliya and I am a Full Stack Software Engineer
                            with a Bachelor’s degree in Law and over five years
                            of customer service and hospitality experience. 
                            A year ago I moved into a new career
                            that will always keep me learning.
                            In October 2020 I have graduated from Flatiron School as a Software Engineer.
                             I am open to a job, collaboration and startups.</p> 

                    <h4 className="center">Tech Stack</h4>
                    <div id="flex-tech-stack">
                        <div id="tech-flex-item">
                            <p>HTML</p> <hr/>
                            <p>CSS</p><hr/>
                            <p>Ruby</p><hr/>
                            <p>API</p><hr/>
                            <p>Ruby on Rails</p>
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
