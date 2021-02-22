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
  state={
    pictureStyle: {}
  }

  pictureStyle = () => {
    this.setState({pictureStyle: {zIndex: "1"}})
   console.log("1", this.state.pictureStyle)
  }


 render() { 
  return (
    <>
        <HashRouter hashType="noslash">
            <div id="flex">
              <NavBar style={this.pictureStyle}/>
              <Route exact path = '/' render={() => <About style={this.state.pictureStyle}/> } />
              <Route exact path = '/projects' component={Projects} />
              <Route exact path = '/blog' component={Blog} />
              <Route exact path = '/resume' component={Resume} />
              <Route exact path = '/contact' component={Contact} />
            </div>                      
        </HashRouter>     
    </>
  );
 }
}

export default App;

