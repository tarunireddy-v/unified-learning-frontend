import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import RecommendationResultsPage from './pages/RecommendationResultsPage';
import HistoryPage from './pages/HistoryPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LearningProgress from './pages/LearningProgress';
import FeedbackPage from './pages/FeedbackPage';
import ProfilePage from './pages/ProfilePage';
import CourseFeedback from './pages/CourseFeedback';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('user') !== null;
  });
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  return (
    <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recommendations" element={<RecommendationResultsPage />} />
        <Route path="/history" element={isLoggedIn ? <HistoryPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <LearningProgress /> : <Navigate to="/login" />} />
        <Route path="/learningprogress" element={<Navigate to="/dashboard" replace />} />
        <Route path="/feedback" element={isLoggedIn ? <FeedbackPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isLoggedIn ? <ProfilePage user={user} /> : <Navigate to="/login" />} />
        <Route path="/course-feedback/:courseId" element={isLoggedIn ? <CourseFeedback /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;