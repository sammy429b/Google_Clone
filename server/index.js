import express from "express";
import { getJson } from "serpapi";
import { getTextSearchResults } from "./controller/textData.js";
import dotenv from "dotenv";
import { getImageSearchResults } from "./controller/imageData.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/search", async (req, res) => {
  const query = req.query.q;
  console.log(query);

  try {
    const textData = await getTextSearchResults(query);
    // res.send(textData);
    const imageData = await getImageSearchResults(query);
    res.send(imageData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
