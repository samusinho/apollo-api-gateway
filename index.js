import { ApolloServer, gql } from "apollo-server"; 

const movies = [{ // API rest, DB
    Title: "Superman",
    Description: "Película superman",
    Released: "22 de noviembre de 2021"
}, {
    Title: "Iron man",
    Description: "Película iron man",
    Released: "10 de septiembre de 2021"
}, {
    Title: "Spiderman",
    Description: "Película spiderman",
    Released: "11 de junio de 2021"
}];

const typeDefs = gql`
    type Movie {
        Title: String!
        Description: String!
        Released: String!
    }

    type Query {
        movieCount: Int!
        allMovies: [Movie]!
        findMovie(name: String!): Movie
    }
`;

const resolvers = {
    Query: {
        movieCount: () => movies.length,
        allMovies: () => movies,
        findMovie: (root, args) => {
            const { name } = args;
            return movies.find(movie => movie.Title.toLowerCase() === name)
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});

