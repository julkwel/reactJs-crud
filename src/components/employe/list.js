import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allEmployesQuery } from '../../queries/employe';
import ListItem from './listItem.js'

class List extends Component {

  componentWillMount() {
  }

  render() {
    const {loading, error, allEmployes} = this.props.data;
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
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Age</th>
                    <th>Poste</th>
                    <th>Experience</th>
                </tr>
            </thead>
            <tbody>
                
            { allEmployes.map(employe => <ListItem
                key={employe.id}
                employe={employe}
                editEmploye={this.props.editEmploye}
                alert={this.props.alert} />) }
            </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(allEmployesQuery)(List);
