import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class showAssignementDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignement: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/assignements/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          assignement: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowAssignementDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/assignements/'+id)
      .then(res => {
        this.props.history.push("/assignements");
      })
      .catch(err => {
        console.log("Error form ShowAssignementDetails_deleteClick");
      })
  };


  render() {

    const assignement = this.state.assignement;
    let AsItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ assignement.As_name }</td>
          </tr>
         
          <tr>
            <th scope="row">3</th>
            <td>Description</td>
            <td>{ assignement.As_desc }</td>
          </tr>
          
          <tr>
            <th scope="row">5</th>
            <td>Type</td>
            <td>{ assignement.As_type }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>User</td>
            <td>{ assignement.As_user }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/assignements" className="btn btn-outline-warning float-left">
                  Show Assignement List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Assignements Record</h1>
              <p className="lead text-center">
                  View Assignement Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { AsItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,assignement._id)}>Delete Assignement</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-assignement/${assignement._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Assignement
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showAssignementDetails;
