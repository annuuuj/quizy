import React, { useState } from "react";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  const [subjects, setSubjects] = useState([
    "anatomy",
    "physiology",
    "biomechanics",
    "nutrition",
    "psychology",
    "training",
  ]);
  const [newSubject, setNewSubject] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");

  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleAddSubject = () => {
    const trimmed = newSubject.trim().toLowerCase();
    if (!trimmed) return alert("Subject name cannot be empty.");
    if (subjects.includes(trimmed)) return alert("Subject already exists.");

    setSubjects((prev) => [...prev, trimmed]);
    setNewSubject("");
    alert(`Subject "${trimmed}" added successfully.`);
  };

  const handleSubmit = async () => {
    if (!subject || !question || correctAnswer === null || options.includes("")) {
      alert("Please complete all fields.");
      return;
    }

    const newQuestion = {
      subjectId: subject,
      question,
      options,
      correctAnswer,
      explanation,
    };

    try {
      const res = await fetch(`http://localhost:5000/api/admin/add-question`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Question added successfully!");
        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectAnswer(null);
        setExplanation("");
      } else {
        alert(data.message || "Failed to add question.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add New Question</h2>

      <label>Subject</label>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">-- Select Subject --</option>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>
            {subj.charAt(0).toUpperCase() + subj.slice(1)}
          </option>
        ))}
      </select>

      <div className="add-subject-container">
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="Add new subject..."
        />
        <button type="button" onClick={handleAddSubject}>
          Add Subject
        </button>
      </div>

      <label>Question</label>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />

      <label>Options</label>
      {options.map((opt, i) => (
        <div key={i} className="option-input">
          <input
            type="text"
            value={opt}
            onChange={(e) => handleOptionChange(i, e.target.value)}
            placeholder={`Option ${String.fromCharCode(65 + i)}`}
          />
          <input
            type="radio"
            name="correct"
            checked={correctAnswer === i}
            onChange={() => setCorrectAnswer(i)}
          />
          Correct
        </div>
      ))}

      <label>Explanation (optional)</label>
      <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} />

      <button onClick={handleSubmit}>Add Question</button>
    </div>
  );
};

export default AdminPanel;
