import React from 'react';
import './CSS/Footer.css';
import { Button } from './Shared/Button';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

import Cards from './Cards';
import '../components/CSS/Home.css';
import './Cours/ShowCourList';
import ShowCourList from './Cours/ShowCourList';


function Home() {
  return (

      <>
        <HeroSection {...homeObjOne} />
        <ShowCourList/>
        <HeroSection {...homeObjThree} />
        {/* <HeroSection {...homeObjTwo} />

      <HeroSection {...homeObjFour} /> */}
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
