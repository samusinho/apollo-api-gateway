const transactionResolver = {
    Query: {
        transactionsByUsername: async(root, { username }, { dataSources }) => {
            // verificación token
            return await dataSources.accountAPI.transactionsByUsername(username);
        }
    },
    Mutation: {
        newTransaction: async(root, args, { dataSources }) => {
            return await dataSources.accountAPI.newTransaction(args);
        }
    }
}

export default transactionResolver;