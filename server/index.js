import express from "express";
import { getJson } from "serpapi";
import { getTextSearchResults } from "./controller/textData.js";
import { getImageSearchResults } from "./controller/imageData.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors(
  {
    origin: '*'
  }
));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/search", async (req, res) => {
  const query = req.query.q;
  console.log(query);

  try {
    const textData = await getTextSearchResults(query);
    const imageData = await getImageSearchResults(query);
    res.send({
      textData,
      imageData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
