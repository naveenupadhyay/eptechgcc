import { iconMap, type IconName } from "../data/siteContent";

export function ModelComparisonCard({
  name,
  bestFor,
  includes,
  icon
}: {
  name: string;
  bestFor: string;
  includes: string;
  icon: IconName;
}) {
  const Icon = iconMap[icon];

  return (
    <article className="grid rounded-lg border border-white/12 bg-white/[0.045] p-5 shadow-premium backdrop-blur">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
          <Icon className="size-5" />
        </span>
      </div>
      <p className="text-sm font-semibold leading-6 text-cyan">{bestFor}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{includes}</p>
    </article>
  );
}
