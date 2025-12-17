type Props = {
  children: React.ReactNode;
};

export default function WidgetContainer({ children }: Props) {
  return (
    <div
      className="
        w-full max-w-[680px]
        rounded-3xl
        border-2 border-gray-200
        bg-white
        p-8 md:p-10
        shadow-2xl shadow-indigo-100
        transition-all duration-500
        hover:shadow-3xl hover:shadow-indigo-200
        backdrop-blur-sm
        relative
        overflow-hidden
      "
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}