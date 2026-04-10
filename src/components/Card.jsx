import React from 'react';

const Card = ({
    children,
    className = '',
    variant = 'default',
    onClick
}) => {
    const baseStyles = "rounded-xl transition-all duration-200 border text-left overflow-hidden";

    // Card Variants
    const variants = {
        default: "bg-white border-slate-200 shadow-sm",
        glass: "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm",
        highlight: "bg-white border-indigo-200 shadow-sm ring-1 ring-indigo-50",
        flat: "bg-slate-50 border-transparent",
    };

    const Component = onClick ? 'button' : 'div';

    return (
        <Component
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.default} ${className} ${onClick ? 'w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20' : ''}`}
        >
            {children}
        </Component>
    );
};

export default Card;
