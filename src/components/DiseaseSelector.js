import React from 'react';
import './DiseaseSelector.css'; // Add custom styles for the disease selector

const DiseaseSelector = ({ onSelectDisease, diseaseData }) => {
  return (
    <div className="disease-selector">
      <label htmlFor="disease" className="disease-label">Choose a disease:</label>
      <select
        id="disease"
        className="disease-select"
        onChange={(e) => onSelectDisease(e.target.value)}
      >
        <option value="">--Select--</option>
        {diseaseData.map((disease, index) => (
          <option key={index} value={disease}>
            {disease}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DiseaseSelector;
