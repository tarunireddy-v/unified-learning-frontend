import React from 'react';

const Badge = ({
    children,
    variant = 'neutral',
    className = ''
}) => {
    // "Arctic Mist" feel - monochromatic, light backgrounds
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border uppercase tracking-wider transition-colors duration-200";

    const variants = {
        neutral: "bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100",
        primary: "bg-sky-50 text-sky-700 border-sky-100/50 hover:bg-sky-100", // Arctic Blue tint
        success: "bg-emerald-50 text-emerald-700 border-emerald-100/50",
        warning: "bg-amber-50 text-amber-700 border-amber-100/50",
        outline: "bg-transparent border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300",
    };

    return (
        <span className={`${baseStyles} ${variants[variant] || variants.neutral} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
