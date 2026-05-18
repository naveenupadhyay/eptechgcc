import { cn } from "../lib/utils";

type SlideRef = { id: string; title: string };

export function NavigationDots({
  slides,
  activeIndex,
  onSelect
}: {
  slides: readonly SlideRef[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 md:flex" aria-label="Slide navigation">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={cn(
            "group relative size-3 rounded-full border border-white/20 bg-white/10 transition",
            activeIndex === index && "border-cyan bg-cyan shadow-glow"
          )}
          onClick={() => onSelect(index)}
          aria-label={`Go to ${slide.title}`}
          aria-current={activeIndex === index ? "step" : undefined}
        >
          <span className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/70 px-2 py-1 text-xs text-slate-200 backdrop-blur group-hover:block">
            {slide.title}
          </span>
        </button>
      ))}
    </nav>
  );
}
