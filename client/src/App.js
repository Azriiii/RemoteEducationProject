import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";

import ShowCourList from './components/ShowCourList';
import ShowCourDetails from './components/ShowCourDetails';
import UpdateCourInfo from './components/UpdateCourInfo';
import Navbar from './components/Navbar';
import Home from './components/Home';




import 'react-toastify/dist/ReactToastify.css';



class App extends Component {
  render() {
    return (
      <Router>
              <Navbar />
          
        <div>
          <Route path='/cours' component={ShowCourList} />
        
          <Route path='/edit-cour/:id' component={UpdateCourInfo} />
          <Route path='/show-cour/:id' component={ShowCourDetails} />
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Home} />
   
   
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
