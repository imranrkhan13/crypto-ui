"use client";

import { useState } from "react";

type Currency = {
  code: string;
  name: string;
  icon: string;
  color: string;
};

type Props = {
  label: string;
  amount: string;
  onAmountChange?: (value: string) => void;
  currency: Currency;
  currencies?: Currency[];
  onCurrencyChange?: (currency: Currency) => void;
};

export default function AmountCard({
  label,
  amount,
  onAmountChange,
  currency,
  currencies = [],
  onCurrencyChange,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative border-2 ${
        isFocused ? "border-indigo-400 shadow-lg shadow-indigo-100" : "border-gray-200"
      } rounded-3xl p-6 space-y-4 transition-all duration-300 hover:shadow-md bg-white group`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      <div className="relative">
        <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
          {label}
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
        </label>

        <div className="flex items-center justify-between gap-4 mt-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="text-3xl font-bold text-gray-900 outline-none bg-transparent w-full"
            placeholder="0.00"
            step="0.01"
            min="0"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          />

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-indigo-300 hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 min-w-[120px] shadow-sm hover:shadow-md group"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-sm"
                style={{ 
                  background: `linear-gradient(135deg, ${currency.color}20 0%, ${currency.color}40 100%)`,
                  color: currency.color
                }}
              >
                {currency.icon}
              </div>
              <span className="text-sm font-bold text-gray-800">
                {currency.code}
              </span>
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            {isDropdownOpen && currencies.length > 0 && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-[240px] bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-20 overflow-hidden">
                  {currencies.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        onCurrencyChange?.(curr);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all text-left group ${
                        currency.code === curr.code ? "bg-gradient-to-r from-indigo-100 to-purple-100" : ""
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform"
                        style={{ 
                          background: `linear-gradient(135deg, ${curr.color}20 0%, ${curr.color}40 100%)`,
                          color: curr.color
                        }}
                      >
                        {curr.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-800">{curr.code}</div>
                        <div className="text-xs text-gray-500 font-medium">{curr.name}</div>
                      </div>
                      {currency.code === curr.code && (
                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
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
      </div>
    </div>
  );
}