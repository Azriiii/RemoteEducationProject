import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from "./components/Shared/Footer";
import CreateCour from './components/Cours/CreateCour';
import CreateAs from './components/Assignements/CreateAs';
import ShowCourList from './components/Cours/ShowCourList';
import ShowAssignementList from './components/Assignements/ShowAssignementList';
import ShowCourDetails from './components/Cours/ShowCourDetails';
import ShowAssignementDetails from './components/Assignements/ShowAssignementDetails';
import UpdateCourInfo from './components/Cours/UpdateCourInfo';
import UpdateAssignementInfo from './components/Assignements/UpdateAssignementInfo';
import Navbar from './components/Shared/Navbar';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <Router>

                <Navbar />

                <div>
                    <Route path='/cours' component={ShowCourList} />
                    <Route path='/assignements' component={ShowAssignementList} />
                    <Route path='/create-cour' component={CreateCour} />
                    <Route path='/create-as' component={CreateAs} />
                    <Route path='/edit-cour/:id' component={UpdateCourInfo} />
                    <Route path='/edit-assignement/:id' component={UpdateAssignementInfo} />
                    <Route path='/show-cour/:id' component={ShowCourDetails} />
                    <Route path='/show-assignement/:id' component={ShowAssignementDetails} />
                    <Route path='/home' component={Home} />
                    <Route path='/' exact component={Home} />

                </div>
                <Footer />

            </Router>
        );
    }
}

export default App;
