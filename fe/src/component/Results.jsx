import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import {
  GaugeCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  Brain,
} from "lucide-react";

import "../styles/Results.css";

const Results = () => {
  const { subjectId } = useParams();
  const location = useLocation();
  const { score, totalQuestions, timeSpent, answers } = location.state || {};

  if (
    score === undefined ||
    totalQuestions === undefined ||
    timeSpent === undefined ||
    !Array.isArray(answers)
  ) {
    return (
      <div className="results-container fallback">
        <h2 className="fallback-heading">Quiz results not found.</h2>
        <p className="fallback-text">Please complete a quiz to see your results.</p>
        <Link to="/subjects">
          <button className="fallback-button">Go to Subjects</button>
        </Link>
      </div>
    );
  }

  const percentage = Math.round((score / totalQuestions) * 100);
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;
  const accuracy = Math.round((score / totalQuestions) * 100);
  let grade = "F";
  if (percentage >= 90) grade = "A";
  else if (percentage >= 80) grade = "B";
  else if (percentage >= 70) grade = "C";
  else if (percentage >= 60) grade = "D";
  else if (percentage >= 50) grade = "E";

  return (
    <div className="results-container">
      {/* Hero Section */}
      <div className="results-hero-section">
        <GaugeCircle className="hero-icon" />
        <h2 className="results-hero-title">Quiz Complete!</h2>
        <p className="results-hero-subtitle">{subjectId} Quiz Results</p>
        <div className="badges">
          <span className="badge red">Grade: {grade}</span>
          <span className="badge">.</span>
        </div>
        <p className="motivation-message">
          Don't give up! Practice makes perfect!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="card">
          <div className="icon-container">
            <GaugeCircle size={24} color="#9333ea" />
          </div>
          <p className="card-title">Score</p>
          <p className="card-value">{percentage}%</p>
          <p className="card-subtext">performance</p>
        </div>

        <div className="card">
          <div className="icon-container">
            <Clock size={24} color="#ec4899" />
          </div>
          <p className="card-title">Time Spent</p>
          <p className="card-value">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </p>
          <p className="card-subtext">minutes</p>
        </div>

        <div className="card">
          <div className="icon-container">
            <CheckCircle size={24} color="#facc15" />
          </div>
          <p className="card-title">Correct</p>
          <p className="card-value">{score}</p>
          <p className="card-subtext">out of {totalQuestions}</p>
        </div>

        <div className="card">
          <div className="icon-container">
            <TrendingUp size={24} color="#22c55e" />
          </div>
          <p className="card-title">Accuracy</p>
          <p className="card-value">{accuracy}%</p>
          <p className="card-subtext">success rate</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="results-action-buttons">
        <Link to={"/subjects"}>
          <button className="results-button primary-button">Try Another Subject</button>
        </Link>

        {/* <Link to="/subjects">
          <button className="results-button outline-button">Try Another Subject</button>
        </Link> */}

        <Link to="/">
          <button className="results-button secondary-button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
