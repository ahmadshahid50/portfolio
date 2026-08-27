import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { ArrowUpRight, ExternalLink, FolderCode } from "lucide-react";

type ProjectsProps = {
  onSelectProject: (projectId: string) => void;
};

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Projects"
          description="A selection of production-minded frontend work focused on product clarity, responsive design, and execution quality."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded border border-white/10 bg-[#0a0b0d] p-5 transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-[#0d1013]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-300/90">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-zinc-50">
                    {project.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 text-zinc-200 transition group-hover:border-emerald-300/40 group-hover:bg-emerald-300/10"
                  aria-label={`Open project details for ${project.name}`}
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <p className="mt-5 text-base leading-7 text-zinc-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/2 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-200 transition hover:border-emerald-300/40 hover:text-emerald-100"
                  >
                    Live site
                    <ExternalLink size={12} />
                  </a>
                ) : null}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/2 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-200 transition hover:border-emerald-300/40 hover:text-emerald-100"
                  >
                    GitHub
                    <FolderCode size={12} />
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/8 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-200 transition hover:bg-emerald-300/12"
                >
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
