

import React from "react";
 
import AddIcon from '@material-ui/icons/Add';

import {
  Button,

  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
 
} from "@material-ui/core";
function Courses({titre, prix, category, user, nbrlesson,published_date,desc,modalite}) {
  return (
  
    
    <div>
            <div class="item">
              <img src="../assets/images/meeting-01.jpg" alt="Course One"/>
              <div class="down-content">
                <h4>{titre}</h4>
                <Button size="small" color="primary"  ><AddIcon fontSize="big" />Enroll </Button>
                <div class="info">
                  <div class="row">
                    <div class="col-8">
                   
                      <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div class="col-4">
                       <span>{prix}</span>
                     

                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           
           <br></br>
         
          
          
        </div>
  
  );
}

export default Courses;
