import React from 'react';
import Badge from '../components/Badge';

const HistoryPage = () => {
    const historyData = [
        { id: 1, question: "Node.js Scalable APIs", date: "Oct 24", feedback: "Positive", status: "Completed", variant: "neutral" },
        { id: 2, question: "Rust Systems Programming", date: "Oct 22", feedback: "None", status: "In Progress", variant: "primary" },
        { id: 3, question: "React vs Vue Comparison", date: "Oct 15", feedback: "Mixed", status: "Archived", variant: "outline" },
        { id: 4, question: "AWS Solutions Architect", date: "Sep 30", feedback: "Positive", status: "Completed", variant: "neutral" },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-6 pt-4">

            {/* Header */}
            <div className="flex items-center justify-between px-1">
                <div>
                    <h1 className="text-xl font-semibold text-slate-900 tracking-tight">Library</h1>
                    <p className="text-slate-500 text-sm">Your past curricular generations.</p>
                </div>
                <div className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                    4 Items
                </div>
            </div>

            {/* List */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                {historyData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`
                group p-5 flex flex-col md:flex-row gap-4 md:items-center cursor-pointer transition-colors duration-200
                hover:bg-[#F8FAFC]
                ${index !== historyData.length - 1 ? 'border-b border-slate-50' : ''}
            `}
                    >

                        <div className="flex-grow min-w-0 space-y-1">
                            <div className="flex items-center gap-3">
                                <h3 className="font-medium text-slate-900 truncate group-hover:text-slate-700 transition-colors text-sm">
                                    {item.question}
                                </h3>
                                <span className="hidden md:inline-block text-xs text-slate-300 md:opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    → View details
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                                <span className="text-slate-200 text-[10px]">•</span>
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                    {item.feedback === 'Positive' && '👍'}
                                    {item.feedback === 'Mixed' && '🤔'}
                                    {item.feedback === 'None' && <span className="text-slate-300 italic">No feedback</span>}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 flex-shrink-0 justify-between md:justify-end">
                            <Badge variant={item.variant} className="w-24 justify-center py-1">{item.status}</Badge>
                            <div className="text-slate-200 group-hover:text-slate-400 transition-colors transform group-hover:translate-x-1 duration-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryPage;
