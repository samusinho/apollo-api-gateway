import { ApolloError } from "apollo-server-errors";

const authResolver = {
    Query: {
        userInfo: async(root, args, { user }) => {
            if (!user) {
                throw new ApolloError("No estás autorizado para mirar esta información", 401);
            }
            return await user;
        }
    },
    Mutation: {
        newUser: async(root, args, { dataSources }) => {
            return await dataSources.authAPI.newUser(args);
        },
        newUserWithAccount: async(root, args, { dataSources }) => {
            let user;
            try {
                user = await dataSources.authAPI.newUser(args);
                const account = await dataSources.accountAPI.newAccount({
                    username: args.username,
                    balance: args.balance,
                    lastChange: new Date()
                });
                return { ...user, balance: account.balance }
            }
            catch(e) {
                console.log(e);
                if (user) {
                    await dataSources.authAPI.deleteUser(user.id);
                }
                throw new ApolloError("Hubo un error al crear usuario con su respectiva cuenta", 500);
            }
        },
        deleteUser: async(root, { id }, { dataSources, userToken }) => {
            if (!userToken || userToken == "administrador") {
                throw new ApolloError("No estás autorizado para borrar usuarios", 401);
            }
            return await dataSources.authAPI.deleteUser(id);
        },
        login: async(root, args, { dataSources }) => {
            return await dataSources.authAPI.login(args);
        }
    }
};

export default authResolver;