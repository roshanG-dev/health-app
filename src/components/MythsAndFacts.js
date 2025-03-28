import React, { useState } from 'react';
import './MythsAndFacts.css';

const MythsAndFacts = ({ mythsAndFacts }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const mythsAndFactss = [
    {
      "myth": "Eating raw vegetables is always healthier than cooked vegetables.",
      "fact": "Cooking some vegetables (like tomatoes and carrots) increases the bioavailability of certain nutrients, such as lycopene and beta-carotene. However, some vitamins (like vitamin C) are heat-sensitive."
    },
    {
      "myth": "Drinking milk is the best way to get strong bones.",
      "fact": "While milk contains calcium, it needs vitamin D and K for proper absorption. Pairing dairy with vitamin D-rich foods (like salmon) and vitamin K sources (like kale) improves bone health."
    },
    {
      "myth": "Spinach is the best source of iron.",
      "fact": "Spinach contains non-heme iron, which is harder to absorb. Pairing it with vitamin C-rich foods (like lemon or bell peppers) improves iron absorption."
    },
    {
      "myth": "All fats are bad for your health.",
      "fact": "Healthy fats (like olive oil, avocado, and nuts) are essential for absorbing fat-soluble vitamins (A, D, E, and K). Avoid trans fats, but don’t fear healthy fats!"
    },
    {
      "myth": "Drinking tea or coffee with meals has no effect on nutrient absorption.",
      "fact": "Tea and coffee contain tannins and polyphenols, which can reduce iron absorption when consumed with meals. It’s best to drink them between meals instead."
    },
    {
      "myth": "Calcium and iron can be taken together for maximum benefit.",
      "fact": "Calcium inhibits iron absorption. If you need both, take them at different meals for better absorption."
    },
    {
      "myth": "Vitamin C is only good for immunity.",
      "fact": "While vitamin C does boost immunity, it also helps with iron absorption, collagen production, and acts as a powerful antioxidant."
    },
    {
      "myth": "You should eat protein alone for better digestion.",
      "fact": "Pairing protein with fiber (like chicken and vegetables) aids digestion and helps maintain stable blood sugar levels."
    },
    {
      "myth": "Bananas and milk make the best post-workout recovery meal.",
      "fact": "While bananas provide carbs and milk has protein, adding a healthy fat source (like peanut butter) improves recovery by sustaining energy and reducing muscle breakdown."
    },
    {
      "myth": "More supplements mean better nutrient absorption.",
      "fact": "Whole foods provide better nutrient synergy than isolated supplements. Some vitamins (like vitamin A and E) can even be toxic in excess when taken as supplements."
    },
    {
      "myth": "You should always eat fruit on an empty stomach for better absorption.",
      "fact": "While some fruits digest quickly, eating them with healthy fats or protein (like berries with yogurt or nuts) can stabilize blood sugar and prolong energy levels."
    },
    {
      "myth": "Carrots are the best source of vitamin A.",
      "fact": "Carrots contain beta-carotene, which the body converts to vitamin A. However, liver, eggs, and dairy provide preformed vitamin A, which is more readily absorbed by the body."
    },
    {
      "myth": "Cooking garlic destroys its health benefits.",
      "fact": "Heat can reduce some active compounds in garlic. However, chopping or crushing garlic and letting it sit for 10 minutes before cooking preserves its allicin content, which boosts immunity and heart health."
    },
    {
      "myth": "Dairy is the only good source of calcium.",
      "fact": "Leafy greens (like kale), almonds, sesame seeds, and tofu are also excellent calcium sources, especially for those who are lactose intolerant or follow a plant-based diet."
    },
    {
      "myth": "More protein means better muscle growth.",
      "fact": "The body can only absorb a certain amount of protein at a time. Pairing protein with healthy carbs (like chicken + sweet potatoes) helps optimize muscle recovery and growth."
    },
    {
      "myth": "Eating citrus fruits erodes tooth enamel, so they should be avoided.",
      "fact": "Citrus fruits contain vitamin C, which is essential for iron absorption and immunity. While excessive acidity can affect enamel, rinsing your mouth with water after eating citrus can prevent damage without losing the health benefits."
    },
    {
      "myth": "Eating too many eggs raises cholesterol levels dangerously.",
      "fact": "Eggs contain dietary cholesterol, but they don’t significantly impact blood cholesterol for most people. Pairing eggs with fiber-rich foods (like whole grains or vegetables) supports heart health."
    },
    {
      "myth": "You should drink water while eating for better digestion.",
      "fact": "Drinking excessive water during meals can dilute stomach acids, slowing digestion. It’s best to sip small amounts if needed and stay hydrated between meals."
    },
    {
      "myth": "Nuts should be avoided because they are high in fat.",
      "fact": "Nuts contain healthy fats, protein, and fiber, which aid in nutrient absorption and heart health. Eating nuts in moderation supports weight management and overall nutrition."
    },
    {
      "myth": "Frozen fruits and vegetables have fewer nutrients than fresh ones.",
      "fact": "Frozen produce is often picked at peak ripeness and quickly frozen, locking in nutrients. In some cases, frozen vegetables retain more vitamins than fresh ones that have been stored for too long."
    }
  ]

  return (
    <div className="myths-facts-container">
      <h1>Myths vs Facts</h1>
      
      {/* Disclaimer */}
      <p className="disclaimer">
        <span className="disclaimer-title">Disclaimer:</span>
        <strong> Click on a myth </strong>
        to reveal the corresponding fact. Each myth is followed by the factual information that clarifies common misconceptions about health and nutrition. This interactive guide aims to educate and inform by breaking down popular myths.
      </p>

      <div className="myth-fact-list">
        {mythsAndFactss.map((item, index) => (
          <div
            key={index}
            className={`myth-fact-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleActive(index)}
          >
            <div className="myth">
              <strong>Myth:</strong> {item.myth}
            </div>
            {activeIndex === index && (
              <div className="fact">
                <strong>Fact:</strong> {item.fact}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MythsAndFacts;
