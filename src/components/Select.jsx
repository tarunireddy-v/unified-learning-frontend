import React, { useState, useRef, useEffect } from 'react';

const Select = ({
    label,
    value,
    onChange,
    options = [],
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150); // Slight delay for smooth interaction
    };

    const handleSelect = (optionValue) => {
        onChange({ target: { value: optionValue } });
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value) || options[0];

    return (
        <div
            className={`flex flex-col space-y-2 ${className}`}
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {label && (
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                {/* Trigger - Text-like, understated */}
                <button
                    type="button"
                    className={`
                        w-full flex items-center justify-between
                        bg-slate-50/50 border text-left rounded-lg px-4 py-3
                        text-slate-700 text-sm font-medium
                        transition-all duration-300 ease-out
                        outline-none
                        ${isOpen
                            ? 'border-slate-300 bg-white ring-2 ring-slate-200/50'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-white'
                        }
                    `}
                >
                    <span className="truncate">{selectedOption?.label || value}</span>
                    <span className={`text-slate-400 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>

                {/* Floating Panel - HoverReveal */}
                <div
                    className={`
                        absolute z-50 w-full mt-2 bg-white border border-slate-100/80 rounded-xl shadow-[0_4px_20px_rgba(15,23,42,0.08)] py-2 overflow-hidden
                        transition-all duration-200 origin-top
                        ${isOpen
                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                        }
                    `}
                >
                    {options.map((option) => {
                        const isSelected = option.value === value;
                        return (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                className={`
                                    w-full text-left px-4 py-2.5 text-sm flex items-center justify-between
                                    transition-colors duration-150 cursor-pointer
                                    ${isSelected
                                        ? 'bg-slate-50 text-slate-900 font-medium'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                                    }
                                `}
                            >
                                <span>{option.label}</span>
                                {isSelected && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900/40"></div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Select;
