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
import "./Meeting.css";
import HeaderAdmin from "../Routes/HeaderAdmin";
import Offers from "../Routes/Offers";

function AdminJobs({ history }) {


  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  
  const [open, setOpen] = useState(false);

    

const [jobs, setJobs] = useState([]);

 /* find all users */
 useEffect(async () => {

 
  await axios.get(`${process.env.REACT_APP_API_URL}/jobs`).then((res) => {
    
    setJobs(res.data);
    
  }); 

});

const [Title, setTitle] = useState('');
const [Type, setType] = useState('');
const [Description, setDescription] = useState('');

const [Skill, setSkill] = useState('');



const onSubmitHandler = (e)=>{
  e.preventDefault();
  axios.post(`${process.env.REACT_APP_API_URL}/jobs`, {Title,Type,Description,Skill})
  .then(res=>{
    setMessage(res.data.message)
    /* hide form after save */
    setTitle()
    setType()
    setDescription()
    setSkill()
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
 
     axios.delete(`${process.env.REACT_APP_API_URL}/jobs/${id__}`)
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
              <h2 className="display-4 text-center">Existing Job Offers</h2>
             
  <div >
  <div >
  <Button size="small" color="primary"  onClick={() => setOpen(true)} ><AddIcon fontSize="big" /> </Button>

            

</div>
         <div className="list">
       
           {jobs.map(({ Title, Type,Description,Skill,_id }) => (
 
              <Offers
              Title={Title}
              Type={Type}     
              Description={Description}
              Skill={Skill}              
                Id={_id}
                OnDelete={OnDelete}
              />
              
            )
            )}
 


 
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Jobs</DialogTitle>
        <DialogContent>
        <form onSubmit={onSubmitHandler} id="contact" className="formt">
          <InputGroup
            label="Title"
            type="text"
            name="Title"
            value={Title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
         
          <InputGroup
            label="Type"
            type="text"
            name="Type"
            value={Type}
            onChange={e => setType(e.target.value)}
            errors={errors.Type}
            placeholder="Type"
          />
          
           
               <InputGroup
            label="Description"
            type="text"
            name="Description"
            value={Description}
            onChange={e => setDescription(e.target.value)}
            errors={errors.Description}
            placeholder="Description"
          />
               <InputGroup
            label="Skill"
            type="text"
            name="Skill"
            value={Skill}
            onChange={e => setSkill(e.target.value)}
            errors={errors.Skill}
            placeholder="Skill"
          />

          
         
       
      
    
          <button className="butt" type="submit">Add Job Offer</button>
         
        </form>
   </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}  variant="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
    </div></div></div>



 </div>


    
    
   
  );
  
}

export default AdminJobs;
