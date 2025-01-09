const express = require("require");
const bodyParser = require("bpdy-parser");
const cors = require("cors");

const app = express();
const PORT = 5713;

app.use(cors());
app.use(bodyParser.json());

app.post("/symptoms", (req, res) => {
  const { symptoms } = req.body;
  if (!symptoms || !Array.isArray(symptoms)) {
    return res.status(400).json({ error: "Invalid data" });
  }

  console.log("Received symptoms:", symptoms);
  res.status(200).json({
    message: "Symptoms received successfully",
    recommendations: relevantPoints,
  });
});

app.listen(PORT, () => {
  console.log(`Sercer is running on:${PORT}`);
});
