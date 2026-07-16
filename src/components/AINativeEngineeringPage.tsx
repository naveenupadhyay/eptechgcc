import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { siteContent } from "../data/siteContent";

const content = siteContent.aiNativeEngineeringPage;

export function AINativeEngineeringPage() {
  useEffect(() => {
    document.title = "AI-Native Engineering Teams | Eleventyfirst Parallel Technologies";
  }, []);

  return (
    <main className="relative h-dvh overflow-x-hidden overflow-y-auto bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(109,40,217,0.14),transparent_32%),radial-gradient(circle_at_86%_4%,rgba(34,211,238,0.09),transparent_26%),linear-gradient(180deg,#05030b_0%,#02040a_50%,#02040a_100%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent opacity-70" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/72 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-violet-300/35 bg-white/[0.04] shadow-glow">
              <img src="/ep.avif" alt="" className="size-full object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide text-white">{siteContent.brand.name}</span>
              <span className="hidden text-xs text-slate-400 sm:block">AI-native engineering teams</span>
            </span>
          </a>
          <nav className="flex items-center gap-2">
            <a
              href="/stack"
              className="hidden h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10 sm:inline-flex"
            >
              Stack Diagram
            </a>
            <a
              href="/"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 text-xs font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10"
            >
              <ArrowLeft className="size-3.5" />
              <span className="hidden sm:inline">Main Site</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">{content.kicker}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-300">{content.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#paths"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-violet-400 px-5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Compare Paths
                <ArrowRight className="size-4" />
              </a>
              <a
                href={content.stackLink}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-violet-300/10"
              >
                View Stack Diagram
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-violet-700/18 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/28 bg-white/[0.035] shadow-[0_34px_120px_rgba(76,29,149,0.28)]">
              <img src={content.banner} alt="AI-native engineering teams adoption paths" className="block aspect-video w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="paths" className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">Two deployment realities</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-5xl">The adoption path changes. The stack remains reusable.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Large organizations need an AI layer over existing complexity. Startups can make AI-native execution the default operating
            model before complexity compounds.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {content.cards.map((card) => (
            <article
              key={card.label}
              className="relative overflow-hidden rounded-[2rem] border border-violet-300/24 bg-[linear-gradient(135deg,#2e1065_0%,#5b21b6_52%,#f8f7ff_132%)] p-5 shadow-[0_28px_100px_rgba(76,29,149,0.30)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.24),transparent_30%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-100/72">{card.label}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{card.title}</h3>
                <p className="mt-5 text-base leading-7 text-violet-50/78">{card.summary}</p>

                <div className="mt-6 rounded-3xl border border-white/16 bg-black/28 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-100/70">How the stack applies</p>
                  <p className="mt-3 text-sm leading-6 text-violet-50/72">{card.stackFit}</p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/16 bg-black/24 p-5">
                    <p className="text-sm font-semibold text-white">Best first pilots</p>
                    <ul className="mt-4 space-y-3">
                      {card.bestPilots.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-violet-50/72">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-200" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-white/16 bg-black/24 p-5">
                    <p className="text-sm font-semibold text-white">Expected outcomes</p>
                    <ul className="mt-4 space-y-3">
                      {card.outcomes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-violet-50/76">
                          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-violet-200/18 text-[10px] font-bold text-violet-50">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={content.stackLink}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/[0.08] px-4 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/14"
                  >
                    View stack diagram for this model
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
