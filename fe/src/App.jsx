import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./component/Home";
import Subjects from "./component/Subjects";
import Quiz from "./component/Quiz";
import Results from "./component/Results";
import Signup from "./component/Signup";
import Profile from "./component/Profile";
import AdminPanel from "./component/AdminPanel";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/quiz/:subjectId" element={<Quiz />} />
      <Route path="/results/:subjectId" element={<Results />} />
      <Route path="*" element={<Home />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
