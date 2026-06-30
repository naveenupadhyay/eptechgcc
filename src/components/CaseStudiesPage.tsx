import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  Headphones,
  Layers3,
  Scale,
  ShieldCheck,
  Users,
  Workflow
} from "lucide-react";
import { siteContent } from "../data/siteContent";

const caseStudies = [
  {
    title: "AI-Native Engineering Operating System",
    subtitle: "A context and control layer that orchestrates coding agents, repo knowledge, tools, tests, evals, and human review.",
    icon: BrainCircuit,
    tone: "#11845b",
    context: "In AI-native engineering, the strategic layer is not the coding agent alone. It is the context and control layer that turns specs, repo memory, architecture rules, tool access, tests, evals, and human review into one governed delivery system.",
    stack: ["Context + control layer", "Claude Code", "Cursor", "GitHub Copilot", "LangGraph + LangChain", "MCP tools"],
    workflow: ["Spec to tasks", "Context assembled", "Agents orchestrated", "Implementation drafted", "Tests and evals", "Review and release learning"],
    outcomes: ["Higher leverage per engineer", "Faster idea-to-release cycles", "Safer AI adoption", "Reusable engineering playbooks"]
  },
  {
    title: "Finance and Accounting",
    subtitle: "Audit automation for public and private company filings, financial reconciliation, and evidence workflows.",
    icon: CircleDollarSign,
    tone: "#a85f00",
    context: "Built an application for audit firms to conduct audits on public and private companies by parsing current and prior filings, reading financials, and reconciling evidence across workflows.",
    stack: ["Filing parsers", "Financial extraction", "Java automation", "Python automation", "Reconciliation engines", "Audit evidence trails"],
    workflow: ["Ingest filings", "Parse prior periods", "Extract financials", "Run reconciliations", "Flag exceptions", "Generate audit trail"],
    outcomes: ["Faster audit preparation", "Stronger evidence traceability", "Lower manual reconciliation effort", "More consistent exception review"]
  },
  {
    title: "Legal",
    subtitle: "Contract negotiation at scale and ADR workflows combining LLMs, ML models, and decision-tree logic.",
    icon: Scale,
    tone: "#7352c7",
    context: "Built legal AI solutions for contract management and negotiation at scale, plus alternate dispute resolution workflows using LLMs, machine learning models, and structured decision trees.",
    stack: ["Contract ingestion", "Clause intelligence", "Negotiation workflows", "LLM reasoning", "Predictive ML", "Decision trees"],
    workflow: ["Parse contracts", "Extract clauses", "Compare positions", "Route negotiation steps", "Score dispute signals", "Recommend next action"],
    outcomes: ["Faster contract review cycles", "More consistent negotiation positions", "Structured ADR decision support", "Explainable legal workflow automation"]
  },
  {
    title: "Sales Outreach",
    subtitle: "Voice-agent driven sales outreach that calls customers, qualifies intent, and routes follow-up actions.",
    icon: BriefcaseBusiness,
    tone: "#2457d6",
    context: "Built a sales outreach engine as part of the conversational AI stack, where voice agents call customers, follow scripts, capture responses, and support sales conversion workflows.",
    stack: ["Voice agents", "Telephony/SIP", "Conversation scripts", "CRM workflows", "Call summaries", "Lead routing"],
    workflow: ["Select audience", "Trigger outbound call", "Qualify customer intent", "Capture objections", "Update CRM", "Route human follow-up"],
    outcomes: ["Higher outreach capacity", "Consistent sales conversations", "Cleaner customer intent capture", "Faster follow-up cycles"]
  },
  {
    title: "Customer Care",
    subtitle: "Conversational AI for regulated customer support, including a Dubai government entity use case.",
    icon: Headphones,
    tone: "#0b7285",
    context: "Built customer care support automation for a Dubai government entity using conversational AI that could understand customer intent, retrieve policy context, and escalate sensitive cases.",
    stack: ["Voice/chat surfaces", "LiveKit/WebRTC", "Knowledge RAG", "Tool actions", "Escalation policy", "QA evals"],
    workflow: ["Detect intent", "Retrieve policy", "Ask clarifying questions", "Execute allowed action", "Escalate sensitive cases", "Analyze traces"],
    outcomes: ["Shorter response times", "Controlled escalation paths", "Consistent policy answers", "Better QA visibility"]
  }
];

const stackLayers = [
  { label: "Surfaces", detail: "Web, mobile, Slack, telephony, voice, CRM, support inboxes", icon: Users },
  { label: "Agent Runtime", detail: "LangGraph, OpenAI Agents SDK, Claude Code SDK, Google ADK, custom workflows", icon: Bot },
  { label: "Skills", detail: "Reusable domain procedures, examples, scripts, prompts, validators", icon: Layers3 },
  { label: "Knowledge", detail: "RAG, search, vector stores, structured memory, case and account records", icon: FileSearch },
  { label: "Models", detail: "LLMs, VLMs, predictive ML, embeddings, rerankers, realtime voice models", icon: BarChart3 },
  { label: "Governance", detail: "Evals, traces, permissions, audit logs, drift checks, human review", icon: ShieldCheck }
];

type CaseStudy = (typeof caseStudies)[number];

function BrandPill() {
  return (
    <div className="mb-5 inline-flex items-center gap-3 rounded-lg border border-[#d8ded7] bg-white px-3 py-2 shadow-[0_10px_30px_rgba(23,32,26,0.06)]">
      <img src="/ep.avif" alt="EPTech logo" className="size-8 rounded-md object-cover" />
      <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#5b655f]">EPTech</span>
    </div>
  );
}

function StackOverview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`min-w-0 rounded-lg border border-[#d8ded7] bg-white shadow-[0_18px_45px_rgba(23,32,26,0.10)] ${compact ? "p-4" : "p-5"}`}>
      <div className={`${compact ? "mb-3" : "mb-5"} flex items-center justify-between gap-4`}>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#11845b]">Reusable stack</p>
          <h2 className={`${compact ? "mt-1 text-xl" : "mt-2 text-xl sm:text-2xl"} max-w-full break-words font-bold tracking-normal text-[#17201a]`}>
            What repeats across every case
          </h2>
        </div>
        <Workflow className="size-6 text-[#11845b]" />
      </div>
      <div className={`grid ${compact ? "gap-2" : "gap-3"}`}>
        {stackLayers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <div key={layer.label} className={`grid grid-cols-[42px_1fr] gap-3 rounded-lg border border-[#d8ded7] bg-[#fbfcfa] ${compact ? "p-2" : "p-3"}`}>
              <span className={`${compact ? "size-9" : "size-10"} grid place-items-center rounded-lg text-white`} style={{ background: index % 2 ? "#2457d6" : "#11845b" }}>
                <Icon className={compact ? "size-4" : "size-5"} />
              </span>
              <span className="min-w-0">
                <b className="block text-sm tracking-normal text-[#17201a]">{layer.label}</b>
                <small className={`${compact ? "leading-4" : "leading-5"} mt-1 block break-words text-xs text-[#5b655f]`}>{layer.detail}</small>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AINativeEngineeringDiagram({ study }: { study: CaseStudy }) {
  const controlInputs = ["Specs", "Repo memory", "Architecture rules", "MCP tools", "Tests/evals", "Release gates"];
  const agentLayer = [
    {
      label: "AI coding agents",
      detail: "Claude Code, Cursor, GitHub Copilot, Codex-style workflows",
      icon: Bot,
      color: "#11845b"
    },
    {
      label: "Governance harness",
      detail: "Tests, evals, CI/CD gates, security scans, human review",
      icon: ShieldCheck,
      color: "#7352c7"
    }
  ];

  return (
    <div className="grid gap-4 p-4 md:p-5 xl:grid-cols-[0.86fr_1.14fr] xl:p-6">
      <div className="flex flex-col justify-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: study.tone }}>
          Context + control layer
        </p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5b655f]">{study.context}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.map((item) => (
            <span key={item} className="rounded-lg border border-[#d8ded7] bg-[#f6f7f4] px-2.5 py-1.5 text-xs font-bold text-[#17201a]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#d8ded7] bg-[#fbfcfa] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
        <div className="rounded-lg border border-[#b8d8c5] bg-[#eef5ef] p-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <span>
              <b className="block text-base font-bold tracking-normal text-[#17201a]">Context + control layer</b>
              <small className="mt-1 block text-xs leading-5 text-[#5b655f]">The layer AI/data engineering teams build to control how agents work.</small>
            </span>
            <Workflow className="size-6 text-[#11845b]" />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {controlInputs.map((item) => (
              <span key={item} className="rounded-lg bg-white px-2 py-1 text-[0.68rem] font-bold text-[#17201a]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="my-2 flex justify-center">
          <span className="rounded-lg border border-[#d8ded7] bg-white px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#11845b]">
            orchestrates
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {agentLayer.map((lane) => {
            const Icon = lane.icon;
            return (
              <div key={lane.label} className="relative grid gap-2 rounded-lg border border-[#d8ded7] bg-white p-3 sm:grid-cols-[34px_1fr]">
                <span className="grid size-8 place-items-center rounded-lg text-white" style={{ background: lane.color }}>
                  <Icon className="size-4" />
                </span>
                <span>
                  <b className="block text-sm font-bold tracking-normal text-[#17201a]">{lane.label}</b>
                  <small className="mt-1 block text-xs leading-4 text-[#5b655f]">{lane.detail}</small>
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid gap-3 rounded-lg border border-[#cfd7ce] bg-[#eef5ef] p-3 sm:grid-cols-2">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#11845b]">Delivery loop</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {study.workflow.map((step) => (
                <span key={step} className="rounded-lg bg-white px-2 py-1 text-[0.68rem] font-bold text-[#17201a]">
                  {step}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#11845b]">Business outcome</p>
            <div className="mt-2 grid gap-1.5">
              {study.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-2 text-xs leading-4 text-[#5b655f]">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#11845b]" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, index, presentation = false }: { study: CaseStudy; index: number; presentation?: boolean }) {
  const Icon = study.icon;
  const isAINativeEngineering = index === 0;

  return (
    <article className="min-w-0 overflow-hidden rounded-lg border border-[#d8ded7] bg-white shadow-[0_10px_30px_rgba(23,32,26,0.06)]">
      <div className={`grid ${presentation ? "min-h-[500px] md:grid-cols-[240px_1fr] xl:grid-cols-[300px_1fr]" : "min-h-[190px] lg:grid-cols-[240px_1fr]"}`}>
        <div className="flex flex-col justify-between gap-8 p-6 text-white lg:p-7" style={{ background: study.tone }}>
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-white/25 bg-white/14 px-2.5 py-2">
              <img src="/ep.avif" alt="EPTech logo" className="size-7 shrink-0 rounded-md object-cover" />
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">EPTech</span>
            </span>
            <span className="text-sm font-extrabold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div>
            <span className="mb-4 grid size-11 place-items-center rounded-lg border border-white/25 bg-white/12">
              <Icon className="size-6" />
            </span>
            <h2 className={`${presentation ? "text-4xl" : "text-2xl"} font-bold leading-tight tracking-normal`}>{study.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/82">{study.subtitle}</p>
          </div>
        </div>

        {isAINativeEngineering ? (
          <AINativeEngineeringDiagram study={study} />
        ) : (
        <div className={`grid gap-5 p-5 ${presentation ? "content-center md:grid-cols-3 md:p-6 xl:p-8" : "lg:grid-cols-[1.05fr_0.95fr_0.95fr] lg:p-6"}`}>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: study.tone }}>
              Use case
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5b655f]">{study.context}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span key={item} className="rounded-lg border border-[#d8ded7] bg-[#f6f7f4] px-2.5 py-1.5 text-xs font-bold text-[#17201a]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: study.tone }}>
              Workflow
            </p>
            <div className="mt-3 grid gap-2">
              {study.workflow.map((step) => (
                <div key={step} className="flex gap-2 text-sm leading-5 text-[#5b655f]">
                  <ClipboardCheck className="mt-0.5 size-4 shrink-0" style={{ color: study.tone }} />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em]" style={{ color: study.tone }}>
              Outcomes
            </p>
            <div className="mt-3 grid gap-2">
              {study.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-2 text-sm leading-5 text-[#5b655f]">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0" style={{ color: study.tone }} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </article>
  );
}

function PrinciplesPanel() {
  return (
    <div className="grid gap-4 rounded-lg border border-[#d8ded7] bg-white p-5 shadow-[0_18px_45px_rgba(23,32,26,0.10)] sm:grid-cols-3 sm:p-6">
      {[
        { label: "Design principle", value: "Workflows for reliability, agents for ambiguity.", icon: BadgeCheck },
        { label: "Control layer", value: "Evals, audit logs, permissions, and human approval.", icon: ShieldCheck },
        { label: "Compounding asset", value: "Every case study becomes a reusable skill.", icon: Layers3 }
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="rounded-lg border border-[#d8ded7] bg-[#fbfcfa] p-4">
            <Icon className="size-5 text-[#11845b]" />
            <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#5b655f]">{item.label}</p>
            <p className="mt-2 text-base font-bold leading-6 tracking-normal text-[#17201a]">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export function CaseStudiesPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = caseStudies.length + 2;

  const goToSlide = useCallback(
    (next: number) => {
      setActiveSlide(Math.max(0, Math.min(totalSlides - 1, next)));
    },
    [totalSlides]
  );

  useEffect(() => {
    document.title = "Case Studies | Agentic AI Application Stack";
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (window.matchMedia("(max-width: 767px)").matches) return;
      if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        goToSlide(activeSlide + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goToSlide(activeSlide - 1);
      }
      if (event.key === "Home") goToSlide(0);
      if (event.key === "End") goToSlide(totalSlides - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlide, goToSlide, totalSlides]);

  return (
    <main className="h-dvh overflow-x-hidden overflow-y-auto bg-[#f6f7f4] text-[#17201a] md:overflow-hidden">
      <header className="sticky top-0 z-30 border-b border-[#d8ded7] bg-[#f6f7f4]/86 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-[#cfd7ce] bg-white shadow-[0_8px_24px_rgba(23,32,26,0.10)]">
              <img src="/ep.avif" alt="" className="size-full object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-normal text-[#17201a]">EPTech</span>
              <span className="hidden text-xs text-[#5b655f] sm:block">Case studies</span>
            </span>
          </a>
          <a
            href="/stack"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#cfd7ce] bg-white px-3 text-xs font-bold text-[#17201a] transition hover:border-[#11845b] hover:bg-[#eef5ef]"
          >
            <ArrowLeft className="size-3.5" />
            <span className="hidden sm:inline">Stack</span>
          </a>
        </div>
      </header>

      <section className="hidden h-[calc(100dvh-73px)] md:block">
        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-8 pb-24 pt-8 lg:px-10">
          <div className="min-h-0 flex-1 overflow-hidden">
            {activeSlide === 0 && (
              <div className="grid h-full items-center gap-6 md:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <BrandPill />
                  <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-normal text-[#17201a] xl:text-7xl">
                    Case Studies for Agentic AI Applications
                  </h1>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[#5b655f] xl:text-lg xl:leading-8">
                    Practical examples of what we have learned across four years of AI engineering work, building AI products for engineering, finance, legal, sales, and customer service teams.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Workflow-first", "Skills-based", "RAG-aware", "Model-governed", "Human-reviewed"].map((tag) => (
                      <span key={tag} className="rounded-lg border border-[#d8ded7] bg-white px-3 py-2 text-sm font-bold text-[#17201a]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <StackOverview compact />
              </div>
            )}

            {activeSlide > 0 && activeSlide <= caseStudies.length && (
              <div className="grid h-full items-center">
                <CaseStudyCard study={caseStudies[activeSlide - 1]} index={activeSlide - 1} presentation />
              </div>
            )}

            {activeSlide === totalSlides - 1 && (
              <div className="grid h-full items-center gap-6 md:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <BrandPill />
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#11845b]">Operating thesis</p>
                  <h2 className="mt-4 max-w-3xl text-5xl font-bold leading-[0.98] tracking-normal text-[#17201a] xl:text-6xl">
                    Every case study becomes a reusable skill.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5b655f]">
                    The goal is not one-off automation. The goal is a repeatable operating system where workflows, tools,
                    knowledge, models, and governance compound across teams.
                  </p>
                </div>
                <PrinciplesPanel />
              </div>
            )}
          </div>

          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-center lg:left-10 lg:right-10">
            <div className="flex items-center gap-4 rounded-lg border border-[#d8ded7] bg-white/92 px-4 py-3 shadow-[0_18px_45px_rgba(23,32,26,0.12)] backdrop-blur-xl">
              <button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                className="grid size-9 place-items-center rounded-lg border border-[#cfd7ce] bg-white text-[#17201a] transition hover:border-[#11845b] hover:bg-[#eef5ef] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={activeSlide === 0}
                aria-label="Previous slide"
              >
                <ArrowLeft className="size-4" />
              </button>
              <span className="text-xs font-bold tabular-nums text-[#5b655f]">
                {String(activeSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition ${index === activeSlide ? "w-8 bg-[#11845b]" : "w-2.5 bg-[#cfd7ce] hover:bg-[#5b655f]"}`}
                />
              ))}
              </div>
              <button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                className="grid size-9 place-items-center rounded-lg border border-[#cfd7ce] bg-white text-[#17201a] transition hover:border-[#11845b] hover:bg-[#eef5ef] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={activeSlide === totalSlides - 1}
                aria-label="Next slide"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid min-h-[calc(100dvh-73px)] w-full max-w-7xl min-w-0 items-center gap-8 px-5 py-12 sm:px-8 md:hidden">
        <div className="min-w-0">
          <BrandPill />
          <h1 className="max-w-full break-words text-3xl font-bold leading-tight tracking-normal text-[#17201a] min-[420px]:text-4xl sm:text-6xl">
            <span className="sm:hidden">
              Case Studies for
              <br />
              Agentic AI
              <br />
              Applications
            </span>
            <span className="hidden sm:inline">Case Studies for Agentic AI Applications</span>
          </h1>
          <p className="mt-6 max-w-[21rem] break-words text-lg leading-8 text-[#5b655f] sm:max-w-full">
            Practical examples of what we have learned across four years of AI engineering work, building AI products for engineering, finance, legal, sales, and customer service teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Workflow-first", "Skills-based", "RAG-aware", "Model-governed", "Human-reviewed"].map((tag) => (
              <span key={tag} className="rounded-lg border border-[#d8ded7] bg-white px-3 py-2 text-sm font-bold text-[#17201a]">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <StackOverview />
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 md:hidden">
        <div className="grid gap-4">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 md:hidden">
        <PrinciplesPanel />
      </section>
    </main>
  );
}
