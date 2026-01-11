import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="relative group w-full flex flex-col items-center justify-center min-h-[calc(100vh-140px)] overflow-hidden">

            {/* Ambient System Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

                {/* 1. Large Arctic Mist Orbs */}
                <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-sky-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-60"></div>
                <div className="absolute top-[40%] -right-[20%] w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>

                {/* 2. Floating "System Nodes" - Left Side */}
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

                {/* 3. Floating "Logic Nodes" - Right Side */}
                <div className="absolute bottom-[30%] right-[10%] lg:right-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out delay-100">
                    <div className="relative w-40 h-40 border border-slate-200/50 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                        <div className="absolute w-full h-full border border-slate-100/50 rounded-full scale-125"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-800 shadow-lg shadow-slate-900/20"></div>
                        <div className="absolute top-0 w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="absolute bottom-0 w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                </div>

                {/* 4. Subtle Grid Noise */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>

            </div>

            {/* Main Content - Vertically Centered */}
            <div className="max-w-3xl mx-auto space-y-10 px-6 relative z-10 flex flex-col items-center">

                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-sm transition-all duration-500 hover:bg-white hover:border-slate-300 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-pulse"></span>
                    <span className="text-[11px] font-semibold text-slate-600 tracking-widest uppercase">Intelligent Curriculum v2.0</span>
                </div>

                <div className="space-y-6 text-center">
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
                        onClick={() => navigate('/ask')}
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
    );
};

export default LandingPage;
