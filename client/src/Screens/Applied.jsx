import React, { useEffect, useState } from "react";

import HeaderVisteur from "../Routes/Header";

import SubBar from "../Routes/SubBar";
import Rec from "../Routes/Rec";
import axios from "axios";


import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';
import HeaderArea from "../Routes/HeaderArea";
function Applied() {
 
  const [rect, setApplied] = useState([]);
 /* find all users */
 useEffect(async () => {
  await axios.get(`${process.env.REACT_APP_API_URL}/applys`).then((res) => {
    setApplied(res.data);
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
  {rect.map(({ Name, LastName, Email, Age, Resume }) => (
              <Rec
              Name={Name}
              LastName={LastName}
              Email={Email}
              Age={Age}
              Resume={Resume}
                 
              />
              
            )
            
            
            )}
       
 
<Footer/>
   
  </section>



</div>
    
    
   
  );
}

export default Applied;
