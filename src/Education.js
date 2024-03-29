import React, { Component } from 'react';
import Certificate from './Pictures/Certificate.jpg';

class Education extends Component {
    render() {
        return (
            <div id="main-container">           
                <div id="width-70">
                    <div className="center"> 
                        <br></br> <br></br>
                        <h3 id="no-margin">Yuliya Yurkevich</h3>
                        <p className="center"> juliana.ny2008@gmail.com</p>
                        <p className="center"> Flushing, NY 11354 </p>        

                        {/* <div id="flex-resume">
                            <div id="flex-item">
                                <p > <a href="https://github.com/yulia-2008"> GitHub</a></p>
                            </div> 
                            <div id="flex-item"> 
                                <p > <a href="https://juliana-ny2008.medium.com/" target="_blank"> Blog</a> </p>  
                            </div>
                        </div> */}
                    </div>
                    <br></br>

                    {/* <p>Experienced in Ruby on Rails and JavaScript based programming. 
                        With a Bachelor’s degree in Law and over five years
                        of customer service and hospitality experience. </p> */}
                    <h3 className="center">Technical Skills</h3>
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
  
                    {/* <h3 className="center">Technical Projects</h3>
 
                        <b><a href="https://play.google.com/store/apps/details?id=com.yulia_123.Memo"> MEMO</a> 
                        </b>

                        <br></br> <br></br>
                        <p>• A note organizer. </p>
                        <p>• Built with React Native and AsyncStorage.</p>
                        <p>• Released on Google Play Store.</p>                 
                        <br></br>

                        <b><a href="https://ny-cable.herokuapp.com/"> NYCABLE</a>                             
                        </b>
                       
                        <br></br> <br></br>
                        <p>• An Info-Portal about all internet & TV providers in NYC, 
                            including payment plans, latest deals and more.</p>
                        <p>•&nbsp;  Built with React.js, Ruby on Rails, PostgreSQL.</p>
                        <p>• Technologies used: Nested React Routes, 
                                    Cloudinary Storage, Material UI, 
                                    Browser Local Storage, JWT, Serializer, CSS.</p>
                        <p>• &nbsp; Hosted on Heroku.</p>                 
                        <br></br>

                        <b> MY KITHEN  &nbsp; | &nbsp;                            
                            <a href="https://github.com/yulia-2008/my-kitchen-frontend">GitHub</a> 
                        </b> 
                        <br></br> <br></br>
                        <p> • Recipes App. Users can add recipes, 
                            select and search ingredients.</p>
                        <p>• Used Spoonacular open data source API for recipe content </p> 
                        <p>• React.js and React Router for Frontend</p>  
                        <p>• Ruby on Rails, PostgresSQL for Backend </p>   
                        <br></br>

                        <b>PONDER  &nbsp; | &nbsp;                            
                            <a href="https://github.com/yulia-2008/ponder_frontend">GitHub</a>
                        </b>
                        <br></br> <br></br>
                        <p>• Single page Park Aplication. 
                            Browse parks by choosing a US State, add likes, leave comments.</p> 
                        <p>• Built with Vanila JavaScript, Ruby on Rails and PostgreSQL</p>

                    <h3 className="center">Work experience</h3>   
                        <b>Nomadic Hospitality LLC (Za-Ya Ramen Restaurant)</b> 
                        <p>Cook, Waiter (09/2018 - 03/2020)</p>
                        <br></br>
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
                        <br></br>
                        <div>
                            <p>• Provided excellent customer service by engaging customers
                                and accurately processing their orders</p>  
                            <p>• Operate point of service terminal and consult
                                appropriate team members for troubleshooting, maintenance</p>
                            <p>• Participated in daily activities including opening the store,
                                making bank deposits, food preparation and more</p>
                        </div>
                        <br></br>
                        <b>Republican Sport-Training Center DOSAAF</b> 
                        <p>Lawyer    (06/2007 - 06/2008)</p>  
                        <div>
                            <p>• Arranging meetings and appointments.</p>
                            <p>• Working with tenants and lease agreements.</p>
                        </div> */}

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

export default Education;
