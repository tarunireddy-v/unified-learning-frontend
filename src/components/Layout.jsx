import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-800 selection:bg-slate-200 selection:text-slate-900">

            {/* Top Navigation - Minimal Premium */}
            <nav
                className={`w-full sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
                    ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/50'
                    : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Left: Logo + Brand */}
                    <Link to="/" className="flex items-center gap-3 group outline-none">
                        <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center shadow-sm group-hover:bg-slate-800 transition-colors">
                            <div className="w-3 h-3 bg-white rounded-[1px] opacity-80"></div>
                        </div>
                        <span className="font-semibold text-slate-900 text-[15px] tracking-tight group-hover:text-slate-700 transition-colors">
                            Unified Learning
                        </span>
                    </Link>

                    {/* Right: Navigation + Profile */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1">
                            {['/recommendations', '/history'].map((path) => {
                                const label = path === '/recommendations' ? 'Recommendations' : 'History';
                                const active = isActive(path);

                                return (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`
                                text-[14px] font-medium px-3 py-2 rounded-md transition-all duration-200
                                ${active
                                                ? 'text-slate-900'
                                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                                            }
                            `}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Divider */}
                        <div className="h-4 w-px bg-slate-200"></div>

                        {/* Profile Avatar */}
                        <button className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm focus:ring-2 ring-offset-2 ring-slate-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8 animate-fade-in-up">
                {children}
            </main>

            {/* Footer - Minimal Single Row */}
            <footer className="w-full py-8 border-t border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Left: Logo + Brand */}
                    <div className="flex items-center gap-3 min-w-[200px]">
                        <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-[1px] opacity-80"></div>
                        </div>
                        <span className="font-semibold text-slate-900 text-sm tracking-tight">
                            Unified Learning
                        </span>
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-xs text-slate-400 font-medium text-center">
                        © 2026 Unified Learning. Built by students.
                    </div>

                    {/* Right: Links */}
                    <div className="flex gap-6 text-sm text-slate-500 font-medium justify-end min-w-[200px]">
                        <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
                        <span className="hover:text-slate-900 cursor-pointer transition-colors">Github</span>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Layout;
