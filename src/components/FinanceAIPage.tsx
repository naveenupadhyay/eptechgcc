import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Download, ExternalLink, Mail, Sparkles } from "lucide-react";
import { iconMap, siteContent } from "../data/siteContent";
import { LogoMarquee } from "./LogoMarquee";

const content = siteContent.financeAIPage;

function SectionShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10 ${className}`}>{children}</section>;
}

function LinkButton({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition ${
        primary
          ? "bg-violet-400 text-ink hover:bg-white"
          : "border border-white/15 bg-white/[0.04] text-white hover:border-violet-300/60 hover:bg-violet-300/10"
      }`}
    >
      {children}
      {isExternal ? <ExternalLink className="size-4" /> : href.endsWith(".pdf") ? <Download className="size-4" /> : <ArrowRight className="size-4" />}
    </a>
  );
}

export function FinanceAIPage() {
  useEffect(() => {
    document.title = "F&A AI Transformation | EPTech";
  }, []);

  return (
    <main className="relative h-dvh overflow-x-hidden overflow-y-auto bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(109,40,217,0.14),transparent_32%),radial-gradient(circle_at_86%_4%,rgba(168,85,247,0.10),transparent_26%),linear-gradient(180deg,#05030b_0%,#02040a_48%,#02040a_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent opacity-70" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/72 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-violet-300/35 bg-white/[0.04] shadow-glow">
              <img src="/ep.avif" alt="" className="size-full object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide text-white">{siteContent.brand.name}</span>
              <span className="hidden text-xs text-slate-400 sm:block">F&A AI transformation</span>
            </span>
          </a>
          <nav className="flex items-center gap-2">
            <a
              href="/capabilities"
              className="hidden h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10 sm:inline-flex"
            >
              Capabilities
            </a>
            <a
              href="/"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10"
            >
              <ArrowLeft className="size-3.5" />
              <span className="hidden sm:inline">Main Site</span>
            </a>
          </nav>
        </div>
      </header>

      <SectionShell className="min-h-[calc(100dvh-73px)] pt-14 sm:pt-20">
        <div className="grid min-h-[74dvh] items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
          <div className="min-w-0">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">{content.kicker}</p>
            <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-xl leading-8 text-slate-300">{content.subtitle}</p>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-400">{content.positioning}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {content.ctas.map((cta, index) => (
                <LinkButton key={cta.label} href={cta.href} primary={index === 0}>
                  {cta.label}
                </LinkButton>
              ))}
            </div>
            <div className="mt-8">
              <LogoMarquee compact />
            </div>
          </div>

          <TopROICalculator />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">The problem</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Finance teams rarely have one big problem.</h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              They have dozens of recurring frictions that compound every week into slower reporting, weaker control evidence, and
              decision lag.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.frictions.map((friction) => (
              <div key={friction} className="rounded-2xl border border-white/12 bg-white/[0.045] p-4 text-sm leading-6 text-slate-300 shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                {friction}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="py-16">
        <GradientPanel>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">EPTech approach</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Diagnose, build, transform.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-violet-50/76">
              Start narrow enough to ship quickly, but important enough to create a CFO-visible business case.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {content.approach.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.title} className="rounded-3xl border border-white/16 bg-black/28 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.28)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl border border-violet-100/28 bg-violet-100/10 text-violet-100">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-semibold text-violet-100/55">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-violet-50/72">{step.description}</p>
                </div>
              );
            })}
          </div>
        </GradientPanel>
      </SectionShell>

      <SectionShell>
        <SectionHeader eyebrow="Workflow coverage" title="Where AI Agents Can Create Value" body="The strongest pilots sit where volume, repeatability, evidence, and finance judgment intersect." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.workflows.map((workflow) => {
            const Icon = iconMap[workflow.icon];
            return (
              <article key={workflow.name} className="rounded-3xl border border-white/12 bg-white/[0.045] p-5 shadow-[0_20px_56px_rgba(0,0,0,0.24)] backdrop-blur">
                <span className="mb-5 grid size-12 place-items-center rounded-2xl border border-violet-300/30 bg-violet-300/10 text-violet-200">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">{workflow.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  <span className="font-semibold text-slate-200">Pain: </span>
                  {workflow.pain}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  <span className="font-semibold text-white">EPTech builds: </span>
                  {workflow.build}
                </p>
                <div className="mt-5 rounded-2xl border border-violet-200/18 bg-violet-300/10 px-4 py-3 text-sm font-semibold text-violet-50">
                  {workflow.impact}
                </div>
              </article>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell className="py-16">
        <GradientPanel>
          <SectionHeader eyebrow="High-value pilots" title="Use Cases to Lead With" body="These are practical entry points where finance leaders can feel the before-and-after quickly." inverted />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {content.useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-3xl border border-white/16 bg-black/30 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.26)]">
                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                <p className="mt-4 text-sm leading-6 text-violet-50/72">
                  <span className="font-semibold text-white">Best fit: </span>
                  {useCase.bestFit}
                </p>
                <p className="mt-3 text-sm leading-6 text-violet-50/78">
                  <span className="font-semibold text-white">Expected impact: </span>
                  {useCase.outcome}
                </p>
              </div>
            ))}
          </div>
        </GradientPanel>
      </SectionShell>

      <SectionShell>
        <SectionHeader eyebrow="Pilot menu" title="Recommended Pilot Options" body="Each pilot is scoped for fast learning, measurable ROI, and a clear expansion path." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.pilots.map((pilot) => (
            <article key={pilot.name} className="rounded-3xl border border-white/12 bg-white/[0.045] p-5 shadow-[0_18px_46px_rgba(0,0,0,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{pilot.duration}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{pilot.name}</h3>
              <ul className="mt-5 space-y-3">
                {pilot.scope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <GradientPanel>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Governance by design</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Finance AI needs trust, not theater.</h2>
            <p className="mt-5 text-base leading-7 text-violet-50/76">
              AI handles volume, extraction, matching, drafting, monitoring, and evidence assembly. Finance professionals remain
              accountable for approvals, accounting judgment, audit conclusions, forecasts, and external reporting.
            </p>
          </GradientPanel>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.governance.map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.045] p-4 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-20">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-300/28 bg-[linear-gradient(135deg,#2e1065_0%,#6d28d9_52%,#f8f7ff_130%)] p-6 shadow-[0_34px_130px_rgba(76,29,149,0.34)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(255,255,255,0.25),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">Client-facing offer</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">{content.diagnostic.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-violet-50/78">{content.diagnostic.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={content.ctas[0].href} primary>
                  Book Diagnostic
                </LinkButton>
                <LinkButton href={content.assets.pdf}>Download PDF</LinkButton>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.diagnostic.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-white/16 bg-black/28 p-4 text-sm font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <span>EPTech F&A AI Transformation | EleventyfirstParallel AI</span>
          <a className="inline-flex items-center gap-2 text-violet-300 transition hover:text-white" href={`mailto:${siteContent.brand.email}`}>
            <Mail className="size-4" />
            {siteContent.brand.email}
          </a>
        </footer>
      </SectionShell>
    </main>
  );
}

const roiPresets = {
  small: {
    label: "Small firm workflow estimate",
    text: "Best for small finance teams automating one recurring F&A workflow.",
    teamSize: 3,
    manualShare: 35,
    hourlyCost: 65,
    automationLift: 40,
    weeks: 48
  },
  mid: {
    label: "Mid-sized firm workflow estimate",
    text: "Best for finance teams with higher transaction volume and multiple recurring F&A workflows.",
    teamSize: 9,
    manualShare: 45,
    hourlyCost: 85,
    automationLift: 45,
    weeks: 48
  }
};

type ROIAssumptions = Omit<(typeof roiPresets)["small"], "label" | "text">;
type PresetName = keyof typeof roiPresets;

function TopROICalculator() {
  const [activePreset, setActivePreset] = useState<PresetName | "custom">("small");
  const [assumptions, setAssumptions] = useState<ROIAssumptions>({
    teamSize: roiPresets.small.teamSize,
    manualShare: roiPresets.small.manualShare,
    hourlyCost: roiPresets.small.hourlyCost,
    automationLift: roiPresets.small.automationLift,
    weeks: roiPresets.small.weeks
  });

  const result = useMemo(() => {
    const annualHours = assumptions.teamSize * 40 * assumptions.weeks;
    const manualHours = annualHours * (assumptions.manualShare / 100);
    const hoursSaved = manualHours * (assumptions.automationLift / 100);
    const costSaved = hoursSaved * assumptions.hourlyCost;
    const monthsSaved = hoursSaved / 160;

    return { manualHours, hoursSaved, costSaved, monthsSaved };
  }, [assumptions]);

  const updateAssumption = (key: keyof ROIAssumptions, value: number) => {
    setActivePreset("custom");
    setAssumptions((current) => ({ ...current, [key]: value }));
  };

  const applyPreset = (name: PresetName) => {
    const preset = roiPresets[name];
    setActivePreset(name);
    setAssumptions({
      teamSize: preset.teamSize,
      manualShare: preset.manualShare,
      hourlyCost: preset.hourlyCost,
      automationLift: preset.automationLift,
      weeks: preset.weeks
    });
  };

  return (
    <div className="relative min-w-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-violet-700/18 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/30 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_48%,#f8f7ff_128%)] p-5 shadow-[0_34px_120px_rgba(76,29,149,0.36)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_0%,rgba(255,255,255,0.25),transparent_30%)]" />
        <div className="relative">
          <div className="mb-5 flex items-center justify-between border-b border-white/12 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-violet-100/70">ROI calculator</p>
              <p className="mt-1 text-lg font-semibold text-white">Annual capacity estimate</p>
            </div>
            <span className="grid size-11 place-items-center rounded-2xl border border-white/20 bg-black/20 text-white">
              <Sparkles className="size-5" />
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {(["small", "mid"] as PresetName[]).map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => applyPreset(name)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  activePreset === name ? "border-white/60 bg-white text-violet-950" : "border-white/16 bg-black/18 text-violet-50 hover:border-white/40"
                }`}
              >
                {name === "small" ? "Small firm" : "Mid-sized firm"}
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            <SliderField label="People" value={assumptions.teamSize} min={1} max={30} onChange={(value) => updateAssumption("teamSize", value)} compact />
            <SliderField label="Manual work" value={assumptions.manualShare} min={10} max={80} suffix="%" onChange={(value) => updateAssumption("manualShare", value)} compact />
            <SliderField label="Hourly cost" value={assumptions.hourlyCost} min={35} max={175} step={5} prefix="$" onChange={(value) => updateAssumption("hourlyCost", value)} compact />
            <SliderField label="Effort reduced" value={assumptions.automationLift} min={15} max={75} suffix="%" onChange={(value) => updateAssumption("automationLift", value)} compact />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <ResultCard value={formatNumber(result.hoursSaved)} label="hours saved per year" />
            <ResultCard value={compactMoney(result.costSaved)} label="annual capacity value" />
            <ResultCard value={formatNumber(result.manualHours)} label="current manual hours" />
            <ResultCard value={result.monthsSaved.toFixed(1)} label="person-months returned" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ROICalculator() {
  const [activePreset, setActivePreset] = useState<PresetName | "custom">("small");
  const [assumptions, setAssumptions] = useState<ROIAssumptions>({
    teamSize: roiPresets.small.teamSize,
    manualShare: roiPresets.small.manualShare,
    hourlyCost: roiPresets.small.hourlyCost,
    automationLift: roiPresets.small.automationLift,
    weeks: roiPresets.small.weeks
  });

  const result = useMemo(() => {
    const annualHours = assumptions.teamSize * 40 * assumptions.weeks;
    const manualHours = annualHours * (assumptions.manualShare / 100);
    const hoursSaved = manualHours * (assumptions.automationLift / 100);
    const costSaved = hoursSaved * assumptions.hourlyCost;
    const monthsSaved = hoursSaved / 160;

    return { manualHours, hoursSaved, costSaved, monthsSaved };
  }, [assumptions]);

  const scenario =
    activePreset === "custom"
      ? {
          label: "Custom workflow estimate",
          text: "Adjusted assumptions based on the selected workflow and firm profile."
        }
      : roiPresets[activePreset];

  const updateAssumption = (key: keyof ROIAssumptions, value: number) => {
    setActivePreset("custom");
    setAssumptions((current) => ({ ...current, [key]: value }));
  };

  const applyPreset = (name: PresetName) => {
    const preset = roiPresets[name];
    setActivePreset(name);
    setAssumptions({
      teamSize: preset.teamSize,
      manualShare: preset.manualShare,
      hourlyCost: preset.hourlyCost,
      automationLift: preset.automationLift,
      weeks: preset.weeks
    });
  };

  return (
    <SectionShell className="pt-0">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-300/28 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_50%,#f8f7ff_130%)] p-5 shadow-[0_34px_130px_rgba(76,29,149,0.34)] sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.26),transparent_30%)]" />
        <div className="relative mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">ROI calculator</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-5xl">Estimate capacity created from one F&A workflow.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-violet-50/76">
            Use the presets or adjust the assumptions to estimate annual manual hours saved and capacity value created.
          </p>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <form className="rounded-3xl border border-white/16 bg-black/28 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.32)] sm:p-6" aria-label="ROI assumptions">
            <div className="mb-6 flex flex-wrap gap-2">
              {(["small", "mid"] as PresetName[]).map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => applyPreset(name)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    activePreset === name
                      ? "border-white/60 bg-white text-violet-950"
                      : "border-white/16 bg-white/[0.06] text-violet-50 hover:border-white/40"
                  }`}
                >
                  {name === "small" ? "Small firm" : "Mid-sized firm"}
                </button>
              ))}
            </div>

            <div className="grid gap-5">
              <SliderField label="People in workflow" value={assumptions.teamSize} min={1} max={30} onChange={(value) => updateAssumption("teamSize", value)} />
              <SliderField label="Time spent on manual work" value={assumptions.manualShare} min={10} max={80} suffix="%" onChange={(value) => updateAssumption("manualShare", value)} />
              <SliderField label="Fully loaded hourly cost" value={assumptions.hourlyCost} min={35} max={175} step={5} prefix="$" onChange={(value) => updateAssumption("hourlyCost", value)} />
              <SliderField label="Manual effort reduced" value={assumptions.automationLift} min={15} max={75} suffix="%" onChange={(value) => updateAssumption("automationLift", value)} />
              <SliderField label="Working weeks per year" value={assumptions.weeks} min={40} max={52} onChange={(value) => updateAssumption("weeks", value)} />
            </div>
          </form>

          <aside className="rounded-3xl border border-white/18 bg-black/30 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.36)] sm:p-6" aria-label="ROI results">
            <div className="border-b border-white/12 pb-5">
              <h3 className="text-2xl font-semibold text-white">{scenario.label}</h3>
              <p className="mt-2 text-sm leading-6 text-violet-50/70">{scenario.text}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ResultCard value={formatNumber(result.manualHours)} label="manual hours currently spent per year" />
              <ResultCard value={formatNumber(result.hoursSaved)} label="annual hours saved after automation" />
              <ResultCard value={compactMoney(result.costSaved)} label="annual capacity value created" />
              <ResultCard value={result.monthsSaved.toFixed(1)} label="person-months of capacity returned" />
            </div>
            <p className="mt-5 rounded-2xl border border-white/14 bg-white/[0.06] p-4 text-sm leading-6 text-violet-50/72">
              Directional planning estimate. Final ROI depends on transaction volume, system access, data quality, control design,
              and how much of the workflow is suitable for automation.
            </p>
          </aside>
        </div>
      </div>
    </SectionShell>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  onChange,
  compact = false
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
  compact?: boolean;
}) {
  return (
    <label className="block">
      <span className={`mb-2 flex items-center justify-between gap-4 font-semibold text-violet-50 ${compact ? "text-xs" : "text-sm"}`}>
        <span>{label}</span>
        <span className="rounded-full border border-white/14 bg-white/[0.08] px-3 py-1 text-xs tabular-nums text-white">
          {prefix}
          {value}
          {suffix}
        </span>
      </span>
      <input
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-black/35 accent-violet-200"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function ResultCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/14 bg-white/[0.06] p-4">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-5 text-violet-50/66">{label}</p>
    </div>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function compactMoney(value: number) {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${Math.round(value / 1000)}K`;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function GradientPanel({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-300/28 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_52%,#f8f7ff_128%)] p-5 shadow-[0_34px_120px_rgba(76,29,149,0.32)] sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(255,255,255,0.24),transparent_28%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, body, inverted = false }: { eyebrow: string; title: string; body: string; inverted?: boolean }) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${inverted ? "text-violet-200" : "text-violet-300"}`}>{eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-5xl">{title}</h2>
      </div>
      <p className={`max-w-xl text-sm leading-6 ${inverted ? "text-violet-50/72" : "text-slate-400"}`}>{body}</p>
    </div>
  );
}
