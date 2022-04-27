import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams,Redirect,useHistory  } from 'react-router-dom';

import HeaderF from '../Routes/Headerformat';
import { ToastContainer, toast } from 'react-toastify';
import InputGroup from '../Routes/InputGroup';

import "./Meeting.css";

function Details() {
  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/met`; 
    history.push(path);
  }
  const [cours, setCour] = useState([]);
  const [form, setForm] = useState({});
  const {id} = useParams();

  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/cour/${id}`, form)
    .then(res=>{
    
      
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/cour/${id}`).then((res) => {
      setForm(res.data);
    
    });
   
  },
   []);
  return (
    <div>
  
 
 <HeaderF/>
 

 <section >
  
 
  <section >
 
<div className="container">
     <div className="row">
     <div class="col-lg-9 align-self-center">
          <div class="row">
            <div class="col-lg-12">
            <ToastContainer />  
        <div className='container-fluid' >
          <br></br>
          <br></br>
          <br></br>
         <form onSubmit={onSubmitHandler} id="contact" className="formt">
          <InputGroup
            label="Titre"
            type="text"
            name="titre"
            onChangeHandler={onChangeHandler}
            errors={errors.titre}
            placeholder="title"
            value={form.titre}
          />
          <InputGroup
            label="Prix"
            type="number"
            name="prix"
            onChangeHandler={onChangeHandler}
            errors={errors.prix}
            placeholder="prix"
            value={form.prix}
          />
          <InputGroup
            label="Category"
            type="text"
            name="category"
            onChangeHandler={onChangeHandler}
            errors={errors.category}
            placeholder="category"
            value={form.category}
          />
          <InputGroup
            label="User"
            type="text"
            name="user"
            onChangeHandler={onChangeHandler}
            errors={errors.user}
            placeholder="user"
            value={form.user}
          />
             <InputGroup
            label="Nbrlesson"
            type="number"
            name="nbrlesson"
            onChangeHandler={onChangeHandler}
            errors={errors.nbrlesson}
            placeholder="nbrlesson"
            value={form.nbrlesson}
          />
               <InputGroup
            label="Published_date"
            type="date"
            name="published_date"
            onChangeHandler={onChangeHandler}
            errors={errors.published_date}
            placeholder="date de pub"
            value={form.published_date}
          />
               <InputGroup
            label="Description"
            type="text"
            name="desc"
            onChangeHandler={onChangeHandler}
            errors={errors.desc}
            placeholder="description"
            value={form.desc}
          />
               <InputGroup
            label="Modalité"
            type="text"
            name="modalite"
            onChangeHandler={onChangeHandler}
            errors={errors.modalite}
            placeholder="modalite"
            value={form.modalite}
          />
          
         
       
      
    
          <button className="btn btn-primary" type="submit" >Update course</button>
          <button    onClick={routeChange} className="btn btn-success" >Retour </button>
        </form>
      
        </div>
        </div>
      </div>
    </div>
       
    </div></div>

   </section>
   </section>
      </div>
      
  )
}

export default Details