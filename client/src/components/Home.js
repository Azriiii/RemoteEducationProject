import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import  KommunicateChat from '../KommunicateChat';
import './Home.css';


function Home() {
  return (

<>
      <HeroSection {...homeObjOne} />
      <KommunicateChat/>
 
    </>


//       <div>
    

//     <img className='img2'
    
//       src="images/back2.png"
//       alt="Canvas Logo"
//     />
// </div>


  );
}

export default Home;
