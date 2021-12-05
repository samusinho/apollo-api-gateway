import { ApolloError } from "apollo-server-errors";

const transactionResolver = {
    Query: {
        transactionsByUsername: async(root, { username }, { dataSources, userToken }) => {
            if (!userToken) {
                throw new ApolloError("No estás autorizado para acceder a esta información", 401);
            }
            if (username == userToken || userToken == "administrador") {
                return await dataSources.accountAPI.transactionsByUsername(username);
            }
            throw new ApolloError("No tienes permitido acceder a esta información", 403);
        }
    },
    Mutation: {
        newTransaction: async(root, args, { dataSources, userToken }) => {
            if (!userToken) {
                throw new ApolloError("No estás autorizado para acceder a esta información", 401);
            }
            return await dataSources.accountAPI.newTransaction(args);
        }
    }
}

export default transactionResolver;