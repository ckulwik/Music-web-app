export async function graphqlRequest({ endpoint, query, variables }) {
  const apiKey = process.env.REACT_APP_GRAPHQL_API_KEY;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(apiKey ? { 'x-api-key': apiKey } : {}),
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();

  if (!response.ok || json.errors) {
    const message = json?.errors?.map((e) => e.message).join('\n') || response.statusText;
    throw new Error(message);
  }

  return json.data;
}
