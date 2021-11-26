import { gql } from "apollo-server";

const accountTypeDefs = gql`
    type Account {
        username: String!
        balance: Int!
        lastChange: String!
    }

    type Query {
        accounts: [Account]
        accountByUsername(username: String!): Account
    }

    type Mutation {
        newAccount(
            username: String!
            balance: Int!
            lastChange: String!
        ): Account
        updateAccount(
            username: String!
            balance: Int!
        ): Account
        deleteAccount(username: String!): Account
    }
`;

export default accountTypeDefs;