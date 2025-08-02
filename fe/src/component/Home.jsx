import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  BarChart3,
  PlayCircle,
  Brain,
  Target,
  Zap,
  Clock,
  Star
} from "lucide-react";
import "../styles/Home.css"; // Importing the external CSS file

// Custom Typewriter component to replace the external library
const Typewriter = ({ words, loop = 0, typeSpeed = 70, deleteSpeed = 50, delaySpeed = 1500 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      const isTypingComplete = !isDeleting && text === currentWord;
      const isDeletingComplete = isDeleting && text === '';

      if (isTypingComplete) {
        setIsDeleting(true);
        timeoutId = setTimeout(handleTyping, delaySpeed);
      } else if (isDeletingComplete) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeoutId = setTimeout(handleTyping, 500); // Small pause before typing next word
      } else {
        timeoutId = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
      }
    };

    timeoutId = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return <>{text}<span className="cursor">_</span></>;
};

const Home = () => {
  const navigate = useNavigate();

  // Function to handle the profile button click.
  // It checks for a token in local storage to determine
  // if the user is authenticated.
  const handleProfileClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // If the token exists, navigate to the user's profile page.
      navigate("/profile");
    } else {
      // If no token is found, redirect to the sign-up page.
      navigate("/signup");
    }
  };

  // Data for the benefits section.
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
          {/* onClick handler for profile button */}
          <button onClick={handleProfileClick}>Profile</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title">
          <Typewriter
            words={['Master Physical Education', 'Boost Your Memory', 'Learn with Fun!']}
            loop={0}
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
