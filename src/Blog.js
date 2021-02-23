import React, { Component } from 'react';
import Rails from './Pictures/Rails.jpeg';
import Star from './Pictures/Star.jpg';
import Gitignore from './Pictures/Gitignore.jpg';
import Heroku from './Pictures/Heroku.jpg';
import User from './Pictures/User.jpeg';
import PGAdmin from './Pictures/PGAdmin.jpg'

class Blog extends Component {
    render() {
        return (
            <div id="main-container">
            <div id="header">
                <h1>Blog</h1>
                <p>I enjoy writing technical blogs about programming tools
                     and techniques that I have learned.
                     You can find all my blogs on 
                    <a href="https://juliana-ny2008.medium.com/" target="_blank"> medium.com</a>
                </p>
            <hr/>   
            </div>   
            
            <br></br> <br></br>
            <div id="grid-container">
                <div id="grid-item">
                    <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                    </a> <br></br>
                    <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                            Rails. Polymorphic Association.
                    </a>
                    <br></br> 
                    <p>Going deep into Active Record associations, 
                            exploring relationship where a model can 
                            belong to one OR another model. </p><br></br>
                    <p>Oct 13, 2020</p>            
                </div>


                <div id="grid-item">
                    <a href="https://juliana-ny2008.medium.com/uploading-user-picture-to-rails-api-and-react-app-c6f25e57edc9" target="_blank">
                        <img id="blog-pic" src={User}></img>   
                    </a> <br></br>                      
                    <a href="https://juliana-ny2008.medium.com/uploading-user-picture-to-rails-api-and-react-app-c6f25e57edc9" target="_blank">
                            Uploading User Picture.
                    </a>
                    <br></br>
                    <p>Detailed tutorial in 3 parts that will teach you
                           how to upload a profile picture from a user
                            local machine to React.js App with Rail backend.</p> <br></br>
                    <p>Nov  1, 2020 </p>                            
                </div>
         
                    
                <div id="grid-item">
                    <a href="https://juliana-ny2008.medium.com/integrating-5-star-rating-into-react-app-770ca062c282" target="_blank">
                        <img id="blog-pic" src={Star}></img>   
                    </a> <br></br>
                    <a href="https://juliana-ny2008.medium.com/integrating-5-star-rating-into-react-app-770ca062c282" target="_blank">
                            Integrating 5-Star Rating into React App.
                    </a>
                    <br></br> 
                    <p>Material UI is a great Library for React.js. 
                            Learn how to use its components.</p> <br></br>
                    <p>Now, 25, 2020</p>            
                </div>

                <div id="grid-item">
                    <a href="https://juliana-ny2008.medium.com/deploying-rails-and-react-app-to-heroku-124d17fbba77" target="_blank">
                        <img id="blog-pic" src={Heroku}></img>   
                    </a>  <br></br>                    
                    <a href="https://juliana-ny2008.medium.com/deploying-rails-and-react-app-to-heroku-124d17fbba77" target="_blank">
                            Deploying Rails and React App to Heroku.
                    </a>
                    <br></br> 
                    <p>In this blog I am writing about my experience
                             of deploying React APP to Heroku Hosting.</p> <br></br>
                    <p>Dec, 30, 2020</p>            
                </div>

                <div id="grid-item">
                    <a href="https://juliana-ny2008.medium.com/heroku-pgadmin-67fab635bcb7" target="_blank">
                        <img id="blog-pic" src={PGAdmin}></img>   
                    </a> <br></br>                       
                    <a href="https://juliana-ny2008.medium.com/heroku-pgadmin-67fab635bcb7" target="_blank">
                            Heroku $ pgAdmin
                    </a>
                    <br></br>
                    <p>In this blog I teach how to to access and manage
                        PostgreSQL database after deploying
                        your App to Heroku. </p> <br></br>
                    <p>Jan, 10 2020</p>            
                </div>
                    
                <div id="grid-item">
                    <a href="https://juliana-ny2008.medium.com/how-to-remove-credentials-from-github-ddfd7238fdfd" target="_blank">
                        <img id="blog-pic" src={Gitignore}></img>   
                    </a> <br></br>
                    <a href="https://juliana-ny2008.medium.com/how-to-remove-credentials-from-github-ddfd7238fdfd" target="_blank">
                            How to remove credentials from GitHub.
                    </a>
                    <br></br>
                    <p>What to do if you found out that you accidently
                           pushed file that has credentials or keys
                           to GitHub? Here you will find a great
                           solution to fix it.</p> <br></br>
                    <p>Feb, 7, 2020</p>            
                </div>
                                
            </div>               
            </div>
        );
    }
}

export default Blog;
