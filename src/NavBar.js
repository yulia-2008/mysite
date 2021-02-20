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
        contactStyle: {}
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
            [style]: {fontSize: "23px", backgroundColor: "rgb(92, 90, 90)", border: "1px solid white", borderRadius: "5px"}   
        }) 
        }    
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
                        <img class="dropbtn" src={Button}></img>
                        <div class="dropdown-content">
                            <p style={this.state.aboutStyle} onClick={() => this.clickHandler('aboutStyle')}>
                                <Link  to='/' id="link"> About </Link> </p>  <br></br>            
                            <p style={this.state.projectsStyle} onClick={() => this.clickHandler('projectsStyle')}>
                                <Link  to='/projects'> Projects </Link> </p> <br></br>                
                            <p style={this.state.blogStyle} onClick={() => this.clickHandler('blogStyle')}>
                                <Link  to='/blog'> Blog </Link> </p>   <br></br>                   
                            <p style={this.state.resumeStyle} onClick={() => this.clickHandler('resumeStyle')}>
                                <Link  to='/resume'> Resume </Link> </p>  <br></br>                
                            <p style={this.state.contactStyle} onClick={() => this.clickHandler('contactStyle')}>
                                <Link  to='/contact'> Contact </Link> </p>
                        </div>
                    </div>
                </div> 
             
        );
    }
}

export default NavBar;

// <div  id="post-containers"  style={this.state.styleObj}  >
// this.setState({clicked: true, styleObj: {border: "3px solid rgb(172, 171, 171)", backgroundColor: "lightgrey"}})