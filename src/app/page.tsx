"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WidgetContainer from "@/components/WidgetContainer";
import CheckoutTabs from "@/components/CheckoutTabs";
import AmountCard from "@/components/AmountCard";
import SelectField from "@/components/SelectField";
import PrimaryButton from "@/components/PrimaryButton";

const CURRENCIES = {
  crypto: [
    { code: "ETH", name: "Ethereum", icon: "⟠", color: "#627EEA" },
    { code: "BTC", name: "Bitcoin", icon: "₿", color: "#F7931A" },
    { code: "USDT", name: "Tether", icon: "₮", color: "#26A17B" },
    { code: "USDC", name: "USD Coin", icon: "💵", color: "#2775CA" },
  ],
  fiat: [
    { code: "NGN", name: "Nigerian Naira", icon: "₦", color: "#008751" },
    { code: "USD", name: "US Dollar", icon: "$", color: "#85BB65" },
    { code: "EUR", name: "Euro", icon: "€", color: "#003399" },
    { code: "GBP", name: "British Pound", icon: "£", color: "#C8102E" },
  ],
};

const WALLETS = [
  { name: "MetaMask", icon: "🦊", color: "#F6851B" },
  { name: "WalletConnect", icon: "🔗", color: "#3B99FC" },
  { name: "Coinbase Wallet", icon: "💼", color: "#0052FF" },
  { name: "Trust Wallet", icon: "🛡️", color: "#3375BB" },
];

const PAYMENT_METHODS = [
  { name: "Bank Transfer", icon: "🏦", color: "#4F46E5" },
  { name: "Mobile Money", icon: "📱", color: "#10B981" },
  { name: "Card Payment", icon: "💳", color: "#EF4444" },
];

export default function Page() {
  const router = useRouter();
  const [tab, setTab] = useState("Crypto to cash");
  const [payAmount, setPayAmount] = useState("1.00");
  const [receiveAmount, setReceiveAmount] = useState("0.98");
  const [payCurrency, setPayCurrency] = useState(CURRENCIES.crypto[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(CURRENCIES.fiat[0]);
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");
  const [mode, setMode] = useState("Crypto to cash");


  const EXCHANGE_RATE = 0.98;

  const handlePayAmountChange = (value: string) => {
    setPayAmount(value);
    const numValue = parseFloat(value) || 0;
    setReceiveAmount((numValue * EXCHANGE_RATE).toFixed(2));
  };

  const handleReceiveAmountChange = (value: string) => {
    setReceiveAmount(value);
    const numValue = parseFloat(value) || 0;
    setPayAmount((numValue / EXCHANGE_RATE).toFixed(2));
  };

  const handleSubmit = () => {
    if (payFrom && payTo) {
      router.push("/recepient");
    }

  };

  const isFormValid = payFrom && payTo && parseFloat(payAmount) > 0;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 sm:p-6">
      <WidgetContainer>
        <div className="space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="text-center mb-2" style={{ marginTop: "-17px", paddingBottom: "12px", }}>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#013941] to-[#013941] bg-clip-text text-transparent">
              Crypto Exchange
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Fast, secure, and simple</p>
          </div>
          <CheckoutTabs value={mode} onChange={setMode} />

          <AmountCard
            label="You pay"
            amount={payAmount}
            onAmountChange={handlePayAmountChange}
            currency={payCurrency}
            currencies={CURRENCIES.crypto}
            onCurrencyChange={setPayCurrency}
          />

          {/* swapping icon */}
          <div className="flex justify-center -my-2 sm:-my-3 relative z-10">
            <div className="bg-gradient-to-br from-[#013941] to-[#013941] rounded-full p-2.5 sm:p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-110">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
          </div>

          <AmountCard
            label="You receive"
            amount={receiveAmount}
            onAmountChange={handleReceiveAmountChange}
            currency={receiveCurrency}
            currencies={CURRENCIES.fiat}
            onCurrencyChange={setReceiveCurrency}
          />

          <SelectField
            label="Pay from"
            placeholder="Select wallet"
            value={payFrom}
            onChange={setPayFrom}
            options={WALLETS}
          />

          <SelectField
            label="Pay to"
            placeholder="Select payment method"
            value={payTo}
            onChange={setPayTo}
            options={PAYMENT_METHODS}
          />

          <div className="pt-2">
            <PrimaryButton onClick={handleSubmit} disabled={!isFormValid}>
              <span className="hidden sm:inline">Continue to Recipient Details →</span>
              <span className="sm:hidden">Continue →</span>
            </PrimaryButton>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-indigo-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Exchange rate:</span>
              </div>
              <span className="font-semibold text-gray-800">
                1 {payCurrency.code} ≈ {EXCHANGE_RATE} {receiveCurrency.code}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-2 text-center">Network fees included • Instant processing</p>
          </div>
        </div>
      </WidgetContainer>
    </main>
  );
}