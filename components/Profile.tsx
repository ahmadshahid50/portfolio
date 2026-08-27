import { ArrowRight, Briefcase, MapPin, Sparkles } from "lucide-react";

export default function Profile() {
  const details = [
      { label: "Name", value: "Ahmad Shahid" },
    { label: "Role", value: "Frontend Developer" },
    { label: "Location", value: "Lahore, Pakistan" },
    { label: "Focus", value: "Frontend Developer" },
    { label: "Primary stack", value: "React / Next.js" },
    // { label: "Experience", value: "Product-focused frontend work" },
    { label: "Availability", value: "Open to opportunities" },
  ];

  return (
    <section id="profile" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-300/90">
              Profile
            </p>
          </div>
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:flex">
            <Sparkles size={12} className="text-emerald-300" />
            Frontend systems
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-zinc-50 sm:text-4xl">
              Building responsive interfaces with a strong product mindset.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                I&apos;m a frontend developer focused on turning product goals into clear,
                maintainable user experiences. My work sits at the intersection of design,
                engineering, and performance — building interfaces that are easy to use, fast to
                load, and consistent across devices.
              </p>
              <p>
                I work with React and Next.js to build business-facing websites, product interfaces,
                and polished digital experiences. I care about component architecture, API
                integration, accessibility, and the details that make interfaces feel intentional.
              </p>
            </div>
          </div>

          <aside className="rounded border border-white/10 bg-[#0b0d0f] p-5 shadow-[0_0_24px_rgba(15,23,42,0.4)]">
            <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-emerald-300/90">
              <Briefcase size={14} />
              Snapshot
            </div>

            <dl className="space-y-4">
              {details.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-3 last:border-none last:pb-0">
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{item.label}</dt>
                  <dd className="mt-1 text-sm text-zinc-200">{item.value}</dd>
                </div>
              ))}
            </dl>

            {/* <div className="mt-5 flex items-center gap-2 rounded border border-emerald-300/20 bg-emerald-300/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
              <MapPin size={12} />
              Available for select work
            </div> */}
          </aside>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            "Responsive UI implementation",
            "Design-to-code execution",
            "Performance-minded frontend delivery",
          ].map((item) => (
            <div key={item} className="rounded border border-white/10 bg-white/2 p-4 text-sm text-zinc-300">
              <ArrowRight size={14} className="mb-3 text-emerald-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
