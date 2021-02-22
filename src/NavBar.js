import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Yuliya from './Pictures/Yuliya.jpg';

import Button from './Pictures/Button.jpg'

class NavBar extends Component {
    state={
        aboutStyle: {},
        projectsStyle: {},
        resumeStyle: {},
        blogStyle: {},
        contactStyle: {},
        dropdownStyle: {},
        clicked: false
    }

    clickHandler = (style) => {
        if(window.innerWidth > 600) {
           this.setState({
                aboutStyle: {},
                projectsStyle: {},
                resumeStyle: {},
                blogStyle: {},
                contactStyle: {} 
            })
            this.setState({
                [style]: {
                    fontSize: "23px", 
                    backgroundColor: "rgb(212, 169, 25)", 
                    border: "1px solid white", 
                    borderRadius: "5px"}   
            }) 
        } 
        if(window.innerWidth < 600) {
            
            this.setState({
                dropdownStyle: {
                    display: "none"
                }
            })            
        }
    }

    resetStyle =() => {
        // on mouse over get back to css style, so the contect can be visible 
            this.setState({dropdownStyle: {} })
    }

    changeZIndex = () => {
        this.props.style()
    }



    render() {
        return (          
                <div id="nav-bar">                 
                    <img id="avatar" src={Yuliya} alt="yulia-picture"></img> 
                    <div>
                        <p id="large" className="white">Yuliya Yurkevich</p>
                        <p id="small" className="white">Fullstack Software Engineer</p>              
                    </div> 
                    <br></br> <br></br>
                    
                    <div class="dropdown">
                        <img class="dropbtn" src={Button} onMouseOver={this.resetStyle} onMouseOut={this.changeZIndex} ></img>
                        <div class="dropdown-content" style={this.state.dropdownStyle} > 
                            
                                <Link  to='/'   style={this.state.aboutStyle}
                                                onClick={() => this.clickHandler('aboutStyle')}> 
                                                About </Link>              
                            
                                <Link  to='/projects' style={this.state.projectsStyle} 
                                                      onClick={() => this.clickHandler('projectsStyle')}>
                                                      Projects </Link>  

                                <Link  to='/blog' style={this.state.blogStyle}
                                                  onClick={() => this.clickHandler('blogStyle')} > 
                                                  Blog </Link>                    
                                <Link  to='/resume' style={this.state.resumeStyle}
                                                    onClick={() => this.clickHandler('resumeStyle')}> 
                                                    Resume </Link>                  
                                <Link  to='/contact' style={this.state.contactStyle}
                                                     onClick={() => this.clickHandler('contactStyle')}>
                                                          Contact </Link> 
                        </div>
                    </div>
                </div> 
             
        );
    }
}

export default NavBar;

// <div  id="post-containers"  style={this.state.styleObj}  >
// this.setState({clicked: true, styleObj: {border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}})