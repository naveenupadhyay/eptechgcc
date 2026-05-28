import { siteContent } from "../data/siteContent";

type LogoGroup = (typeof siteContent.logoCloud.groups)[number];

export function LogoMarquee({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-violet-300/24 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_52%,#f7f3ff_135%)] shadow-[0_26px_90px_rgba(76,29,149,0.32)] ${compact ? "p-4" : "p-5 sm:p-6"}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_0%,rgba(255,255,255,0.28),transparent_28%)]" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-100/76">{siteContent.logoCloud.title}</p>
        <div className="mt-5 grid gap-5">
          {siteContent.logoCloud.groups.map((group, index) => (
            <LogoRow key={group.label} group={group} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoRow({ group, reverse }: { group: LogoGroup; reverse?: boolean }) {
  const logos = [...group.logos, ...group.logos, ...group.logos];

  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-white/28" />
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-violet-50/72">{group.label}</p>
      </div>
      <div className="logo-marquee-mask relative overflow-hidden">
        <div className={`flex w-max gap-3 ${reverse ? "animate-logo-marquee-reverse" : "animate-logo-marquee"}`}>
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-16 min-w-44 items-center gap-3 rounded-2xl border border-white/14 bg-black/28 px-4 shadow-[0_12px_32px_rgba(0,0,0,0.24)] backdrop-blur"
            >
              <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/12 bg-white/92 p-1.5">
                <span className="text-[0.62rem] font-black uppercase tracking-normal text-violet-900">
                  {getInitials(logo.name)}
                </span>
                <img
                  src={logo.logoUrl}
                  alt={`${logo.name} logo`}
                  className="absolute inset-1.5 size-[calc(100%-0.75rem)] object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">{logo.name}</span>
                <span className="block truncate text-xs text-violet-50/52">{logo.domain}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getInitials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
