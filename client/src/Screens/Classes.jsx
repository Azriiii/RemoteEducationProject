import React, { useEffect, useState } from "react";


import SubBar from "../Routes/SubBar";
import axios from 'axios';

import "./feuille.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';
import HeaderVisteur from "../Routes/Header";
import HeaderArea from "../Routes/HeaderArea";
import Meetings from "../Routes/Meetings";
import Courses from "../Routes/Courses";
function Classes() {
 
  
    const [cours, setCour] = useState([]);



    /* find all users */
    useEffect(async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
        setCour(res.data);
      });
    }, []);

  return (
    <div>
 


<SubBar/>
<KommunicateChat/>



<HeaderVisteur/>
   

<HeaderArea/>


 
    
 <div class="col-lg-12">
   <div class="section-heading">
     <h2>Our Popular Courses</h2>
  
</div></div>

         <div className="center">
         <div className="ShowBookList" >
         <Carousel>
{cours.map(({ titre, prix, category, user, nbrlesson,avatar,published_date,desc,modalite }) => (
       <Courses

         titre={titre}
         prix={prix}
         category={category}
         user={user}
         nbrlesson={nbrlesson}
         published_date={published_date}
         desc={desc}
         modalite={modalite}
         avatar={avatar}
        
       />
     ))}
    </Carousel>
</div>
</div>






<section class="contact-us" id="contact">



 
 
<Footer/>
   
  </section>



</div>
    
    
   
  );
}

export default Classes;
