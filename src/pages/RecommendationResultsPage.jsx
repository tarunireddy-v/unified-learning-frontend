import React, { useState } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Select from '../components/Select';

const RecommendationResultsPage = () => {
    // State from AskPage
    const [question, setQuestion] = useState('How do I build scalable APIs with Node.js?');
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
        // In a real app, this would trigger a fetch. 
        // For now, we just mock the update or scroll to results.
        console.log("Searching with:", question, filters);
    };

    // Mock Data (Updated to use state if we wanted dynamic, but keeping static for now matching the design)
    const primaryRec = {
        id: 1,
        title: "Node.js: The Complete Guide",
        author: "Academind",
        platform: "Udemy",
        type: "Video Course",
        difficulty: "Intermediate",
        confidence: 98,
        description: "This course is the most comprehensive resource for architectural depth. It explicitly covers the event loop, worker threads, and clustering which matches your request for 'scalability'.",
    };

    const secondaryRecs = [
        { id: 2, title: "Distributed Systems with Node.js", author: "Thomas Hunter", type: "Book", difficulty: "Advanced", confidence: 88, tag: "Theory Focus" },
        { id: 3, title: "Enterprise Node.js Patterns", author: "Frontend Masters", type: "Video", difficulty: "Advanced", confidence: 85, tag: "Architecture" }
    ];

    const [feedback, setFeedback] = useState(null);

    return (
        <div className="max-w-4xl mx-auto pt-4 space-y-12">
            {/* --- Ask / Search Section (From AskPage) --- */}
            <div className="space-y-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">Define Your Goal</h1>
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

            {/* --- Results Section --- */}
            <div className="space-y-8 animate-fade-in-up">

                {/* Header & Pill - Compacted */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
                                Analysis Complete
                            </div>
                            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Your Learning Path</h2>
                        </div>
                    </div>

                    {/* Context Summary Pill */}
                    <div className="inline-flex items-center gap-4 bg-white border border-slate-200/60 rounded-full pl-6 pr-2 py-1.5 shadow-sm max-w-full overflow-hidden">
                        <span className="text-sm text-slate-500 truncate min-w-0">Goal: <span className="text-slate-800 font-medium ml-1">"{question}"</span></span>
                        <div className="flex gap-2 flex-shrink-0">
                            {Object.values(filters).map(f => (
                                <div key={f} className="px-2 py-0.5 rounded-full bg-slate-50 text-[10px] text-slate-500 font-medium uppercase tracking-wide border border-slate-100 hidden sm:block">
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Best Match - Reduced Gaps */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between px-1">
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Best Match</h3>
                        <span className="text-xs text-slate-500 font-medium">{primaryRec.confidence}% Match Confidence</span>
                    </div>

                    <Card variant="default" className="p-6 relative overflow-hidden ring-1 ring-slate-900/5 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 bg-white">
                        {/* Subtle textured background for top card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-50 to-transparent opacity-50 rounded-bl-full pointer-events-none"></div>

                        <div className="absolute top-0 right-0 bg-slate-800 text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-bl-xl tracking-wide shadow-sm z-10">
                            Recommended
                        </div>

                        <div className="grid md:grid-cols-12 gap-8 relative z-10">
                            {/* Content */}
                            <div className="md:col-span-8 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex gap-2">
                                        <Badge variant="primary">{primaryRec.type}</Badge>
                                        <Badge variant="neutral">{primaryRec.platform}</Badge>
                                    </div>
                                    <h2 className="text-2xl font-semibold text-slate-900 leading-tight">
                                        {primaryRec.title}
                                    </h2>
                                    <p className="text-sm text-slate-500 font-medium">By {primaryRec.author} • {primaryRec.difficulty}</p>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {primaryRec.description}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="md:col-span-4 flex flex-col justify-center items-stretch gap-3 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                                <Button variant="primary" className="justify-center h-10">
                                    Start Course
                                </Button>
                                <Button variant="secondary" className="justify-center h-10">
                                    Save for Later
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Alternatives Grid - Reduced Gaps */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Alternatives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {secondaryRecs.map(rec => (
                            <Card key={rec.id} variant="default" className="p-5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5 transition-all cursor-pointer group bg-white">
                                <div className="flex justify-between items-start mb-3">
                                    <Badge variant="neutral" className="text-[10px]">{rec.tag}</Badge>
                                    <span className="text-xs font-semibold text-slate-300 group-hover:text-slate-600 transition-colors">{rec.confidence}%</span>
                                </div>
                                <h4 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors text-base">{rec.title}</h4>
                                <p className="text-xs text-slate-500 mt-0.5">{rec.author}</p>
                                <div className="mt-4 flex gap-2 text-xs text-slate-400 items-center">
                                    <span>{rec.type}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                                    <span>{rec.difficulty}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Feedback */}
                <div className="flex justify-center pt-8 pb-4">
                    <div className="flex items-center gap-4 px-6 py-2 rounded-full transition-opacity hover:opacity-100 opacity-40">
                        <span className="text-xs text-slate-400 font-medium">Was this helpful?</span>
                        <button
                            onClick={() => setFeedback('up')}
                            className={`text-slate-400 hover:text-slate-800 transition-colors hover:scale-110 ${feedback === 'up' ? 'text-slate-800' : ''}`}
                        >
                            <span className="sr-only">Yes</span>👍
                        </button>
                        <button
                            onClick={() => setFeedback('down')}
                            className={`text-slate-400 hover:text-slate-800 transition-colors hover:scale-110 ${feedback === 'down' ? 'text-slate-800' : ''}`}
                        >
                            <span className="sr-only">No</span>👎
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationResultsPage;
