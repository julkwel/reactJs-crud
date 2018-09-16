import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allExperiencesQuery } from '../../queries/experience';
import ListItem from './listItem.js'

class List extends Component {

  componentWillMount() {
  }

  render() {
    const {loading, error, allExperiences} = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>${error}</div>;
    }
    return (
      <div className="table table-responsive">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Action</th>
                    <th>title</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                
            { allExperiences.map(experience => <ListItem
                key={experience.id}
                experience={experience}
                editExperience={this.props.editExperience}
                alert={this.props.alert} />) }
            </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(allExperiencesQuery)(List);
