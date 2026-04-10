import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col pb-20">

            {/* HERO SECTION - UNCHANGED */}
            <div className="relative group w-full flex flex-col items-center justify-center min-h-[calc(100vh-140px)] overflow-hidden">
                {/* Ambient System Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-sky-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-60"></div>
                    <div className="absolute top-[40%] -right-[20%] w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
                    <div className="absolute top-[30%] left-[10%] lg:left-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                        <div className="relative w-48 h-32 bg-white/40 border border-slate-200/60 rounded-xl backdrop-blur-sm -rotate-6 transform transition-transform duration-[2000ms] group-hover:-translate-y-4 shadow-sm">
                            <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-sky-100/50"></div>
                            <div className="absolute bottom-4 left-4 right-4 h-2 rounded-full bg-slate-100"></div>
                            <div className="absolute bottom-8 left-4 right-8 h-2 rounded-full bg-slate-100"></div>
                        </div>
                        <svg className="absolute top-full left-1/2 w-px h-24 text-slate-300" strokeDasharray="4 4">
                            <line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" />
                        </svg>
                    </div>
                    <div className="absolute bottom-[30%] right-[10%] lg:right-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out delay-100">
                        <div className="relative w-40 h-40 border border-slate-200/50 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                            <div className="absolute w-full h-full border border-slate-100/50 rounded-full scale-125"></div>
                            <div className="w-4 h-4 rounded-full bg-slate-800 shadow-lg shadow-slate-900/20"></div>
                            <div className="absolute top-0 w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="absolute bottom-0 w-2 h-2 rounded-full bg-slate-300"></div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-10 px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-sm transition-all duration-500 hover:bg-white hover:border-slate-300 cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-pulse"></span>
                        <span className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase">Intelligent Curriculum v2.0</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1] drop-shadow-sm">
                            Master your craft <br />
                            <span className="text-slate-400 font-normal italic">with clarity.</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed font-normal max-w-lg mx-auto">
                            A calm, intelligent learning companion that filters out the noise and curates the best path for your goals.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Button
                            variant="primary"
                            onClick={() => navigate('/recommendations')}
                            className="px-8 h-12 text-[15px] shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Start Learning Path
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-slate-500 hover:text-slate-900 h-12"
                        >
                            View System Logic
                        </Button>
                    </div>
                </div>
            </div>

            {/* SECTION 1: Features */}
            <section className="max-w-6xl mx-auto px-6 py-24 w-full">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">Everything you need to learn better</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Powerful features that work together to create a seamless learning experience.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Card 1 */}
                    <div className="group p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Recommendations</h3>
                        <p className="text-slate-500 leading-relaxed">AI analyzes your goals and learning style to suggest the perfect resources.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Learning History</h3>
                        <p className="text-slate-500 leading-relaxed">Track your progress and revisit key concepts with intelligent organization.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="group p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Ask AI Assistant</h3>
                        <p className="text-slate-500 leading-relaxed">Get instant answers and guidance tailored to your current learning path.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="group p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Personalized Curriculum</h3>
                        <p className="text-slate-500 leading-relaxed">A structured learning journey designed specifically for your objectives.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: How it works */}
            <section className="max-w-6xl mx-auto px-6 py-24 w-full border-t border-slate-200/50">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">How it works</h2>
                    <p className="text-lg text-slate-500">Get started in three simple steps</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-px bg-slate-200"></div>

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-lg font-medium text-slate-600 mb-8 relative z-10 shadow-sm group-hover:border-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                            01
                        </div>
                        <div className="mb-4 text-slate-400 group-hover:text-slate-900 transition-colors">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Define your goals</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs">Tell us what you want to learn and we'll understand your objectives.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-lg font-medium text-slate-600 mb-8 relative z-10 shadow-sm group-hover:border-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                            02
                        </div>
                        <div className="mb-4 text-slate-400 group-hover:text-slate-900 transition-colors">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">AI builds your path</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs">Our intelligent system curates the optimal learning journey for you.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-lg font-medium text-slate-600 mb-8 relative z-10 shadow-sm group-hover:border-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                            03
                        </div>
                        <div className="mb-4 text-slate-400 group-hover:text-slate-900 transition-colors">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Track progress & improve</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs">Monitor your growth and adapt your path as you learn and evolve.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
