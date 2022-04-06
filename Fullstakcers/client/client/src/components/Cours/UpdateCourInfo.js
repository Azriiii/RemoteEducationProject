import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateCourInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      desc:'',
      nbrParticipants:'',
    published_date:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/cours/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          titre: res.data.titre,
          desc: res.data.desc,
          nbrParticipants: res.data.nbrParticipants,
          published_date: res.data.published_date
        })
      })
      .catch(err => {
        console.log("Error from UpdateCourInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      titre: this.state.titre,
      desc: this.state.desc,
      nbrParticipants: this.state.nbrParticipants,
      description: this.state.description,
      published_date: this.state.published_date
    };

    axios
      .put('http://localhost:8082/api/cours/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-cour/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateCourInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Cour List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Cour</h1>
              <p className="lead text-center">
                  Update Cour's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='titre'
                className='form-control'
                value={this.state.titre}
                onChange={this.onChange}
              />
            </div>
            <br />

        

            <div className='form-group'>
            <label htmlFor="author">Nombre des participants</label>
              <input
                type='number'
                placeholder='nbrParticipants'
                name='nbrParticipants'
                className='form-control'
                value={this.state.nbrParticipants}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='desc'
                className='form-control'
                value={this.state.desc}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
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

export default UpdateCourInfo;
