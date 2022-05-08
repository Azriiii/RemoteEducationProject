import React, { useEffect, useState } from "react";
import Courses from "../Routes/Courses";
import HeaderVisteur from "../Routes/Header";
import MainBanner from "../Routes/MainBanner";

import Jitsi from 'react-jitsi'
import SubBar from "../Routes/SubBar";

import axios from "axios";
import "./feuille.css";

import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';

function Home() {
 
  const [displayName, setDisplayName] = useState('')
  const [roomName, setRoomName] = useState('')
  const [password, setPassword] = useState('')
  const [onCall, setOnCall] = useState(false)
  
  const [cours, setCour] = useState([]);



  /* find all users */
  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
      setCour(res.data);
    });
  }, []);
  


  return  (
    <div>
 


<SubBar/>
<KommunicateChat/>




<HeaderVisteur/>
    <MainBanner/>
  
 








  <section class="contact-us" id="contact">
 
<Footer/>
   
  </section>



</div>
    
    
   
  );
}

export default Home;
