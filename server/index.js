const { getJson } = require("serpapi");

getJson({
  engine: "google",
  q: "Fresh Bagels",
//   location: "Seattle-Tacoma, WA, Washington, United States",
  hl: "en",
  gl: "us",
  google_domain: "google.com",
  num: "10",
  start: "10",
  safe: "active",
  api_key: "683d60e39fae6a8e72b87c9d173d5792c574ac685b516ffe8e0a9c768146bf68"
}, (json) => {
  console.log(json["organic_results"]);
});