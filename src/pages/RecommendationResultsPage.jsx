import React, { useState } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

const RecommendationResultsPage = () => {
    // Mock Data
    const searchContext = {
        question: "How do I build scalable APIs with Node.js?",
        filters: { level: "Intermediate", goal: "Career", time: "Month" }
    };

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
        <div className="space-y-8 max-w-4xl mx-auto pt-4">

            {/* Header & Pill - Compacted */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
                            Analysis Complete
                        </div>
                        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Your Learning Path</h1>
                    </div>
                    <Button variant="secondary" className="text-xs h-8 px-3">Edit Context</Button>
                </div>

                {/* Context Summary Pill */}
                <div className="inline-flex items-center gap-4 bg-white border border-slate-200/60 rounded-full pl-6 pr-2 py-1.5 shadow-sm max-w-full overflow-hidden">
                    <span className="text-sm text-slate-500 truncate min-w-0">Goal: <span className="text-slate-800 font-medium ml-1">"{searchContext.question}"</span></span>
                    <div className="flex gap-2 flex-shrink-0">
                        {Object.values(searchContext.filters).map(f => (
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
    );
};

export default RecommendationResultsPage;
