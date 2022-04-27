import React from "react";

import  { useState } from "react";
import { Link } from 'react-router-dom'

import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 
} from "@material-ui/core";

import { Card, CardActions, CardContent, CardMedia,Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './card.css';

function Meetings({titre, prix,published_date,desc,user,nbrlesson,modalite,Id, OnDelete}) {  
  const [open, setOpen] = useState(false);

  return (
  
          <div className="high">
         
            <div class="card">
    <img src="../assets/images/meeting-01.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{titre}</h5>
      <p class="card-text">{desc}</p>
      <p class="card-text"><small class="text-muted">{moment(published_date).fromNow()}</small></p>
      <button type="button" class="btn btn-primary"  onClick={() => setOpen(true)}
>
 Détails
</button>
    </div>
  </div>
 

  <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{titre}</DialogTitle>
        <DialogContent>

      <p class="fw-bold">Owner:</p> {user}
      <p class="fw-bold">Nombre lessons:</p> {nbrlesson}
      <p class="fw-bold">Modalité:</p> {modalite} 
      <p class="fw-bold">Prix:</p> ${prix} 
    
      <Button size="small" color="primary"  onClick={()=>OnDelete(Id)}><DeleteIcon fontSize="small" /> </Button>
<Link to={`/${Id}`} className="text-white"> <Button size="small" color="primary" ><UpdateIcon fontSize="small" /> </Button>
</Link>
      
  
 </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}  variant="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>




      </div>
      
  

     
  );
}

export default Meetings;
