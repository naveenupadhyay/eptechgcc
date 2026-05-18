import { iconMap, type IconName } from "../data/siteContent";

export function MetricCard({ value, label, icon }: { value: string; label: string; icon?: IconName }) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.045] p-4 shadow-premium backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-semibold tracking-normal text-white md:text-5xl">{value}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
        </div>
        {Icon && (
          <div className="grid size-10 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
            <Icon className="size-5" />
          </div>
        )}
      </div>
    </div>
  );
}
