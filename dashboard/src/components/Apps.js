import React from "react";
import "./css/Apps.css"; 

const Apps = () => {
  // Finance apps data
  const financeApps = [
    {
      id: 1,
      name: "Expense Tracker",
      description: "Track your daily spending and manage budgets",
      icon: "💸",
      comingSoon: false
    },
    {
      id: 2,
      name: "Investment Portfolio",
      description: "Monitor your stocks and crypto investments",
      icon: "📈",
      comingSoon: false
    },
    {
      id: 3,
      name: "Bill Reminder",
      description: "Never miss a payment deadline again",
      icon: "⏰",
      comingSoon: false
    },
    {
      id: 4,
      name: "Tax Calculator",
      description: "Estimate your taxes and plan ahead",
      icon: "🧮",
      comingSoon: true
    },
    {
      id: 5,
      name: "Savings Goals",
      description: "Plan and track your financial objectives",
      icon: "🎯",
      comingSoon: false
    },
    {
      id: 6,
      name: "Credit Score Monitor",
      description: "Track and improve your credit rating",
      icon: "📊",
      comingSoon: true
    }
  ];

  return (
    <div className="apps-container">
      <header className="apps-header">
        <h1>Financial Tools</h1>
        <p>Manage your money smarter with these applications</p>
      </header>
      
      <div className="apps-grid">
        {financeApps.map(app => (
          <div key={app.id} className="app-card">
            <div className="app-icon">{app.icon}</div>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            {app.comingSoon ? (
              <span className="coming-soon-badge">Coming Soon</span>
            ) : (
              <button className="app-button">Launch</button>
            )}
          </div>
        ))}
      </div>
      
      <div className="apps-cta">
        <h2>Need a custom financial tool?</h2>
        <button className="primary-button">Request Financial App</button>
      </div>
    </div>
  );
};

export default Apps;
