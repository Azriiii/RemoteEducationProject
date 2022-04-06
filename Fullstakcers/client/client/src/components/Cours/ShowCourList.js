import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourCard from './CourCard';


class ShowCourList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cours: []
    };
  }

  componentDidMount() {
   
    axios
      .get('http://localhost:8082/api/cours')
      .then(res => {
        this.setState({
          cours: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowCourList');
      })
  };


  render() {
    const cours = this.state.cours;
    console.log("PrintCour: " + cours);
    let courList;

    if(!cours) {
      courList = "there is no cour recored!";
    } else {
      courList = cours.map((cour, k) =>
        <CourCard cour={cour} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Cours List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-cour" className="btn btn-outline-warning float-right">
                + Add New Cour
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {courList}
          </div>
        </div>
 
      </div>
        
      
       
     
    
    );
   
  }
}

export default ShowCourList;
