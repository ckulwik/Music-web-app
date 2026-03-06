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

const lambdaOptions = {
  middleware: [
    async (request) => {
      const requiredKey = process.env.GRAPHQL_API_KEY;
      if (!requiredKey) return;

      const event = request && request.event ? request.event : undefined;
      const headers = (event && event.headers) || {};
      const providedKey = headers['x-api-key'] || headers['X-Api-Key'] || headers['X-API-KEY'];

      if (providedKey !== requiredKey) {
        const err = new Error('Unauthorized');
        err.statusCode = 401;
        throw err;
      }
    },
  ],
};

const handlerV1 = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  lambdaOptions
);

const handlerV2 = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  lambdaOptions
);

exports.handler = async (event, context, callback) => {
  // API Gateway HTTP API sets event.version = '2.0'. REST API (and other proxy integrations) won't.
  if (event && event.version === '2.0') {
    return handlerV2(event, context, callback);
  }

  return handlerV1(event, context, callback);
};
