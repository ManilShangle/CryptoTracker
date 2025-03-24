// src/pages/Pricing/Pricing.jsx
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Our Pricing Plans</h1>
        <p>Choose the plan that suits you best.</p>
      </div>

      <div className="pricing-container">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p className="price">$19.99 / month</p>
          <ul>
            <li>Access to basic features</li>
            <li>Community Support</li>
            <li>1 Cryptocurrency Portfolio</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p className="price">$49.99 / month</p>
          <ul>
            <li>Access to all basic features</li>
            <li>Email Support</li>
            <li>Up to 5 Cryptocurrency Portfolios</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p className="price">$99.99 / month</p>
          <ul>
            <li>All features included</li>
            <li>24/7 Priority Support</li>
            <li>Unlimited Cryptocurrency Portfolios</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>
      </div>

      <div className="pricing-footer">
        <p>Not sure which plan to choose? <a href="#contact">Contact us</a> for guidance.</p>
      </div>
    </div>
  );
};

export default Pricing;
