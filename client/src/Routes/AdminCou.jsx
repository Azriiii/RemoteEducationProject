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

function AdminCou({titre,modalite,published_date,desc,user,nbrlesson,prix,avatar,category,bandeColor}) {  
  const [open, setOpen] = useState(false);
 
  return (
  
          <div
         >
          <table className="table table-hover table-dark">
      
      <tbody>
      <tr >
          <th scope="row">1</th>
          <td>Avatar</td>
          <td>{ avatar }</td>
        </tr>
      <tr >
          <th scope="row">1</th>
          <td>Titre</td>
          <td>{ titre }</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Prix</td>
          <td>{ prix }</td>
        </tr>
       
        <tr>
          <th scope="row">3</th>
          <td>Catégorie</td>
          <td>{ category }</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Owner</td>
          <td>{ user }</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Nombre lesson</td>
          <td>{ nbrlesson }</td>
        </tr>
        
        <tr>
          <th scope="row">5</th>
          <td>Published Date</td>
          <td>{ moment(published_date).fromNow() }</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Modalité</td>
          <td>{ modalite }</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Description</td>
          <td>{ desc }</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Couleur</td>
          <td>{ bandeColor }</td>
        </tr>
      </tbody>
    </table>
  
 




      </div>
      
  

     
  );
}

export default AdminCou;
