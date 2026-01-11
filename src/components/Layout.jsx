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
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-800 selection:bg-sky-100 selection:text-slate-900">

            {/* Top Navigation - Taller & Centered */}
            <nav
                className={`w-full sticky top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
                        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_2px_12px_rgba(15,23,42,0.03)]'
                        : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-2 group outline-none focus-visible:ring-2 ring-slate-400 rounded-md p-1 -ml-1">
                        <div className="w-5 h-5 rounded bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
                        <span className="font-semibold text-slate-800 text-sm tracking-tight group-hover:text-slate-600 transition-colors">
                            Unified Learning
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-2">
                        {['/ask', '/recommendations', '/history'].map((path) => {
                            const label = path === '/recommendations' ? 'Recommendations' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
                            const active = isActive(path);

                            return (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`
                            relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 outline-none focus-visible:ring-2 ring-slate-400/50
                            ${active
                                            ? 'text-slate-900 bg-white shadow-sm border border-slate-200/60'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                                        }
                        `}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Main Content Area - Reduced top padding */}
            <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-8 animate-fade-in-up">
                {children}
            </main>

            {/* Footer - Subtle */}
            <footer className="w-full py-8 border-t border-slate-100 bg-white/50 mt-auto">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs text-slate-400">
                    <span>© 2026 Unified Learning</span>
                    <div className="flex gap-4">
                        <span className="hover:text-slate-600 cursor-pointer">Privacy</span>
                        <span className="hover:text-slate-600 cursor-pointer">Terms</span>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Layout;
