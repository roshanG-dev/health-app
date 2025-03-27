import React from 'react';
import './Pairings.css'; // Add styles for the animations

const Pairings = ({ diseaseData }) => {
  return (
    <div className="pairings-container">
      <h2 className="disease-title">Pairings for Disease: {diseaseData.name}</h2>
      
      <div className="pairings">
        <div className="pairing">
          <h3 className="pairing-title">Vegetarian Pairings</h3>
          {diseaseData.vegetarian_pairings.map((pairing, index) => (
            <div className="pairing-item" key={index}>
              <div className="food-combination">
                <strong>{pairing.foods.join(" + ")}</strong>
              </div>
              <p className="benefit-text">{pairing.benefit}</p>
            </div>
          ))}
        </div>

        <div className="pairing">
          <h3 className="pairing-title">Non-Vegetarian Pairings</h3>
          {diseaseData.non_vegetarian_pairings.map((pairing, index) => (
            <div className="pairing-item" key={index}>
              <div className="food-combination">
                <strong>{pairing.foods.join(" + ")}</strong>
              </div>
              <p className="benefit-text">{pairing.benefit}</p>
            </div>
          ))}
        </div>

        <div className="pairing">
          <h3 className="pairing-title">Vegan Pairings</h3>
          {diseaseData.vegan_pairings.map((pairing, index) => (
            <div className="pairing-item" key={index}>
              <div className="food-combination">
                <strong>{pairing.foods.join(" + ")}</strong>
              </div>
              <p className="benefit-text">{pairing.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pairings;
