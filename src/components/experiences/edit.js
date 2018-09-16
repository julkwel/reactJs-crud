import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { updateExperienceQuery } from '../../queries/experience';
import Form from './form';

class Edit extends Component {

  state = {
    alert: ''
  }

  handleSubmit = (values) => {
    const { title,description} = values;
    const { experience, mutate, alert, close } = this.props;
    mutate({
      variables: {
        id: experience.id,
        title,
        description,
      }
    })
    .then((res) => {
      alert({
        success: 'Experiences updated!'
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
        modalId="editExperienceModal"
        title="Edit experience"
        handleSubmit={this.handleSubmit}
        experience={this.props.experience}
        close={this.props.close}
        alert={this.state.alert} />
    );
  }
}

export default graphql(updateExperienceQuery)(Edit);
