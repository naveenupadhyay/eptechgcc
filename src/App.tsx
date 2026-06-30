import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { IntroAnimation } from "./components/IntroAnimation";
import { NavigationDots } from "./components/NavigationDots";
import { ProgressBar } from "./components/ProgressBar";
import { Slide } from "./components/Slide";
import { CTAButton } from "./components/CTAButton";
import { AINativeEngineeringPage } from "./components/AINativeEngineeringPage";
import { CapabilitiesPage } from "./components/CapabilitiesPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { FinanceAIPage } from "./components/FinanceAIPage";
import { StackPage } from "./components/StackPage";
import { siteContent } from "./data/siteContent";

const INTRO_KEY = "eleventyfirstparallel_intro_complete";

function App() {
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname.replace(/\/$/, "") || "/";
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

      const activeArticle = event.currentTarget.querySelector<HTMLElement>("[data-active-slide='true']");
      if (activeArticle && activeArticle.scrollHeight > activeArticle.clientHeight) {
        const maxScrollTop = activeArticle.scrollHeight - activeArticle.clientHeight;
        const canScrollDown = event.deltaY > 0 && activeArticle.scrollTop < maxScrollTop - 2;
        const canScrollUp = event.deltaY < 0 && activeArticle.scrollTop > 2;

        if (canScrollDown || canScrollUp) return;
      }

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

  if (pathname === siteContent.financeAIPage.path) {
    return <FinanceAIPage />;
  }

  if (pathname === siteContent.aiNativeEngineeringPage.path) {
    return <AINativeEngineeringPage />;
  }

  if (pathname === "/stack") {
    return <StackPage />;
  }

  if (pathname === "/case-studies") {
    return <CaseStudiesPage />;
  }

  return (
    <main className="relative h-dvh overflow-hidden bg-white text-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(24,24,27,0.05),transparent_26%),radial-gradient(circle_at_84%_16%,rgba(14,165,233,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fafafa_55%,#f4f4f5_100%)]" />

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
                <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <img src="/ep.avif" alt="" className="size-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold tracking-wide text-zinc-950">
                    {siteContent.brand.name}
                  </span>
                  <span className="hidden text-xs text-zinc-500 sm:block">{siteContent.brand.positioning}</span>
                </span>
              </button>
              <a
                href={siteContent.brand.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-semibold text-zinc-950 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:border-black hover:bg-zinc-50"
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

            <div className="absolute bottom-5 left-8 z-30 hidden items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-2 py-1 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur md:flex">
              <CTAButton variant="ghost" size="icon" onClick={() => goToSlide(activeIndex - 1)} ariaLabel="Previous slide">
                <ArrowLeft className="size-4" />
              </CTAButton>
              <span className="px-2 text-xs tabular-nums text-zinc-500">
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
