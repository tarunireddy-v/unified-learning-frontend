import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackPage from './components/FeedbackPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* This makes FeedbackPage the default and only page */}
          <Route path="/" element={<FeedbackPage />} />
          {/* Also handle /feedback explicitly if needed */}
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
