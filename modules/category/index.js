const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    category(id: ID!): Category
    categories: [Category]
  }

  extend type Product {
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    category(_, { id }) {
      return {
        id,
        name: "Homeware",
        products: [
          {
            id: Math.round(Math.random() * 1000000),
            name: "Lamp",
            price: 10000
          },
          {
            id: Math.round(Math.random() * 1000000),
            name: "Sofa",
            price: 20000
          }
        ]
      };
    },

    categories() {
      return [
        {
          id: Math.round(Math.random() * 1000000),
          name: "Homeware",
          products: [
            {
              id: Math.round(Math.random() * 1000000),
              name: "Lamp",
              price: 10000
            },
            {
              id: Math.round(Math.random() * 1000000),
              name: "Sofa",
              price: 20000
            }
          ]
        },
        {
          id: Math.round(Math.random() * 1000000),
          name: "Kitchen",
          products: [
            {
              id: Math.round(Math.random() * 1000000),
              name: "Toaster",
              price: 70000
            },
            {
              id: Math.round(Math.random() * 1000000),
              name: "Oven",
              price: 50000
            }
          ]
        }
      ];
    }
  },

  Product: {
    category() {
      return {
        id: Math.round(Math.random() * 1000000),
        name: "Homeware"
      };
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
