import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Select from '../components/Select';

const AskPage = () => {
    const navigate = useNavigate();
    const [question, setQuestion] = useState('');
    const [filters, setFilters] = useState({
        level: 'intermediate',
        type: 'video',
        goal: 'job',
        time: 'medium',
    });

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const handleSearch = () => {
        navigate('/recommendations');
    };

    return (
        <div className="max-w-xl mx-auto w-full pt-4">
            <div className="space-y-4 mb-8 text-center">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">Define Your Goal</h1>
                <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    Tell us what you want to learn. We'll curate the highest quality resources for you.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.02)] border border-slate-100 p-6 space-y-6 relative overflow-hidden">
                {/* Subtle top decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-sky-200 to-slate-200 opacity-50"></div>

                {/* Main Input */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">
                            Learning Goal
                        </label>
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="e.g. I want to build a production-ready SaaS with Next.js..."
                            className="
                    w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3
                    text-slate-800 placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 focus:bg-white
                    transition-all min-h-[100px] resize-none text-sm leading-relaxed
                  "
                        />
                    </div>

                    {/* Filters Grid */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                        <Select
                            label="Expertise"
                            value={filters.level}
                            onChange={(e) => handleFilterChange('level', e.target.value)}
                            options={[
                                { value: 'beginner', label: 'Beginner' },
                                { value: 'intermediate', label: 'Intermediate' },
                                { value: 'advanced', label: 'Advanced' },
                            ]}
                        />
                        <Select
                            label="Format"
                            value={filters.type}
                            onChange={(e) => handleFilterChange('type', e.target.value)}
                            options={[
                                { value: 'video', label: 'Video Course' },
                                { value: 'book', label: 'Book' },
                                { value: 'interactive', label: 'Interactive' },
                            ]}
                        />
                        <Select
                            label="Motivation"
                            value={filters.goal}
                            onChange={(e) => handleFilterChange('goal', e.target.value)}
                            options={[
                                { value: 'job', label: 'Career Switch' },
                                { value: 'project', label: 'Side Project' },
                                { value: 'exam', label: 'Certification' },
                                { value: 'curiosity', label: 'Pure Interest' },
                            ]}
                        />
                        <Select
                            label="Availability"
                            value={filters.time}
                            onChange={(e) => handleFilterChange('time', e.target.value)}
                            options={[
                                { value: 'short', label: 'Weekend' },
                                { value: 'medium', label: 'Month' },
                                { value: 'long', label: 'Deep Dive' },
                            ]}
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <Button
                        variant="primary"
                        onClick={handleSearch}
                        className="w-full justify-center h-11 text-sm shadow-xl shadow-slate-900/5 hover:shadow-slate-900/10"
                    >
                        Generate Recommendations
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AskPage;
