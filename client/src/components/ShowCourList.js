import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourCard from './CourCard';

function refreshPage() {
  window.location.reload(false);
}

class ShowCourList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cours: [],
      titre: '',
      desc:'',
      nbrParticipants:'',
    published_date:'',
    modalite:''
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
     published_date: this.state.published_date,
     modalite:this.state.modalite
    };
    
    axios
      .post('http://localhost:8082/api/cours', data)
      .then(res => {
        this.setState({
          titre: '',
      desc:'',
      nbrParticipants:'',
    published_date:'',
    modalite:'',
        })
        this.props.history.push('/cours');
      })
      .catch(err => {
        console.log("Error in CreateCour!");
      })
  };


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
         
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-close"> Ajout Course</i>
 
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajout course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
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
                    name='modalite'
                    className='form-control'
                    value={this.state.modalite}
                    onChange={this.onChange}

                    
                  /></div>
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

                <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={refreshPage} data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
              </form>
      </div>
     
    </div>
  </div>
</div>
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
