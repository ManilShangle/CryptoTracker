// src/pages/Feature/Feature.jsx
import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1>Our Key Features</h1>
        <p>Discover the powerful features that make our platform unique and user-friendly.</p>
      </div>

      <div className="feature-container">
        <div className="feature-card">
          <h2>Real-Time Market Data</h2>
          <p>
            Stay up to date with the latest cryptocurrency market trends and prices, updated in real-time.
          </p>
        </div>

        <div className="feature-card">
          <h2>Advanced Charting Tools</h2>
          <p>
            Visualize price movements and analyze market data with our powerful charting tools.
          </p>
        </div>

        <div className="feature-card">
          <h2>Portfolio Management</h2>
          <p>
            Track your investments and manage your cryptocurrency portfolio with ease.
          </p>
        </div>

        <div className="feature-card">
          <h2>24/7 Support</h2>
          <p>
            Our support team is available round the clock to help you with any questions or issues.
          </p>
        </div>
      </div>

      <div className="feature-footer">
        <p>
          Want to learn more? <a href="#contact">Contact us</a> or sign up today!
        </p>
      </div>
    </div>
  );
};

export default Feature;
