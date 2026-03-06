const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express4');

const { typeDefs, resolvers } = require('./graphql');

async function start() {
  const app = express();

  app.use('/graphql', (req, res, next) => {
    const requiredKey = process.env.GRAPHQL_API_KEY;
    if (!requiredKey) return next();

    const providedKey = req.header('x-api-key');
    if (providedKey !== requiredKey) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    return next();
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`GraphQL server running at http://localhost:${port}/graphql`);
  });
}

start();
