type Props = {
  currency: string;
  icon?: string;
  onChange?: () => void;
};

export default function CurrencyBadge({ currency, icon, onChange }: Props) {
  return (
    <button
      onClick={onChange}
      className="flex items-center justify-center gap-1 px-3 py-2 h-9 bg-[#F7F7F7] border border-[#E0E0E0] rounded-[20px] hover:bg-gray-100 transition-colors"
    >
      {icon && (
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-600"></div>
      )}
      <span className="font-medium text-sm leading-5 text-[#013941]">
        {currency}
      </span>
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="#013941"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}