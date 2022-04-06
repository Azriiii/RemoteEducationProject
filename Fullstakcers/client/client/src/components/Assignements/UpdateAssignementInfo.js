import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateAssignementInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      As_name: '',
      As_desc:'',
      As_type:'',
      As_attach:'',
      As_user:'',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/assignements/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          As_name: res.data.As_name,
          As_desc: res.data.As_desc,
          As_type: res.data.As_type,
          As_attach: res.data.As_attach,
          As_user: res.data.As_user
        })
      })
      .catch(err => {
        console.log("Error from UpdateAssignementInfo");
      })
  };

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
      As_user: this.state.As_user
    };

    axios
      .put('http://localhost:8082/api/assignements/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-assignement/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in Update Assignement Info!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/assignements" className="btn btn-outline-warning float-left">
                  Show Assignement List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Assignement</h1>
              <p className="lead text-center">
                  Update Assignement Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Name</label>
              <input
                type='text'
                placeholder='Assignement Name'
                name='As_name'
                className='form-control'
                value={this.state.As_name}
                onChange={this.onChange}
              />
            </div>
            <br />

        

            <div className='form-group'>
            <label htmlFor="author">Type of assignement</label>
              <input
                type='text'
                placeholder='As_type'
                name='As_type'
                className='form-control'
                value={this.state.As_type}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="As_description">Description</label>
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
            <label htmlFor="As_attach">Attachement</label>
              <input
                type='text'
                placeholder='As_attach'
                name='As_attach'
                className='form-control'
                value={this.state.As_attach}
                onChange={this.onChange}
              />
              </div>
              <div className='form-group'>
            <label htmlFor="As_user">User</label>
              <input
                type='text'
                placeholder='User'
                name='As_user'
                className='form-control'
                value={this.state.As_user}
                onChange={this.onChange}
              />
            </div>
            

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Cour</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateAssignementInfo;
