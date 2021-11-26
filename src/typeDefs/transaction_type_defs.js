import { gql } from "apollo-server";

const transactionTypeDefs = gql`
    type Transaction {
        id: String!
        usernameOrigin: String!
        usernameDestiny: String!
        value: Int!
        date: String!
    }

    extend type Query {
        transactionsByUsername(username: String!): [Transaction]
    }

    extend type Mutation {
        newTransaction(
            usernameOrigin: String!
            usernameDestiny: String!
            value: Int!
        ): Transaction
    }
`;

export default transactionTypeDefs;