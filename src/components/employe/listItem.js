import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { allEmployesQuery, deleteEmployeQuery } from '../../queries/employe';

class ListItem extends Component {

  handleDeleteEmploye = (e) => {
    const { deleteEmploye, employe, alert } = this.props;
    deleteEmploye({
      variables: {
        id: employe.id,
      },
      refetchQueries: [ { query: allEmployesQuery }]
    })
    .then((res) => {
      alert({
        success: 'Employe deleted!'
      });
    }).catch((error) => {
      alert({
        danger: error.message
      });
    });
  }

  handleEditEmploye = () => {
    this.props.editEmploye(this.props.employe);
  }

  render() {
    const employe = this.props.employe;
    return (
            <tr>
              <td>
                <button onClick={this.handleEditEmploye} className="btn btn-primary"><i className="fa fa-edit"></i></button>
                <button onClick={this.handleDeleteEmploye} className="btn btn-danger"><i className="fa fa-trash"></i></button>
              </td>
              <td>{employe.nom}</td>
              <td>{employe.prenom}</td>
              <td>{employe.age}</td>
              <td>{employe.poste}</td>
              <td>{employe.experience}</td>
            </tr>
    );
  }
}

export default compose(
  graphql(deleteEmployeQuery, { name: 'deleteEmploye' }),
)(ListItem);
