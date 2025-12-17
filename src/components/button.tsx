type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({ 
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  loading = false,
  variant = "primary"
}: Props) {
  const baseStyles = "w-full h-[68px] rounded-[34px] font-bold text-lg transition-all duration-300 relative overflow-hidden";
  
  const variantStyles = {
    primary: `
      bg-[#013941]
      text-white
      shadow-[0_8px_24px_rgba(1,57,65,0.25)] 
      hover:shadow-[0_12px_32px_rgba(1,57,65,0.35)] 
      hover:bg-[#025662]
      hover:-translate-y-0.5
      active:translate-y-0
      active:shadow-[0_4px_16px_rgba(1,57,65,0.3)]
    `,
    secondary: `
      bg-white 
      text-[#013941]
      border-2 
      border-[#013941]
      hover:bg-[#E6FBF2] 
      hover:shadow-lg 
      hover:shadow-[#013941]/20
      hover:-translate-y-0.5
      active:translate-y-0
    `
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:translate-y-0 shadow-[0_4px_16px_rgba(1,57,65,0.15)] hover:bg-[#013941] hover:shadow-[0_4px_16px_rgba(1,57,65,0.15)]";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled || loading ? disabledStyles : ""
      } ${className}`}
    >
      {/* Shine effect */}
      {!disabled && !loading && variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}

      {loading ? (
        <span className="flex items-center justify-center gap-2 relative z-10">
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
        </span>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </button>
  );
}