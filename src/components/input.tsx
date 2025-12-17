type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
};

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error,
  className = "",
}: Props) {
  return (
    <div className="w-full">
      <div className="relative group">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full h-[68px] px-6 border-2 ${
            error ? "border-red-400" : "border-[#CCF6E5]"
          } rounded-[34px] outline-none text-gray-700 font-medium focus:border-[#013941] focus:shadow-lg focus:shadow-[#013941]/20 transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed placeholder:text-gray-400 bg-white ${className}`}
        />
        {/* Glow on focus */}
        <div className={`absolute inset-0 rounded-[34px] bg-[#013941] opacity-0 group-focus-within:opacity-10 blur-xl -z-10 transition-opacity duration-300 pointer-events-none ${error ? 'hidden' : ''}`} />
      </div>
      {error && <p className="mt-2 px-4 text-sm text-red-500 font-medium">{error}</p>}
    </div>
  );
}