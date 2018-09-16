import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allExperiencesQuery, createExperienceQuery } from '../../queries/experience';
import Form from './form'
class Add extends Component {

  state = {
    alert: ''
  }

  handleSubmit = (values) => {
    const { title,description } = values;
    const { mutate, alert, close } = this.props;

    mutate({
      variables: { title,description},
      refetchQueries: [ { query: allExperiencesQuery }]
    }).then((res) => {
      alert({
        success: 'Experiences created!'
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
      <Form modalId="addExperience" title="Add Experiences"
        handleSubmit={this.handleSubmit}
        experience={this.props.experience}
        close={this.props.close}
        alert={this.state.alert} />
    );
  }
}

export default graphql(createExperienceQuery)(Add);
