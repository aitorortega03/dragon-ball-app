import { useState, useEffect } from 'react';
import { ApiResponse, Character } from '../types';

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        console.log(data)
        setCharacters(data.items);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching characters');
        setLoading(false);
        console.log(err)
      });
  }, []);

  return { characters, loading, error };
};

export default useCharacters;
