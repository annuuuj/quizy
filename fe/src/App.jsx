import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../src/component/Home'; // Adjust the path based on your file structure
import Subjects from './component/Subjects';
import Quiz from './component/Quiz';
import Results from './component/Results';

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Subjects" element={<Subjects />} />
             <Route path="/Quiz/:subjectId" element={<Quiz />} />
              <Route path="/Results/:subjectId" element={<Results/>} />
        {/* Add more routes below if needed */}
        {/* <Route path="/subjects" element={<Subjects />} /> */}
      </Routes>
  );
};

export default App;
