import { useNavigate } from "react-router-dom";
import {
  Brain,
  Heart,
  Dumbbell,
  Activity,
  Timer,
  Target,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import "../styles/subjects.css";

const Subjects = () => {
  const navigate = useNavigate();

  // The function now accepts the subjectId as a parameter.
  const handleStartQuiz = (subjectId) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Use the subjectId parameter to create the navigation path.
      navigate(`/Quiz/${subjectId}`); 
    } else {
      // You can redirect to a sign-up page for a better user experience.
      navigate("/signup"); 
    }
  };

  const subjects = [
    {
      id: "anatomy",
      title: "Human Anatomy",
      description: "Learn about the human body systems, muscles, bones, and organs",
      icon: Heart,
      questions: 50,
      difficulty: "Medium",
      estimatedTime: "45 min",
      students: 1234,
      color: "from-pink-500 to-rose-400"
    },
    {
      id: "physiology",
      title: "Exercise Physiology",
      description: "Understand how the body responds and adapts to physical activity",
      icon: Activity,
      questions: 50,
      difficulty: "Hard",
      estimatedTime: "50 min",
      students: 987,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "biomechanics",
      title: "Biomechanics",
      description: "Study the mechanics of body movements and sports techniques",
      icon: Target,
      questions: 50,
      difficulty: "Hard",
      estimatedTime: "55 min",
      students: 756,
      color: "from-green-500 to-emerald-400"
    },
    {
      id: "nutrition",
      title: "Sports Nutrition",
      description: "Master the principles of nutrition for athletic performance",
      icon: Dumbbell,
      questions: 50,
      difficulty: "Medium",
      estimatedTime: "40 min",
      students: 1456,
      color: "from-orange-400 to-yellow-300"
    },
    {
      id: "psychology",
      title: "Sports Psychology",
      description: "Explore mental aspects of sports and exercise performance",
      icon: Brain,
      questions: 50,
      difficulty: "Medium",
      estimatedTime: "45 min",
      students: 892,
      color: "from-purple-500 to-fuchsia-400"
    },
    {
      id: "training",
      title: "Training Methods",
      description: "Learn various training techniques and program design",
      icon: Timer,
      questions: 50,
      difficulty: "Easy",
      estimatedTime: "35 min",
      students: 1678,
      color: "from-teal-400 to-cyan-300"
    }
  ];

  return (
    <div className="subjects-page">
      <section className="subjects-section">
        <div className="section-header">
          <h2 className="section-title">Choose Your Subject</h2>
          <p className="section-description">
            Select a Physical Education topic to test your knowledge with 50 challenging questions
          </p>
        </div>

        <div className="subject-grid">
          {subjects.map(subject => (
            <div className="subject-card" key={subject.id}>
              <div className={`card-top border-t-4 bg-gradient-to-r ${subject.color}`}>
                <div className="subject-icon">
                  <subject.icon className="icon white" />
                </div>
                <span className={`difficulty-badge ${subject.difficulty.toLowerCase()}`}>
                  {subject.difficulty}
                </span>
              </div>
              <h3 className="subject-title">{subject.title}</h3>
              <p className="subject-description">{subject.description}</p>
              <div className="subject-details">
                <div><PlayCircle className="icon" /> {subject.questions} Questions</div>
                <div><Timer className="icon" /> {subject.estimatedTime}</div>
                <div><Users className="icon" /> {subject.students} students</div>
                <div><Star className="icon yellow" /> 4.{Math.floor(Math.random() * 5 + 3)}/5</div>
              </div>
              
              {/* Pass the subject.id into the handleStartQuiz function */}
              <button 
                className="start-btn" 
                onClick={() => handleStartQuiz(subject.id)}> 
                 Start Quiz
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subjects;