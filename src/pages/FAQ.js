import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <section>
        <h2>1. What is Food Synergism?</h2>
        <p>Food synergism is the concept of combining certain foods to enhance nutrient absorption and overall health benefits.</p>

        <h2>2. How do food pairings improve health?</h2>
        <p>Certain food combinations can increase the bioavailability of nutrients, making them more effective in the body.</p>

        <h2>3. Are these pairings suitable for all diets?</h2>
        <p>Yes, the pairings can be adapted to vegetarian, non-vegetarian, and vegan diets.</p>

        <h2>4. Why are some foods better absorbed with others?</h2>
        <p>Some nutrients require specific compounds to be absorbed efficiently. For example, vitamin C enhances the absorption of non-heme iron.</p>

        <h2>5. Can I use these pairings to prevent disease?</h2>
        <p>Yes, proper food pairings can help reduce the risk of chronic diseases like heart disease, diabetes, and osteoporosis.</p>

        {/* Add more questions here */}
      </section>
    </div>
  );
};

export default FAQ;
