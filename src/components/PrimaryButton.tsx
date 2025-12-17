type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full h-[68px]
        rounded-2xl
        font-bold text-base
        transition-all duration-300
        relative overflow-hidden
        ${
          disabled || loading
            ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-[#013941] to-[#025662] text-white shadow-lg shadow-[#013941]/30 hover:shadow-xl hover:shadow-[#013941]/40 hover:scale-[1.02] active:scale-[0.98]"
        }
      `}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Shine effect */}
      {!disabled && !loading && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      )}

      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
}
