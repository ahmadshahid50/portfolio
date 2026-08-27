import Link from "next/link";
import { Briefcase, Code2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Ahmad Shahid</p>
          <p className="mt-2 text-zinc-300">Frontend Developer</p>
        </div>

        <div className="flex items-center gap-5 text-zinc-300">
          <Link href="https://github.com/ahmadshahid50" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-emerald-200">
            <Code2 size={14} />
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/ahmad-shahid/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-emerald-200">
            <Briefcase size={14} />
            LinkedIn
          </Link>
          <Link href="mailto:ahmadshahid95@icloud.com" className="inline-flex items-center gap-2 transition hover:text-emerald-200">
            <Mail size={14} />
            Email
          </Link>
        </div>

        <p className="text-zinc-500">© 2026 Ahmad Shahid</p>
      </div>
    </footer>
  );
}
