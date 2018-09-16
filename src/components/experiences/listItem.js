import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { allExperiencesQuery, deleteExperienceQuery } from '../../queries/experience';

class ListItem extends Component {

  handleDeleteExperience = (e) => {
    const { deleteExperience, experience, alert } = this.props;
    deleteExperience({
      variables: {
        id: experience.id,
      },
      refetchQueries: [ { query: allExperiencesQuery }]
    })
    .then((res) => {
      alert({
        success: 'Experience deleted!'
      });
    }).catch((error) => {
      alert({
        danger: error.message
      });
    });
  }

  handleEditExperience = () => {
    this.props.editExperience(this.props.experience);
  }

  render() {
    const experience = this.props.experience;
    return (
            <tr>
              <td>
                <button onClick={this.handleEditExperience} className="btn btn-primary"><i className="fa fa-edit"></i></button>
                <button onClick={this.handleDeleteExperience} className="btn btn-danger"><i className="fa fa-trash"></i></button>
              </td>
              <td>{experience.title}</td>
              <td>{experience.description}</td>
            </tr>
    );
  }
}

export default compose(
  graphql(deleteExperienceQuery, { name: 'deleteExperience' }),
)(ListItem);
