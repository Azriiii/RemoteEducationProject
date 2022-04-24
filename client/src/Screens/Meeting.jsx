import React, { useEffect, useState ,Component} from "react";

import HeaderF from "../Routes/Headerformat";

import { Link } from 'react-router-dom'
import axios from "axios";

import SubBar from "../Routes/SubBar";
import AddIcon from '@material-ui/icons/Add';
import InputGroup from "../Routes/InputGroup";
import Meetings from "../Routes/Meetings";


import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme"

import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 
} from "@material-ui/core";
import "./Meeting.css";

function Meeting() {
  
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')}

 
const [cours, setCour] = useState([]);
 
const onChangeHandler = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
  
};
const onSubmitHandler = (e)=>{
  e.preventDefault();
  axios.post(`${process.env.REACT_APP_API_URL}/cour`, form)
  .then(res=>{
    setMessage(res.data.message)
    /* hide form after save */
    setForm({})
    /* hide errors after save */
    setErrors({})
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 4000);
  })
  .catch(err=>setErrors(err.response.data))
  
}

  /* find all users */
  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
      setCour(res.data);
    });
  });
   /* delete */
   const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this course")){
 
     axios.delete(`${process.env.REACT_APP_API_URL}/cour/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }

  

   return (
   
 


<div class="back">




<HeaderF/>
<a onClick={themeToggler}><i  class="fa fa-moon-o" aria-hidden="true"></i></a>
<Button size="small" color="primary"  onClick={() => setOpen(true)} ><AddIcon fontSize="big" /> </Button>
   
<br></br>

<br></br>
<br></br>


 
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      
          <GlobalStyles/>
        
         

 


 
    
              

               <br></br>
               <br></br>
               <br></br>
               <div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel">
<div >
<div 
>
   
    <div >
      <div >
        <div >
          <div class="col-lg-12"> 
        <div className='container-fluid' >  
 {cours.map(({ titre, prix,published_date,desc,user,nbrlesson,modalite,_id }) => (
 
              <Meetings
                titre={titre}
                prix={prix}
            
           
                published_date={published_date}
                desc={desc}
                user={user}
                nbrlesson={nbrlesson}
                modalite={modalite}
                Id={_id}
                OnDelete={OnDelete}
               
               
              />
              
            )
            
            
            )}
          </div></div></div>
       
            </div>   </div>   </div>

     
     </div></div>
 
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Course</DialogTitle>
        <DialogContent>
        <form onSubmit={onSubmitHandler} id="contact" className="formt">
          <InputGroup
            label="Titre"
            type="text"
            name="titre"
            onChangeHandler={onChangeHandler}
            errors={errors.titre}
            placeholder="title"
          />
          <InputGroup
            label="Prix"
            type="number"
            name="prix"
            onChangeHandler={onChangeHandler}
            errors={errors.prix}
            placeholder="prix*"
          />
          <InputGroup
            label="Category"
            type="text"
            name="category"
            onChangeHandler={onChangeHandler}
            errors={errors.category}
            placeholder="category"
          />
          <InputGroup
            label="User"
            type="text"
            name="user"
            onChangeHandler={onChangeHandler}
            errors={errors.user}
            placeholder="user"
          />
             <InputGroup
            label="Nbrlesson"
            type="number"
            name="nbrlesson"
            onChangeHandler={onChangeHandler}
            errors={errors.nbrlesson}
            placeholder="nbrlesson"
          />
               <InputGroup
            label="Published_date"
            type="date"
            name="published_date"
            onChangeHandler={onChangeHandler}
            errors={errors.published_date}
            placeholder="date de pub"
          />
               <InputGroup
            label="Description"
            type="text"
            name="desc"
            onChangeHandler={onChangeHandler}
            errors={errors.desc}
            placeholder="description"
          />
               <InputGroup
            label="Modalité"
            type="text"
            name="modalite"
            onChangeHandler={onChangeHandler}
            errors={errors.modalite}
            placeholder="modalite"
          />

          
         
       
      
    
          <button className="butt" type="submit">Add course</button>
         
        </form>
   </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}  variant="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
    

  
    
    
  
 </ThemeProvider>

 </div>



    
    
   
  );
  
}

export default Meeting;
