const express = require("express");
const app = express();
app.use(express.static("public"));
const path = require("path");
app.get("/", (req, res) => {
  res.send(path.resolve(__dirname, "index.html"));
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
  `Running on port ${port}`;
});
