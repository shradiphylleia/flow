import React, { useState } from 'react';

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
      <h2>Select your concerns</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => handleSymptomClick(symptom)}
            style={{
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
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Done
      </button>
    </div>
  );
}

export default Try;
