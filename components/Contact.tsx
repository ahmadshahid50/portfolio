"use client";

import { useMemo, useState } from "react";
import { Briefcase, Code2, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const contactInfo = useMemo(
    () => [
      { label: "Email", value: "ahmadshahid95@icloud.com", href: "mailto:ahmadshahid95@icloud.com" },
      { label: "LinkedIn", value: "linkedin.com/in/ahmad-shahid", href: "https://www.linkedin.com/in/ahmad-shahid/" },
      { label: "GitHub", value: "github.com/ahmadshahid50", href: "https://github.com/ahmadshahid50" },
    ],
    [],
  );

  const validate = () => {
    const nextErrors: Errors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters long.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setForm(initialState);
    setErrors({});
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something that matters."
          description="If you need a frontend engineer who can turn product requirements into thoughtful, polished interfaces, I&apos;d love to hear about it."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded border border-white/10 bg-[#0a0b0d] p-5">
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const icon =
                  item.label === "Email" ? (
                    <Mail size={14} />
                  ) : item.label === "LinkedIn" ? (
                    <Briefcase size={14} />
                  ) : (
                    <Code2 size={14} />
                  );

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center justify-between gap-3 rounded border border-white/10 bg-white/2 p-3 text-sm text-zinc-200 transition hover:border-emerald-300/40"
                  >
                    <span className="flex items-center gap-2 text-zinc-400">
                      {icon}
                      {item.label}
                    </span>
                    <span className="truncate text-right text-zinc-200">{item.value}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 rounded border border-emerald-300/20 bg-emerald-300/5 p-4 text-sm text-zinc-200">
              <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                <MapPin size={12} />
                Based in Lahore, Pakistan
              </div>
              Available for product work, client projects, and frontend engineering engagements.
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded border border-white/10 bg-[#0a0b0d] p-5 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  className="w-full rounded border border-white/10 bg-[#0d1013] px-3 py-3 text-sm text-zinc-100 outline-none transition focus:border-emerald-300/50"
                  placeholder="Your name"
                />
                {errors.name ? <p className="mt-2 text-xs text-rose-300">{errors.name}</p> : null}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className="w-full rounded border border-white/10 bg-[#0d1013] px-3 py-3 text-sm text-zinc-100 outline-none transition focus:border-emerald-300/50"
                  placeholder="you@example.com"
                />
                {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(event) => handleChange("subject", event.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  className="w-full rounded border border-white/10 bg-[#0d1013] px-3 py-3 text-sm text-zinc-100 outline-none transition focus:border-emerald-300/50"
                  placeholder="Project inquiry"
                />
                {errors.subject ? <p className="mt-2 text-xs text-rose-300">{errors.subject}</p> : null}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  rows={6}
                  className="w-full rounded border border-white/10 bg-[#0d1013] px-3 py-3 text-sm text-zinc-100 outline-none transition focus:border-emerald-300/50"
                  placeholder="Tell me a bit about your project or challenge."
                />
                {errors.message ? <p className="mt-2 text-xs text-rose-300">{errors.message}</p> : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending..." : "Send message"}
                <Send size={14} />
              </button>

              {status === "success" ? (
                <p className="text-sm text-emerald-300">Message ready to connect to your email service.</p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-rose-300">Please fix the highlighted fields and try again.</p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
