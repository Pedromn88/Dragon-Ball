import axios from "axios";

const url = "https://dragonball-api.com/api/";

export async function getCharacters() {
  try {
    const response = await axios.get(url + `characters?limit=30`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

export async function getPlanets() {
  try {
    const response = await axios.get(url + `planets`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

export async function getOneCharacters(id: number) {
  try {
    const response = await axios.get(url + `characters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}
