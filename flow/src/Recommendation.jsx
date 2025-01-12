import React from 'react';
import { useLocation} from 'react-router-dom';
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
  Anxiety: [2, 5, 0],
  Depression: [0], 
  Fatigue: [13], 
  Irritability: [1, 2, 3], 
  Insomnia: [0],
  Headaches: [17, 18], 
  Overthinking: [0],
  'Lack of Concentration':[0]
};

function Recommendations() {
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
      <Button name="overlay" btname="start stimulation" link="assist"   />
      <img className='recoimg' src="src/assets/yellowflower.png" alt="flower graphics"/>
    </div>
  );
}

export default Recommendations;
