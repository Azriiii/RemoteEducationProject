import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

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
      .get('http://localhost:8082/api/cours/'+this.props.match.params.id)
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
    axios
      .delete('http://localhost:8082/api/cours/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowCourDetails_deleteClick");
      })
  };


  render() {

    const cour = this.state.cour;
    let CourItem = <div>
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
            <td>Titre</td>
            <td>{ cour.titre }</td>
          </tr>
         
          <tr>
            <th scope="row">3</th>
            <td>Nombre participants</td>
            <td>{ cour.nbrParticipants }</td>
          </tr>
          
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ cour.published_date }</td>
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
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Cour List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Cour's Record</h1>
              <p className="lead text-center">
                  View Cour's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { CourItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,cour._id)}>Delete COUR</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-cour/${cour._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit COUR
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

export default showCourDetails;
