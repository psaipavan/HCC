import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>EmotiTrack</h2>
        <ul>
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <header>
          <h3>Sarah Johnson</h3>
          <h3> Product Designer</h3>
          
        </header>

        <section className="overview">
          <div className="card stress-level">
            <h4>Stress Level</h4>
            <p className="status high">Detected</p>
          </div>

          <div className="card emotion-breakdown">
            <h4>Emotion Breakdown</h4>
            <div className="bar">
              <span style={{ width: "50%" }} className="happy"></span>
            </div>
            <div className="bar">
              <span style={{ width: "30%" }} className="neutral"></span>
            </div>
            <div className="bar">
              <span style={{ width: "20%" }} className="stressed"></span>
            </div>
          </div>

          <div className="card work-mode">
            <h4>Work Mode</h4>
            <p>Focus Time: <strong>4h 30m</strong></p>
            <p>Stress Peaks: <strong>3 times</strong></p>
          </div>
        </section>

        <section className="recommendations">
          <h4>Recommendations</h4>
          <div className="recommendation-card">
            <h5>Take a Break</h5>
            <p>Your stress levels are high. Consider a 15-minute meditation session.</p>
            <a href="#">Start Now</a>
          </div>
          <div className="recommendation-card">
            <h5>Breathing Exercise</h5>
            <p>Try this 5-minute breathing exercise to reduce anxiety.</p>
            <a href="#">Learn More</a>
          </div>
          <div className="recommendation-card">
            <h5>Sleep Better</h5>
            <p>Improve your sleep schedule to reduce stress levels.</p>
            <a href="#">View Tips</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;