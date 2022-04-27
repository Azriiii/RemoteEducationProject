import React, { useEffect, useState ,Component} from "react";

import HeaderF from "../Routes/Headerformat";

import { Link } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import SubBar from "../Routes/SubBar";
import AddIcon from '@material-ui/icons/Add';
import InputGroup from "../Routes/InputGroup";
import Meetings from "../Routes/Meetings";
import {useSelector} from 'react-redux';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";
import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';

import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 
} from "@material-ui/core";
import "./Lessons.css";
import HeaderAdmin from "../Routes/HeaderAdmin";
import LessonRoute from "../Routes/LessonRoute";

function LessonScreen({ history }) {


  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  
  const [open, setOpen] = useState(false);

    

const [lessons, setLesson] = useState([]);

 /* find all users */
 useEffect(async () => {

 
  await axios.get(`${process.env.REACT_APP_API_URL}/lesson`).then((res) => {
    
    setLesson(res.data);
    
  }); 

});

const [titre, setTitre] = useState('');

const [description, setDescription] = useState('');
const [dateCreation, setDateCreation] = useState('');




const onSubmitHandler = (e)=>{
  e.preventDefault();
  axios.post(`${process.env.REACT_APP_API_URL}/lesson`, {titre,description,dateCreation})
  .then(res=>{
    setMessage(res.data.message)
    /* hide form after save */
    setTitre()
    setDescription()
    setDateCreation()
    /* hide errors after save */
    setErrors({})
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 4000);
  })
  .catch(err=>setErrors(err.response.data))
  
}
useEffect(()=>({

}))

 
  // const handleChange = text => e => {

  //   setFormData({ ...formData, [text]: e.target.value });
  // };
  
   /* delete */
   const OnDelete = (id__)=>{
    if(window.confirm("Do you really want to delete this job offer?")){
 
     axios.delete(`${process.env.REACT_APP_API_URL}/lesson/${id__}`)
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
   

<div>

<HeaderAdmin/>




<div>
      
               <br></br>

              <br />
              <h2 className="display-4 text-center">Existing Lessons</h2>
             
  <div >
  <div >
  <Button size="small" color="primary"  onClick={() => setOpen(true)} ><AddIcon fontSize="big" /> </Button>

            

</div>
<div className="ShowBookList1"> 
         <div className="list1">
       
           {lessons.map(({ titre, description, dateCreation,_id }) => (
 
              <LessonRoute
              titre={titre}
              description={description}
              dateCreation={dateCreation}         
                Id={_id}
                OnDelete={OnDelete}
              />
              
            )
            )}
 


 
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Lessons</DialogTitle>
        <DialogContent>
        <form onSubmit={onSubmitHandler} id="contact" className="formt">
        <InputGroup
            label="Titre"
            type="text"
            name="titre"
            value={titre}
            onChange={e => setTitre(e.target.value)}
            placeholder="title"
          />
         
         <InputGroup
            label="description"
            type="text"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            errors={errors.description}
            placeholder="description"
          />
          
           
          <InputGroup
            label="dateCreation"
            type="date"
            name="dateCreation"
            value={dateCreation}
            onChange={e => setDateCreation(e.target.value)}
            errors={errors.dateCreation}
            placeholder="date de pub"
          />
              
          
         
       
      
    
          <button className="butt" type="submit">Add Lesson</button>
         
        </form>
   </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}  variant="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
    </div></div></div></div>



 </div>


    
    
   
  );
  
}

export default LessonScreen;
