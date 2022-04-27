import React, { useEffect, useState } from "react";


import SubBar from "../Routes/SubBar";


import "./feuille.css";

import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';
import HeaderVisteur from "../Routes/Header";
import HeaderArea from "../Routes/HeaderArea";
function AboutUs() {
 
  

  return (
    <div>
 


<SubBar/>
<KommunicateChat/>



<HeaderVisteur/>
   

<HeaderArea/>




 


  <section class="contact-us" id="contact">
 
<Footer/>
   
  </section>



</div>
    
    
   
  );
}

export default AboutUs;
