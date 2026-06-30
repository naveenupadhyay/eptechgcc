import { iconMap, type IconName } from "../data/siteContent";

export function TimelineStep({ index, title, icon }: { index: number; title: string; icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <div className="relative rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-white">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Step {index + 1}</div>
          <h3 className="mt-1 text-base font-semibold text-zinc-950">{title}</h3>
        </div>
      </div>
    </div>
  );
}
