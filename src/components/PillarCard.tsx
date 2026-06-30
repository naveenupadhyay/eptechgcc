import { iconMap, type IconName } from "../data/siteContent";

export function PillarCard({ title, description, icon }: { title: string; description: string; icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <article className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.07)] transition hover:-translate-y-0.5 hover:border-zinc-950">
      <div className="mb-5 grid size-11 place-items-center rounded-md border border-zinc-200 bg-zinc-950 text-white">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
    </article>
  );
}
