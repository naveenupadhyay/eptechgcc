import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { siteContent } from "../data/siteContent";
import { CTAButton } from "./CTAButton";

const INTRO_PHASE_MS = 5200;

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const phases = siteContent.intro.sequences;
  const finalPhase = phase >= phases.length;
  const current = phases[Math.min(phase, phases.length - 1)];

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: 8 + ((index * 19) % 84),
        top: 10 + ((index * 29) % 72),
        delay: (index % 8) * 0.2
      })),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".flow-light", { xPercent: 110, opacity: 0, duration: 3.8, repeat: -1, ease: "power2.inOut", stagger: 0.36 });
    }, rootRef);

    const timers = phases.map((_, index) => window.setTimeout(() => setPhase(index + 1), (index + 1) * INTRO_PHASE_MS));
    return () => {
      timers.forEach(window.clearTimeout);
      ctx.revert();
    };
  }, [phases]);

  return (
    <motion.div
      ref={rootRef}
      className="relative z-50 grid h-dvh place-items-center overflow-hidden bg-zinc-950 px-4 text-white"
      exit={{ opacity: 0, scale: 1.025, filter: "blur(16px)" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-95"
        src="/intro-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={(event) => {
          event.currentTarget.currentTime = 1.2;
        }}
        aria-hidden="true"
      />
      <button
        className="absolute right-4 top-4 z-30 rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-xs font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur transition hover:border-white/50 hover:bg-black/40 md:right-8 md:top-6"
        onClick={onComplete}
      >
        {siteContent.intro.skipLabel}
      </button>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.68)_0%,rgba(2,6,23,0.42)_42%,rgba(2,6,23,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_32%,rgba(14,165,233,0.14),transparent_30%),radial-gradient(circle_at_74%_60%,rgba(194,65,12,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:86px_86px] opacity-35" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute size-1 rounded-full bg-white/45"
          style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
          animate={{ opacity: [0.12, 0.5, 0.12], scale: [0.8, 1.6, 0.75] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <div className="absolute left-[10%] right-[10%] top-[52%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="flow-light absolute -top-1 left-0 size-2 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(103,232,249,0.55)]" />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full min-w-0 max-w-[calc(100vw-2rem)] md:max-w-6xl"
        key={finalPhase ? "final" : phase}
        initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {!finalPhase ? (
          <div className="min-w-0">
            <div className="max-w-4xl">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/90">{current.eyebrow}</div>
              <h1 className="max-w-[20rem] break-words text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.02em] text-white drop-shadow-[0_18px_46px_rgba(0,0,0,0.42)] sm:max-w-full sm:text-6xl lg:text-7xl">
                {current.headline}
              </h1>
              <p className="mt-5 max-w-[21rem] text-base leading-7 text-white/82 sm:max-w-2xl md:text-2xl md:leading-8">{current.subline}</p>
              <IntroChips phase={phase} />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-cyan-100/90">{siteContent.brand.name}</div>
            <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.02em] text-white drop-shadow-[0_18px_46px_rgba(0,0,0,0.42)] sm:text-6xl lg:text-7xl">
              {siteContent.intro.finalHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-2xl">{siteContent.intro.finalSubheadline}</p>
            <div className="mt-8">
              <CTAButton onClick={onComplete}>{siteContent.intro.enterLabel}</CTAButton>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function IntroChips({ phase }: { phase: number }) {
  const current = siteContent.intro.sequences[Math.min(phase, siteContent.intro.sequences.length - 1)];

  if (phase === 2) {
    return (
      <div className="mt-7 flex max-w-3xl flex-wrap gap-3">
        {siteContent.intro.pipeline.map((step, index) => {
          return (
            <motion.div
              key={step.label}
              className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-md"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.16 }}
            >
              {step.label}
            </motion.div>
          );
        })}
      </div>
    );
  }

  if (phase === 3) {
    return (
      <div className="mt-7 flex max-w-4xl flex-wrap items-center gap-3">
        <motion.div
          className="flex items-center gap-3 rounded-full border border-white/20 bg-white/12 py-2 pl-2 pr-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <img
            src={siteContent.brand.portrait}
            alt={`${siteContent.brand.founder}, operator context`}
            className="size-12 rounded-full object-cover object-[50%_18%]"
          />
          <span>Operator-led execution</span>
        </motion.div>
        {siteContent.intro.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-md"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 + index * 0.1 }}
          >
            {metric.value} <span className="font-medium text-white/70">{metric.label}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-7 flex max-w-3xl flex-wrap gap-3">
      {current.bullets.map((item, index) => (
        <motion.div
          key={item}
          className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-md"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 + index * 0.16 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
