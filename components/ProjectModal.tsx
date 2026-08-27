import { X } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded border border-white/10 bg-[#090b0d] p-6 shadow-[0_0_45px_rgba(0,0,0,0.55)]">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-300/90">
              {project.type}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-50">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 text-zinc-200 transition hover:border-emerald-300/40"
            aria-label="Close project details"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-zinc-300">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Overview</h4>
            <p className="mt-3 leading-7 text-zinc-300">{project.overview}</p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Problem</h4>
            <p className="mt-3 leading-7 text-zinc-300">{project.problem}</p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Solution</h4>
            <p className="mt-3 leading-7 text-zinc-300">{project.solution}</p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Core features</h4>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Technologies</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/2 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/2 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-200 transition hover:border-emerald-300/40"
            >
              Live site
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/2 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-200 transition hover:border-emerald-300/40"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
