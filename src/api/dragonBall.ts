const API_BASE_URL = "https://dragonball-api.com/api"

export async function fetchCharacters() {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    return null;
  }
}