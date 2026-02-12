import React, { useState, useEffect } from 'react';
import './LearningProgress.css';

const MOCK_API_RESPONSE = [
    {
        id: 101,
        title: "AI & Machine Learning Basics",
        current_chapter: 5,
        total_chapters: 12,
        time_remaining: "45 mins",
        progress_percentage: 42,
        icon: "🧠",
        action: "Resume"
    },
    {
        id: 102,
        title: "Cloud Infrastructure (AWS)",
        current_chapter: 2,
        total_chapters: 8,
        time_remaining: "1.5 hrs",
        progress_percentage: 25,
        icon: "☁️",
        action: "Resume"
    },
    {
        id: 103,
        title: "Intro to Python for Data Science",
        current_chapter: 9,
        total_chapters: 10,
        time_remaining: "20 mins",
        progress_percentage: 90,
        icon: "🐍",
        action: "Finish"
    }
];

const LearningProgress = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 600));
            setCourses(MOCK_API_RESPONSE);
            setLoading(false);
        };

        fetchCourses();
    }, []);

    return (
        <div className="learning-progress-page">
            <div className="learning-progress-container">
                {/* Page Header */}
                <header>
                    <h1>Learning Progress</h1>
                    <p className="subtitle">Welcome back! Here is an overview of your current learning habits.</p>
                </header>

                {/* Top Stats Row */}
                <section className="stats-grid">
                    {/* 1. Hours Spent */}
                    <div className="card stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">🕒</span>
                            <span>Total Hours</span>
                        </div>
                        <div className="stat-value">42.5h</div>
                        <div className="stat-subtext">▲ 12% vs last week</div>
                    </div>

                    {/* 2. Day Streak */}
                    <div className="card stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">🔥</span>
                            <span>Streak</span>
                        </div>
                        <div className="stat-value">14</div>
                        <div className="stat-subtext">Days in a row</div>
                    </div>

                    {/* 3. Active Courses */}
                    <div className="card stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">📚</span>
                            <span>Active Content</span>
                        </div>
                        <div className="stat-value">3</div>
                        <div className="stat-subtext">Courses in progress</div>
                    </div>

                    {/* 4. Daily Goal */}
                    <div className="card stat-card">
                        <div className="stat-header">
                            <span className="stat-icon">🎯</span>
                            <span>Daily Goal</span>
                        </div>
                        <div className="goal-widget">
                            <div className="goal-row">
                                <span className="goal-current">45m</span>
                                <span className="goal-target">/ 60m</span>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content Stack */}

                {/* Activity Graph */}
                <section className="card">
                    <h2>Learning Activity</h2>
                    <div className="chart-container">
                        <div className="chart-bar-group">
                            <div className="chart-bar" style={{ height: '40%' }}></div>
                            <span className="chart-label">Mon</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="chart-bar" style={{ height: '60%' }}></div>
                            <span className="chart-label">Tue</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="chart-bar" style={{ height: '30%' }}></div>
                            <span className="chart-label">Wed</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="chart-bar active" style={{ height: '85%' }}></div>
                            <span className="chart-label">Thu</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="chart-bar" style={{ height: '50%' }}></div>
                            <span className="chart-label">Fri</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="chart-bar" style={{ height: '20%' }}></div>
                            <span className="chart-label">Sat</span>
                        </div>
                        <div className="chart-bar-group">
                            <div className="chart-bar" style={{ height: '10%' }}></div>
                            <span className="chart-label">Sun</span>
                        </div>
                    </div>
                </section>

                {/* Course Progress List */}
                <section className="card">
                    <h2>Active Courses</h2>
                    <div className="courses-list">
                        {loading ? (
                            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                                Loading courses...
                            </div>
                        ) : courses.length === 0 ? (
                            <div style={{ padding: '1rem' }}>No active courses found.</div>
                        ) : (
                            courses.map(course => (
                                <div key={course.id} className="course-item">
                                    <div className="course-icon">{course.icon}</div>
                                    <div className="course-info">
                                        <div className="course-title">{course.title}</div>
                                        <div className="course-meta">
                                            Chapter {course.current_chapter} of {course.total_chapters} &bull; {course.time_remaining} remaining
                                        </div>
                                        <div className="progress-container">
                                            <div className="progress-bar" style={{ width: `${course.progress_percentage}%` }}></div>
                                        </div>
                                    </div>
                                    <button
                                        className="course-action"
                                        onClick={() => alert(`Resuming ${course.title}...`)}
                                    >
                                        {course.action}
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LearningProgress;
