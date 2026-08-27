import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { navItems } from "@/data/navigation";

type HeaderProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export default function Header({ activeId, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/2 px-3 py-2 text-left transition hover:border-emerald-300/40 hover:bg-white/4"
          aria-label="Go to home section"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/10 font-mono text-[10px] font-semibold tracking-[0.22em] text-emerald-200">
            AS
          </span>
          <span className="hidden sm:block">
            <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">
              Ahmad Shahid
            </span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.26em] text-zinc-200">
              Frontend Engineer
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
                    : "text-zinc-400 hover:border-white/10 hover:bg-white/3 hover:text-zinc-200"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-200 sm:inline-flex">
            <Sparkles size={12} />
            Available
          </span>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-50 transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
          >
            Let&apos;s Talk
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile section navigation"
        className="border-t border-white/10 bg-[#07090a]/95 md:hidden"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
                    : "border-white/10 bg-white/2 text-zinc-300"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
