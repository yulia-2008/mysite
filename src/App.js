import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Blog from './Blog';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { HashRouter, Route} from 'react-router-dom';


class App extends React.Component {


 render() {
  return (
    <div id="flex">
        <HashRouter hashType="noslash">
                 
              <NavBar/>
              <Route exact path = '/' component={About} />  
              <Route exact path = '/projects' component={Projects} />
              <Route exact path = '/blog' component={Blog} />
              <Route exact path = '/resume' component={Resume} />
              <Route exact path = '/contact' component={Contact} />
                         
      
        </HashRouter>  
    
    </div>
  );
 }
}

export default App;

