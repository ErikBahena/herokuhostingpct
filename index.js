require("dotenv").config();
const express = require("express");

const server = express();

const PORT = process.env.PORT || 8080;
// endpoints
server.get("/api/users", (req, res) => {
  res.status(200).json([{ id: 1, name: "Erik" }, {  id: 2, name: "Mike" }, {  id: 3, name: "Tommy" }]);
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
