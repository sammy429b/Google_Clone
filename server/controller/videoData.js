import { getJson } from "serpapi";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.SERPAPI_API_KEY;

export const getVideoSearchResults = async (query) => {
    try {
        const result = await getJson({
            q: `${query}`,
            engine: "google_videos",
            hl: "en",
            gl: "us",
            api_key: api_key,
        });
        const data = result.images_results;
        // console.log("data",data)
        return data;
    } catch (error) {
        // console.log(error);
        throw new Error(error);
    }
};
