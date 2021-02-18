import React, { Component } from 'react';
import Certificate from './Pictures/Certificate.jpg';

class Resume extends Component {
    render() {
        return (
            <div id="main-container">           
                <h1 id="header">Resume</h1>                
                <div id="width-70">
                    <div className="center"> 
                        <h3 id="no-margin">Yuliya Yurkevich</h3>
                        <p>Fullstack Software Engineer</p>
                        <div id="flex-resume">
                            <div id="flex-item">
                                <p> (1) 347-357-5454 </p> 
                                <p> juliana.ny@gmail.com</p>
                                <p>Brooklyn, NY 11223 </p>
                            </div>
                            <div>
                                <p> <a href="https://github.com/yulia-2008"> GitHub</a></p>
                                <p> <a href="https://www.linkedin.com/in/yuliya-yurkevich-b82a591b8/"> LinkedIn</a></p>
                                <p> <a href="https://juliana-ny2008.medium.com/" target="_blank"> Blog</a> </p>  
                            </div>
                        </div>
                    </div>
                    <p>Experienced in Ruby on Rails and JavaScript based programming. 
                        With a Bachelor’s degree in Law and over five years
                        of customer service and hospitality experience,
                        I bring strong skills in team work,
                        collaboration and working independently.
                        Results-oriented with a positive attitude. 
                        Looking forward to applying my software engineering skills
                        to help your business grow. </p>
                    <h3 className="center">Technical Skills</h3>
                    <div id="flex-tech-stack">
                        <div id="flex-item">
                            <p>• HTML</p>
                            <p>• CSS</p>
                            <p>• Ruby</p>
                            <p>• API</p>
                            <p>• JavaScript</p>
                            
                        </div>
                        <div id="flex-item">
                            <p>• React.js</p>
                            <p>• React Router</p>
                            <p>• Material UI</p>
                            <p>• React Native</p>
                            <p>• Ruby on Rails</p>
                        </div>
                        <div id="flex-item">
                            
                            <p>• PostgreSQL</p>
                            <p>• SQLite</p>
                            <p>• Cloudinary Storage</p>
                            <p>• Heroku</p>
                            <p>• GitHub</p>
                        </div>
                    </div>
  
                    <h3 className="center">Technical Projects</h3>
                        <b><a href="http://www.nycable.net/"> NYCABLE</a> |
                            <a href="https://www.youtube.com/watch?v=ST63TI827O8"> DEMO</a>
                        </b>
                        <p>An Info-Portal about all internet & TV providers in NYC, 
                            including payment plans, latest deals and more.</p>
                        <div>
                            <p>•  Built with React.js, Ruby on Rails, PostgreSQL</p>
                            <p>• Technologies used: Nested React Routes, 
                                    Cloudinary Storage, Material UI, 
                                    Browser Local Storage, JWT, Serializer, CSS</p>
                            <p>• Hosted on Heroku, Google DNS</p>   
                        </div>
                        <br></br>
                        <b> MY KITHEN | 
                            <a href="https://www.youtube.com/watch?v=1pHGREsQpdU"> DEMO</a>
                        </b> 
                        <p>Recipes App. Users can add recipes, 
                            select and search ingredients.</p>
                        <div>
                            <p>• Used Spoonacular open data source API for recipe content </p> 
                            <p>• React.js and React Router for Frontend</p>  
                            <p>• Ruby on Rails, PostgresSQL for Backend </p>
                        </div>
                        <br></br>
                        <b>PONDER |
                            <a href="https://www.youtube.com/watch?v=1pHGREsQpdU"> DEMO</a>
                        </b>
                        <p> Single page Park Aplication. 
                            Browse parks by choosing a US State, add likes, leave comments.</p> 
                        <p>• Built with Vanila JavaScript, Ruby on Rails and PostgreSQL</p>

                    <h3 className="center">Work experience</h3>   
                        <b>Nomadic Hospitality LLC (Za-Ya Ramen Restaurant)</b> 
                        <p>Cook, Waiter (09/2018 - 03/2020)</p>
                        <div>           
                            <p>• Ensured exceptional quality food preparation by cooking
                                and serving all menu items and specials</p>
                            <p>• Maintained store inventory levels by following company procedures,
                                placed orders as needed</p>
                            <p>• Performed daily tasks including opening/closing restaurant, 
                                customer service, ensuring accurate orders</p>
                        </div>
                        <br></br>
                        <b>Juice Generation Inc</b> 
                        <p>Sales team member  (10/2011 - 07/2017)</p> 
                        <div>
                            <p>• Provided excellent customer service by engaging customers
                                and accurately processing their orders</p>  
                            <p>• Operate point of service terminal and consult
                                appropriate team members for troubleshooting, maintenance</p>
                            <p>• Participated in daily activities including opening the store,
                                making bank deposits, food preparation and more</p>
                        </div>
                    <h3 className="center">Education</h3>
                        <b>Flatiron School </b>                                                                                                        
                        <p>   New York, NY </p>
                        <p>06/ 2020 - 10/2020</p>
                        <p>Full Stack Web Development, 
                           Ruby on Rails and JavaScript program</p>
                        <br></br>

                        <b>International Humanitarian and Economic Institute </b>                                                
                        <p>Minsk, Belarus </p>
                        <p>09/2002 - 06/ 2007</p>
                        <p>Bachelor's Degree, Jurisprudence </p>  
                        <br></br>
                        <br></br>
                        <img id="certificate" src={Certificate}></img>
                </div>
            </div>
        );
    }
}

export default Resume;
