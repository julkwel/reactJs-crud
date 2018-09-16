import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allEmployesQuery, createEmployeQuery } from '../../queries/employe';
import Form from './form'
class Add extends Component {

  state = {
    alert: ''
  }

  handleSubmit = (values) => {
    const { nom,prenom,age,experience,poste } = values;
    const { mutate, alert, close } = this.props;

    mutate({
      variables: { nom,prenom,age,poste,experience},
      refetchQueries: [ { query: allEmployesQuery }]
    }).then((res) => {
      alert({
        success: 'Employe created!'
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
  }

  render() {
    return (
      <Form modalId="addEmployeModal" title="Add Employe"
        handleSubmit={this.handleSubmit}
        employe={this.props.employe}
        close={this.props.close}
        alert={this.state.alert} />
    );
  }
}

export default graphql(createEmployeQuery)(Add);
