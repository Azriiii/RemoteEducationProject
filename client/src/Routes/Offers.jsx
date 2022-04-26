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


function Offers({Type,Title,Description,Skill,Id, OnDelete}) {  


  return (
  
          <div>
        

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
      <th scope="col">Skill</th>
      <th scope="col">Actions</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{Title}</th>
      <td>{Type}</td>
      <td>{Description}</td>
      <td>{Skill}</td>
      <td>
      
      <Button size="small" color="primary"  onClick={()=>OnDelete(Id)}><DeleteIcon fontSize="small" /> </Button>
<Link to={`/${Id}`} className="text-white"> <Button size="small" color="primary" ><UpdateIcon fontSize="small" /> </Button>
</Link>
      
      </td>
     
    </tr>
   
  </tbody>
</table>



      </div>
      
  

     
  );
}

export default Offers;
