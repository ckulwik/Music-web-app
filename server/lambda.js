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

const handlerV1 = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    middleware: [() => ({ req, res }) => {
      res.setHeader('Access-Control-Allow-Origin', 'https://www.chriskulwikmusic.com');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    }]
  }
);

const handlerV2 = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    middleware: [() => ({ req, res }) => {
      res.setHeader('Access-Control-Allow-Origin', 'https://www.chriskulwikmusic.com');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    }]
  }
);

exports.handler = async (event, context, callback) => {
  // Simple API key check outside of Apollo middleware to avoid shape issues
  const requiredKey = process.env.GRAPHQL_API_KEY;
  if (requiredKey) {
    const headers = event.headers || {};
    const providedKey = headers['x-api-key'] || headers['X-Api-Key'] || headers['X-API-KEY'];
    if (providedKey !== requiredKey) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Unauthorized' }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://www.chriskulwikmusic.com',
          'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
      };
    }
  }

  // API Gateway HTTP API sets event.version = '2.0'. REST API (and other proxy integrations) won't.
  if (event && event.version === '2.0') {
    return handlerV2(event, context, callback);
  }

  return handlerV1(event, context, callback);
};
