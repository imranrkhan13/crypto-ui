type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

export default function Select({ 
  label,
  options,
  value,
  onChange,
  error,
  required = false,
  disabled = false
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-600 font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        aria-label={label}
        aria-invalid={!!error}
        className={`w-full rounded-lg border px-3 py-2 bg-white outline-none transition-colors
          ${error 
            ? 'border-red-500 focus:border-red-600' 
            : 'border-gray-300 focus:border-[#013941]'
          }
          ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <option value="">Select option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500 px-2">{error}</p>
      )}
    </div>
  );
}