const transactionResolver = {
    Query: {
        transactionsByUsername: async(root, { username }, { dataSources }) => {
            // verificación token
            return await dataSources.accountAPI.transactionsByUsername(username);
        }
    }
}

export default transactionResolver;