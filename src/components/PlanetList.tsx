import { useEffect, useState } from "react";
import { Planet } from "../types";
import { fetchPlanets } from "../api/dragonBall";

const PlanetList: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlanets = async () => {
      setLoading(true);
      setError(null);

      const data = await fetchPlanets();
      if (data) {
        setPlanets(data);
      } else {
        setError("Failed to load the planets. Please try again.");
      }
      setLoading(false);
    };

    getPlanets();
  }, []);

  if (loading) return <div className="text-accent text-center">Loading...</div>;
  if (error) return <div className="text-secondary text-center">{error}</div>;
  if (planets.length === 0) return <div className="text-center text-accent">No planets available.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 font-name">
      {planets.map((planet) => (
        <div
          key={planet.id}
          className={`card shadow-xl hover:shadow-2xl hover:shadow-light transition-shadow ${
            planet.isDestroyed ? "bg-red-300 text-light" : "bg-light"
          }`}
        >
          <figure className="px-10 pt-10">
            <img
              src={planet.image}
              alt={planet.name}
              className="rounded-xl h-60 w-60 object-contain"
            />
          </figure>
          <hr className="border-t border-primary" />
          <div className="card-body bg-dark p-6 rounded-b-xl">
            <h2 className="card-title font-sans text-xl sm:text-2xl lg:text-3xl text-light">{planet.name}</h2>
            <p className="text-secondary text-sm">{planet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanetList;
