import React from 'react';
import './App.css';
//import NavBar from './NavBar';
import About from './About';
// import Blog from './Blog';
// import Resume from './Resume';
// import Projects from './Projects';
// import Contact from './Contact';
import { HashRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {


 render() {
  return (
    <div id="flex">
        <HashRouter>
         <Switch>           
              {/* <NavBar/> */}
              <Route exact path = '/projects' component={About} />
              {/* <Route exact path = '/blog' render = {() => "blog"} />
              <Route exact path = '/resume' render = {() => "resume"} />
              <Route exact path = '/contact' render = {() => "contact"} />
              <Route exact path = '/' render = {() => "about"} />             */}
        </Switch> 
        </HashRouter>  
    
    </div>
  );
 }
}

export default App;

