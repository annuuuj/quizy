import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import {
  BookOpen,
  BarChart3,
  PlayCircle,
  Brain,
  Target,
  Zap,
  Trophy,
  Clock,
  Star
} from "lucide-react";

const Home = () => {
  const benefits = [
    {
      title: "Boost Your Memory",
      description: "Regular quizzing helps improve long-term retention by 30%",
      icon: <Brain className="benefit-icon" />,
    },
    {
      title: "Identify Knowledge Gaps",
      description: "Pinpoint exactly what you need to study more effectively",
      icon: <Target className="benefit-icon" />,
    },
    {
      title: "Active Learning",
      description: "Engage your brain actively instead of passive reading",
      icon: <Zap className="benefit-icon" />,
    },
    {
      title: "Track Progress",
      description: "See your improvement over time with detailed analytics",
      icon: <BarChart3 className="benefit-icon" />,
    },
    {
      title: "Time Management",
      description: "Learn to think quickly and manage time during exams",
      icon: <Clock className="benefit-icon" />,
    },
    {
      title: "Build Confidence",
      description: "Practice makes perfect - boost your exam confidence",
      icon: <Star className="benefit-icon" />,
    }
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
        <Brain className="benefit-icon" />
          <h1 className="logo-text">QUIZY</h1>
        </div>
        <div className="header-right">
          <span>Welcome, Student!</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
    <h2 className="hero-title">
  <Typewriter
    words={['Master Physical Education', 'Boost Your Memory', 'Learn with Fun!']}
    loop={0}
    cursor
    cursorStyle="_"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h2>
        <p className="hero-desc">Transform your learning with interactive quizzes that make studying fun, effective, and engaging!</p>
        <div className="hero-buttons">
          <Link to="/Subjects">
            <button className="primary-btn">
              <PlayCircle className="icon" />
              Start Quiz Journey
            </button>
          </Link>
          <button className="outline-btn">
            <BarChart3 className="icon" />
            View Progress
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h3 className="section-title">Why Quizzing Transforms Your Studies</h3>
        <p className="section-desc">Discover the science-backed benefits of interactive learning that help you excel in your studies</p>
        <div className="card-grid">
          {benefits.map((benefit, index) => (
            <div className="card" key={index}>
              <div className="card-icon">{benefit.icon}</div>
              <h4 className="card-title">{benefit.title}</h4>
              <p className="card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h3>Ready to Excel in Your Studies?</h3>
        <p>Join thousands of students who've improved their grades with Quizy</p>
        <Link to="/subjects">
          <button className="cta-btn">
            <BookOpen className="icon" />
            Browse Subjects
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
