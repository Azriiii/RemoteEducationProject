import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AssignementCard from './AssignementCard';


class ShowAssignementList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      assignements: []
    };
  }

  componentDidMount() {
   
    axios
      .get('http://localhost:8082/api/assignements')
      .then(res => {
        this.setState({
          assignements: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAssignementList');
      })
  };


  render() {
    const assignements = this.state.assignements;
    console.log("PrintAssignement: " + assignements);
    let assignementList;

    if(!assignements) {
      assignementList = "there is no assignement recored!";
    } else {
      assignementList = assignements.map((assignement, k) =>
        <AssignementCard assignement={assignement} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Assignements List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-as" className="btn btn-outline-warning float-right">
                + Add New Assignement
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {assignementList}
          </div>
        </div>
 
      </div>
        
      
       
     
    
    );
   
  }
}

export default ShowAssignementList;
