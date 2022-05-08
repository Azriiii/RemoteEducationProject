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



import { updateUser, isAuth, getCookie, signout } from '../helpers/auth';
import InputColor from 'react-input-color';

import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 
} from "@material-ui/core";
import "./Meeting.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Loading from "../Routes/Loading";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import "antd/dist/antd.css";
import { Pagination } from 'antd';
import HeaderAdmin from "../Routes/HeaderAdmin";
import AdminCou from "../Routes/AdminCou";

function AdminCourses({ history}) {
  

  const [pageNumber, setPageNumber] = useState(1); 
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

    
 
    const [categories, setCategories] = useState([]);

    //load category frmo the backend
          useEffect(()=>{ 
              axios.get(`${process.env.REACT_APP_API_URL}/category/all`)
              .then(res=>{
                  console.log(res.data.categories);
                  setCategories(res.data.categories);
              })
              .catch(error=>{
                  console.log(error);
                  toast.error(error.message);
              });
          },[])
 



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
 /* delete */
 const shocat = (id__)=>{
  
 
  axios.get(`${process.env.REACT_APP_API_URL}/category/show/${id__}`)
  .then(res=>{
   
   setCategories(res.data);
 
  })
 
}
 /* find all users */
 useEffect(async () => {
 
  loadProfile();
  await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
    var userId = res.data.filter((e)=> e.user === formData.name )
    setCour(userId);
 
  
   
  }); 

})

const [titre, setTitre] = useState('');
const [prix, setPrix] = useState('');
const [category, setCategory] = useState('');

const [user, setUser] = useState('');
const [nbrlesson, setNbrlesson] = useState('');
const [desc, setDesc] = useState('');
const [modalite, setModalite] = useState('');
const [published_date, setPublished_date] = useState('');
const [bandeColor, setBandeColor] = useState('');

const [avatar, setAvatar] = useState('');

const handleImage = (e) =>{
  const file = e.target.files[0];
  setFileToBase(file);

}

const setFileToBase = (file) =>{
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () =>{
      setAvatar(reader.result);
  }

}

const onSubmitHandler = (e)=>{
 
  e.preventDefault();
 
  axios.post(`${process.env.REACT_APP_API_URL}/cour`, {titre,prix,published_date:Date.now().toString(),desc,user:name,nbrlesson,modalite,category,avatar,bandeColor})
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
   setBandeColor()
   setAvatar()
   setCategory()
    /* hide errors after save */
    setErrors({})
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 4000);
    toast.success("added avec succes"); 
  })
 
  .catch(err=>setErrors(err.response.data))
  
}
useEffect(()=>({


}))


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
      toast.error("supprimé avec succes"); 
     })
    }
   }

  

  

   return (
   
 

<div>

<HeaderAdmin/>

<body>

  

<div>

<div align="center">

</div>
    

              <h2 className="display-4 text-center">Cours List  </h2>
             
  <div >
  <div className="center">


  <Button size="small" color="primary"  onClick={() => setOpen(true)} ><AddIcon fontSize="big" /> </Button>

  <ToastContainer />  

</div>

         <div >
       
       
           {
           
           cours.length === 0 ? <><h2>{` `}</h2>  <Loading/></> :

           
           cours.map(({ titre,modalite,published_date,user,nbrlesson,prix,avatar,category,desc,bandeColor }) => (
 
              <AdminCou
              
              titre={titre}
              modalite={modalite}
              user={user}
              nbrlesson={nbrlesson}
              prix={prix}
                published_date={published_date}
                desc={desc}
                category={category}
                
          
                avatar={avatar}
                bandeColor={bandeColor}
         
             
               
               
              />
              
            )
            
            
            )
            
            
            }
 
 <div >
     
    
    </div>


                       
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
            
         <label>Catégorie</label>
         <select onChange= {(e)=>setCategory(e.target.value)} id="cars" name="cars"    errors={errors.category}className="form-control select select-initialized">
                                <option value="" >Choose Category</option>
                                {
                                  categories && categories.map(category =>(
                                    <option key={category._id} value={category.name}>{category.name}</option>
                                  ))  
                                }
                            </select>
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
 <label>Color</label>
         <select onChange= {(e)=>setBandeColor(e.target.value)} id="cars" name="cars"    errors={errors.bandeColor}className="form-control select select-initialized">
                                <option value="" >Choose Category</option>
                                <option value="primary" >Primary</option>
                                <option value="secondary" >Secondary</option>
                                <option value="success" >Success</option>
                                <option value="danger" >Danger</option>
                                <option value="warning" >Warning</option>
                                <option value="info" >Info</option>
                                <option value="light" >Light</option>
                                <option value="dark" >Dark</option>
                            </select>
          
<div className="form-outline mb-4">
                    <input  type="file" id="formupload" name="image" className="form-control" onChange={handleImage} />
                    <label className="form-label" htmlFor="form4Example2">Image</label>
                </div>
       
                <img className="img-fluid" src={avatar} alt="" />
    
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



 </body>

 </div>
    
    
   
  );
  
}

export default AdminCourses;
