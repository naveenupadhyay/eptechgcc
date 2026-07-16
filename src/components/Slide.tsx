import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { iconMap } from "../data/siteContent";
import { CTAButton } from "./CTAButton";
import { PillarCard } from "./PillarCard";
import { TimelineStep } from "./TimelineStep";
import { siteContent } from "../data/siteContent";

type AnySlide = (typeof siteContent.slides)[number];

export function Slide({
  slide,
  index,
  total,
  onNavigate,
  mode = "slideshow"
}: {
  slide: AnySlide;
  index: number;
  total: number;
  onNavigate: (id: string) => void;
  mode?: "slideshow" | "stacked";
}) {
  const Icon = "icon" in slide && slide.icon ? iconMap[slide.icon] : null;
  const isTeamSlide = slide.id === "team";
  const isStacked = mode === "stacked";

  return (
    <motion.article
      id={isStacked ? slide.id : undefined}
      className={`grid place-items-start px-4 sm:px-6 md:px-10 ${
        isStacked
          ? "min-h-dvh scroll-mt-20 overflow-visible pb-14 pt-24"
          : `h-dvh overflow-y-auto overscroll-contain pb-20 ${
              isTeamSlide
                ? "pt-28 md:pt-32"
                : "pt-24 md:place-items-center md:pb-20 md:pt-24"
            }`
      }`}
      initial={isStacked ? { opacity: 1 } : { opacity: 0, y: 38, filter: "blur(12px)" }}
      animate={isStacked ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={isStacked ? undefined : { opacity: 0, y: -34, filter: "blur(12px)" }}
      transition={isStacked ? undefined : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby={`${slide.id}-title`}
      data-active-slide={!isStacked ? "true" : undefined}
    >
      <div
        className={`mx-auto grid w-full max-w-7xl gap-5 md:gap-8 ${
          isTeamSlide ? "lg:max-w-6xl" : "md:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] md:items-center"
        }`}
      >
        <section className={isTeamSlide ? "max-w-4xl" : "max-w-3xl"}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
            <span className="size-1.5 rounded-full bg-zinc-950" />
            {slide.kicker}
          </div>
          <h1
            id={`${slide.id}-title`}
            className="max-w-4xl text-balance text-3xl font-semibold leading-[1.04] tracking-normal text-zinc-950 sm:text-5xl lg:text-7xl"
          >
            {slide.title}
          </h1>
          {"body" in slide && slide.body && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8">{slide.body}</p>
          )}

          {"ctas" in slide && slide.ctas && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              {slide.ctas.map((cta) => (
                <CTAButton
                  key={cta.label}
                  variant={"variant" in cta ? cta.variant : "primary"}
                  href={"href" in cta ? cta.href : undefined}
                  onClick={() => ("target" in cta && cta.target ? onNavigate(cta.target) : undefined)}
                >
                  {cta.label}
                </CTAButton>
              ))}
            </div>
          )}

          {slide.id === "about" && <AboutProfile />}
        </section>

        <section className="min-h-0">
          {slide.id === "hero" && <HeroVisual />}
          {slide.id === "about" && <ProfilePanel />}
          {"operatorProof" in slide && slide.operatorProof && slide.id === "operator" && (
            <OperatorProofPanel proofItems={slide.operatorProof} />
          )}
          {"items" in slide && slide.items && <ListPanel items={slide.items} Icon={Icon} />}
          {"caseStudies" in slide && slide.caseStudies && <CaseStudiesPanel caseStudies={slide.caseStudies} />}
          {"pillars" in slide && slide.pillars && (
            <div className="grid gap-3 sm:grid-cols-2">
              {slide.pillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          )}
          {"timeline" in slide && slide.timeline && (
            <div className="relative grid gap-3">
              <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-zinc-950 via-zinc-300 to-transparent sm:block" />
              {slide.timeline.map((step, stepIndex) => (
                <TimelineStep key={step.title} index={stepIndex} {...step} />
              ))}
            </div>
          )}
          {"team" in slide && slide.team && <TeamPanel team={slide.team} />}
          {slide.id === "cta" && <FinalPanel />}
        </section>
      </div>

      {!isStacked && (
        <div className="absolute bottom-5 left-4 z-20 text-xs uppercase tracking-[0.18em] text-zinc-400 md:left-8">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      )}
    </motion.article>
  );
}

function OperatorProofPanel({
  proofItems
}: {
  proofItems: ReadonlyArray<{
    readonly title: string;
    readonly description: string;
    readonly icon: keyof typeof iconMap;
  }>;
}) {
  return (
    <div className="grid gap-3">
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
        <div className="grid gap-0 sm:grid-cols-[0.68fr_1.32fr]">
          <div className="bg-zinc-100">
            <img
              src={siteContent.brand.portrait}
              alt={`${siteContent.brand.founder}, operator context`}
              className="h-full min-h-[220px] w-full object-cover object-[50%_18%] sm:min-h-[320px]"
            />
          </div>
          <div className="flex flex-col justify-center p-4 md:p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Operator context</div>
            <h2 className="mt-2 text-xl font-semibold leading-tight text-zinc-950 md:text-2xl">
              AI transformation with operating judgment behind it.
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The company logo leads the brand. Naveen's operator background explains why the AI work is grounded in scale, adoption, cost, governance, and delivery reality.
            </p>
            <div className="mt-4 grid gap-2 lg:grid-cols-2">
              {proofItems.map((proof) => {
                const Icon = iconMap[proof.icon];
                return (
                  <div key={proof.title} className="flex min-h-[104px] gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-zinc-950 text-white">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-zinc-950">{proof.title}</div>
                      <div className="mt-1 text-xs leading-5 text-zinc-600">{proof.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[230px] overflow-hidden rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.10)] sm:min-h-[320px] md:min-h-[380px] md:p-5 xl:min-h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(24,24,27,0.06),transparent_28%),radial-gradient(circle_at_20%_68%,rgba(14,165,233,0.08),transparent_26%)]" />
      <div className="relative flex h-full min-h-[200px] flex-col justify-between sm:min-h-[280px] md:min-h-[340px] xl:min-h-[460px]">
        <div className="flex items-center justify-between">
          <MapNode label="US HQ" align="left" />
          <MapNode label="India Team" align="right" active />
        </div>
        <div className="relative my-4 grid items-center gap-4 sm:my-6 md:grid-cols-[0.9fr_1.1fr]">
          <FounderSignal />
          <div className="relative h-20 sm:h-28">
            <div className="absolute left-[14%] right-[14%] top-1/2 h-px bg-gradient-to-r from-zinc-300 via-zinc-950 to-zinc-300" />
            {[0, 1, 2, 3, 4].map((dot) => (
              <motion.span
                key={dot}
                className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-zinc-950 shadow-[0_0_18px_rgba(0,0,0,0.32)]"
                initial={{ left: "16%", opacity: 0 }}
                animate={{ left: "82%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, delay: dot * 0.42, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {["Workflow", "AI Agents", "Integrations", "Governance"].map((item) => (
            <div key={item} className="rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm font-semibold text-zinc-800">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FounderSignal() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.12)] sm:p-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={siteContent.brand.portrait}
          alt={`${siteContent.brand.founder}, operator context`}
          className="size-16 shrink-0 rounded-lg border border-zinc-200 object-cover sm:size-24"
        />
        <div className="min-w-0">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Operator-led by {siteContent.brand.founder}</div>
          <div className="mt-2 text-base font-semibold leading-tight text-zinc-950 sm:text-lg">
            Operator-led AI transformation + India execution
          </div>
          <div className="mt-2 text-xs leading-5 text-zinc-500">
            Aistra Labs. eyewa. Boutiqaat. BYJU'S. Paytm. Walmart. Snapdeal.
          </div>
        </div>
      </div>
    </div>
  );
}

function MapNode({ label, active, align }: { label: string; active?: boolean; align: "left" | "right" }) {
  return (
    <div className={`max-w-[48%] ${align === "right" ? "text-right" : ""}`}>
      <div className={`mb-3 inline-grid size-16 place-items-center rounded-lg border ${active ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-500"}`}>
        <span className="size-3 rounded-sm bg-current" />
      </div>
      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</div>
    </div>
  );
}

function AboutProfile() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <CTAButton href={`mailto:${siteContent.brand.email}`} variant="secondary">
        Discuss AI Transformation
      </CTAButton>
    </div>
  );
}

function ProfilePanel() {
  const compactStats = [
    { value: "AI", label: "workflow systems" },
    { value: "4", label: "capability verticals" },
    { value: "Ops", label: "operator lens" },
    { value: "India", label: "execution team" }
  ];

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.10)] md:p-5">
      <div className="flex items-start gap-4">
        <img
          src="/ep.avif"
          alt={`${siteContent.brand.name} logo`}
          className="size-24 shrink-0 rounded-lg border border-zinc-200 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.12)] md:size-28"
        />
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{siteContent.brand.name}</div>
          <h2 className="mt-2 text-xl font-semibold leading-tight text-zinc-950 md:text-2xl">AI Workflow Transformation Company</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Product engineering, AI architecture, workflow automation, and India execution capability for practical enterprise AI systems.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {compactStats.map((metric) => (
          <div key={metric.label} className="rounded-md border border-zinc-200 bg-zinc-50 p-3">
            <div className="text-xl font-semibold text-zinc-950">{metric.value}</div>
            <div className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListPanel({ items, Icon }: { items: readonly string[]; Icon: React.ComponentType<{ className?: string }> | null }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.10)] md:p-6">
      {Icon && (
        <div className="mb-6 grid size-12 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-white">
          <Icon className="size-6" />
        </div>
      )}
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-3 text-sm leading-6 text-zinc-600">
            <Check className="mt-1 size-4 shrink-0 text-zinc-950" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudiesPanel({
  caseStudies
}: {
  caseStudies: ReadonlyArray<{
    readonly title: string;
    readonly description: string;
    readonly tags: readonly string[];
    readonly icon: keyof typeof iconMap;
  }>;
}) {
  return (
    <div className="grid gap-2 xl:grid-cols-2">
      {caseStudies.map((study) => {
        const Icon = iconMap[study.icon];
        return (
          <article key={study.title} className="rounded-lg border border-zinc-200 bg-white p-3 shadow-[0_14px_38px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-white">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-5 text-zinc-950">{study.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-zinc-600">{study.description}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[0.68rem] font-semibold text-zinc-700">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function TeamPanel({
  team
}: {
  team: ReadonlyArray<{
    readonly name: string;
    readonly role: string;
    readonly description: string;
    readonly initials: string;
    readonly image?: string;
    readonly linkedin?: string;
  }>;
}) {
  return (
    <div className="grid gap-4 pr-1 lg:max-h-[60vh] lg:grid-cols-2 lg:gap-5 lg:overflow-y-auto">
      {team.map((member, index) => (
        <article
          key={member.name}
          className="rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.07)] transition hover:-translate-y-0.5 hover:border-zinc-950 sm:p-5 md:min-h-[180px] md:p-7"
        >
          <div className="flex items-start gap-4 md:gap-5">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="size-20 shrink-0 rounded-lg border border-zinc-200 object-cover shadow-[0_16px_42px_rgba(0,0,0,0.12)] sm:size-24 md:size-28"
              />
            ) : (
              <div className="grid size-20 shrink-0 place-items-center rounded-lg border border-zinc-200 bg-zinc-950 text-xl font-semibold text-white sm:size-24 md:size-28 md:text-2xl">
                {member.initials}
              </div>
            )}
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">0{index + 1}</div>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-zinc-950 md:text-2xl">{member.name}</h3>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-8 shrink-0 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-white transition hover:bg-zinc-800"
                    aria-label={`Open ${member.name} LinkedIn profile`}
                  >
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
              <div className="mt-2 text-base font-semibold text-zinc-700">{member.role}</div>
              <p className="mt-3 text-sm leading-6 text-zinc-600 md:mt-4 md:text-base md:leading-7">{member.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function FinalPanel() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{siteContent.brand.name}</div>
      <div className="mt-5 text-3xl font-semibold text-zinc-950">
        Operator-led AI product engineering that turns enterprise workflows into shipped, governed AI systems.
      </div>
      <div className="mt-8 grid gap-3 text-sm text-zinc-600">
        <div>{siteContent.brand.name}</div>
        <a className="font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-950" href={`mailto:${siteContent.brand.email}`}>
          {siteContent.brand.email}
        </a>
        <div>{siteContent.brand.footer}</div>
      </div>
    </div>
  );
}
