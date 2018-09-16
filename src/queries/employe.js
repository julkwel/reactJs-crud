import gql from 'graphql-tag';

export const allEmployesQuery = gql `
    query allEmployes {
        allEmployes {
            id
            age
            nom
            prenom
            poste
            experience
        }
    }
`;

export const createEmployeQuery  = gql `
    mutation createEmploye($age: String!,$experience: String!,$nom: String!,$poste: String!,$prenom: String!){
        createEmploye(age:$age,experience:$experience,nom:$nom,poste:$poste,prenom:$prenom){
            id
            age
            experience
            nom
            poste
            prenom
        }
    }
`;

export const updateEmployeQuery  = gql `
    mutation updateEmploye(
        $id: ID!,
        $age: String!
        $experience: String!
        $nom: String!
        $poste: String!
        $prenom: String!
    ){
        updateEmploye(
            id: $id,
            age:$age,
            experience:$experience,
            nom:$nom,
            poste:$poste,
            prenom:$prenom
        ){
            id,
            age,
            experience
            nom
            prenom
            poste
        }
    }
`;

export const deleteEmployeQuery = gql`
    mutation deleteEmploye($id:ID!){
        deleteEmploye(id:$id){
            id
        }
    }
`;