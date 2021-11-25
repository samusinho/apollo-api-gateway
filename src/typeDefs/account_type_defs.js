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
`;

export default accountTypeDefs;