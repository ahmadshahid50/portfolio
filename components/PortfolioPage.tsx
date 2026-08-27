"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function PortfolioPage() {
  const [activeId, setActiveId] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId],
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),transparent_30%)]" />
      <Header activeId={activeId} onNavigate={handleNavigate} />
      <SideNavigation activeId={activeId} onNavigate={handleNavigate} />

      <main className="relative z-10">
        <Hero />
        <Profile />
        <Experience />
        <Stack />
        <Projects onSelectProject={setSelectedProjectId} />
        <Contact />
      </main>

      <Footer />

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
      ) : null}
    </div>
  );
}
