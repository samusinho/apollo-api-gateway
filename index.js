import { ApolloServer, gql } from "apollo-server"; 
import axios from "axios";

const movies = [{ // API rest, DB
    Title: "Superman",
    Description: "Película superman",
    Released: "22 de noviembre de 2021",
    Director: "Pepito perez",
    Genre: "Acción"
}, {
    Title: "Iron man",
    Description: "Película iron man",
    Released: "10 de septiembre de 2000",
    Director: "Pepito perez",
    Genre: "Acción"
}, {
    Title: "Spiderman",
    Description: "Película spiderman",
    Released: "11 de junio de 2013",
    Director: "Pepito perez",
    Genre: "Acción"
}];

const serverUrl = "http://www.omdbapi.com?apikey=42af3ea1";

// type Movie {
//     Title: String!
//     Description: String!
//     Released: String!
//     Recent: String!
//     others: Others!
// }
// type Others {
//     Director: String!
//     Genre: String!
// }

const typeDefs = gql`
    type Data {
        movie: Movie
        error: Error
    }

    type Error {
        Response: String!
        Error: String!
    }

    type Movie {
        Title: String!
        Year: String!
        Released: String!
        Runtime: String!
        Genre: String!
        Director: String!
        Writer: String!
        Actors: String!
        Plot: String!
    }

    type Query {
        movieCount: Int!
        allMovies: [Movie]!
        findMovie(name: String!): Movie
        getMovie(id: String!): Data!
        searchMovies(name: String!): [Movie]
    }

    type Mutation {
        addMovie(
            Title: String!
            Description: String!
            Released: String!
            Director: String!
            Genre: String!
        ): Movie
        editMovie(
            Title: String!
            Description: String
            Released: String
            Director: String
            Genre: String
        ): Movie
    }
`;

const resolvers = {
    Query: {
        movieCount: () => movies.length,
        allMovies: () => movies,
        findMovie: (root, args) => {
            const { name } = args;
            return movies.find(movie => movie.Title.toLowerCase() === name.toLowerCase())
        },
        getMovie: async(root, args) => {
            const { id } = args;
            const resp = await axios.get(`${serverUrl}&i=${id}`);
            if (resp.data.Response == "False") {
                return { error: resp.data }
            }
            return { movie: resp.data };
        },
        searchMovies: async(root, args) => {
            const { name } = args;
            const resp = await axios.get(`${serverUrl}&s=${name}`);
            console.log(resp);
            return resp.data.Search;            
        }
    },
    // Movie: {
    //     Recent: (root) => {
    //         const array = root.Released.split(' ');
    //         const year = array[array.length - 1];
    //         return parseInt(year) >= 2015 ? "Reciente" : "No es reciente"
    //     },
    //     others: (root) => {
    //         return {
    //             Director: root.Director,
    //             Genre: root.Genre
    //         }
    //     }
    // },
    Mutation: {
        addMovie: (root, args) => {
            const movie = args;
            movies.push(movie);
            return movie;
        },
        editMovie: (root, args) => {
            const index = movies.findIndex(movie => movie.Title.toLowerCase() === args.Title.toLowerCase());
            const movie = { ...movies[index] };
            for (let i in args) {
                if (args[i] != movie[i] && i != 'Title') movie[i] = args[i];
            }
            movies[index] = movie;
            return movie;
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({url}) => {
    console.log(`Servidor corriendo en ${url}`);
});

