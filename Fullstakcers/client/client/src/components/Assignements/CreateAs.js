import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';


class CreateAs extends Component {
  constructor() {
    super();
    this.state = {
      As_name: '',
      As_desc:'',
      As_type:'',
      As_attach:'',
      As_user:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      As_name: this.state.As_name,
      As_desc: this.state.As_desc,
      As_type: this.state.As_type,
      As_attach: this.state.As_attach,
      As_user: this.state.As_user,
    };

    axios
      .post('http://localhost:8082/api/assignements', data)
      .then(res => {
        this.setState({
          As_name: '',
      As_desc:'',
      As_type:'',
      As_attach:'',
      As_user:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateAssignement!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/assignements" className="btn btn-outline-warning float-left">
                  Show Assignements List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Assignement</h1>
              <p className="lead text-center">
                  Create new Assignement
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the assignement'
                    name='As_name'
                    className='form-control'
                    value={this.state.As_name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

            

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this assignement'
                    name='As_desc'
                    className='form-control'
                    value={this.state.As_desc}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Assignement Type'
                    name='As_type'
                    className='form-control'
                    value={this.state.As_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Attachement'
                    name='As_attach'
                    className='form-control'
                    value={this.state.As_attach}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='User'
                    name='As_user'
                    className='form-control'
                    value={this.state.As_user}
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

export default CreateAs;
