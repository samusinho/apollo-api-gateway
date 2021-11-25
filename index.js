import { ApolloServer } from "apollo-server"; 
import AccountAPI from "./src/dataSources/account_api.js";
import resolvers from "./src/resolvers/index.js";
import typeDefs from "./src/typeDefs/index.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountAPI: new AccountAPI()
    })
});

server.listen().then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});

