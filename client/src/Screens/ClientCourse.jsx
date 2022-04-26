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

function ClientCourse({ history }) {




const [cours, setCour] = useState([]);


 useEffect(async () => {

 
  await axios.get(`${process.env.REACT_APP_API_URL}/cour`).then((res) => {
   
    setCour(res.data);
  
  }); 

}, []);

   return (
   
 



    

<div>

<HeaderF/>




<div>
      
  

               <br></br>


           
          
 
        
              <br />
              <h2 className="display-4 text-center">Cours List</h2>
             
  <div className="ShowBookList">
  <div className="center">

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
              
               
               
              />
              
            )
            
            
            )}
 


 
  
    </div></div></div>



 </div>


    
    
   
  );
  
}

export default ClientCourse;
