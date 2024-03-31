import { getJson } from "serpapi";
import dotenv from "dotenv";
dotenv.config();

const api_key = process.env.SERPAPI_API_KEY;
export const getImageSearchResults = async (query) => {
    try {
        const result = await getJson({
            engine: "google_images",
            q: `${query}`,
            hl: "en",
            gl: "us",
            tbs: "il:cl",
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
