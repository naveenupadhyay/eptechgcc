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
    <nav
      className="absolute bottom-6 left-1/2 z-30 hidden max-w-[58vw] -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur md:flex"
      aria-label="Slide navigation"
    >
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={cn(
            "group relative size-3 rounded-full border border-zinc-300 bg-zinc-200 transition",
            activeIndex === index && "border-black bg-black"
          )}
          onClick={() => onSelect(index)}
          aria-label={`Go to ${slide.title}`}
          aria-current={activeIndex === index ? "step" : undefined}
        >
          <span className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-700 shadow-[0_12px_30px_rgba(0,0,0,0.12)] group-hover:block">
            {slide.title}
          </span>
        </button>
      ))}
    </nav>
  );
}
