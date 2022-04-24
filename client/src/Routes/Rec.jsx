
import React from "react";

function Rec({Type,Title,Description,Skill}) {
  return (
  
    <section class="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <div class='container-fluid' >    
       
          
            <div class="item">
              <div class="icon">
                <img src="../assets/images/service-icon-01.png" alt=""/>
              </div>
              <div class="down-content">
                <h4>{Title}</h4>
                <p>
                <b>Description: </b>  {
                     Description
                 } 
                 <br></br>
                 <b> Skill: </b> {
                   Skill
                 } 
                  <br></br>
              <b> Type :  </b>  {
Type
} 

                </p>
              </div>
            </div>
            
          
          
            
         
            
          
           
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Rec;


