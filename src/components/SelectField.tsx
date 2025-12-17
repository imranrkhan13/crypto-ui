"use client";

import { useState } from "react";

type Option = {
  name: string;
  icon: string;
  color: string;
};

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Option[];
};

export default function SelectField({
  label,
  placeholder,
  value,
  onChange,
  options = [],
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.name === value);

  return (
    <div className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
        {label}
        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between border-2 ${value
              ? "border-indigo-400 bg-gradient-to-r from-indigo-50 to-purple-50"
              : "border-gray-200 bg-white hover:border-gray-300"
            } rounded-2xl px-6 h-[68px] w-full hover:shadow-md transition-all duration-200 group`}
        >
          <div className="flex items-center gap-3">
            {selectedOption ? (
              <>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${selectedOption.color}20 0%, ${selectedOption.color}40 100%)`
                  }}
                >
                  {selectedOption.icon}
                </div>
                <span className="text-gray-900 font-semibold text-base">
                  {selectedOption.name}
                </span>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-gray-400 font-medium">{placeholder}</span>
              </>
            )}
          </div>
          <svg
            className={`w-5 h-5 ${value ? 'text-indigo-600' : 'text-gray-400'} transition-transform duration-200 ${isOpen ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown */}
        {isOpen && options.length > 0 && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-20 overflow-hidden">
              {options.map((option) => (
                <button
                  key={option.name}
                  onClick={() => {
                    onChange?.(option.name);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all text-left group ${value === option.name ? "bg-gradient-to-r from-indigo-100 to-purple-100" : ""
                    }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${option.color}20 0%, ${option.color}40 100%)`
                    }}
                  >
                    {option.icon}
                  </div>
                  <span className="text-gray-900 font-semibold flex-1">{option.name}</span>
                  {value === option.name && (
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}