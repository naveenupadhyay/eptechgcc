import { iconMap, type IconName } from "../data/siteContent";

export function TimelineStep({ index, title, icon }: { index: number; title: string; icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <div className="relative rounded-lg border border-white/12 bg-white/[0.045] p-4 backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Step {index + 1}</div>
          <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}
