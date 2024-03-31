import { getJson } from "serpapi";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.SERPAPI_API_KEY; // Corrected environment variable name

export const getTextSearchResults = async (query) => {
  try {
    const result = await getJson({
      engine: "google",
      q: `${query}`,
      location: "india",
      hl: "en",
      gl: "us",
      google_domain: "google.com",
      num: "10",
      start: "10",
      safe: "active",
      api_key: api_key,
    });
    const data = result.organic_results;
    // console.log("data",data)
    return data;
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
};
