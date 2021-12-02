require("dotenv").config();
const express = require("express");
const path = require("path");

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 8080;

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
// endpoints
server.get("/api/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Erik" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Tommy" },
  ]);
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
