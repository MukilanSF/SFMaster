const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Import your data
const apexScenarios = require("./data/apexScenarios");
const lwcQuestions = require("./data/lwcQuestions");
const integrationQuestions = require("./data/integrationScenarios");

app.use(cors());

// Endpoints
app.get("/api/apexscenarios", (req, res) => {
  res.json(apexScenarios);
});

app.get("/api/lwcquestions", (req, res) => {
  res.json(lwcQuestions);
});

app.get("/api/integrationscenarios", (req, res) => {
  res.json(integrationQuestions);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
