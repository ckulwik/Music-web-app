import { useEffect, useState } from 'react';
import { graphqlRequest } from '../graphql/client';
import { GET_SONGS } from '../graphql/schema';

export const useSongs = (category) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await graphqlRequest({
          endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
          query: GET_SONGS,
          variables: { category },
        });
        if (!cancelled) setSongs(data?.songs || []);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [category]);

  return {
    songs,
    loading,
    error
  };
};
