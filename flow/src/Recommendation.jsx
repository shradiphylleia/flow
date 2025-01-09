import React from 'react';
import { useLocation } from 'react-router-dom';
import './Recommendation.css';

import Button from './Button.jsx';

const recommendationsData = {
  Anxiety: "Try practicing deep breathing exercises and apply gentle pressure on the Large Intestine 4 and Heart 7 acupoints.",
  Depression: "Consider mindfulness meditation and stimulating the Pericardium 8 point on your palm.",
  Fatigue: "Focus on the ring finger area for stress relief and re-energizing.",
  Irritability: "Stimulate the Lung 10, Pericardium 6, and Liver 3 points to reduce irritability.",
  Insomnia: "Apply gentle pressure to the wrist area (landmark 0) to help calm the mind.",
  Headaches: "Use acupressure on the Small Intestine 3 and Triple Energizer 3 points to alleviate headaches.",
  Overthinking: "Press on the Pericardium 6 point to relax and refocus your thoughts.",
  'Lack of Concentration': "Press on the Pericardium 6 point to relax and refocus your thoughts."
};

const symptomLandmarks = {
  Anxiety: [2, 5, 0], // Large Intestine 4 and Heart 7
  Depression: [0], // Pericardium 8
  Fatigue: [13], // Ring finger
  Irritability: [1, 2, 3], // Lung 10, Pericardium 6, Liver 3
  Insomnia: [0], // Wrist landmark
  Headaches: [17, 18], // Small Intestine 3, Triple Energizer 3
  Overthinking: [0], // Pericardium 6
  'Lack of Concentration':[0]
};

function Recommendations() {
  //data passed from navigation(Symptoms)
  const location = useLocation();
  const symptoms = location.state?.symptoms || [];

  const getRecommendations = (symptoms) => {
    return symptoms.map((symptom) => ({
      symptom,
      recommendation: recommendationsData[symptom] || "No specific recommendation available.",
      landmarks: symptomLandmarks[symptom] || [], 
    }));
  };

  const recommendations = getRecommendations(symptoms);

  return (
    <div className='recoContainer'>
      <h1>Recommendations</h1>
      {symptoms.length > 0 ? (
        <div className='concernContainer'>
          <h2>You mentioned the following concerns:</h2>
          <ul>
            {symptoms.map((symptom, index) => (
              <li key={index} style={{ fontWeight: 'bold' }}>{symptom}</li>
            ))}
          </ul>
          <h2>Recommended Actions and Pressure Points:</h2>
          <ul>
            {recommendations.map((item, index) => (
              <li key={index}>
                <strong>{item.symptom}:</strong> {item.recommendation}
                <br />
                <strong>Landmarks:</strong> {item.landmarks.length > 0 ? item.landmarks.join(', ') : 'None'}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No symptoms selected.</p>
      )}
      <Button name='overlay' btname='start stimulation' link='assist'></Button>      
      <img className='recoimg' src="src/assets/yellowflower.png" alt="flower graphics"/>
    </div>
  );
}

export default Recommendations;
