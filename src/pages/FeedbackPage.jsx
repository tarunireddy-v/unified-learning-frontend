import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import './FeedbackPage.css';

const FeedbackPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        category: 'general',
        rating: 0,
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRating = (ratingValue) => {
        setFormData(prev => ({
            ...prev,
            rating: ratingValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Feedback Submitted:', formData);
        alert('Thank you for your feedback!');
        navigate('/'); // Go back to dashboard
    };

    return (
        <div className="feedback-page">
            <button onClick={() => navigate('/')} className="btn-back">
                <ArrowLeft size={16} /> Back to Dashboard
            </button>

            <div className="feedback-container">
                <div className="feedback-header">
                    <h1>We Value Your Feedback</h1>
                    <p>Help us improve your learning experience.</p>
                </div>

                <form onSubmit={handleSubmit} className="feedback-form">


                    <div className="form-group">
                        <label htmlFor="category">Feedback Category</label>
                        <select
                            id="category"
                            name="category"
                            className="form-control"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="general">General Inquiry</option>
                            <option value="bug">Report a Bug</option>
                            <option value="feature">Feature Request</option>
                            <option value="course">Course Content</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Rate Your Experience</label>
                        <div className="rating-input">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`star-btn ${formData.rating >= star ? 'active' : ''}`}
                                    onClick={() => handleRating(star)}
                                >
                                    <Star fill={formData.rating >= star ? "currentColor" : "none"} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Comments</label>
                        <textarea
                            id="comment"
                            name="comment"
                            className="form-control"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                            placeholder="Tell us what you think..."
                        />
                    </div>

                    <button type="submit" className="btn-submit">
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackPage;
