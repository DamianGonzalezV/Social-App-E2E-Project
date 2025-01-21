const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// Serve static files (e.g., index.html, styles, etc.)
app.use(express.static(path.join(__dirname, "html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
