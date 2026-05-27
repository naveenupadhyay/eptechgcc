import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Layers3, Sparkles } from "lucide-react";
import { iconMap, siteContent } from "../data/siteContent";

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
    <SectionShell>
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{architecture.kicker}</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-5xl">{architecture.title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400">{architecture.summary}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.045] p-4 shadow-premium backdrop-blur sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_32%,rgba(20,184,166,0.08)_68%,transparent)]" />
          <div className="relative grid gap-3">
            {architecture.layers.map((layer, index) => (
              <div
                key={layer.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/28 p-4 transition hover:border-cyan/35 hover:bg-cyan/[0.065]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan via-electric to-teal opacity-70" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-xs font-semibold text-cyan">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{layer.description}</p>
                  </div>
                  <div className="flex max-w-md flex-wrap gap-2 md:justify-end">
                    {layer.nodes.map((node) => (
                      <span
                        key={node}
                        className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-medium text-slate-200"
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
          <div className="rounded-3xl border border-cyan/20 bg-cyan/[0.06] p-5 shadow-premium sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan">Built on top</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Product Families</h3>
              </div>
              <span className="grid size-11 place-items-center rounded-2xl border border-cyan/30 bg-black/25 text-cyan">
                <Layers3 className="size-5" />
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {architecture.products.map((product) => (
                <div key={product} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold leading-5 text-white">{product}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/[0.045] p-5 shadow-premium backdrop-blur sm:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Execution flow</p>
            <div className="mt-5 grid gap-4">
              {architecture.flow.map((step, index) => (
                <div key={step.label} className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid size-9 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-xs font-semibold text-cyan">
                      {index + 1}
                    </span>
                    {index < architecture.flow.length - 1 && <span className="my-2 h-full min-h-8 w-px bg-cyan/25" />}
                  </div>
                  <div className="pb-3">
                    <h4 className="text-base font-semibold text-white">{step.label}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{step.detail}</p>
                  </div>
                </div>
              ))}
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
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.16),transparent_34%),linear-gradient(180deg,#02040a_0%,#07111f_48%,#02040a_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-70" />

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
          </motion.div>

          <motion.div
            className="relative"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.055] p-5 shadow-premium backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Capability map</p>
                  <p className="mt-1 text-lg font-semibold text-white">Built systems, not slideware</p>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl border border-cyan/35 bg-cyan/10 text-cyan">
                  <Sparkles className="size-5" />
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.proofMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-5 text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-cyan/20 bg-cyan/[0.06] p-4">
                <p className="text-sm leading-6 text-slate-300">
                  Finance automation, legal AI, conversational agents, education workflows, document intelligence, and
                  agentic orchestration have already been built into reusable delivery muscle.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionShell>

      <CoreStackDiagram />

      <SectionShell>
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Domain depth</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Capabilities by Vertical</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Each vertical compounds into the GCC story: domain context, reusable engineering, workflow automation, and
            teams that know how to ship AI products.
          </p>
        </div>

        <div className="grid gap-5">
          {content.domains.map((domain, index) => {
            const Icon = iconMap[domain.icon];
            return (
              <motion.article
                key={domain.name}
                className="grid gap-6 rounded-3xl border border-white/12 bg-white/[0.045] p-5 shadow-premium backdrop-blur sm:p-7 lg:grid-cols-[0.9fr_1.1fr]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.2) }}
              >
                <div>
                  <span className="mb-5 grid size-12 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">{domain.name}</h3>
                  <p className="mt-4 text-pretty text-base leading-7 text-slate-300">{domain.summary}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/22 p-4">
                    <p className="mb-3 text-sm font-semibold text-white">What Eptech built</p>
                    <ul className="space-y-3">
                      {domain.capabilities.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/22 p-4">
                    <p className="mb-3 text-sm font-semibold text-white">Why it matters</p>
                    <ul className="space-y-3">
                      {domain.outcomes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-teal/15 text-[10px] font-bold text-teal">
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
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/12 bg-white/[0.045] p-6 shadow-premium backdrop-blur">
            <span className="mb-5 grid size-12 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
              <Layers3 className="size-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">Reusable platform</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">The Engineering Spine Behind a GCC</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">{content.operatingMessage}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.platformCapabilities.map((capability) => (
              <div key={capability.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{capability.description}</p>
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
