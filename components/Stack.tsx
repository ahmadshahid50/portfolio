import SectionHeading from "@/components/SectionHeading";
import { technologyGroups } from "@/data/technologies";

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Stack"
          title="Technology Stack"
          description="A focused set of tools for frontend delivery, product interfaces, and maintainable implementation."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <div key={group.title} className="rounded border border-white/10 bg-[#0a0b0d] p-5">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-300/90">
                {group.title}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/2 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
