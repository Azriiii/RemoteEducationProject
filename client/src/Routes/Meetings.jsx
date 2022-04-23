import React from "react";
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

function Meetings({titre, prix,published_date,desc,user,nbrlesson,modalite,Id, OnDelete}) {  
 

  return (
  
          <div>
           
              <div className="row grid">
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>${prix}</span>
                      </div>
                      <a href="meeting-details.html"><img src="../assets/images/meeting-01.jpg" alt=""/></a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                      <h6>{moment(published_date).fromNow()}<span></span></h6>
                        </div>
                      <a href="meeting-details.html"><h4> 
                    <b>   {titre} </b>
                   </h4></a>
                     
                      <p>{desc}<br></br></p>
                     
    {user}
    {nbrlesson}
    {modalite}
        
   
      <Button size="small" color="primary"  onClick={()=>OnDelete(Id)}><DeleteIcon fontSize="small" /> </Button>
      <Link to={`/${Id}`} className="text-white"> <Button size="small" color="primary" ><UpdateIcon fontSize="small" /> </Button>

      
    
         </Link>
         
      
     
                    </div>
                    
                 
                  </div>
                </div>
           
            
              </div>
            </div>
         

     
  );
}

export default Meetings;
