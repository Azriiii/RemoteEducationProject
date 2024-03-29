import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Register from './Screens/Register.jsx';
import Activate from './Screens/Activate.jsx';
import Admin from './Screens/Admin.jsx';
import Private from './Screens/Private.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import ResetPassword from './Screens/ResetPassword';

import 'react-toastify/dist/ReactToastify.css';
import Login from './Screens/Login.jsx';
import ForgetPassword from './Screens/ForgetPassword';
import Home from './Screens/Home';
import Calendrier from './Screens/Calendrier';
import AboutUs from './Screens/AboutUs';
import Contactus from './Screens/Contactus';
import Rec from './Routes/Rec';
import Recrutement from './Screens/Recrutement';
import Meeting from './Screens/Meeting';
import Details from './Screens/Details';
import Profile from './Screens/profile';
import Room from './Screens/Room';
import ShowCour from './Routes/ShowCour';
import Classes from './Screens/Classes';
import AdminCourses from './Screens/AdminCourses';
import AdminCategory from './Screens/AdminCategory';





ReactDOM.render(

  

<BrowserRouter>

    <Switch>
   
    <Route path='/login' exact render={props => <Login {...props} />} />      
      <Route path='/register' exact render={props => <Register {...props} />} />      
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />      
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <PrivateRoute path="/profile" exact component={Profile} />
      <PrivateRoute path="/private" exact component={Private} />
       <AdminRoute path="/admin" exact component={Admin} />
       <Route path="/" exact component={Home} />
       <Route path="/calendar" exact component={Calendrier} />
       <Route path="/about" exact component={AboutUs} />
       <Route path="/contact" exact component={Contactus} />
       <Route path="/recrutement" exact component={Recrutement} />
       <Route path='/met' exact render={props => <Meeting {...props} />} />
       <Route path='/courclient' exact render={props => <Classes {...props} />} />
       <Route path='/admincours' exact render={props => <AdminCourses {...props} />} />
       <Route path='/admincategorie' exact render={props => <AdminCategory {...props} />} />
       <Route path='/room' exact render={props => <Room {...props} />} />
       <Route path="/:id" exact component={Details} />
       <Route path='/show-cour/:id' component={ShowCour} />
    
      
    </Switch>
  </BrowserRouter>,


  
  document.getElementById('root')
);

