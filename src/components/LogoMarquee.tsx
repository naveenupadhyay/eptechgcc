import { siteContent } from "../data/siteContent";

type LogoGroup = (typeof siteContent.logoCloud.groups)[number];
type Logo = {
  name: string;
  domain: string;
  logoUrl: string;
};

export function LogoMarquee({ compact = false, intro = false }: { compact?: boolean; intro?: boolean }) {
  if (intro) {
    const logos: Logo[] = siteContent.logoCloud.groups.flatMap((group) => [...group.logos]);

    return (
      <div className="relative overflow-hidden rounded-2xl border border-violet-200/20 bg-black/36 p-3 shadow-[0_20px_70px_rgba(76,29,149,0.24)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(88,28,135,0.42),rgba(124,58,237,0.30),rgba(255,255,255,0.06))]" />
        <div className="relative flex items-center gap-4">
          <p className="hidden shrink-0 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-violet-100/70 sm:block">
            Trusted operating context
          </p>
          <CombinedLogoRow logos={logos} />
        </div>
      </div>
    );
  }

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

function CombinedLogoRow({ logos }: { logos: Logo[] }) {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="logo-marquee-mask min-w-0 flex-1 overflow-hidden">
      <div className="flex w-max gap-3 animate-logo-marquee">
        {repeated.map((logo, index) => (
          <LogoTile key={`${logo.name}-intro-${index}`} logo={logo} small />
        ))}
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
            <LogoTile key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoTile({ logo, small = false }: { logo: Logo; small?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-white/14 bg-black/28 shadow-[0_12px_32px_rgba(0,0,0,0.24)] backdrop-blur ${
        small ? "h-12 min-w-36 px-3" : "h-16 min-w-44 px-4"
      }`}
    >
      <span
        className={`relative grid shrink-0 place-items-center overflow-hidden rounded-xl border border-white/12 bg-white/95 ${
          small ? "size-7 p-1" : "size-9 p-1.5"
        }`}
      >
        <span className="text-[0.58rem] font-black uppercase tracking-normal text-violet-900">{getInitials(logo.name)}</span>
        <img
          src={logo.logoUrl}
          alt={`${logo.name} logo`}
          className="absolute inset-1 size-[calc(100%-0.5rem)] object-contain"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
      </span>
      <span className="min-w-0">
        <span className={`${small ? "text-xs" : "text-sm"} block truncate font-semibold text-white`}>{logo.name}</span>
        {!small && <span className="block truncate text-xs text-violet-50/52">{logo.domain}</span>}
      </span>
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
