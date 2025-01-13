import { useEffect, useState } from "react";
import { Character } from "../types";
import { fetchCharacters } from "../api/dragonBall";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      if (data) {
        setCharacters(data);
      } else {
        setError("Failed to load the characters. Please try again.")
      }
      setLoading(false);
    };

    getCharacters();
  }, []);

  if (loading) return <div className="text-accent text-center">Loading...</div>;
  if (error) return <div className="text-secondary text-center">{error}</div>;
  if (characters.length === 0) return <div className="text-center text-accent">No characters available.</div>;


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {characters.map((char) => (
      <div key={char.id} className="bg-light text-dark rounded shadow p-4">
        <img
          src={char.image}
          alt={char.name}
          className="h-60 w-60 mx-auto object-contain"
        />
        <h2 className="text-center mt-2 text-primary font-name text-3xl font-bold">{char.name}</h2>
      </div>
    ))}
  </div>
  );
};

export default CharacterList;