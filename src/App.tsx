import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { IntroAnimation } from "./components/IntroAnimation";
import { NavigationDots } from "./components/NavigationDots";
import { ProgressBar } from "./components/ProgressBar";
import { Slide } from "./components/Slide";
import { CTAButton } from "./components/CTAButton";
import { CapabilitiesPage } from "./components/CapabilitiesPage";
import { siteContent } from "./data/siteContent";

const NetworkScene = lazy(() => import("./components/NetworkScene"));

const INTRO_KEY = "eleventyfirstparallel_intro_complete";

function App() {
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname.replace(/\/$/, "") || "/";
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });
  const [introComplete, setIntroComplete] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(INTRO_KEY) === "true";
  });
  const touchStartY = useRef<number | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const slides = siteContent.slides;

  const activeSlide = slides[activeIndex];
  const sectionIds = useMemo(() => slides.map((slide) => slide.id as string), [slides]);

  const goToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      setActiveIndex(clamped);
      if (isMobile) {
        document.getElementById(slides[clamped].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [isMobile, slides]
  );

  const goToId = useCallback(
    (id: string) => {
      const target = sectionIds.indexOf(id);
      if (target >= 0) goToSlide(target);
    },
    [goToSlide, sectionIds]
  );

  const completeIntro = useCallback(() => {
    window.sessionStorage.setItem(INTRO_KEY, "true");
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!introComplete || isMobile) return;
      if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        goToSlide(activeIndex + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goToSlide(activeIndex - 1);
      }
      if (event.key === "Home") goToSlide(0);
      if (event.key === "End") goToSlide(slides.length - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, goToSlide, introComplete, isMobile, slides.length]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isMobile || !introComplete) return;

    const container = mobileScrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible?.target.id) return;
        const index = sectionIds.indexOf(mostVisible.target.id);
        if (index >= 0) setActiveIndex(index);
      },
      {
        root: container,
        threshold: [0.2, 0.35, 0.5, 0.65]
      }
    );

    slides.forEach((slide) => {
      const element = document.getElementById(slide.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [introComplete, isMobile, sectionIds, slides]);

  const onWheel = useCallback(
    (event: React.WheelEvent<HTMLElement>) => {
      if (Math.abs(event.deltaY) < 40) return;
      event.deltaY > 0 ? goToSlide(activeIndex + 1) : goToSlide(activeIndex - 1);
    },
    [activeIndex, goToSlide]
  );

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - event.changedTouches[0].clientY;
    if (Math.abs(diff) > 48) diff > 0 ? goToSlide(activeIndex + 1) : goToSlide(activeIndex - 1);
    touchStartY.current = null;
  };

  if (pathname === siteContent.capabilitiesPage.path) {
    return <CapabilitiesPage />;
  }

  return (
    <main className="relative h-dvh overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(109,40,217,0.12),transparent_30%),linear-gradient(180deg,#030207_0%,#05030b_48%,#02040a_100%)]" />

      {introComplete && !prefersReducedMotion && (
        <Suspense fallback={null}>
          <NetworkScene activeIndex={activeIndex} />
        </Suspense>
      )}

      <AnimatePresence mode="wait">
        {!introComplete ? (
          <IntroAnimation key="intro" onComplete={completeIntro} />
        ) : (
          <motion.section
            key="site"
            className="relative z-10 h-full"
            initial={{ opacity: 0, filter: "blur(16px)", scale: 1.02 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            onWheel={isMobile ? undefined : onWheel}
            onTouchStart={isMobile ? undefined : onTouchStart}
            onTouchEnd={isMobile ? undefined : onTouchEnd}
            aria-live="polite"
          >
            <ProgressBar current={activeIndex + 1} total={slides.length} />
            <header className="absolute left-4 right-4 top-4 z-30 flex items-center justify-between gap-3 md:left-8 md:right-8 md:top-6">
              <button
                className="group flex min-w-0 items-center gap-3 text-left"
                onClick={() => goToSlide(0)}
                aria-label="Go to hero slide"
              >
                <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-cyan/35 bg-white/[0.04] shadow-glow">
                  <img src="/ep.avif" alt="" className="size-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold tracking-wide text-white">
                    {siteContent.brand.name}
                  </span>
                  <span className="hidden text-xs text-slate-400 sm:block">{siteContent.brand.positioning}</span>
                </span>
              </button>
              <a
                href={siteContent.brand.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-white transition hover:border-cyan/50 hover:bg-cyan/10"
              >
                <span className="hidden sm:inline">LinkedIn</span>
                <ExternalLink className="size-3.5" />
              </a>
            </header>

            {isMobile ? (
              <div ref={mobileScrollRef} className="h-full overflow-y-auto overscroll-contain scroll-smooth">
                {slides.map((slide, index) => (
                  <Slide
                    key={slide.id}
                    slide={slide}
                    index={index}
                    total={slides.length}
                    onNavigate={goToId}
                    mode="stacked"
                  />
                ))}
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait" initial={false}>
                  <Slide
                    key={activeSlide.id}
                    slide={activeSlide}
                    index={activeIndex}
                    total={slides.length}
                    onNavigate={goToId}
                  />
                </AnimatePresence>

                <NavigationDots slides={slides} activeIndex={activeIndex} onSelect={goToSlide} />
              </>
            )}

            <div className="absolute bottom-5 left-8 z-30 hidden items-center gap-2 rounded-full border border-white/10 bg-black/25 px-2 py-1 backdrop-blur md:flex">
              <CTAButton variant="ghost" size="icon" onClick={() => goToSlide(activeIndex - 1)} ariaLabel="Previous slide">
                <ArrowLeft className="size-4" />
              </CTAButton>
              <span className="px-2 text-xs tabular-nums text-slate-400">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <CTAButton variant="ghost" size="icon" onClick={() => goToSlide(activeIndex + 1)} ariaLabel="Next slide">
                <ArrowRight className="size-4" />
              </CTAButton>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
