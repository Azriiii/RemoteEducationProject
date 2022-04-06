import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CourCard = (props) => {
    const  cour  = props.cour;

    return(
      
        <div class="card border-primary mb-3" >
                <img src="images/course1.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-cour/${cour._id}`}>
                    <b>   { cour.titre } </b>
                    </Link>
                </h2>
            
                <p>{cour.modalite}</p>
            </div>
            <div class="card-footer bg-transparent border-primary">{cour.published_date}</div>
        </div>
        
    )
};

export default CourCard;