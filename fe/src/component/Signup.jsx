import { useState } from "react";
import { Brain, Sparkles, Trophy, Users, BookOpen, Target, X } from "lucide-react";
import "../styles/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // ✅ Store token
      localStorage.setItem("token", data.token);

      alert("Registration successful!");
      // Redirect to home page after successful registration
      window.location.href = "/";
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <button className="close-button" onClick={handleGoHome}>
          <X size={20} />
        </button>
        
        <div className="signup-header">
          <div className="signup-logo">
            <Brain size={32} color="black" />
            <h1>QUIZY</h1>
          </div>
        </div>

        <h2 className="form-title">Start your learning adventure today.</h2>
        {/* <p className="form-description">Start your learning adventure today.</p> */}

        <form onSubmit={handleSignup} className="signup-form">
          <label>
            Full Name
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Write your name here"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Write your email here"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="********"
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              placeholder="********"
              required
            />
          </label>

          <button type="submit" className="signup-button">
            <Users size={16} style={{ marginRight: "6px" }} />
            Join Quizy
          </button>
        </form>

        <div className="features">
          <div className="feature-item">
            <Trophy size={16} color="#f39c12" />
            <span>Achievements</span>
          </div>
          <div className="feature-item">
            <BookOpen size={16} color="#3498db" />
            <span>50+ Subjects</span>
          </div>
          <div className="feature-item">
            <Target size={16} color="#2ecc71" />
            <span>Progress Track</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;