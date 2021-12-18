const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");

const conectarDB = require("./config/db");
const jwt = require("jsonwebtoken");

// conectar a la base de datos
conectarDB();

// servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers["authorization"] || "";
    if (token) {
      try {
        const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        return {
          usuario,
        };
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    }
  },
});

// arrancar el servidor
server.listen({port: process.env.PORT || 3001}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
