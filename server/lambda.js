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

// Create a single handler that can handle both API Gateway versions
const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);

exports.handler = async (event, context, callback) => {
  console.log('Lambda deployment test - revamp branch');

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.chriskulwikmusic.com',
        'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: ''
    };
  }

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

  // Handle the GraphQL request
  const response = await handler(event, context);

  // Ensure CORS headers are present on all responses
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://www.chriskulwikmusic.com',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Add CORS headers to the response
  if (response.headers) {
    Object.assign(response.headers, corsHeaders);
  } else {
    response.headers = corsHeaders;
  }

  return response;
};
