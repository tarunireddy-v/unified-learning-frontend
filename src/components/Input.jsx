import React from 'react';

const Input = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    className = ""
}) => {
    return (
        <div className={`flex flex-col space-y-1.5 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full bg-white border border-slate-300 rounded-lg px-3 py-2
                    text-slate-900 placeholder:text-slate-400
                    focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500
                    transition-all duration-200 ease-in-out
                    text-sm
                "
            />
        </div>
    );
};

export default Input;
