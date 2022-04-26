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

function CoursClient({ history }) {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    textChange: 'Update',
    role: ''
  });
  
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')}
    
 

 



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
const [cours, setCour] = useState([]);

 /* find all users */
 useEffect(async () => {
  loadProfile();
 
  await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
    var userId = res.data.filter((e)=> e.user === formData.name )
    setCour(userId);
    console.log(userId,"aaaaaaaaa")
  }); 

});

const [titre, setTitre] = useState('');
const [prix, setPrix] = useState('');
const [category, setCategory] = useState('');

const [user, setUser] = useState('');
const [nbrlesson, setNbrlesson] = useState('');
const [desc, setDesc] = useState('');
const [modalite, setModalite] = useState('');
const [published_date, setPublished_date] = useState('');



const onSubmitHandler = (e)=>{
  e.preventDefault();
  axios.post(`${process.env.REACT_APP_API_URL}/cour`, {titre,prix,published_date,desc,user:name,nbrlesson,modalite,category})
  .then(res=>{
    setMessage(res.data.message)
    /* hide form after save */
   setTitre()
   setPrix()
   setPublished_date()
   setDesc()
   setUser()
   setNbrlesson()
   setModalite()
   setCategory()
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
   
 



    

<div>
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
<HeaderF/>




<div>
      
          <GlobalStyles/>

               <br></br>


           
          
 
        
              <br />
              <h2 className="display-4 text-center">Cours List</h2>
             
  <div className="ShowBookList">
  <div className="center">
  <Button size="small" color="primary"  onClick={() => setOpen(true)} ><AddIcon fontSize="big" /> </Button>

            
<a onClick={themeToggler}><i  class="fa fa-moon-o" aria-hidden="true"></i></a>
</div>
         <div className="list">
     
       
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
            value={titre}
            onChange={e => setTitre(e.target.value)}
            placeholder="title"
          />
          <InputGroup
            label="Prix"
            type="number"
            name="prix"
            value={prix}
            onChange={e => setPrix(e.target.value)}
            errors={errors.prix}
            placeholder="prix*"
          />
          <InputGroup
            label="Category"
            type="text"
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            errors={errors.category}
            placeholder="category"
          />
          
             <InputGroup
            label="Nbrlesson"
            type="number"
            name="nbrlesson"
            value={nbrlesson}
            onChange={e => setNbrlesson(e.target.value)}
            errors={errors.nbrlesson}
            placeholder="nbrlesson"
          />
               <InputGroup
            label="Published_date"
            type="date"
            name="published_date"
            value={published_date}
            onChange={e => setPublished_date(e.target.value)}
            errors={errors.published_date}
            placeholder="date de pub"
          />
               <InputGroup
            label="Description"
            type="text"
            name="desc"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            errors={errors.desc}
            placeholder="description"
          />
               <InputGroup
            label="Modalité"
            type="text"
            name="modalite"
            value={modalite}
            onChange={e => setModalite(e.target.value)}
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
    </div></div></div>
 </ThemeProvider>


 </div>


    
    
   
  );
  
}

export default CoursClient;