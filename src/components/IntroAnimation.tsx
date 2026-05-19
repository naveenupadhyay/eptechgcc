import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { siteContent, iconMap } from "../data/siteContent";
import { CTAButton } from "./CTAButton";

const INTRO_PHASE_MS = 4500;

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const phases = siteContent.intro.sequences;
  const finalPhase = phase >= phases.length;
  const current = phases[Math.min(phase, phases.length - 1)];

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: 10 + ((index * 17) % 82),
        top: 12 + ((index * 23) % 70),
        delay: (index % 9) * 0.18
      })),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".intro-grid", { opacity: 0.18 }, { opacity: 0.42, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".flow-light", { xPercent: 170, opacity: 0, duration: 3.4, repeat: -1, ease: "power2.inOut", stagger: 0.28 });
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
      className="relative z-50 grid h-dvh place-items-center overflow-hidden bg-ink px-4 text-white"
      exit={{ opacity: 0, scale: 1.04, filter: "blur(18px)" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <button
        className="absolute right-4 top-4 z-30 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200 backdrop-blur transition hover:border-cyan/50 hover:text-white md:right-8 md:top-6"
        onClick={onComplete}
      >
        {siteContent.intro.skipLabel}
      </button>

      <div className="intro-grid absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_76%_54%,rgba(20,184,166,0.16),transparent_26%)]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute size-1 bg-cyan/70"
          style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
          animate={{ opacity: [0.1, 0.9, 0.15], scale: [0.8, 1.8, 0.7] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <div className="absolute left-[8%] right-[8%] top-[42%] h-px bg-gradient-to-r from-electric via-cyan to-teal opacity-60">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="flow-light absolute -top-1 left-0 size-2 rounded-full bg-white shadow-glow" />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        key={finalPhase ? "final" : phase}
        initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {!finalPhase ? (
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">{current.eyebrow}</div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                {current.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-2xl">{current.subline}</p>
            </div>
            <IntroPanel phase={phase} />
          </div>
        ) : (
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Final reveal</div>
            <h1 className="text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {siteContent.intro.finalHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-2xl">{siteContent.intro.finalSubheadline}</p>
            <div className="mt-9">
              <CTAButton onClick={onComplete}>{siteContent.intro.enterLabel}</CTAButton>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function IntroPanel({ phase }: { phase: number }) {
  if (phase === 2) {
    return (
      <div className="grid gap-3">
        {siteContent.intro.pipeline.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={step.label}
              className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.045] p-4 backdrop-blur"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.16 }}
            >
              <span className="grid size-10 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
                <Icon className="size-5" />
              </span>
              <span className="font-semibold text-slate-100">{step.label}</span>
            </motion.div>
          );
        })}
      </div>
    );
  }

  if (phase === 3) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {siteContent.intro.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="rounded-lg border border-white/12 bg-white/[0.045] p-5 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
          >
            <div className="text-3xl font-semibold text-white md:text-5xl">{metric.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-[320px] rounded-lg border border-white/12 bg-white/[0.035] p-5 shadow-premium backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_32%,rgba(59,130,246,0.24),transparent_25%),radial-gradient(circle_at_74%_60%,rgba(103,232,249,0.22),transparent_28%)]" />
      <div className="relative flex h-full min-h-[280px] items-center justify-center">
        <div className="size-48 rounded-full border border-cyan/25 shadow-glow md:size-64">
          <div className="h-full rounded-full border border-white/10 bg-[conic-gradient(from_180deg,rgba(103,232,249,0.08),rgba(59,130,246,0.28),rgba(20,184,166,0.12),rgba(103,232,249,0.08))]" />
        </div>
        <div className="absolute left-8 top-8 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
          US pressure
        </div>
        <div className="absolute bottom-8 right-8 rounded-md border border-cyan/25 bg-cyan/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cyan">
          India activation
        </div>
      </div>
    </div>
  );
}
