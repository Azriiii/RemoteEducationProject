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
import { Badge } from 'reactstrap';

function Meetings({titre,published_date,desc,avatar,bandeColor,Id}) {  
  const [open, setOpen] = useState(false);
 
  return (
  
          <div
         >
            <div class="card"   >

            <Badge href="#"  color={bandeColor}>    </Badge>
    <img src={avatar} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{titre}</h5>
   
      <p class="card-text">{desc}</p>
      <p class="card-text"><small class="text-muted">{moment(published_date).fromNow()}</small></p>
      <button type="button" class="btn btn-primary" 
>
<Link to={`/show-cour/${Id}`}> Détails
                       
                    </Link>
</button>
    </div>
  </div>
 




      </div>
      
  

     
  );
}

export default Meetings;
