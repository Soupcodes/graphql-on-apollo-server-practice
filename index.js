const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  modules: []
});

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
