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

    type Login {
        refresh: String!
        access: String!
    }

    type Message {
        message: String!
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
        deleteUser(id: Int!): Message
        login(
            username: String!
            password: String!
        ): Login!
    }
`;

export default authTypeDefs;