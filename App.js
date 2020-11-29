import React from 'react';
import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import {Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';


class App extends React.Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <div className="App">
      <Navbar />
       <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/about' component={About} />
       <Route path='/contactme' render = {     //(1)
         () => {
          return (

           this.state.loggedIn
           ? 
            <ContactMe firstName='ananaki' />
           :
           <About />
           )
         }
       }  />
       <Route exact path='/projects' component={Projects} />
       <Route path='/projects/:id' component={ProjectDetails} />    
       </Switch> 
      </div>
    );
  }
}

export default App;

// if we want to pass props in routes, we need to do  (1)