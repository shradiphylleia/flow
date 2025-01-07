import React, { useState } from 'react';
import './Try.css'

function Try() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const symptoms = [
    'Anxiety',
    'Depression',
    'Fatigue',
    'Irritability',
    'Insomnia',
    'Headaches',
    'Lack of Concentration',
    'Overthinking',
  ];

  const handleSymptomClick = (symptom) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((s) => s !== symptom)
        : [...prevSymptoms, symptom] 
    );
  };

  const handleDone = () => {
    console.log('Selected Symptoms:', selectedSymptoms);
  };

  return (
    <div>
      <div className='title'>
        <h2>Select your concerns</h2>
        </div>
      <div className='concern'>
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => handleSymptomClick(symptom)}
            style={{
              marginLeft:'12px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: selectedSymptoms.includes(symptom) ? '#4caf50' : '#f1f1f1',
              color: selectedSymptoms.includes(symptom) ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {symptom}
          </button>
        ))}
      </div>
      <button
        onClick={handleDone}
        style={{
          marginTop: '20px',
          marginLeft:'66vw',
          padding: '10px 36px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
        Done
      </button>
      <div className="flowerconcernpage">
      <img src="src/assets/blueflower.png" alt="flower" style={{marginLeft:'68vw', transform: 'rotate(-24deg)', position: 'absolute', width:'28vw'}} />

      </div>
    </div>

  );
}

export default Try;
