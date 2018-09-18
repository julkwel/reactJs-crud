import gql from 'graphql-tag'


export const allFilesQuery = gql `
query allFiles {
    allFiles{
        contentType
        createdAt
        name
        secret
        size
        update
        url
    }
}`;

export const createFileQuery = gql  ` {
    mutation createFile(
        $contentType: String!,
        $createdAt: DateTime!,
        $name: String!,
        $secret: String! @isUnique,
        $size: Int!,
        $updatedAt: DateTime!,
        $url: String! @isUnique,
    ){
        createFile(
        contentType:$contentType
        createdAt:$createdAt
        name:$name
        secret:$secret
        size:$size
        update:$updatedAt
        url:$url
        ){
            contentType
            createdAt
            name
            secret
            size
            update
            url
        }
        
    }
}
`