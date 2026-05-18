import { iconMap, type IconName } from "../data/siteContent";

export function PillarCard({ title, description, icon }: { title: string; description: string; icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <article className="group rounded-lg border border-white/12 bg-white/[0.045] p-5 shadow-premium backdrop-blur transition hover:border-cyan/35 hover:bg-cyan/[0.07]">
      <div className="mb-5 grid size-11 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
