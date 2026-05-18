export function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="absolute left-0 right-0 top-0 z-40 flex h-1 gap-1 bg-black/20 px-1 pt-1" aria-label={`Slide ${current} of ${total}`}>
      {Array.from({ length: total }, (_, index) => {
        const segment = index + 1;
        const width = segment < current ? "100%" : segment === current ? "100%" : "0%";

        return (
          <div key={segment} className="h-full flex-1 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan via-electric to-teal transition-[width] duration-500 ease-out"
              style={{ width }}
            />
          </div>
        );
      })}
    </div>
  );
}
