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
    }
}

export default accountResolver;