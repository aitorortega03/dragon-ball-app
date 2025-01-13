import { useEffect, useState } from "react";
import { Character } from "../types";
import { fetchCharacters } from "../api/dragonBall";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      if (data) {
        setCharacters(data.items);
      }
      setLoading(false);
    };

    getCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
    {characters.map((char) => (
      <div key={char.id} className="bg-white rounded shadow p-4">
        <img
          src={char.image}
          alt={char.name}
          className="h-40 w-40 mx-auto object-contain"
        />
        <h2 className="text-center mt-2">{char.name}</h2>
      </div>
    ))}
  </div>
  );
};

export default CharacterList;