type Props = {
  value: string;
  onChange: (v: string) => void;
};

const options = [
  "Crypto to cash",
  "Cash to crypto",
  "Crypto to fiat loan",
];

export default function CheckoutModeSelect({ value, onChange }: Props) {
  return (
    <div className="w-full max-w-[450px] mx-auto space-y-2">
      <label className="block text-sm font-semibold text-[#013941]">
        Conversion type
      </label>

      <div className="relative">
        {/* Select */}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            appearance-none
            rounded-2xl
            bg-gradient-to-br from-[#E6FBF2] to-white
            px-5 py-3
            pr-12
            text-sm font-semibold
            text-[#013941]
            border-2 border-[#CCF6E5]
            outline-none
            transition-all
            cursor-pointer
            hover:shadow-md
            focus:border-[#013941]
            focus:shadow-lg focus:shadow-[#013941]/20
          "
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Chevron Icon */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#013941]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
