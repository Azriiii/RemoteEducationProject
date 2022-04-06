import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';


class CreateCour extends Component {
  constructor() {
    super();
    this.state = {
      titre: '',
      desc:'',
      nbrParticipants:'',
    published_date:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      titre: this.state.titre,
      desc: this.state.desc,
      nbrParticipants: this.state.nbrParticipants,
     published_date: this.state.published_date
    };

    axios
      .post('http://localhost:8082/api/cours', data)
      .then(res => {
        this.setState({
          titre: '',
      desc:'',
      nbrParticipants:'',
    published_date:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateCour!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Cour List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Cour</h1>
              <p className="lead text-center">
                  Create new Cour
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Cour'
                    name='titre'
                    className='form-control'
                    value={this.state.titre}
                    onChange={this.onChange}
                  />
                </div>
                <br />

            

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this cour'
                    name='desc'
                    className='form-control'
                    value={this.state.desc}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='number of the participates'
                    name='nbrParticipants'
                    className='form-control'
                    value={this.state.nbrParticipants}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCour;
