import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Frontend work shaped by product thinking and clean implementation."
          description="A practical view of the systems, interfaces, and product work I’ve built across responsive web experiences."
        />

        <div className="relative mt-12 ml-0 md:ml-8">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-8">
            {experience.map((item) => (
              <article key={`${item.company}-${item.position}`} className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-5 hidden h-3.5 w-3.5 rounded-full border border-emerald-300/60 bg-emerald-300/20 md:block" />

                <div className="rounded border border-white/10 bg-[#0a0b0d] p-5 sm:p-6">
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-50">
                        {item.position}
                      </h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
                        {item.company}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/90">
                        {item.period}
                      </p>
                      <p className="mt-2 text-sm text-zinc-400">{item.location}</p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-300">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/2 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
          <ArrowUpRight size={14} className="text-emerald-300" />
          Product-first frontend work
        </div>
      </div>
    </section>
  );
}
