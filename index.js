const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
