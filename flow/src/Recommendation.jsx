import React from 'react';
import { useLocation } from 'react-router-dom';

const recommendationsData = {
  anxiety: "Try practicing deep breathing exercises and apply gentle pressure on the Large Intestine 4 and Heart 7 acupoints.",
  depression: "Consider mindfulness meditation and stimulating the Pericardium 8 point on your palm.",
  fatigue: "Focus on the ring finger area for stress relief and re-energizing.",
  irritability: "Stimulate the Lung 10, Pericardium 6, and Liver 3 points to reduce irritability.",
  insomnia: "Apply gentle pressure to the wrist area (landmark 0) to help calm the mind.",
  headaches: "Use acupressure on the Small Intestine 3 and Triple Energizer 3 points to alleviate headaches.",
  overthinking: "Press on the Pericardium 6 point to relax and refocus your thoughts.",
};

function Recommendations() {
  const location = useLocation();
  const symptoms = location.state?.symptoms || [];

  const getRecommendations = (symptoms) => {
    return symptoms.map((symptom) => ({
      symptom,
      recommendation: recommendationsData[symptom] || "No specific recommendation available.",
    }));
  };

  const recommendations = getRecommendations(symptoms);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recommendations</h1>
      {symptoms.length > 0 ? (
        <div>
          <h2>You mentioned the following concerns:</h2>
          <ul>
            {symptoms.map((symptom, index) => (
              <li key={index} style={{ fontWeight: 'bold' }}>{symptom}</li>
            ))}
          </ul>
          <h2>Recommended Actions:</h2>
          <ul>
            {recommendations.map((item, index) => (
              <li key={index}>
                <strong>{item.symptom}:</strong> {item.recommendation}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No symptoms selected.</p>
      )}
    </div>
  );
}

export default Recommendations;
