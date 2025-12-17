"use client";

import { useRouter } from "next/navigation";    
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Crypto to cash");
  const [payAmount, setPayAmount] = useState("1.00");
  const [receiveAmount, setReceiveAmount] = useState("1.00");
  const [payCurrency, setPayCurrency] = useState("ETH");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");

  const tabs = ["Crypto to cash", "Cash to crypto", "Crypto to fiat loan"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="relative w-full max-w-[640px] h-auto md:h-[758px] bg-white border border-[#CCF6E5] rounded-[30px] p-8 md:p-16">
        
        {/* Tabs */}
        <div className="flex items-center justify-center gap-0 absolute left-1/2 -translate-x-1/2 top-10 w-[392px] h-[34px] bg-[#F2F2F2] rounded-[30px] p-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-center px-4 py-2 h-[34px] rounded-[30px] font-['Outfit'] font-medium text-[14px] leading-[18px] transition-all
                ${activeTab === tab 
                  ? 'bg-[#013941] text-[#F8FEFB]' 
                  : 'bg-transparent text-[#828282]'
                }
                ${tab === "Crypto to cash" ? 'w-[123px]' : tab === "Cash to crypto" ? 'w-[123px]' : 'w-[146px]'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="flex flex-col gap-6 absolute w-full max-w-[512px] left-1/2 -translate-x-1/2 top-[114px]">
          
          {/* You Pay */}
          <div className="flex flex-col justify-center items-center p-6 gap-2 w-full h-[112px] bg-white border border-[#E0E0E0] rounded-[30px]">
            <div className="w-full h-5 font-['Outfit'] font-medium text-base leading-5 text-[#828282]">
              You pay
            </div>
            <div className="flex justify-between items-center w-full h-9">
              <input
                type="text"
                value={payAmount}
                onChange={(e) => setPayAmount(e.target.value)}
                className="w-auto font-['Outfit'] font-semibold text-2xl leading-[30px] text-[#000E10] outline-none bg-transparent"
              />
              <div className="flex items-center justify-center gap-1 px-3 py-2 h-9 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[20px]">
                <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                <span className="font-['Clash_Display'] font-medium text-sm leading-5 text-[#013941]">
                  {payCurrency}
                </span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#013941" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* You Receive */}
          <div className="flex flex-col justify-center items-center p-6 gap-2 w-full h-[112px] bg-white border border-[#E0E0E0] rounded-[30px]">
            <div className="w-full h-5 font-['Outfit'] font-medium text-base leading-5 text-[#828282]">
              You receive
            </div>
            <div className="flex justify-between items-center w-full h-9">
              <input
                type="text"
                value={receiveAmount}
                onChange={(e) => setReceiveAmount(e.target.value)}
                className="w-auto font-['Outfit'] font-semibold text-2xl leading-[30px] text-[#000E10] outline-none bg-transparent"
              />
              <div className="flex items-center justify-center gap-1 px-3 py-2 h-9 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[20px]">
                <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                <span className="font-['Clash_Display'] font-medium text-sm leading-5 text-[#013941]">
                  {receiveCurrency}
                </span>
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#013941" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Pay From */}
          <div className="flex flex-col gap-4 w-full">
            <label className="font-['Outfit'] font-medium text-base leading-5 text-[#013941]">
              Pay from
            </label>
            <div className="flex justify-between items-center px-6 gap-4 w-full h-[60px] bg-white border border-[#E0E0E0] rounded-[30px] cursor-pointer">
              <span className={`font-['Outfit'] font-normal text-base leading-5 ${payFrom ? 'text-[#013941]' : 'text-[#013941]'}`}>
                {payFrom || "Select an option"}
              </span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#013941" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Pay To */}
          <div className="flex flex-col gap-4 w-full">
            <label className="font-['Outfit'] font-medium text-base leading-5 text-[#013941]">
              Pay to
            </label>
            <div className="flex justify-between items-center px-6 gap-4 w-full h-[60px] bg-white border border-[#E0E0E0] rounded-[30px] cursor-pointer">
              <span className={`font-['Outfit'] font-normal text-base leading-5 ${payTo ? 'text-[#013941]' : 'text-[#013941]'}`}>
                {payTo || "Select an option"}
              </span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#013941" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={() => router.push("/recipient")}
          className="flex items-center justify-center px-10 py-5 gap-2 absolute w-full max-w-[512px] h-[60px] left-1/2 -translate-x-1/2 bottom-16 bg-[#013941] rounded-[30px] font-['Instrument_Sans'] font-bold text-base leading-5 text-[#E6FBF2] hover:bg-[#024a55] transition-all"
        >
          Convert now
        </button>
      </div>
    </div>
  );
}