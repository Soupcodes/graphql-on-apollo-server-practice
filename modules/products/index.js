const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Product {
    id: ID!
    name: string!
    price: Int!
  }
`;

const resolvers = {
  Query: {
    product(_, { id }) {
      return {
        id,
        name: "Lamp",
        price: 10000
      };
    }
  }
};
