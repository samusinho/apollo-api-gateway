const accountResolver = {
    Query: {
        accounts: async(root, args, { dataSources }) => {
            // verificación token
            return await dataSources.accountAPI.accounts();
        },
        accountByUsername: async(root, { username }, { dataSources }) => {
            // verificación token
            return await dataSources.accountAPI.accountByUsername(username);
        }
    },
    Mutation: {
        newAccount: async(root, args, { dataSources }) => {
            return await dataSources.accountAPI.newAccount(args);
        },
        updateAccount: async(root, args, { dataSources }) => {
            return await dataSources.accountAPI.updateAccount(args);
        },
        deleteAccount: async(root, { username }, { dataSources }) => {
            return await dataSources.accountAPI.deleteAccount(username);
        }
    }
}

export default accountResolver;