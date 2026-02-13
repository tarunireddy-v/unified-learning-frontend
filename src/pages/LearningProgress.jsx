import React, { useState, useEffect } from 'react';
import { fetchLearningData } from '../services/learningData';
import './LearningProgress.css';
const LearningProgress = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchLearningData();
                setData(result);
                setError(null);
            } catch (err) {
                setError("Failed to load dashboard data.");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    if (loading) return <div className="dashboard-loading"><div className="spinner"></div></div>;
    if (error) return <div className="dashboard-error">{error}</div>;
    if (!data) return null;
    return (
        <div className="learning-dashboard-container">
            {/* Header Section */}
            <header className="dashboard-header">
                <h1>Learning Progress</h1>
                <p>Welcome back! Here is an overview of your current learning habits.</p>
            </header>
            {/* Section 1: Stat Cards */}
            <section className="stats-grid">
                {/* Card 1: Total Hours */}
                <div className="stat-card">
                    <div className="stat-icon-wrapper">
                        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <h3 className="stat-label">Total Hours</h3>
                    <div className="stat-value">{data.stats?.[0]?.value || "42.5h"}</div>
                    <div className="stat-subtext positive">▲ 12% vs last week</div>
                </div>
                {/* Card 2: Streak */}
                <div className="stat-card">
                    <div className="stat-icon-wrapper">
                        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a7 7 0 0 0 .9 2.8Z" />
                        </svg>
                    </div>
                    <h3 className="stat-label">Streak</h3>
                    <div className="stat-value">{data.stats?.[1]?.value || "14"}</div>
                    <div className="stat-subtext">Days in a row</div>
                </div>
                {/* Card 3: Active Content */}
                <div className="stat-card">
                    <div className="stat-icon-wrapper">
                        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                        </svg>
                    </div>
                    <h3 className="stat-label">Active Content</h3>
                    <div className="stat-value">{data.stats?.[2]?.value || "3"}</div>
                    <div className="stat-subtext">Courses in progress</div>
                </div>
                {/* Card 4: Daily Goal */}
                <div className="stat-card">
                    <div className="stat-icon-wrapper">
                        <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                        </svg>
                    </div>
                    <h3 className="stat-label">Daily Goal</h3>
                    <div className="goal-value-row">
                        <span className="stat-value">{data.stats?.[3]?.value || "45m"}</span>
                        <span className="goal-target"> / {data.stats?.[3]?.target || "60m"}</span>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${data.stats?.[3]?.progress || 75}%` }}></div>
                    </div>
                </div>
            </section>
            {/* Section 2: Learning Activity */}
            <section className="dashboard-section activity-section">
                <h2 className="section-title">Learning Activity</h2>
                <div className="activity-graph-placeholder">
                    <div className="graph-lines">
                        <div className="graph-line"></div>
                        <div className="graph-line"></div>
                        <div className="graph-line"></div>
                    </div>
                    <div className="graph-bars">
                        {/* Mock bars for visual if data is missing, or use data */}
                        {(data.activity || [40, 65, 30, 85, 50, 60, 45]).map((val, idx) => (
                            <div key={idx} className="graph-bar-col">
                                <div className="graph-bar" style={{ height: `${val}%` }}></div>
                                <span className="day-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Section 3: Active Courses */}
            <section className="dashboard-section courses-section">
                <h2 className="section-title">Active Courses</h2>
                <div className="courses-list">
                    {(data.courses || [
                        { title: "AI Fundamentals", subtitle: "Chapter 5 of 12 – 45 mins remaining", progress: 65, type: "brain" },
                        { title: "AWS Cloud Practitioner", subtitle: "Chapter 3 of 8 – 20 mins remaining", progress: 40, type: "cloud" },
                        { title: "Python for Data Science", subtitle: "Chapter 8 of 10 – 15 mins remaining", progress: 85, type: "python" },
                    ]).map((course, index) => (
                        <div key={index} className="course-item">
                            <div className="course-icon-box">
                                {course.type === 'brain' && (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                                    </svg>
                                )}
                                {course.type === 'cloud' && (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.5 19c0-1.7-1.3-3-3-3h-11a4 4 0 0 1-3.8-5 5 5 0 0 1 9.3-2.5 5 5 0 0 1 8.5 1.5c.3 0 .7-.1 1-.1a6 6 0 1 1 0 12h-2.1" />
                                    </svg>
                                )}
                                {course.type === 'python' && (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                )}
                            </div>
                            <div className="course-details">
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-subtitle">{course.subtitle}</p>
                                <div className="course-progress-track">
                                    <div className="course-progress-fill" style={{ width: `${course.progress}%` }}></div>
                                </div>
                            </div>
                            <button className="course-action-btn">
                                {course.progress >= 100 ? 'Finish' : 'Resume'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default LearningProgress;
