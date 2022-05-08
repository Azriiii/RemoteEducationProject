import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowCour.css';
import axios from 'axios';
import moment from 'moment';
import {
    Button,
  
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
   
  } from "@material-ui/core";
  import { Badge } from 'reactstrap';
  import { Card, CardActions, CardContent, CardMedia,Typography } from '@material-ui/core/';
  import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
  import DeleteIcon from '@material-ui/icons/Delete';
  import UpdateIcon from '@material-ui/icons/Update';
  import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HeaderF from './Headerformat';
class showCourDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cour: {}
    };
  }
  

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(`${process.env.REACT_APP_API_URL}/cour/`+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          cour: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowCourDetails");
      })
  };

  onDeleteClick (id) {
    if(window.confirm("are you sure to delete this course")){
    axios
      .delete(`${process.env.REACT_APP_API_URL}/cour/`+id)
      .then(res => {
        this.props.history.push("/met");
      })
      .catch(err => {
        console.log("Error form ShowCourDetails_deleteClick");
      })}
  };


  render() {

    const cour = this.state.cour;
    let CourItem = <div>
      
      <table className="table table-hover table-dark">
      
        <tbody>
          <tr >
            <th scope="row">1</th>
            <td>Titre</td>
            <td>{ cour.titre }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Prix</td>
            <td>{ cour.prix }</td>
          </tr>
         
          <tr>
            <th scope="row">3</th>
            <td>Catégorie</td>
            <td>{ cour.category }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Owner</td>
            <td>{ cour.user }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Nombre lesson</td>
            <td>{ cour.nbrlesson }</td>
          </tr>
          
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ moment(cour.published_date).fromNow() }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Modalité</td>
            <td>{ cour.modalite }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ cour.desc }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
        <div>
        <HeaderF/>
        <br></br> 
        <div className='listt'>
        
        <div class="polaroid">
       
  <img src={cour.avatar} alt="5 Terre" />
  <div class="container">

              <br></br>
              { CourItem }
              <br></br>
             
              <Link to="/met" className="btn btn-outline-warning">
                 Back
              </Link>
              <Button size="small" color="primary"  onClick={this.onDeleteClick.bind(this,cour._id)}><DeleteIcon fontSize="small" /> </Button>
<Link to={`/${cour._id}`} className="text-white"> <Button size="small" color="primary" ><UpdateIcon fontSize="small" /> </Button></Link>
  </div>
</div>
</div>
</div>
      
    );
  }
}

export default showCourDetails;