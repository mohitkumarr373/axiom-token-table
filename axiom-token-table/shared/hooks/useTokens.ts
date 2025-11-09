import { useState, useEffect } from 'react';
import { tokenSeed } from '../../entities/token/mock';

export function useTokens() {
  const [data, setData] = useState(tokenSeed);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(tokenSeed);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, isLoading, error };
}
