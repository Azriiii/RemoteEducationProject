import React from "react";
import {  useParams,Redirect,useHistory  } from 'react-router-dom';

function HeaderVisteur() {
  
    const history = useHistory();
  
  const routeChangeHome = () =>{ 
    let path = `/`; 
    history.push(path);
  }
  const routeChangeCourses = () =>{ 
    let path = `/courclient`; 
    history.push(path);
  }
  const routeChangeAbout= () =>{ 
    let path = `/about`; 
    history.push(path);
  }
  const routeChangeContact = () =>{ 
    let path = `/contact`; 
    history.push(path);
  }
  return (
    <div >
    
  <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                    
                      <a href="index.html" class="logo">
                         LevelUp
                      </a>
                    
                      <ul class="nav"> 
                          <li class="scroll-to-section"><a  onClick={routeChangeHome} class="active">Home</a></li>
                          <li class="scroll-to-section"><a onClick={routeChangeCourses} >Courses</a></li>
                          <li><a href="/recrutement">Recrutement</a></li>
                          <li class="scroll-to-section"><a onClick={routeChangeAbout} >About Us</a></li>
                         
                        
                          <li class="scroll-to-section"><a onClick={routeChangeContact} >Contact Us</a></li> 
                      </ul>        
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                   
                  </nav>
              </div>
          </div>
      </div>
  </header>
  </div>
  );
}

export default HeaderVisteur;
