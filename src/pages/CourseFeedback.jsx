import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { submitCourseFeedbackApi } from '../lib/api';
import './FeedbackPage.css'; // Reusing existing styles

const CourseFeedback = () => {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await submitCourseFeedbackApi(courseId, rating, comment);
            // Persist feedback state
            localStorage.setItem(`course_feedback_${courseId}`, 'true');
            navigate('/history');
        } catch (error) {
            alert(error.message || "Failed to submit feedback. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="feedback-page">
            <button onClick={() => navigate('/history')} className="btn-back">
                <ArrowLeft size={16} /> Back to History
            </button>

            <div className="feedback-container">
                <div className="feedback-header">
                    <h1>Course Feedback</h1>
                    <p>Rate your experience with this course.</p>
                </div>

                <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="form-group">
                        <label>Rate Course</label>
                        <div className="rating-input">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`star-btn ${rating >= star ? 'active' : ''}`}
                                    onClick={() => setRating(star)}
                                >
                                    <Star fill={rating >= star ? "currentColor" : "none"} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Comments</label>
                        <textarea
                            id="comment"
                            className="form-control"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                            placeholder="Share your thoughts on the content..."
                        />
                    </div>

                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseFeedback;
