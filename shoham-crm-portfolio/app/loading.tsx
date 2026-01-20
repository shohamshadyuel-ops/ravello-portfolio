export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-zinc-800 border-t-purple-500 rounded-full animate-spin" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin blur-xl opacity-50" />
      </div>
    </div>
  );
}
