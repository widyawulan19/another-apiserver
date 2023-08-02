const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(port, () => {
  console.log(`Image server is running on http://localhost:${port}`);
});