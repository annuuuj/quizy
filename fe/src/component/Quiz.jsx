import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  AlarmClock,
  FileText,
  Flag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "../styles/Quiz.css";

const Quiz = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(45 * 60);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/questions/${subjectId}`);
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid questions format");
        }

        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        setQuestions([]);
      }
    };

    fetchQuestions();
  }, [subjectId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [questions]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setShowExplanation(false);
    }
  };

  const handleFinishQuiz = () => {
    const confirmed = window.confirm("\u26a0\ufe0f Are you sure you want to finish the quiz?\n\nOnce submitted, you cannot change your answers.");
    if (!confirmed) return;

    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    navigate(`/Results/${subjectId}`, {
      state: {
        score,
        totalQuestions: questions.length,
        timeSpent: 45 * 60 - timeRemaining,
        answers: selectedAnswers,
      },
    });
  };

  if (!questions.length) {
    return (
      <div className="quiz-container">
        <h2>No questions available for "{subjectId}"</h2>
        <button onClick={() => navigate("/subjects")}>Back to Subjects</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="top-row">
          <button className="exit-button" onClick={() => navigate("/subjects")}> <ArrowLeft size={22} /></button>
          <div className="quiz-meta">
            <span className="badge"><AlarmClock size={16} style={{ marginRight: 4 }} />{formatTime(timeRemaining)}</span>
            <span className="badge">
              <FileText size={16} style={{ marginRight: 4 }} />
              {selectedAnswers.filter((ans) => ans !== undefined).length}/{questions.length} Answered
            </span>
          </div>
        </div>
        <div className="quiz-progress">
          <div
            className="quiz-progress-bar"
            style={{
              width: `${(selectedAnswers.filter((a) => a !== undefined).length / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <main className="quiz-main">
        <h2>{subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}</h2>
        <div className="question-card">
          <div className="question-title">Question {currentQuestion + 1}</div>
          <div className="question-text">{questions[currentQuestion].question}</div>

          <div className="options-list">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedAnswers[currentQuestion] === index ? "selected" : ""}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="option-label">{String.fromCharCode(65 + index)}</span> {option}
              </button>
            ))}
          </div>

          {selectedAnswers[currentQuestion] !== undefined && (
            <button className="show-explanation" onClick={() => setShowExplanation((prev) => !prev)}>
              <Flag size={16} style={{ marginRight: 6 }} /> Show Explanation
            </button>
          )}

          {showExplanation && (
            <div className="explanation-box">
              <strong>Explanation:</strong> {questions[currentQuestion].explanation}
            </div>
          )}

          <div className="quiz-navigation">
            <button className="prev-button" onClick={handlePrevious} disabled={currentQuestion === 0}>
              <ChevronLeft size={16} /> Previous
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button className="next-button" onClick={handleNext}>Next <ChevronRight size={16} /></button>
            ) : (
              <button className="finish-button" onClick={handleFinishQuiz}>Finish Quiz</button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
