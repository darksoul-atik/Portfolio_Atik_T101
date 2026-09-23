"use client";

import Image from "next/image";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss,
  SiAxios,
} from "react-icons/si";

import { FaServer, FaDatabase, FaCloud, FaCode } from "react-icons/fa";
import { TbApi, TbBrandOpenai } from "react-icons/tb";

import { PointerEvent, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
  X,
  Link2,
  MessageCircle,
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import ProfileCard from "@/components/ProfileCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillMarquee } from "@/components/SkillMarquee";
import { ContactForm } from "@/components/ContactForm";
import { ObfuscatedContact } from "@/components/ObfuscatedContact";
import { DevModeButtonAndModal } from "@/components/DevModeModal";
import {
  PortfolioProvider,
  usePortfolio,
  ProjectItem,
  ExperienceItem,
  ServiceItem,
  ResearchItem,
  SkillGroupItem,
} from "@/context/PortfolioContext";

const skillIconMap: Record<string, React.ReactNode> = {
  "React.js": <SiReact />,
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  Axios: <SiAxios />,
  GSAP: <FaCode />,
  "TanStack Query": <FaCode />,
  DaisyUI: <FaCode />,

  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  FastAPI: <SiFastapi />,
  "RESTful API Design": <TbApi />,
  JWT: <FaServer />,
  "Firebase Auth": <SiFirebase />,
  "System Design": <FaServer />,

  Python: <SiPython />,
  NumPy: <FaDatabase />,
  Pandas: <FaDatabase />,
  TensorFlow: <SiTensorflow />,
  "Computer Vision": <FaCode />,
  "Time Series": <FaCode />,
  Regression: <FaCode />,
  Classification: <FaCode />,
  "Claude Code": <TbBrandOpenai />,
  "OpenAI Codex": <TbBrandOpenai />,
  OpenCode: <TbBrandOpenai />,

  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  SQLite3: <FaDatabase />,
  "Oracle SQL": <FaDatabase />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  "Firebase Hosting": <SiFirebase />,
  Netlify: <SiNetlify />,
  Vercel: <SiVercel />,
  Render: <FaCloud />,
};

export default function Page() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}

function PortfolioContent() {
  const {
    data,
    isDevMode,
    addProject,
    deleteProject,
    updateProject,
    addSkillGroup,
    deleteSkillGroup,
    updateSkillGroup,
    addExperience,
    deleteExperience,
    updateExperience,
    addService,
    deleteService,
    updateService,
    addResearch,
    deleteResearch,
    updateResearch,
  } = usePortfolio();

  const { profile, stats, skillGroups, projects, experience, services, research } =
    data;

  const [mobileOpen, setMobileOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cvInputRef = useRef<HTMLInputElement>(null);

  // GSAP Hero Entrance animation
  useEffect(() => {
    if (!heroRef.current) return;
    const targets = heroRef.current.querySelectorAll(".hero-reveal");
    gsap.fromTo(
      targets,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform,opacity",
      }
    );
  }, []);

  const handleCvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("cv", file);
      const res = await fetch("/api/cv", { method: "POST", body: formData });
      if (res.ok) {
        alert("CV replaced successfully with " + file.name);
      } else {
        alert("Failed to upload CV. Must be a valid PDF.");
      }
    } catch {
      alert("Error uploading CV.");
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-white selection:bg-cyanGlow/30 selection:text-white">
      <AnimatedBackground />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="section-shell relative flex min-h-screen items-center justify-center pb-20 pt-28 md:pb-28 md:pt-36"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="hero-reveal mb-6 inline-flex items-center gap-3 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanGlow opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyanGlow" />
              </span>
              {profile.availability}
            </div>

            <p className="hero-reveal mb-4 font-mono text-xs uppercase tracking-[0.42em] text-white/40">
              {profile.location} / {profile.role}
            </p>

            <h1 className="hero-reveal max-w-5xl text-balance text-5xl font-black leading-[0.94] tracking-[-0.075em] text-white sm:text-6xl md:text-7xl xl:text-[6.5rem]">
              Building high-performance{" "}
              <span className="text-gradient">web products</span> with clean architecture.
            </h1>

            <p className="hero-reveal mt-7 max-w-2xl text-pretty text-base leading-8 text-white/70 md:text-lg">
              {profile.subheadline}
            </p>

            <div className="hero-reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton href="#projects">
                View projects{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href={profile.resume}
                variant="secondary"
                download
              >
                Download CV <Download className="h-4 w-4" />
              </MagneticButton>

              {isDevMode && (
                <>
                  <button
                    type="button"
                    onClick={() => cvInputRef.current?.click()}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-dashed border-amber-400 bg-amber-400/10 px-5 py-3 text-xs font-mono font-bold text-amber-300 transition hover:bg-amber-400/20"
                  >
                    <Upload className="h-4 w-4" />
                    Replace CV PDF
                  </button>
                  <input
                    type="file"
                    ref={cvInputRef}
                    onChange={handleCvUpload}
                    accept=".pdf,application/pdf"
                    className="hidden"
                  />
                </>
              )}

              <MagneticButton href="#contact" variant="ghost">
                Contact me <Mail className="h-4 w-4" />
              </MagneticButton>
            </div>

            {/* Feature Stats */}
            <div className="hero-reveal mt-11 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07]"
                >
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="About / Background"
          title="Software Engineer focused on full-stack architecture, APIs, and modern UI."
          description="Experienced in the React/Next.js ecosystem, Node.js and Python backends, database modeling, and AI-accelerated development workflows."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-card rounded-[2rem] p-7 md:p-9">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-cyanGlow/30 bg-cyanGlow/10 shadow-glow">
                <Image
                  src="/avatar.png"
                  alt={profile.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="mt-1 text-sm text-white/50">{profile.role}</p>
              </div>
            </div>

            <p className="mt-6 text-pretty text-base leading-8 text-white/60">
              I build web applications and scalable backends with emphasis on responsiveness, secure authentication, clean RESTful APIs, database integrity, and production-ready code.
            </p>

            <div className="mt-8 space-y-3">
              <ObfuscatedContact
                type="email"
                encodedValue={btoa(profile.email)}
                label="Email"
                icon={<Mail className="h-4 w-4" />}
              />
              <ObfuscatedContact
                type="phone"
                encodedValue={btoa(profile.phone)}
                label="Phone"
                icon={<Phone className="h-4 w-4" />}
              />
              <ObfuscatedContact
                type="whatsapp"
                encodedValue={btoa(profile.whatsapp)}
                label="WhatsApp"
                icon={<MessageCircle className="h-4 w-4" />}
              />
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-cyanGlow"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">Location</p>
                    <p className="text-sm font-medium text-white/90">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.06}>
              <IconBadge icon={<Code2 className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Frontend Architecture
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                React, TypeScript, Tailwind CSS, TanStack Query, and GSAP for modular, accessible interfaces.
              </p>
            </Reveal>

            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.12}>
              <IconBadge icon={<Layers3 className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Backend & Systems
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Node.js, Express, FastAPI, JWT & Firebase authentication, RESTful APIs, and database persistence.
              </p>
            </Reveal>

            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.18}>
              <IconBadge icon={<Boxes className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Data Science & ML
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                NumPy, Pandas, TensorFlow, computer vision modeling, regression, classification, and statistical analysis.
              </p>
            </Reveal>

            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.24}>
              <IconBadge icon={<Sparkles className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Agentic Workflows
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Applied usage of Claude Code, OpenCode, Codex, and agentic workflows to increase engineering velocity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Skills / Tech Stack"
          title="Core technologies for full-stack engineering and data modeling."
          description="Technologies organized by production engineering layer: frontend clients, backend services, applied machine learning, and persistence."
        />

        <Reveal>
          <SkillMarquee />
        </Reveal>

        {isDevMode && (
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={addSkillGroup}
              className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-cyanGlow/60 bg-cyanGlow/10 px-5 py-2.5 font-mono text-xs font-bold text-cyanGlow transition hover:bg-cyanGlow/20"
            >
              <Plus className="h-4 w-4" />
              Add Skill Group
            </button>
          </div>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal
              key={`${group.title}-${index}`}
              delay={index * 0.05}
              className={`glass-card rounded-[2rem] p-6 h-full flex flex-col ${
                isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 min-h-[90px]">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyanGlow/80">
                      0{index + 1}
                    </p>
                    {isDevMode && (
                      <button
                        type="button"
                        onClick={() => deleteSkillGroup(index)}
                        className="rounded-full bg-red-500/20 p-1.5 text-red-300 transition hover:bg-red-500/40"
                        title="Delete skill group"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  {isDevMode ? (
                    <input
                      type="text"
                      value={group.title}
                      onChange={(e) =>
                        updateSkillGroup(index, { title: e.target.value })
                      }
                      className="mt-3 w-full rounded border border-dashed border-amber-400/60 bg-white/10 px-2 py-1 text-lg font-bold text-white outline-none"
                    />
                  ) : (
                    <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                      {group.title}
                    </h3>
                  )}
                </div>

                {!isDevMode && (
                  <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyanGlow">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-4 min-h-[72px]">
                {isDevMode ? (
                  <textarea
                    rows={2}
                    value={group.caption}
                    onChange={(e) =>
                      updateSkillGroup(index, { caption: e.target.value })
                    }
                    className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-2 text-xs text-white/70 outline-none"
                  />
                ) : (
                  <p className="text-sm leading-6 text-white/50">
                    {group.caption}
                  </p>
                )}
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skillIconMap[skill];
                  return (
                    <span
                      key={skill}
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-white/60 transition-all duration-300 hover:scale-[1.05] hover:border-cyanGlow/40 hover:text-white"
                    >
                      {Icon && (
                        <span className="text-base text-cyanGlow">
                          {Icon}
                        </span>
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-shell py-20 md:py-32">
        <SectionHeader
          eyebrow="Projects / Work"
          title="Featured full-stack applications and open-source tooling."
          description="Real-world products highlighting responsive frontend design, backend API development, data pipelines, and external integrations."
        />

        {isDevMode && (
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={addProject}
              className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-cyanGlow/60 bg-cyanGlow/10 px-5 py-2.5 font-mono text-xs font-bold text-cyanGlow transition hover:bg-cyanGlow/20"
            >
              <Plus className="h-4 w-4" />
              Add Project
            </button>
          </div>
        )}

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
              isDevMode={isDevMode}
              onUpdate={(updated) => updateProject(index, updated)}
              onDelete={() => deleteProject(index)}
            />
          ))}
        </div>

        {/* Direct GitHub Link (Replaces filler cooking text) */}
        <div className="mt-14 flex justify-center">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/70 shadow-glow backdrop-blur-xl transition hover:border-cyanGlow/40 hover:bg-cyanGlow/10 hover:text-white"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Research / Publications"
          title="Peer-reviewed research and applied machine learning investigations."
          description="Academic investigations at the intersection of computer vision, electronic component automation, and digital forensics."
        />

        {isDevMode && (
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={addResearch}
              className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-cyanGlow/60 bg-cyanGlow/10 px-5 py-2.5 font-mono text-xs font-bold text-cyanGlow transition hover:bg-cyanGlow/20"
            >
              <Plus className="h-4 w-4" />
              Add Research Entry
            </button>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {research.map((item, index) => (
            <Reveal
              key={`${item.title}-${index}`}
              delay={index * 0.07}
            >
              <div
                className={`glass-card rounded-[2rem] p-7 h-full flex flex-col gap-5 ${
                  isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        item.status === "Accepted"
                          ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                          : "border-sky-400/25 bg-sky-400/10 text-sky-300"
                      }`}
                    >
                      {item.status}
                    </span>
                    {isDevMode && (
                      <button
                        type="button"
                        onClick={() => deleteResearch(index)}
                        className="rounded-full bg-red-500/20 p-1 text-red-300 transition hover:bg-red-500/40"
                        title="Delete research"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  {isDevMode ? (
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        updateResearch(index, { title: e.target.value })
                      }
                      className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-2 text-base font-bold text-white outline-none"
                    />
                  ) : (
                    <h3 className="text-xl font-black tracking-tight text-white leading-snug">
                      {item.title}
                    </h3>
                  )}

                  {isDevMode ? (
                    <input
                      type="text"
                      value={item.conference}
                      onChange={(e) =>
                        updateResearch(index, { conference: e.target.value })
                      }
                      className="mt-2 w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-1 text-xs text-cyanGlow outline-none"
                    />
                  ) : (
                    <p className="mt-2 text-sm text-cyanGlow/80 font-medium">
                      {item.conference}
                    </p>
                  )}
                </div>

                <div className="grid gap-2 text-sm text-white/50">
                  <p>
                    <span className="text-white/30">Venue · </span>
                    {item.venue}
                  </p>
                  <p>
                    <span className="text-white/30">Date · </span>
                    {item.date}
                  </p>
                  <p>
                    <span className="text-white/30">Identifier · </span>
                    {item.paperId}
                  </p>
                  <p>
                    <span className="text-white/30">Publisher · </span>
                    {item.publisher}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Journey / Experience & Education"
          title="Academic foundation, engineering practice, and community leadership."
          description="A timeline documenting hands-on full-stack development, degree milestones, and student leadership."
        />

        {isDevMode && (
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={addExperience}
              className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-cyanGlow/60 bg-cyanGlow/10 px-5 py-2.5 font-mono text-xs font-bold text-cyanGlow transition hover:bg-cyanGlow/20"
            >
              <Plus className="h-4 w-4" />
              Add Experience / Journey Entry
            </button>
          </div>
        )}

        <div className="relative mx-auto max-w-4xl">
          <div className="timeline-line absolute left-4 top-0 hidden h-full w-px md:left-1/2 md:block" />

          {experience.map((item, index) => (
            <Reveal
              key={`${item.role}-${item.period}-${index}`}
              delay={index * 0.05}
            >
              <div
                className={`relative mb-7 grid gap-6 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                <div
                  className={`glass-card rounded-[2rem] p-6 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } ${isDevMode ? "border-2 border-dashed border-amber-400/40" : ""}`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {item.period}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40">{item.mode}</span>
                      {isDevMode && (
                        <button
                          type="button"
                          onClick={() => deleteExperience(index)}
                          className="rounded-full bg-red-500/20 p-1 text-red-300 transition hover:bg-red-500/40"
                          title="Delete journey entry"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {isDevMode ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={item.role}
                        onChange={(e) =>
                          updateExperience(index, { role: e.target.value })
                        }
                        className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-1 text-base font-bold text-white outline-none"
                      />
                      <input
                        type="text"
                        value={item.org}
                        onChange={(e) =>
                          updateExperience(index, { org: e.target.value })
                        }
                        className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-1 text-xs text-cyanGlow outline-none"
                      />
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-cyanGlow/80">
                        {item.org}
                      </p>
                    </div>
                  )}

                  <ul className="mt-4 space-y-2 text-sm text-white/60">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-2">
                        <span className="text-cyanGlow">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Services / What I Build"
          title="Full-stack development, modern interfaces, and workflow integrations."
          description="Delivering production web applications with strong architecture, fast loading times, and maintainable codebases."
        />

        {isDevMode && (
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={addService}
              className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-cyanGlow/60 bg-cyanGlow/10 px-5 py-2.5 font-mono text-xs font-bold text-cyanGlow transition hover:bg-cyanGlow/20"
            >
              <Plus className="h-4 w-4" />
              Add Service
            </button>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={`${service.title}-${index}`}
              className={`glass-card rounded-[2rem] p-7 ${
                isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
              }`}
              delay={index * 0.06}
            >
              <div className="flex items-center justify-between">
                <IconBadge
                  icon={
                    index === 0 ? (
                      <Rocket className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Layers3 className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )
                  }
                />
                {isDevMode && (
                  <button
                    type="button"
                    onClick={() => deleteService(index)}
                    className="rounded-full bg-red-500/20 p-1.5 text-red-300 transition hover:bg-red-500/40"
                    title="Delete service"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {isDevMode ? (
                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) =>
                      updateService(index, { title: e.target.value })
                    }
                    className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-1.5 text-base font-bold text-white outline-none"
                  />
                  <textarea
                    rows={3}
                    value={service.description}
                    onChange={(e) =>
                      updateService(index, { description: e.target.value })
                    }
                    className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-2 text-xs text-white/70 outline-none"
                  />
                </div>
              ) : (
                <>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {service.description}
                  </p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section-shell pb-14 pt-20 sm:pb-16 sm:pt-24 md:pb-20 md:pt-32"
      >
        <Reveal>
          <div className="glass-card overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
              {/* Left Column: Info & Obfuscated details */}
              <div className="min-w-0">
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cyanGlow">
                  Contact / Communication
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  Let&apos;s build high-performance web products together.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  I am available for software engineering roles, full-stack engineering, and technical collaborations. Use the contact form or verified communication channels below.
                </p>

                <div className="mt-8 space-y-3 max-w-md">
                  <ObfuscatedContact
                    type="email"
                    encodedValue={btoa(profile.email)}
                    label="Direct Email"
                    icon={<Mail className="h-4 w-4" />}
                  />
                  <ObfuscatedContact
                    type="phone"
                    encodedValue={btoa(profile.phone)}
                    label="Phone"
                    icon={<Phone className="h-4 w-4" />}
                  />
                  <ObfuscatedContact
                    type="whatsapp"
                    encodedValue={btoa(profile.whatsapp)}
                    label="WhatsApp"
                    icon={<MessageCircle className="h-4 w-4" />}
                  />
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-cyanGlow"><MapPin className="h-4 w-4" /></span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40">Location</p>
                        <p className="text-sm font-medium text-white/90">{profile.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <MagneticButton
                    href={profile.github}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <Github className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    href={profile.linkedin}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn <Link2 className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Working Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="section-shell pb-10 relative z-20">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>
            © 2026 {profile.name}. Built with Next.js, GSAP, and Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <Link
              className="transition hover:text-white"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="transition hover:text-white"
              href="#contact-form"
            >
              Contact
            </Link>
            <Link className="transition hover:text-white" href="#home">
              Back to top
            </Link>
          </div>
        </div>
      </footer>

      {/* Dev Mode Floating Button & Passcode Modal */}
      <DevModeButtonAndModal />
    </main>
  );
}

function Header({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <header className="fixed left-0 right-0 top-4 z-[70] px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-4 py-3 shadow-card backdrop-blur-2xl md:px-5">
        <Link
          href="#home"
          className="focus-ring group flex items-center gap-3 rounded-full"
        >
          <img
            src="/logo.png"
            alt="Atik Shahrear Logo"
            className="h-10 w-10 rounded-full object-cover shadow-glow transition duration-300 group-hover:scale-105"
          />

          <span className="hidden text-sm font-semibold text-white/90 sm:block">
            Atik Shahrear
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Research", href: "#research" },
            { label: "Journey", href: "#journey" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-white/70 transition hover:border-cyanGlow/30 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow/20"
          >
            Hire me
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile navigation menu with CSS transitions */}
      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-ink/95 p-4 shadow-card backdrop-blur-2xl md:hidden transition-all duration-300">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Research", href: "#research" },
            { label: "Journey", href: "#journey" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-xl bg-cyanGlow/20 border border-cyanGlow/40 py-2.5 text-sm font-semibold text-cyan-100"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  const [hovered, setHovered] = useState(false);
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <div
      className="relative -mt-15 mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none"
      style={{ perspective: "800px", perspectiveOrigin: "50% 40%" }}
    >
      {/* Orbits — hide when hovered */}
      <div
        className={`transition-opacity duration-300 ${
          hovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.035] shadow-violet backdrop-blur-3xl" />
        <div
          className="orbit-ring animate-[spin_19s_linear_infinite]"
          style={{
            inset: "2%",
            borderColor: "rgba(109,232,255,0.25)",
            transform: "rotateX(75deg)",
          }}
        />
        <div
          className="orbit-ring animate-[spin_25s_linear_infinite_reverse]"
          style={{
            inset: "10%",
            borderColor: "rgba(169,134,255,0.25)",
            transform: "rotateX(65deg)",
          }}
        />
        <div
          className="orbit-ring animate-[spin_31s_linear_infinite]"
          style={{
            inset: "18%",
            borderColor: "rgba(255,106,213,0.25)",
            transform: "rotateX(55deg)",
          }}
        />
      </div>

      <div
        className="absolute left-1/2 top-1/2 w-[95%] xs:w-[92%] sm:w-[88%] md:w-[78%] max-w-[720px] -translate-x-1/2 -translate-y-1/2"
        onMouseLeave={() => setHovered(false)}
      >
        {/* Code card */}
        <div
          className={`rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-black/40 p-3 sm:p-4 md:p-5 shadow-card backdrop-blur-2xl transition-all duration-300 ${
            hovered
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          }`}
        >
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-pinkGlow" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-cyanGlow" />
            </div>

            <span className="font-mono text-[10px] sm:text-xs text-white/40">
              developer.ts
            </span>
          </div>

          {/* Valid JavaScript Object Literal Snippet */}
          <div className="space-y-2.5 sm:space-y-3 font-mono text-[11px] leading-5 sm:text-xs sm:leading-6 md:text-sm text-white/60 break-words">
            <p>
              <span className="text-pinkGlow">const</span> developer ={" "}
              <span className="text-cyanGlow">&#123;</span>
            </p>

            <p className="pl-3 sm:pl-4">
              name:{" "}
              <span className="text-white">&quot;Atik Shahrear&quot;</span>,
            </p>

            <p className="pl-3 sm:pl-4">
              focus: [<span className="text-white">&quot;Full-Stack&quot;</span>
              , <span className="text-white">&quot;AI-Assisted Dev&quot;</span>
              ],
            </p>

            <p className="pl-3 sm:pl-4">
              currentRole:{" "}
              <span className="text-white">
                &quot;Software Engineer&quot;
              </span>
              ,
            </p>

            {/* Interactive hover line */}
            <p
              className="pl-3 sm:pl-4 cursor-pointer py-0.5 rounded hover:bg-cyanGlow/10 transition"
              onMouseEnter={() => setHovered(true)}
              onClick={() => setHovered((prev) => !prev)}
            >
              myPhoto:{" "}
              <span className="text-cyanGlow animate-pulse">
                &quot;Hover to reveal my face&quot;
              </span>
            </p>

            <p>
              <span className="text-cyanGlow">&#125;;</span>
            </p>
          </div>
        </div>

        {/* ProfileCard reveal */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            hovered
              ? "opacity-100 scale-100 pointer-events-auto z-20"
              : "opacity-0 scale-95 pointer-events-none -z-10"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="scale-[0.78] xs:scale-[0.82] sm:scale-[0.9] md:scale-100">
            <ProfileCard
              avatarUrl="/avatar.png"
              name={profile.name}
              title={profile.role}
              handle="Atik Shahrear Ananto"
              status="Open to opportunities"
              contactText="Contact Me"
              showUserInfo={true}
              enableTilt={true}
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,#6de8ff1a 0%,#a986ff22 100%)"
              onContactClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating chips — hide when hovered */}
      <div
        className={`pointer-events-none transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <FloatingChip
          className="left-0 top-16"
          icon={<Code2 className="h-4 w-4" />}
          text="Full Stack Focus"
        />
        <FloatingChip
          className="right-0 top-28"
          icon={<Sparkles className="h-4 w-4" />}
          text="Agentic AI"
        />
        <FloatingChip
          className="bottom-20 left-8"
          icon={<BriefcaseBusiness className="h-4 w-4" />}
          text="Open to work"
        />
        <FloatingChip
          className="bottom-10 right-6"
          icon={<GraduationCap className="h-4 w-4" />}
          text="Data Science & ML"
        />
      </div>
    </div>
  );
}

function FloatingChip({
  icon,
  text,
  className,
}: {
  icon: ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute hidden rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/75 shadow-card backdrop-blur-xl animate-float sm:flex sm:items-center sm:gap-2 ${className}`}
    >
      <span className="text-cyanGlow">{icon}</span>
      {text}
    </div>
  );
}

function IconBadge({ icon }: { icon: ReactNode }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow shadow-glow">
      {icon}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isDevMode,
  onUpdate,
  onDelete,
}: {
  project: ProjectItem;
  index: number;
  isDevMode?: boolean;
  onUpdate?: (updated: Partial<ProjectItem>) => void;
  onDelete?: () => void;
}) {
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Reveal delay={index * 0.07}>
      <article
        onPointerMove={onPointerMove}
        className={`project-card glass-card group relative h-full overflow-hidden rounded-[2rem] p-4 sm:p-5 md:p-6 transition duration-500 hover:-translate-y-2 hover:border-cyanGlow/30 ${
          isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
        }`}
      >
        <div className="relative z-10 flex h-full flex-col">
          {/* Top Bar */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-[10px] sm:text-xs text-white/60">
              {project.type}
            </span>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cyanGlow">
                0{index + 1}
              </span>
              {isDevMode && onDelete && (
                <button
                  type="button"
                  onClick={onDelete}
                  className="rounded-full bg-red-500/20 p-1 text-red-300 transition hover:bg-red-500/40"
                  title="Delete project"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative mb-6 overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="h-[180px] sm:h-[220px] md:h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              {isDevMode && onUpdate ? (
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => onUpdate({ title: e.target.value })}
                  className="w-full rounded border border-dashed border-amber-400/60 bg-white/20 p-1 text-lg font-black text-white outline-none"
                />
              ) : (
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {project.title}
                </h3>
              )}

              {isDevMode && onUpdate ? (
                <input
                  type="text"
                  value={project.label}
                  onChange={(e) => onUpdate({ label: e.target.value })}
                  className="mt-1 w-full rounded border border-dashed border-amber-400/60 bg-white/20 p-1 text-xs text-cyanGlow outline-none"
                />
              ) : (
                <p className="mt-1 text-xs sm:text-sm text-cyanGlow">
                  {project.label}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          {isDevMode && onUpdate ? (
            <textarea
              rows={3}
              value={project.description}
              onChange={(e) => onUpdate({ description: e.target.value })}
              className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-2 text-xs text-white/70 outline-none"
            />
          ) : (
            <p className="text-sm leading-7 text-white/60">
              {project.description}
            </p>
          )}

          {/* Highlights */}
          <ul className="mt-6 space-y-3 text-sm text-white/60">
            {project.highlights.map((highlight, hIdx) => (
              <li key={hIdx} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanGlow" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-8 flex flex-wrap gap-3">
            <MagneticButton
              href={project.live}
              target="_blank"
              className="justify-center"
            >
              Live Preview
            </MagneticButton>

            <MagneticButton
              href={project.github}
              target="_blank"
              variant="secondary"
              className="justify-center"
            >
              GitHub Repo
            </MagneticButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
