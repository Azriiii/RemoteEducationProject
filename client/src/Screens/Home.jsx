import React, { useEffect, useState } from "react";
import Courses from "../Routes/Courses";
import HeaderVisteur from "../Routes/Header";
import MainBanner from "../Routes/MainBanner";

import SubBar from "../Routes/SubBar";

import axios from "axios";


import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';

function Home() {
 
  
  const [cours, setCour] = useState([]);



  /* find all users */
  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
      setCour(res.data);
    });
  });
  

  return (
    <div>
 


<SubBar/>
<KommunicateChat/>




<HeaderVisteur/>
    <MainBanner/>
  
 


    <section className="our-courses" id="courses">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Our Popular Courses</h2>
          </div>
        </div>
        <div class="col-lg-12">
        <div class='container-fluid' >    
      
        <div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
<div class="d-flex justify-content-center mb-4">
<div 
>
   
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
 {cours.map(({ titre, prix, category, user, nbrlesson,published_date,desc,modalite }) => (
              <Courses

                titre={titre}
                prix={prix}
                category={category}
                user={user}
                nbrlesson={nbrlesson}
                published_date={published_date}
                desc={desc}
                modalite={modalite}
               
               
              />
            ))}
 </div></div></div></div></div></div>
 
</div>



          </div>
        </div>
      </div>
    </div>
  </section>




 


  <section class="contact-us" id="contact">
 
<Footer/>
   
  </section>



</div>
    
    
   
  );
}

export default Home;
