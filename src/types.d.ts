export interface Character {
  affiliation: string;
  description: string;
  gender: string;
  id: number;
  image: string;
  ki: string;
  maxKi: string;
  name: string;
  originPlanet: Planet;
  race: string;
  transformations: Transformation[];
}

export interface Planet {
  description: string;
  id: number;
  image: string;
  isDestroyed: boolean;
  name: string;
}

export interface Transformation {
  id: number;
  image: string;
  ki: string;
  name: string;
}