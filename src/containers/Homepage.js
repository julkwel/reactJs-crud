import React, { Component } from 'react';
import EmployesAdd from '../components/employe/add';
import EmployesEdit from '../components/employe/edit';
import EmployesList from '../components/employe/list';
import ExperiencesAdd from '../components/experiences/add';
import ExperiencesEdit from '../components/experiences/edit';
import ExperiencesList from '../components/experiences/list';
import Navbar from '../components/utils/Navbar'
import Alert from './alert';

class App extends Component {

  state = {
    addEmploye: null,
    editEmploye: null,
    alert: ''
  }

  addEmploye = () => {
    this.setState({
      addEmploye: {
        nom: '',
        prenom: '',
        age:'',
        experience:'',
      }
    });
  }

  addExperience = () => {
    this.setState({
      addExperience:{
        title:'',
        description:'',
      }
    })
  }

  editEmploye = (employe) => {
    this.setState({
      editEmploye: employe
    });
  }

  editExperience = (experience) => {
    this.setState({
      editExperience:experience
    });
  }

  close = () => {
    this.setState({
      addEmploye: null,
      editEmploye: null,
      addExperience: null,
      editExperience:null,
    });
  }

  alert = (msg) => {
    this.setState({
      alert: {
        type: Object.keys(msg)[0],
        message: Object.values(msg)[0]
      }
    });
  }

  render() {
    return (
      <div className="content">
        <Navbar/>
        <Alert alert={this.state.alert} />
        <div className="col-md-12 text-center">
          <p>
            <h3>Teste CRUD react avec graphql.</h3>
          </p>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addEmploye}>
              <i className="fa fa-plus-circle"></i>Nouveau employe</button>
          </div>
          <div>
            <EmployesList
              editEmploye={this.editEmploye}
              alert={this.alert} />
            <EmployesAdd
              employe={this.state.addEmploye}
              close={this.close}
              alert={this.alert} />
            <EmployesEdit
              employe={this.state.editEmploye}
              close={this.close}
              alert={this.alert} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addExperience}>
              <i className="fa fa-plus-circle"></i>Nouveau experience</button>
          </div>
          <div>
            <ExperiencesList
              editExperience={this.editExperience}
              alert={this.alert} />
            <ExperiencesAdd
              experience={this.state.addExperience}
              close={this.close}
              alert={this.alert} />
            <ExperiencesEdit
              experience={this.state.editExperience}
              close={this.close}
              alert={this.alert} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
