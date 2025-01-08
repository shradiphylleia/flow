const express = require("require");
const bodyParser = require("bpdy-parser");
const cors = require("cors");

const app = express();
const PORT = 5713;

app.use(cors());
app.use(bodyParser.json());

const symptomLandmarks = {
  anxiety: [2, 5, 0], // Large Intestine 4 and Heart 7
  depression: [0], // Pericardium 8
  fatigue: [13], // Ring finger
  irritability: [1, 2, 3], // Lung 10, Pericardium 6, Liver 3
  insomnia: [0], // Wrist landmark
  headaches: [17, 18], // Small Intestine 3, Triple Energizer 3
  overthinking: [0], // Pericardium 6
};


app.post("/symptoms", (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms || !Array.isArray(symptoms)) {
    return res.status(400).json({ error: "Invalid data" });
  }

  console.log("Received symptoms and concerns:", symptoms);


  function getLandmark(selectedSymptoms) {
    const landmarks = new Set(); 
    selectedSymptoms.forEach((symptom) => {
      if (symptomLandmarks[symptom]) {
        symptomLandmarks[symptom].forEach((landmark) => landmarks.add(landmark));
      }
    });
    return Array.from(landmarks); 
  }
  
  const pressurePoint = getLandmark(symptoms);


  console.log("Received symptoms:", symptoms);

  res.status(200).json({
    message: "Symptoms received successfully",
    recommendations: relevantPoints,
  });
});

app.listen(PORT, () => {
  console.log(`Sercer is running on:${PORT}`);
});
