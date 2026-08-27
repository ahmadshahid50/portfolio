import { navItems } from "@/data/navigation";

type SideNavigationProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export default function SideNavigation({ activeId, onNavigate }: SideNavigationProps) {
  return (
    <aside className="fixed left-1 top-1/2 z-30 hidden -translate-y-1/2 lg:block" aria-label="Section navigation">
      <div className="relative flex flex-col items-center gap-3 rounded-full border border-white/10 bg-[#0b0d0f]/80 px-2 py-4 shadow-[0_0_30px_rgba(6,182,212,0.08)] backdrop-blur-md">
        <div className="absolute left-1/2 top-4 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-white/10" />

        {navItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div key={item.id} className="relative z-10">
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`group relative flex items-center justify-center rounded-full border transition ${
                  isActive
                    ? "h-4 w-4 border-emerald-300/70 bg-emerald-300 shadow-[0_0_18px_rgba(94,234,212,0.5)]"
                    : "h-3.5 w-3.5 border-white/20 bg-transparent hover:border-emerald-200/40 hover:bg-emerald-200/10"
                }`}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
              >
                <span className="absolute left-6 whitespace-nowrap rounded-full border border-white/10 bg-[#111214] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-200 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
