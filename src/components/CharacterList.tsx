import { useEffect, useState } from "react";
import { Character } from "../types";
import { fetchCharacters } from "../api/dragonBall";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      setError(null);

      const data = await fetchCharacters();
      if (data) {
        setCharacters(data);
      } else {
        setError("Failed to load characters. Please try again.");
      }
      setLoading(false);
    };

    getCharacters();
  }, []);

  if (loading) return <div className="text-accent text-center">Loading...</div>;
  if (error) return <div className="text-secondary text-center">{error}</div>;
  if (characters.length === 0) return <div className="text-center text-accent">No characters available.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 font-name">
      {characters.map((char) => (
        <div key={char.id} className="card bg-light shadow-xl hover:shadow-2xl hover:shadow-light transition-shadow">
          <figure className="px-10 pt-10">
            <img
              src={char.image}
              alt={char.name}
              className="rounded-xl h-60 w-60 object-contain"
            />
          </figure>
          <hr className="border-t border-primary" />
          <div className="card-body bg-sky-950 p-6 rounded-b-xl">
            <h2 className="card-title font-sans text-2xl text-light">{char.name}</h2>
            <p className="text-secondary">Gender: <span className="text-light">{char.gender}</span></p>
            <p className="text-secondary">Base Ki: <span className="text-light">{char.ki}</span></p>
            <p className="text-secondary">Max Ki: <span className="text-light">{char.maxKi}</span></p>
            <p className="text-secondary">Affiliation: <span className="text-light">{char.affiliation}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
