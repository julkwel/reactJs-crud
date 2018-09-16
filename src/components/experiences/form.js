import React, { Component } from 'react';
import Alert from '../../containers/alert';
import $ from 'jquery';
import 'bootstrap';

class ExperienceForm extends Component {

  state = {
    id:'',
    title:'',
    description:''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.experience && !this.props.experience) {
      const { title,description } = nextProps.experience;
      this.setState({ title,description});
    }
  }

  componentDidUpdate() {
    if (this.props.experience) {
      $(`#${this.props.modalId}`).modal('show');
    } else {
      $(`#${this.props.modalId}`).modal('hide');
    }
  }

  handleSubmit = (e) => {
    const {title,description} = this.state;
    e.preventDefault();
    this.props.handleSubmit({ title,description });
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { close, modalId, alert } = this.props;
    const { description,title } = this.state;

    return (
      <div className="modal fade in" id={modalId} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Titre</h5>
                <button type="button" className="close" onClick={close}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Alert alert={alert} />
                <div className="form-row">
                  <div className="form-group">
                  <label className="Description" >Titre de poste</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      placeholder="Titre"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="Description" >Description</label>
                    <textarea
                      type="text"
                      name="description"
                      value={description}
                      placeholder="Description"
                      onChange={this.handleOnChange}
                      className="form-control" ></textarea>
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

export default ExperienceForm;
