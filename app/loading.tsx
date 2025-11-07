export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center">
      <div className="relative">
        {/* Spinner */}
        <div className="relative w-16 h-16 border-4 border-[#3B82F6]/20 border-t-[#3B82F6] rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
