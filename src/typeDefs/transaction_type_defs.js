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
`;

export default transactionTypeDefs;