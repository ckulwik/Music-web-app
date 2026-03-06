const { ApolloServer } = require('@apollo/server');
const {
  startServerAndCreateLambdaHandler,
  handlers,
} = require('@as-integrations/aws-lambda');

const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Default to API Gateway HTTP API (v2). If you use REST API (v1), swap to handlers.createAPIGatewayProxyEventRequestHandler().
exports.handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    middleware: [
      async ({ event }) => {
        const requiredKey = process.env.GRAPHQL_API_KEY;
        if (!requiredKey) return;

        const headers = event.headers || {};
        const providedKey = headers['x-api-key'] || headers['X-Api-Key'] || headers['X-API-KEY'];

        if (providedKey !== requiredKey) {
          const err = new Error('Unauthorized');
          err.statusCode = 401;
          throw err;
        }
      },
    ],
  }
);
