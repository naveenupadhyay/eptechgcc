import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Layers3, Sparkles } from "lucide-react";
import { iconMap, siteContent } from "../data/siteContent";
import { LogoMarquee } from "./LogoMarquee";

const content = siteContent.capabilitiesPage;

function SectionShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative mx-auto w-full max-w-7xl overflow-hidden px-5 py-12 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

function CoreStackDiagram() {
  const architecture = content.architecture;

  return (
    <SectionShell className="py-16">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-300/28 bg-[linear-gradient(135deg,#2e1065_0%,#6d28d9_52%,#f8f7ff_125%)] p-5 shadow-[0_34px_130px_rgba(76,29,149,0.34)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_4%,rgba(255,255,255,0.28),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      <div className="relative mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">{architecture.kicker}</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-5xl">{architecture.title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-violet-50/78">{architecture.summary}</p>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/16 bg-black/28 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.42)] backdrop-blur sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="relative grid gap-3">
            {architecture.layers.map((layer, index) => (
              <div
                key={layer.title}
                className="group relative overflow-hidden rounded-2xl border border-white/14 bg-black/35 p-4 shadow-[0_12px_34px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-black/45"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white via-violet-200 to-fuchsia-200 opacity-90" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-violet-200/35 bg-violet-300/12 text-xs font-semibold text-violet-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-violet-50/72">{layer.description}</p>
                  </div>
                  <div className="flex max-w-md flex-wrap gap-2 md:justify-end">
                    {layer.nodes.map((node) => (
                      <span
                        key={node}
                        className="rounded-full border border-violet-100/18 bg-violet-50/[0.08] px-3 py-1.5 text-xs font-medium text-violet-50"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-3xl border border-white/18 bg-black/28 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.34)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-violet-100">Built on top</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Product Families</h3>
              </div>
              <span className="grid size-11 place-items-center rounded-2xl border border-violet-100/30 bg-black/25 text-violet-100">
                <Layers3 className="size-5" />
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {architecture.products.map((product) => (
                <div key={product} className="rounded-2xl border border-white/14 bg-black/34 p-4 shadow-[0_12px_28px_rgba(0,0,0,0.24)]">
                  <p className="text-sm font-semibold leading-5 text-white">{product}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/16 bg-black/28 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur sm:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-violet-100/70">Execution flow</p>
            <div className="mt-5 grid gap-4">
              {architecture.flow.map((step, index) => (
                <div key={step.label} className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid size-9 place-items-center rounded-full border border-violet-200/35 bg-violet-300/12 text-xs font-semibold text-violet-100">
                      {index + 1}
                    </span>
                    {index < architecture.flow.length - 1 && <span className="my-2 h-full min-h-8 w-px bg-violet-200/25" />}
                  </div>
                  <div className="pb-3">
                    <h4 className="text-base font-semibold text-white">{step.label}</h4>
                    <p className="mt-1 text-sm leading-6 text-violet-50/62">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </SectionShell>
  );
}

export function CapabilitiesPage() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Eptech AI Product Engineering Capabilities | EleventyfirstParallel AI";
  }, []);

  return (
    <main className="relative h-dvh overflow-x-hidden overflow-y-auto bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(109,40,217,0.12),transparent_32%),linear-gradient(180deg,#05030b_0%,#02040a_46%,#02040a_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent opacity-70" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/72 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-cyan/35 bg-white/[0.04] shadow-glow">
              <img src="/ep.avif" alt="" className="size-full object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide text-white">{siteContent.brand.name}</span>
              <span className="hidden text-xs text-slate-400 sm:block">Capability presentation</span>
            </span>
          </a>
          <a
            href="/"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-white transition hover:border-cyan/50 hover:bg-cyan/10"
          >
            <ArrowLeft className="size-3.5" />
            <span className="hidden sm:inline">Main Site</span>
          </a>
        </div>
      </header>

      <SectionShell className="min-h-[calc(100dvh-73px)] pt-16 sm:pt-20">
        <div className="grid min-h-[74dvh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="w-[calc(100vw-4rem)] max-w-full min-[420px]:w-[calc(100vw-2.5rem)] sm:w-auto"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{content.kicker}</p>
            <h1 className="max-w-full break-words text-3xl font-semibold leading-tight tracking-normal text-white min-[420px]:text-4xl sm:max-w-5xl sm:text-balance sm:text-6xl sm:leading-[0.98] lg:text-7xl">
              <span className="sm:hidden">
                AI Product Engineering
                <br />
                Capabilities Built
                <br />
                Across Finance, Legal,
                <br />
                Conversational AI, and
                <br />
                Education
              </span>
              <span className="hidden sm:inline">{content.title}</span>
            </h1>
            <p className="mt-7 text-base leading-8 text-slate-300 sm:hidden">
              Over the last 3.5 years, Eptech has built AI systems across document intelligence, agentic automation,
              voice and chat agents, claims workflows, legal AI, and education tools.
            </p>
            <p className="mt-7 hidden max-w-3xl text-pretty text-xl leading-8 text-slate-300 sm:block">{content.subtitle}</p>
            <p className="mt-5 text-sm leading-7 text-slate-400 sm:hidden">
              This is the delivery foundation behind EleventyfirstParallel AI: battle-tested product engineering for
              India-based GCC execution.
            </p>
            <p className="mt-5 hidden max-w-3xl text-pretty text-base leading-7 text-slate-400 sm:block">{content.positioning}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {content.ctas.map((cta, index) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition ${
                    index === 0
                      ? "bg-cyan text-ink hover:bg-white"
                      : "border border-white/15 bg-white/[0.04] text-white hover:border-cyan/50 hover:bg-cyan/10"
                  }`}
                >
                  {cta.label}
                  {cta.href.startsWith("http") ? <ExternalLink className="size-4" /> : <ArrowRight className="size-4" />}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <LogoMarquee compact />
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-violet-700/18 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/30 bg-[linear-gradient(135deg,#241052_0%,#5b2bbd_46%,#f5f3ff_115%)] p-5 shadow-[0_34px_120px_rgba(76,29,149,0.35)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(255,255,255,0.20),transparent_30%)]" />
              <div className="relative">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-100/70">Capability map</p>
                  <p className="mt-1 text-lg font-semibold text-white">Built systems, not slideware</p>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl border border-white/20 bg-black/20 text-white">
                  <Sparkles className="size-5" />
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.proofMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/12 bg-black/28 p-4">
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-5 text-violet-50/70">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-white/14 bg-black/24 p-4">
                <p className="text-sm leading-6 text-violet-50/78">
                  Finance automation, legal AI, conversational agents, education workflows, document intelligence, and
                  agentic orchestration have already been built into reusable delivery muscle.
                </p>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionShell>

      <CoreStackDiagram />

      <SectionShell className="py-16">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-300/28 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_48%,#f8f7ff_125%)] p-5 shadow-[0_34px_130px_rgba(76,29,149,0.32)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(255,255,255,0.26),transparent_28%)]" />
          <div className="relative mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Domain depth</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Capabilities by Vertical</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-violet-50/70">
              Each vertical compounds into the GCC story: domain context, reusable engineering, workflow automation, and
              teams that know how to ship AI products.
            </p>
          </div>

        <div className="relative grid gap-6">
          {content.domains.map((domain, index) => {
            const Icon = iconMap[domain.icon];
            return (
              <motion.article
                key={domain.name}
                className="grid gap-6 rounded-[1.75rem] border border-white/18 bg-black/30 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.035] backdrop-blur sm:p-7 lg:grid-cols-[0.9fr_1.1fr]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.2) }}
              >
                <div>
                  <span className="mb-5 grid size-12 place-items-center rounded-2xl border border-violet-200/35 bg-violet-300/12 text-violet-100 shadow-[0_0_32px_rgba(168,85,247,0.18)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">{domain.name}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-violet-50/76">{domain.summary}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/14 bg-black/34 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.24)]">
                    <p className="mb-3 text-sm font-semibold text-white">What Eptech built</p>
                    <ul className="space-y-3">
                      {domain.capabilities.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-violet-50/72">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/14 bg-black/24 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.24)]">
                    <p className="mb-3 text-sm font-semibold text-white">Why it matters</p>
                    <ul className="space-y-3">
                      {domain.outcomes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-violet-50/76">
                          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-violet-300/18 text-[10px] font-bold text-violet-100">
                            <Check className="size-3" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-violet-300/28 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_58%,#12081f_100%)] p-6 shadow-[0_28px_90px_rgba(76,29,149,0.28)] backdrop-blur">
            <span className="mb-5 grid size-12 place-items-center rounded-2xl border border-violet-200/35 bg-violet-300/12 text-violet-100">
              <Layers3 className="size-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Reusable platform</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">The Engineering Spine Behind a GCC</h2>
            <p className="mt-5 text-base leading-7 text-violet-50/76">{content.operatingMessage}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.platformCapabilities.map((capability) => (
              <div key={capability.title} className="rounded-2xl border border-violet-200/18 bg-slate-950/72 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.30)]">
                <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-violet-50/64">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-20">
        <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.06] p-6 shadow-premium sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Technology surface</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Tools, Frameworks, and Patterns Used</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {content.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {content.ctas.map((cta, index) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-cyan text-ink hover:bg-white"
                    : "border border-white/15 bg-white/[0.04] text-white hover:border-cyan/50 hover:bg-cyan/10"
                }`}
              >
                {cta.label}
                {cta.href.startsWith("http") ? <ExternalLink className="size-4" /> : <ArrowRight className="size-4" />}
              </a>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
