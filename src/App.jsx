import React from 'react';
<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
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
  return (
<<<<<<< HEAD
    <Layout>
      <Routes>
=======
    <BrowserRouter>
      <Layout>
        <Routes>
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
          <Route path="/" element={<LandingPage />} />
          <Route path="/recommendations" element={<RecommendationResultsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/learningprogress" element={<LearningProgress />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/course-feedback/:courseId" element={<CourseFeedback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
<<<<<<< HEAD
=======
    </BrowserRouter>
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
  );
}

export default App;