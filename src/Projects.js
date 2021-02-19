import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div id="main-container">
                <div id="header">
                    <h1>Projects</h1>
                </div>  

                 <div id="width"> 
                    <b id="medium">NYCABLE</b> <br></br>
                    <p id='medium'> <a href="http://www.nycable.net/"> www.nycable.net</a> </p>
                    <p> GitHub: <a href="https://github.com/yulia-2008/nycable_frontend">Frontend</a> &nbsp;
                        <a href="https://github.com/yulia-2008/nycable_backend">Backend</a>
                    </p>
                    <br></br>
                    <p>An Info-Portal about all internet & TV
                        providers in NYC, payment plans,
                        latest deals, areas of coverage and available technicians. </p>
                        <br></br>
                    <div id="flex">
                        <div id="flex-item">
                            <iframe  src="https://www.youtube.com/embed/ST63TI827O8/"></iframe>
                            <br></br> <br></br>
                            <b id="medium">Features</b>
                            <p>• Creating an account (as a client or technician).</p>
                            <p>• Logging in/Logging out.</p>
                            <p>• Editing User Profile.</p>
                            <p>• Uploading User Profile Picture from user machine.</p>
                            <p>• Filtered search of technicians (base on city and company).</p>
                            <p>• Rating Internet Provider or Technician.</p>
                            <p>• Writing a review about Internet Provider or Technician</p>
                        </div>
                        <div>
                            <b id="medium">Frontend</b>
                            <p>• Built with React.js</p>
                            <p>• Used Browser Local Storage for making
                                easier user experience during login process.</p>
                            <p>• Utilized React Router (Nested Routing)
                                to establish a dynamic routing system through the web app.</p>
                            <p>• Integrated  Progress Spinner and Rating
                                Components from Material UI library.</p>
                            <p>• Styling with CSS. Responsive web design makes
                                easy navigation on different devices.</p>
                            <p>• Hosted on Heroku, Google DNS.</p> 
                            <br></br>
                            <b id="medium">Backend</b>
                            <p>• Built with Ruby on Rails and PostgreSQL database. </p>
                            <p>• Integrating Active Storage and Cloudinary Storage
                                for uploading and storing users profile pictures.</p>
                            <p>• Models Serializer for rendering necessary data.</p>
                            <p>• Models relationship set up using Polymorphic Association, 
                            that way one model can belong one OR another model.</p>
                            <p>• JWT for securely transmitting information.</p>
                            <p>• Created custom routes help to handles all incoming requests
                                from the frontend of the app.</p>
                        </div>
                    </div>

                    <hr></hr> 

                    <b id="medium">MY KITCHEN</b>
                    <p>GitHub: &nbsp;
                        <a href="https://github.com/yulia-2008/my-kitchen-frontend">Frontend</a> &nbsp;
                        <a href="https://github.com/yulia-2008/MyKitchen-backend">Backend</a>
                    </p>
                    <br></br>
                    <p>Cooking Application that allows you to search and celect
                        ingredients and the app will
                        find the recipes for you to cook.</p>
                    <p>App was built during Flatiron School
                        study in a collaboration with Roman Opalacz. </p>
                    <br></br>
                    <div id="flex">
                        <div id="flex-item">
                            <iframe  src="https://www.youtube.com/embed/uw5Jd1ter0g/"></iframe>
                            <br></br> <br></br>
                            <b id="medium">Features</b>
                            <p>• Users can search and select ingredients.</p>
                            <p>• Find recipes with selected ingredients.</p>
                            <p>• Add / Delete recipes to user 's  favorites.</p>
                            <p>• Editing User Profile.</p>
                        </div>
                        <div>
                            <b id="medium">Frontend</b>
                            <p>• Built with React.js, React Router, Spoonacular API</p>
                            <br></br>
                            <b id="medium">Backend</b>
                            <p>• Built with Ruby on Rails, PostgreSQL</p>                       
                        </div>
                    </div>

                    <hr></hr>

                    <b id="medium">PONDER</b>
                    <p>GitHub: &nbsp;
                        <a href="https://github.com/yulia-2008/ponder_frontend">Frontend</a> &nbsp;
                        <a href="https://github.com/yulia-2008/ponder_backend">Backend</a>
                    </p>
                    <br></br>
                    <p>Single page Park App. </p>
                    <p>App was built during Flatiron School
                            study in a collaboration with Taevon Jordan. </p>    
                    <br></br>
                    <div id="flex">
                        <div id="flex-item">
                            <iframe  src="https://www.youtube.com/embed/1pHGREsQpdU/"></iframe>
                            <br></br> <br></br>
                            <b id="medium">Features</b>
                            <p>• Leave/Delete comments.</p>
                            <p>• Add likes</p>
                            <p>• Leave/Delete comments.</p>
                            
                        </div>
                        <div>
                            <b id="medium">Frontend</b>
                            <p>• Built with Vanilla JavaScript</p>
                            <br></br>
                            <b id="medium">Backend</b>
                            <p>• Built with Ruby on Rails and PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </div>         
            
        );
    }
}

export default Projects;
