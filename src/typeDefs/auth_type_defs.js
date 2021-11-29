import { gql } from "apollo-server";

const authTypeDefs = gql`
    type User {
        id: Int!
        username: String!
        first_name: String!
        last_name: String!
        email: String!
        balance: Int
    }

    extend type Mutation {
        newUser(
            username: String!
            first_name: String!
            last_name: String!
            email: String!
            password: String!
        ): User
        newUserWithAccount(
            username: String!
            first_name: String!
            last_name: String!
            email: String!
            password: String!
            balance: Int!
        ): User
    }
`;

export default authTypeDefs;