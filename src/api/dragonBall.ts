import { Character, Planet } from "../types";

const API_BASE_URL = "https://dragonball-api.com/api";

export async function fetchCharacters() {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    if (data.items) {
      return data.items as Character[];
    } else {
      throw new Error("Unexpected API response format.");
    }
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return null;
  }
}

export async function fetchPlanets() {
  try {
    const response = await fetch(`${API_BASE_URL}/planets`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    if (data.items) {
      return data.items as Planet[];
    } else {
      throw new Error("Unexpected API response format.");
    }
  } catch (error) {
    console.error("Failed to fetch planets:", error);
    return null;
  }
}