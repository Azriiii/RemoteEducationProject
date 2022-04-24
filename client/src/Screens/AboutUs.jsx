import React, { useEffect, useState } from "react";

import {  Redirect } from 'react-router-dom';

import SubBar from "../Routes/SubBar";

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';

import Footer from "../Routes/Footer";
import  KommunicateChat from '../KommunicateChat';
import HeaderVisteur from "../Routes/Header";
import HeaderArea from "../Routes/HeaderArea";

 
const AboutUs = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    textChange: 'Update',
    role: ''
  });
    useEffect(() => {
      loadProfile();
    }, []);
  
    const loadProfile = () => {
      const token = getCookie('token');
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          const { role, name, email } = res.data;
          setFormData({ ...formData, role, name, email });
        })
        .catch(err => {
          toast.error(`Error To Your Information ${err.response.statusText}`);
          if (err.response.status === 401) {
            signout(() => {
              history.push('/login');
            });
          }
        });
    };
    const { name, email, password1, textChange, role } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  
    // const handleSubmit = e => {
    //   e.preventDefault();
  
    //   axios
    //     .post(`${process.env.REACT_APP_API_URL}/about`, {
    //       token
    //     })
    //     .then(res => {
    //       setFormData({
    //         ...formData,
    //         show: false
    //       });
  
    //       toast.success(res.data.message);
    //     })
    //     .catch(err => {
          
    //       toast.error(err.response.data.errors);
    //     });
    // };

  return (
    <div>
 
 Welcome{name}


<SubBar/>
<KommunicateChat/>



<HeaderVisteur/>
   

<HeaderArea/>




 


  <section className="contact-us" id="contact">
 

<Footer/>
   
  </section>



</div>
    
    
   
  );
  }

export default AboutUs;
