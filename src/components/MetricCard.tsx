import { iconMap, type IconName } from "../data/siteContent";

export function MetricCard({ value, label, icon }: { value: string; label: string; icon?: IconName }) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.07)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-semibold tracking-normal text-zinc-950 md:text-5xl">{value}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</div>
        </div>
        {Icon && (
          <div className="grid size-10 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-white">
            <Icon className="size-5" />
          </div>
        )}
      </div>
    </div>
  );
}
