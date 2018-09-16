import React, { Component } from 'react';
import Alert from '../../containers/alert';
import $ from 'jquery';
import 'bootstrap';

class EmployeForm extends Component {

  state = {
    nom: '',
    prenom: '',
    age: '',
    experience:'',
    poste:''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.employe && !this.props.employe) {
      const { nom,prenom,age,experience,poste } = nextProps.employe;
      this.setState({ nom,prenom,age,experience,poste});
    }
  }

  componentDidUpdate() {
    if (this.props.employe) {
      $(`#${this.props.modalId}`).modal('show');
    } else {
      $(`#${this.props.modalId}`).modal('hide');
    }
  }

  handleSubmit = (e) => {
    const { nom,prenom,age,experience ,poste} = this.state;
    e.preventDefault();
    this.props.handleSubmit({ nom,prenom,age,experience ,poste});
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { close, modalId, title, alert } = this.props;
    const { nom,prenom,age,experience,poste } = this.state;

    return (
      <div className="modal fade in" id={modalId} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={close}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Alert alert={alert} />
                <div className="form-row">
                  <div className="form-group">
                  <label className="Nom" >Nom</label>
                    <input
                      type="text"
                      name="nom"
                      value={nom}
                      placeholder="Nom"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label className="prenom" >Prenom</label>
                    <input
                      type="text"
                      name="prenom"
                      value={prenom}
                      placeholder="Prenom"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label className="Poste" >Poste</label>
                    <input
                      type="text"
                      name="poste"
                      value={poste}
                      placeholder="Poste"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label className="Age" >Age</label>
                    <input
                      type="text"
                      name="age"
                      value={age}
                      placeholder="age"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                  <label className="Experience" >Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={experience}
                      placeholder="experience"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={close}>Close</button>
                <input
                  type="submit"
                  name="Save changes"
                  placeholder="New employe"
                  className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeForm;
