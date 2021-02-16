import React, { Component } from 'react';
import Rails from './Rails.jpeg';

class Blog extends Component {
    render() {
        return (
            <div id="main-container">
                <h1>Blog</h1>
                <p>I enjoy writing technical blogs about programming tools
                     and techniques that I have learned.
                    You can find all my blogs on 
                    <a href="https://juliana-ny2008.medium.com/" target="_blank"> medium.com</a>
                </p>
                <div id="grid-container">
                    <div id="grid-item">
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                        </a> <br></br>
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        Rails. Polymorphic Association.
                        </a>
                        <p>Going deep into 'Active Record associations, 
                            exploring relationship where a model can 
                            belong to one OR another model. </p>
                        <p>Oct 13, 2020</p>            
                    </div>


                    <div id="grid-item">
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                        </a> <br></br>
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        Uploading User Picture.
                        </a>
                        <p>Detailed tutorial in 3 parts that will teach you
                           how to upload a profile picture from a user
                            local machine to React.js App with Rail backend.</p>
                        <p>Nov  1, 2020 </p>                            
                    </div>
         
                    
                    <div id="grid-item">
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                        </a> <br></br>
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        Integrating 5-Star Rating into React App.
                        </a>
                        <p>Going deep into 'Active Record associations, 
                            exploring relationship where a model can 
                            belong to one OR another model. </p>
                        <p>Oct 13, 2020</p>            
                    </div>

                    <div id="grid-item">
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                        </a> <br></br>
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        Deploying Rails and React App to Heroku.
                        </a>
                        <p>Going deep into 'Active Record associations, 
                            exploring relationship where a model can 
                            belong to one OR another model. </p>
                        <p>Oct 13, 2020</p>            
                    </div>

                    <div id="grid-item">
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                        </a> <br></br>
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        Heroku $ pgAdmin
                        </a>
                        <p>Going deep into 'Active Record associations, 
                            exploring relationship where a model can 
                            belong to one OR another model. </p>
                        <p>Oct 13, 2020</p>            
                    </div>
                    
                    <div id="grid-item">
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        <img id="blog-pic" src={Rails}></img>   
                        </a> <br></br>
                        <a href="https://juliana-ny2008.medium.com/rails-polymorphic-associations-30436714c774" target="_blank">
                        How to remove credentials from GitHub.
                        </a>
                        <p>Going deep into 'Active Record associations, 
                            exploring relationship where a model can 
                            belong to one OR another model. </p>
                        <p>Oct 13, 2020</p>            
                    </div>
                                
                    </div>

                

                
            </div>
        );
    }
}

export default Blog;
