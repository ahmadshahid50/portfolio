import Link from "next/link";
import { ArrowRight, Code2, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-300/90">
            Frontend Developer / product-focused UI systems
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-[0.96] tracking-[-0.07em] text-zinc-50 sm:text-6xl lg:text-[4.1rem]">
            I build the frontend systems behind modern digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I turn complex product requirements into clean, responsive interfaces that feel fast,
            thoughtful, and built to last.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-emerald-200"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/2 px-5 py-3 text-sm font-medium text-zinc-50 transition hover:border-emerald-300/40 hover:bg-white/4"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-400">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(94,234,212,0.8)]" />
              Open to opportunities
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
              {[
                "Frontend engineering",
                "React / Next.js",
                "UI / performance",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/2 px-2.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid max-w-5xl gap-4 border border-white/10 bg-white/2 p-4 sm:grid-cols-3 sm:p-5">
          <div className="rounded border border-white/10 bg-[#0c0d0f] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              <Code2 size={14} className="text-emerald-300" />
              Core focus
            </div>
            <p className="mt-3 text-base text-zinc-200">Responsive interfaces and product UI systems.</p>
          </div>
          <div className="rounded border border-white/10 bg-[#0c0d0f] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              <MapPin size={14} className="text-emerald-300" />
              Based in
            </div>
            <p className="mt-3 text-base text-zinc-200">Lahore, Pakistan</p>
          </div>
          <div className="rounded border border-white/10 bg-[#0c0d0f] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
              Working style
            </div>
            <p className="mt-3 text-base text-zinc-200">Clean implementation, clarity, and maintainable UI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
