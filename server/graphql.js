const { songsData } = require('./songsData');

const typeDefs = `
  type Song {
    id: ID!
    title: String!
    soundcloudUrl: String!
    category: String!
    hoverSpeed: Int!
    color: String!
  }

  type Query {
    songs(category: String): [Song!]!
    song(id: ID!): Song
  }
`;

const resolvers = {
  Query: {
    songs: (_, { category }) => {
      if (category) return songsData.filter((s) => s.category === category);
      return songsData;
    },
    song: (_, { id }) => songsData.find((s) => s.id === id),
  },
};

module.exports = { typeDefs, resolvers };
