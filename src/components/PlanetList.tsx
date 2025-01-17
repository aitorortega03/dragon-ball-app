import { useEffect, useState } from "react";
import { Planet } from "../types";
import { fetchPlanets } from "../api/dragonBall";

const PlanetList: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await fetchPlanets();
      if (data) {
        setPlanets(data);
      } else {
        setError("Failed to load the planets. Please try again.")
      }
      setLoading(false);
    };

    getPlanets();
  }, []);

  if (loading) return <div className="text-accent text-center">Loading...</div>;
  if (error) return <div className="text-secondary text-center">{error}</div>;
  if (planets.length === 0) return <div className="text-center text-accent">No planets available.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {planets.map((planet) => (
        <div key={planet.id} className={`text-dark rounded shadow p-4 ${
          planet.isDestroyed ? "bg-red-200" : "bg-light"
        }`}>
          <img
          src={planet.image}
          alt={planet.name}
          className="h-60 w-60 mx-auto object-contain"
        />
          <h2 className="text-center mt-2 text-primary font-name text-3xl font-bold">{planet.name}</h2>
          <p className="text-center text-sm font-name">{planet.description}</p>
        </div>
      ))}
    </div>
  )
}
export default PlanetList;
