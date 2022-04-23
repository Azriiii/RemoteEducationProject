import React, { useEffect, useState } from "react";

import HeaderVisteur from "../Routes/Header";

import SubBar from "../Routes/SubBar";
import Rec from "../Routes/Rec";
import axios from "axios";


import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';
import HeaderArea from "../Routes/HeaderArea";
function Recrutement() {
 
  const [rect, setRecrutement] = useState([]);
 /* find all users */
 useEffect(async () => {
  await axios.get(`${process.env.REACT_APP_API_URL}/jobs`).then((res) => {
    setRecrutement(res.data);
  });
});
  return (
    <div>
 


<SubBar/>
<KommunicateChat/>




              <HeaderVisteur
               
               
               
              />
              
              <HeaderArea/>
   






 


  <section class="contact-us" id="contact">
  {rect.map(({ Type,Title,Description,Skill }) => (
              <Rec
              Type={Type}
              Title={Title}
              Description={Description}
              Skill={Skill}
               
               
               
              />
              
            )
            
            
            )}
       
 
<Footer/>
   
  </section>



</div>
    
    
   
  );
}

export default Recrutement;
