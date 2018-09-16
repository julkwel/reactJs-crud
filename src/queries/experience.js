import gql from 'graphql-tag'

export const allExperiencesQuery = gql `
query allExperiences {
    allExperiences{
        id
        title
        description
    }
}`;

export const updateExperienceQuery = gql `
mutation updateExperience(
    $id: ID!,
    $title: String!
    $description: String!
){
    updateExperience(
        id: $id,
        description:$description,
        title:$title,
    ){
        id,
        description,
        title
    }
}
`;

export const createExperienceQuery = gql `
mutation createExperience($title: String!,$description: String!){
    createExperience(title:$title,description:$description){
        id
        title
        description
    }
}
`;

export const deleteExperienceQuery = gql ` 
mutation deleteExperience ($id:ID!){
    deleteExperience(id:$id){
        id
    }
}
`;