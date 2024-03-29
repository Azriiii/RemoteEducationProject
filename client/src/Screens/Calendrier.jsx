import React, { useEffect, useState ,Component} from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import axios from "axios";
import "./Meeting.css";



import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 
} from "@material-ui/core";
import HeaderF from "../Routes/Headerformat";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


function Calendrier() {
  const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({});
    const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
   
  const [eventts, setEventts] = useState([]);
  
   
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };
  const onSubmitHandler = (e)=>{
      
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/event`, form)
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
      
    },
    
  
    )
    .catch(err=>setErrors(err.response.data))
    
    
  }
  
    /* find all users */
    useEffect(async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/event`).then((res) => {
        setEventts(res.data);
       
      });
    }, []);
     /* delete */
     const OnDelete = (id__)=>{
      if(window.confirm("are you sure to delete this event")){
   
       axios.delete(`${process.env.REACT_APP_API_URL}/event/${id__}`)
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
   
 
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <StyledApp>

<div >

<div align="center">

</div>

<HeaderF/>


<br></br>

<br></br>
<br></br>


        

 
<div align="center">
<label class="switch">
  <input  onClick={() => themeToggler()} type="checkbox"/>
 <span class="slider "></span>
</label>
          <Button size="small" color="primary"  onClick={() => setOpen(true)} ><AddIcon fontSize="big" /> </Button>
          </div>
          
        
         
      
            <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
        <DialogContent>
                <form onSubmit={onSubmitHandler} className="formt">
                <div className="mb-3">
  
                <input type="text" placeholder="Add Title"  name="title" onChange={onChangeHandler} />
                <input type="date" name="start" onChange={onChangeHandler} />
                <input type="date"   name="end" onChange={onChangeHandler} />
       <br></br>
       <br></br>
       <br></br>

                <button class="btn btn-success" type="submit">
                    Add Event
                </button>
                </div>
                </form>
                </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}  variant="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
   <div align="center">

      <Calendar  onDoubleClickEvent={()=>OnDelete(eventts._id)} localizer={localizer} agenda={eventts} events={eventts} startAccessor="start" endAccessor="end" style={{ height: 500,width:1400, margin: "50px" }} />
   
      </div>
  
    
    
  


 </div>

 </StyledApp>
    </ThemeProvider>

    
    
   
  );
  
}

export default Calendrier;
