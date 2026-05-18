export function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="absolute left-0 right-0 top-0 z-40 h-px bg-white/10">
      <div
        className="h-full bg-gradient-to-r from-cyan via-electric to-teal transition-[width] duration-700 ease-out"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}
