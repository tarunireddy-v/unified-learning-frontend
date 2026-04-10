import React from 'react';

const Button = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    // Base: Rounded-lg, font-medium, focus ring, subtle transition
    const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
        // Primary: Slate-800 (Deep Ocean). Calm, confident.
        primary: "bg-slate-800 text-white hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-900/10 focus:ring-slate-800",

        // Secondary: White, Slate border. Clean.
        secondary: "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 focus:ring-slate-200 shadow-sm",

        // Ghost: Transparent.
        ghost: "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 focus:ring-slate-200",

        // Link: Text only.
        link: "bg-transparent text-slate-400 hover:text-slate-700 underline-offset-4 hover:underline p-0 h-auto font-normal focus:ring-offset-0",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
