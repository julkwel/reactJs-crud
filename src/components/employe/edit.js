import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { updateEmployeQuery } from '../../queries/employe';
import Form from './form';

class Edit extends Component {

  state = {
    alert: ''
  }

  handleSubmit = (values) => {
    const { nom,prenom,age,experience ,poste} = values;
    const { employe, mutate, alert, close } = this.props;
    mutate({
      variables: {
        id: employe.id,
        nom,
        prenom,
        age,
        experience,
        poste,
      }
    })
    .then((res) => {
      alert({
        success: 'The employe was updated!'
      });
      close();
    }).catch((error) => {
      this.setState({
        alert: {
          type: 'danger',
          message: error.message
        }
      });
    });
  };

  render() {

    return (
      <Form
        modalId="editEmployeModal"
        title="Edit Employe"
        handleSubmit={this.handleSubmit}
        employe={this.props.employe}
        close={this.props.close}
        alert={this.state.alert} />
    );
  }
}

export default graphql(updateEmployeQuery)(Edit);
