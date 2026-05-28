import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { iconMap } from "../data/siteContent";
import { CTAButton } from "./CTAButton";
import { LogoMarquee } from "./LogoMarquee";
import { MetricCard } from "./MetricCard";
import { ModelComparisonCard } from "./ModelComparisonCard";
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
                : "pt-24 md:place-items-center md:overflow-hidden md:pb-24 md:pt-28"
            }`
      }`}
      initial={isStacked ? { opacity: 1 } : { opacity: 0, y: 38, filter: "blur(12px)" }}
      animate={isStacked ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={isStacked ? undefined : { opacity: 0, y: -34, filter: "blur(12px)" }}
      transition={isStacked ? undefined : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby={`${slide.id}-title`}
    >
      <div
        className={`mx-auto grid w-full max-w-7xl gap-5 md:gap-8 ${
          isTeamSlide ? "lg:max-w-6xl" : "lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-center"
        }`}
      >
        <section className={isTeamSlide ? "max-w-4xl" : "max-w-3xl"}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            <span className="size-1.5 rounded-full bg-cyan" />
            {slide.kicker}
          </div>
          <h1
            id={`${slide.id}-title`}
            className="max-w-4xl text-balance text-3xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-7xl"
          >
            {slide.title}
          </h1>
          {"body" in slide && slide.body && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-300 md:mt-6 md:text-xl md:leading-8">{slide.body}</p>
          )}

          {"achievement" in slide && slide.achievement && (
            <div className="mt-6 rounded-lg border border-cyan/25 bg-cyan/10 px-5 py-4 text-base font-semibold leading-7 text-white">
              {slide.achievement}
            </div>
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

          {slide.id === "hero" && (
            <div className="mt-6 max-w-2xl md:mt-8">
              <LogoMarquee compact />
            </div>
          )}

          {slide.id === "about" && <AboutProfile />}
          {"credibility" in slide && slide.credibility && (
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">{slide.credibility}</p>
          )}
        </section>

        <section className="min-h-0">
          {slide.id === "hero" && <HeroVisual />}
          {slide.id === "about" && <ProfilePanel />}
          {"operatorProof" in slide && slide.operatorProof && (
            <div className="grid gap-3 sm:grid-cols-2">
              {slide.operatorProof.map((proof) => (
                <PillarCard key={proof.title} {...proof} />
              ))}
            </div>
          )}
          {"items" in slide && slide.items && <ListPanel items={slide.items} Icon={Icon} />}
          {"pillars" in slide && slide.pillars && (
            <div className="grid gap-3 sm:grid-cols-2">
              {slide.pillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          )}
          {"metrics" in slide && slide.metrics && slide.id === "aistra" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {slide.metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
              {"capabilities" in slide && (
                <div className="rounded-lg border border-white/12 bg-white/[0.045] p-5 shadow-premium backdrop-blur sm:col-span-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Capabilities delivered</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {slide.capabilities.map((item) => (
                      <span key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="size-4 shrink-0 text-cyan" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          {"models" in slide && slide.models && (
            <div className="grid gap-3">
              {slide.models.map((model) => (
                <ModelComparisonCard key={model.name} {...model} />
              ))}
            </div>
          )}
          {"timeline" in slide && slide.timeline && (
            <div className="relative grid gap-3">
              <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-cyan via-electric to-transparent sm:block" />
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
        <div className="absolute bottom-5 left-4 z-20 text-xs uppercase tracking-[0.18em] text-slate-500 md:left-8">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      )}
    </motion.article>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[230px] overflow-hidden rounded-lg border border-white/12 bg-white/[0.035] p-4 shadow-premium backdrop-blur sm:min-h-[320px] md:min-h-[520px] md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(196,181,253,0.22),transparent_28%),radial-gradient(circle_at_20%_68%,rgba(124,58,237,0.20),transparent_26%)]" />
      <div className="relative flex h-full min-h-[200px] flex-col justify-between sm:min-h-[280px] md:min-h-[480px]">
        <div className="flex items-center justify-between">
          <MapNode label="US HQ" align="left" />
          <MapNode label="India GCC" align="right" active />
        </div>
        <div className="relative my-4 grid items-center gap-4 sm:my-6 md:grid-cols-[0.9fr_1.1fr]">
          <FounderSignal />
          <div className="relative h-20 sm:h-28">
            <div className="absolute left-[14%] right-[14%] top-1/2 h-px bg-gradient-to-r from-electric via-cyan to-teal" />
            {[0, 1, 2, 3, 4].map((dot) => (
              <motion.span
                key={dot}
                className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-cyan shadow-glow"
                initial={{ left: "16%", opacity: 0 }}
                animate={{ left: "82%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, delay: dot * 0.42, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {["Product", "Engineering", "AI Ops", "Governance"].map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-black/20 p-3 text-sm font-semibold text-slate-200">
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
    <div className="rounded-lg border border-cyan/20 bg-black/30 p-3 shadow-glow backdrop-blur sm:p-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={siteContent.brand.portrait}
          alt="Naveen Upadhyay"
          className="size-16 shrink-0 rounded-lg border border-cyan/25 object-cover sm:size-24"
        />
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.18em] text-cyan">Led by Naveen Upadhyay</div>
          <div className="mt-2 text-base font-semibold leading-tight text-white sm:text-lg">
            Operator, CPTO, and India GCC builder
          </div>
          <div className="mt-2 text-xs leading-5 text-slate-400">
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
      <div className={`mb-3 inline-grid size-16 place-items-center rounded-lg border ${active ? "border-cyan bg-cyan/15 text-cyan" : "border-white/15 bg-white/5 text-slate-300"}`}>
        <span className="size-3 rounded-sm bg-current" />
      </div>
      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
    </div>
  );
}

function AboutProfile() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <CTAButton href={siteContent.brand.linkedin} variant="secondary">
        View LinkedIn Profile
      </CTAButton>
    </div>
  );
}

function ProfilePanel() {
  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.045] p-4 shadow-premium backdrop-blur md:max-h-[66vh] md:overflow-y-auto md:p-6">
      <div className="grid gap-5 sm:grid-cols-[150px_minmax(0,1fr)]">
        <img
          src={siteContent.brand.portrait}
          alt="Naveen Upadhyay"
          className="aspect-square w-32 rounded-lg border border-cyan/20 object-cover shadow-glow sm:w-full"
        />
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-5">
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-cyan">{siteContent.brand.founder}</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{siteContent.profile.title}</h2>
            </div>
            <a
              href={siteContent.brand.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan"
              aria-label="Open LinkedIn profile"
            >
              <ExternalLink className="size-4" />
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{siteContent.profile.summary}</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white">{siteContent.profile.operatorLine}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {siteContent.profile.metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        {siteContent.profile.points.map((point) => (
          <div key={point} className="flex gap-3 rounded-md border border-white/8 bg-black/15 p-3 text-sm leading-6 text-slate-300">
            <Check className="mt-1 size-4 shrink-0 text-cyan" />
            {point}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        {siteContent.profile.timeline.map((item) => (
          <div key={item.company} className="rounded-md border border-cyan/15 bg-cyan/[0.055] p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-cyan">{item.company}</div>
            <div className="mt-2 text-sm font-semibold text-white">{item.role}</div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListPanel({ items, Icon }: { items: readonly string[]; Icon: React.ComponentType<{ className?: string }> | null }) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.045] p-5 shadow-premium backdrop-blur md:p-6">
      {Icon && (
        <div className="mb-6 grid size-12 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
          <Icon className="size-6" />
        </div>
      )}
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-md border border-white/8 bg-black/15 p-3 text-sm leading-6 text-slate-300">
            <Check className="mt-1 size-4 shrink-0 text-cyan" />
            <span>{item}</span>
          </div>
        ))}
      </div>
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
          className="rounded-lg border border-white/12 bg-white/[0.055] p-4 shadow-premium backdrop-blur transition hover:border-cyan/35 hover:bg-cyan/[0.07] sm:p-5 md:min-h-[180px] md:p-7"
        >
          <div className="flex items-start gap-4 md:gap-5">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="size-20 shrink-0 rounded-lg border border-cyan/25 object-cover shadow-glow sm:size-24 md:size-28"
              />
            ) : (
              <div className="grid size-20 shrink-0 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-xl font-semibold text-cyan sm:size-24 md:size-28 md:text-2xl">
                {member.initials}
              </div>
            )}
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-[0.18em] text-cyan">0{index + 1}</div>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-white md:text-2xl">{member.name}</h3>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-8 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan transition hover:border-cyan hover:bg-cyan/20 hover:text-white"
                    aria-label={`Open ${member.name} LinkedIn profile`}
                  >
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
              <div className="mt-2 text-base font-semibold text-cyan">{member.role}</div>
              <p className="mt-3 text-sm leading-6 text-slate-400 md:mt-4 md:text-base md:leading-7">{member.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function FinalPanel() {
  return (
    <div className="rounded-lg border border-cyan/20 bg-cyan/[0.07] p-6 shadow-glow backdrop-blur">
      <div className="text-xs uppercase tracking-[0.18em] text-cyan">EleventyfirstParallel AI</div>
      <div className="mt-5 text-3xl font-semibold text-white">
        AI-native global execution infrastructure, led by an operator who has built India technology centers before.
      </div>
      <div className="mt-8 grid gap-3 text-sm text-slate-300">
        <div>Naveen Upadhyay</div>
        <a className="text-cyan transition hover:text-white" href={`mailto:${siteContent.brand.email}`}>
          {siteContent.brand.email}
        </a>
        <div>{siteContent.brand.footer}</div>
      </div>
    </div>
  );
}
