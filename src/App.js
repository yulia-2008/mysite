import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Blog from './Blog';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import { HashRouter, Route} from 'react-router-dom';



class App extends React.Component {
  

 render() { 
  return (
    <>
        <HashRouter hashType="noslash">
            <div id="flex">
              <NavBar />
              <Route exact path = '/' component={About} />
              <Route exact path = '/projects' component={Projects} />
              <Route exact path = '/blog' component={Blog} />
              <Route exact path = '/education' component={Education} />
              <Route exact path = '/contact' component={Contact} />
            </div>                      
        </HashRouter>     
    </>
  );
 }
}

export default App;

