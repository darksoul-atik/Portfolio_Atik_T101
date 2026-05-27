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

import { PointerEvent, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Rocket,
  ShieldCheck,
  Sparkles,
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
import {
  experience,
  navItems,
  profile,
  projects,
  services,
  research,
  skillGroups,
  stats,
} from "@/data/portfolio";

const skillIconMap: Record<string, React.ReactNode> = {
  "React.js": <SiReact />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  Axios: <SiAxios />,
  "Framer Motion": <FaCode />,
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

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Home() {
  const { scrollYProgress } = useScroll();

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <main className=" relative isolate z-10 min-h-screen  bg-ink text-white">
      <AnimatedBackground />

      <motion.div
        className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-cyanGlow via-violetGlow to-pinkGlow"
        style={{ scaleX: scrollYProgress }}
      />

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <section
        id="home"
        className="section-shell relative flex min-h-screen items-center pb-24 pt-32 md:pb-28 md:pt-36"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanGlow opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyanGlow" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.42em] text-white/40"
            >
              {profile.location} / {profile.role}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-5xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.075em] text-white sm:text-6xl md:text-7xl xl:text-[6.7rem]"
            >
              {profile.headline.split(" ").slice(0, 4).join(" ")}{" "}
              <span className="text-gradient">
                {profile.headline.split(" ").slice(4).join(" ")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="mt-7 max-w-2xl text-pretty text-base leading-8 text-white/70 md:text-lg"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
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
              <MagneticButton
                href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
                target="_blank"
                variant="ghost"
              >
                Contact me <Mail className="h-4 w-4" />
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="mt-11 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.12,
                    ease: "easeOut",
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07]"
                >
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/40">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <section id="about" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="About / Identity"
          title="A developer profile with product sense, motion taste, and engineering discipline."
          description="This portfolio is designed around clean hierarchy, dramatic but controlled motion, readable co ntent, and reusable production-style components."
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card rounded-[2rem] p-7 md:p-9">
            <div className="mb-8 flex items-center gap-4">
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-black text-2xl font-black text-ink shadow-glow">
                <img
                  src="/logo.png"
                  alt="Atik Shahrear Logo"
                  className="
    h-10
    w-10
    rounded-full
    object-cover
    shadow-glow
    transition
    duration-300
    group-hover:scale-105
  "
                />
                <span className="absolute inset-0 -z-10 animate-pulseRing rounded-2xl border border-cyanGlow/30" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="mt-1 text-sm text-white/50">{profile.role}</p>
              </div>
            </div>
            <p className="text-pretty text-base leading-8 text-white/60">
              I build modern web interfaces and full-stack features with a focus
              on responsive UI, secure authentication, RESTful APIs,
              database-backed workflows, and AI-assisted development pipelines.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-white/60">
              <ContactLine
                icon={<MapPin className="h-4 w-4" />}
                text={profile.location}
              />
              <ContactLine
                icon={<Mail className="h-4 w-4" />}
                text={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactLine
                icon={<Link2 className="h-4 w-4" />}
                text={profile.linkedin.replace("https://", "")}
                href={profile.linkedin}
              />
              <ContactLine
                icon={<Phone className="h-4 w-4" />}
                text={profile.phone}
                href={`tel:${profile.phone}`}
              />
              <ContactLine
                icon={<MessageCircle className="h-4 w-4" />}
                text={"WhatsApp: " + profile.whatsapp}
                href={`tel:${profile.whatsapp}`}
              />
              <ContactLine
                icon={<Github className="h-4 w-4" />}
                text={profile.github.replace("https://", "")}
                href={profile.github}
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.06}>
              <IconBadge icon={<Code2 className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Frontend Craft
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                React, TypeScript, Tailwind, TanStack Query, Framer Motion, and
                GSAP for expressive high-performance interfaces.
              </p>
            </Reveal>
            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.12}>
              <IconBadge icon={<Layers3 className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Backend Systems
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                MERN applications, FastAPI utilities, JWT/Firebase auth,
                database integration, and deployment workflows.
              </p>
            </Reveal>
            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.18}>
              <IconBadge icon={<Boxes className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Data & ML Foundation
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                NumPy, Pandas, TensorFlow, computer vision, regression,
                classification, model evaluation, and time series analysis.
              </p>
            </Reveal>
            <Reveal className="glass-card rounded-[2rem] p-7" delay={0.24}>
              <IconBadge icon={<Sparkles className="h-5 w-5" />} />
              <h3 className="mt-6 text-xl font-bold text-white">
                Agentic Workflow
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                Practical use of Claude Code, OpenCode, OpenAI Codex, and
                AI-assisted pipelines to speed up engineering work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Skills / Stack"
          title="A modern stack for animated products, secure APIs, and AI-assisted builds."
          description="The skills are grouped by how they support real product development: interface, backend, database, deployment, and applied AI/data work."
        />
        <Reveal>
          <SkillMarquee />
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className="glass-card rounded-[2rem] p-6 h-full flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-start justify-between gap-4 min-h-[90px]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyanGlow/80">
                    0{index + 1}
                  </p>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyanGlow">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-4 min-h-[72px]">
                <p className="text-sm leading-6 text-white/50">
                  {group.caption}
                </p>
              </div>

              {/* SKILLS */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skillIconMap[skill];

                  return (
                    <span
                      key={skill}
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-white/60 transition-all duration-300 hover:scale-[1.05] hover:border-cyanGlow/40 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    >
                      {Icon && (
                        <span className="text-base text-cyanGlow transition group-hover:scale-110">
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

      <section
        id="projects"
        className="
    section-shell
    py-20
    md:py-32
  "
      >
        <SectionHeader
          eyebrow="Projects / Case Studies"
          title="Projects designed as product stories, not plain cards."
          description="Each card highlights the product idea, engineering decisions, and the stack used to build and ship the work."
        />

        {/* PROJECT GRID */}
        <div
          className="
      mt-10
      grid
      grid-cols-1
      gap-6
      md:grid-cols-2
      xl:grid-cols-3
    "
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* MORE PROJECTS TEXT */}
        <div className="mt-14 flex justify-center">
          <div
            className="
        rounded-full
        border border-cyanGlow/20
        bg-cyanGlow/5
        px-6 py-3
        text-center
        font-mono
        text-sm
        tracking-wide
        text-cyanGlow
        shadow-[0_0_30px_rgba(34,211,238,0.08)]
        backdrop-blur-xl
      "
          >
            Many more projects are cooking...
          </div>
        </div>
      </section>

      <section id="research" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Research / Publications"
          title="Peer-reviewed research presented at international conferences."
          description="Academic work alongside engineering bridging computer vision, AI, and real-world applications."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {research.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <div className="glass-card rounded-[2rem] p-7 h-full flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {item.type}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                      item.status === "Ongoing"
                        ? "border-yellow-400/25 bg-yellow-400/10 text-yellow-300"
                        : "border-green-400/25 bg-green-400/10 text-green-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-cyanGlow/80 font-medium">
                    {item.conference}
                  </p>
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
                    <span className="text-white/30">Paper ID · </span>
                    {item.paperId}
                  </p>
                  <p>
                    <span className="text-white/30">Publisher · </span>
                    {item.publisher}
                  </p>
                  {/* <p>
                    <span className="text-white/30">Authors · </span>
                    {item?.authors}
                  </p> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="journey" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Journey / Proof"
          title="Education, AI engineering exposure, and leadership activities."
          description="A timeline that shows where the technical foundation, teamwork, and software engineering habits come from."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="timeline-line absolute left-4 top-0 hidden h-full w-px md:left-1/2 md:block" />
          {experience.map((item, index) => (
            <Reveal key={`${item.role}-${item.period}`} delay={index * 0.05}>
              <div
                className={`relative mb-7 grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`}
              >
                <div
                  className={`glass-card rounded-[2rem] p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {item.period}
                    </span>
                    <span className="text-xs text-white/40">{item.mode}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-2 text-sm text-cyanGlow/80">{item.org}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/60">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanGlow" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-ink bg-cyanGlow shadow-glow md:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell py-24 md:py-32">
        <SectionHeader
          eyebrow="Services / What I can build"
          title="Useful work, not decoration-only animation."
          description="I build responsive web applications, scalable full-stack systems, and polished user experiences with a focus on performance, usability, and clean engineering practices."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              className="glass-card rounded-[2rem] p-7"
              delay={index * 0.06}
            >
              <IconBadge
                icon={
                  index === 0 ? (
                    <Rocket className="h-5 w-5" />
                  ) : index === 1 ? (
                    <Code2 className="h-5 w-5" />
                  ) : (
                    <Sparkles className="h-5 w-5" />
                  )
                }
              />
              <h3 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="
    section-shell
    pb-14 pt-20
    sm:pb-16 sm:pt-24
    md:pb-20 md:pt-32
  "
      >
        <Reveal>
          <div
            className="
        glass-card
        overflow-hidden
        rounded-[2rem]
        sm:rounded-[2.5rem]
        p-5
        sm:p-8
        md:p-10
        lg:p-14
      "
          >
            <div
              className="
          grid
          gap-10
          items-center
          lg:grid-cols-[1fr_0.75fr]
        "
            >
              {/* LEFT CONTENT */}
              <div className="min-w-0">
                <p
                  className="
              font-mono
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.28em]
              sm:tracking-[0.35em]
              text-cyanGlow
            "
                >
                  Contact / Next step
                </p>

                <h2
                  className="
              mt-5
              max-w-3xl
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              break-words
            "
                >
                  Have a role, internship, or project idea? Let&apos;s build
                  something clean.
                </h2>

                <p
                  className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/60
              sm:text-base
              sm:leading-8
            "
                >
                  I am open to internship and entry-level software engineering
                  roles where I can contribute to frontend, MERN, API, and
                  AI-assisted development workflows.
                </p>

                {/* BUTTONS */}
                <div
                  className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:flex-wrap
            "
                >
                  <MagneticButton
                    href={`https://mail.google.com/mail/?view=cm&to=${profile.email}&su=Portfolio%20Contact%20-%20Atik%20Shahrear%20Ananto`}
                    target="_blank"
                    className="w-full sm:w-auto justify-center"
                  >
                    Send email <Mail className="h-4 w-4" />
                  </MagneticButton>

                  <MagneticButton
                    href={profile.github}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto justify-center"
                  >
                    GitHub profile <Github className="h-4 w-4" />
                  </MagneticButton>

                  <MagneticButton
                    href={profile.linkedin}
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto justify-center"
                  >
                    LinkedIn profile <Link2 className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div
                className="
            min-w-0
            rounded-[1.5rem]
            sm:rounded-[2rem]
            border border-white/10
            bg-black/25
            p-4
            sm:p-6
            font-mono
            text-[11px]
            leading-6
            text-white/60
            shadow-card
            sm:text-sm
            overflow-hidden
          "
              >
                <p className="break-words text-cyanGlow">
                  const contact = &#123;
                </p>

                <p className="mt-4 pl-3 sm:pl-4 break-words">
                  name:{" "}
                  <span className="text-white">&quot;{profile.name}&quot;</span>
                  ,
                </p>

                <p className="pl-3 sm:pl-4 break-words">
                  email:{" "}
                  <span className="text-white">
                    &quot;{profile.email}&quot;
                  </span>
                  ,
                </p>

                <p className="pl-3 sm:pl-4 break-words">
                  phone:{" "}
                  <span className="text-white">
                    &quot;{profile.phone}&quot;
                  </span>
                  ,
                </p>

                <p className="pl-3 sm:pl-4 break-words">
                  location:{" "}
                  <span className="text-white">
                    &quot;{profile.location}&quot;
                  </span>
                  ,
                </p>

                <p className="pl-3 sm:pl-4 break-words">
                  status:{" "}
                  <span className="text-white">
                    &quot;Open to opportunities&quot;
                  </span>
                </p>

                <p className="mt-4 break-words text-cyanGlow">&#125;;</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="section-shell pb-10 relative z-20">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>
            © 2026 {profile.name}. Built with Next.js, GSAP, Framer Motion, and
            Tailwind CSS.
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
              href={`mailto:${profile.email}`}
            >
              Email
            </Link>
            <Link className="transition hover:text-white" href="#home">
              Back to top
            </Link>
          </div>
        </div>
      </footer>
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
  return (
    <header className="fixed left-0 right-0 top-4 z-[70] px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/60 px-4 py-3 shadow-card backdrop-blur-2xl md:px-5">
        <Link
          href="#home"
          className="focus-ring group flex items-center gap-3 rounded-full"
        >
          {/* <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-ink shadow-glow transition group-hover:scale-105">
            AS
          </span> */}

          <img
            src="/logo.png"
            alt="Atik Shahrear Logo"
            className="
    h-10
    w-10
    rounded-full
    object-cover
    shadow-glow
    transition
    duration-300
    group-hover:scale-105
  "
          />

          <span className="hidden text-sm font-semibold text-white/90 sm:block">
            Atik Shahrear
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => (
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
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
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
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-ink/90 p-4 shadow-card backdrop-blur-2xl md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}

function HeroVisual() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
      className="relative -mt-15 mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none"
      style={{ perspective: "800px", perspectiveOrigin: "50% 40%" }}
    >
      {/* Orbits — hide when hovered */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.035] shadow-violet backdrop-blur-3xl" />
        <div
          className="orbit-ring animate-[spin_19s_linear_infinite]"
          style={{
            inset: "2%",
            borderColor: "rgba(109,232,255,0.25)",
            transform: "rotateX(75deg)",
          }}
        >
          <span className="orbit-dot" />
        </div>
        <div
          className="orbit-ring animate-[spin_25s_linear_infinite_reverse]"
          style={{
            inset: "10%",
            borderColor: "rgba(169,134,255,0.25)",
            transform: "rotateX(65deg)",
          }}
        >
          <span className="orbit-dot bg-violetGlow" />
        </div>
        <div
          className="orbit-ring animate-[spin_31s_linear_infinite]"
          style={{
            inset: "18%",
            borderColor: "rgba(255,106,213,0.25)",
            transform: "rotateX(55deg)",
          }}
        >
          <span className="orbit-dot bg-pinkGlow" />
        </div>
      </motion.div>

      <div
        className="
    absolute left-1/2 top-1/2
    w-[95%]
    xs:w-[92%]
    sm:w-[88%]
    md:w-[78%]
    max-w-[720px]
    -translate-x-1/2 -translate-y-1/2
  "
      >
        {/* Code card */}
        <motion.div
          className="
      rounded-[1.5rem]
      sm:rounded-[2rem]
      border border-white/10
      bg-black/40
      p-3
      sm:p-4
      md:p-5
      shadow-card
      backdrop-blur-2xl
    "
          animate={{
            opacity: hovered ? 0 : 1,
            scale: hovered ? 0.92 : 1,
            filter: hovered ? "blur(10px)" : "blur(0px)",
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{ pointerEvents: hovered ? "none" : "auto" }}
        >
          {/* Top bar */}
          <div
            className="
        mb-4
        flex items-center justify-between
        rounded-2xl
        border border-white/10
        bg-white/[0.045]
        px-3 py-2.5
        sm:px-4 sm:py-3
      "
          >
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-pinkGlow" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-cyanGlow" />
            </div>

            <span className="font-mono text-[10px] sm:text-xs text-white/40">
              portfolio.tsx
            </span>
          </div>

          {/* Code content */}

          <div
            className="
        space-y-2.5
        sm:space-y-3
        font-mono
        text-[11px]
        leading-5
        sm:text-xs
        sm:leading-6
        md:text-sm
        text-white/60
        break-words
       
      "
          >
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
              current-job:{" "}
              <span className="text-white">
                &quot;Trainee AI & Software Engineer&quot;
              </span>
            </p>

            {/* Hover line */}
            <p
              className="pl-3 sm:pl-4 cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              my-photo:{" "}
              <span className="text-cyanGlow animate-pulse">
                &quot;Hover to reveal my ugly face&quot;
              </span>
            </p>

            <p>
              <span className="text-cyanGlow">&#125;</span>
            </p>
          </div>
        </motion.div>

        {/* ProfileCard reveal */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 1.06,
            filter: hovered ? "blur(0px)" : "blur(12px)",
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ pointerEvents: hovered ? "auto" : "none" }}
        >
          <div
            className="
        scale-[0.78]
        xs:scale-[0.82]
        sm:scale-[0.9]
        md:scale-100
      "
          >
            <ProfileCard
              avatarUrl="/avatar.png"
              name="Atik Shahrear Ananto"
              title="Junior Developer · MERN & AI Enthusiast"
              handle="Atik Shahrear Ananto"
              status="Open to opportunities"
              contactText="Hire Me"
              showUserInfo={true}
              enableTilt={true}
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,#6de8ff1a 0%,#a986ff22 100%)"
              onContactClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=anantoshahrear10@gmail.com",
                  "_blank",
                );
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating chips — hide when hovered */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none"
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
          text="ML & Data Science Enthusiast"
        />
      </motion.div>
    </motion.div>
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
    <motion.div
      className={`absolute hidden rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/75 shadow-card backdrop-blur-xl sm:flex sm:items-center sm:gap-2 ${className}`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-cyanGlow">{icon}</span>
      {text}
    </motion.div>
  );
}

function ContactLine({
  icon,
  text,
  href,
}: {
  icon: ReactNode;
  text: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 transition hover:border-cyanGlow/30 hover:bg-white/[0.07] hover:text-white">
      <span className="text-cyanGlow">{icon}</span>
      <span>{text}</span>
    </span>
  );

  if (!href) return content;
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {content}
    </Link>
  );
}

function IconBadge({ icon }: { icon: ReactNode }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow shadow-glow">
      {icon}
    </div>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`,
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <Reveal delay={index * 0.07}>
      <article
        onPointerMove={onPointerMove}
        className="
          project-card
          glass-card
          group
          relative
          h-full
          overflow-hidden
          rounded-[2rem]
          p-4
          sm:p-5
          md:p-6
          transition
          duration-500
          hover:-translate-y-2
          hover:border-cyanGlow/30
        "
      >
        <div className="relative z-10 flex h-full flex-col">
          {/* TOP BAR */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <span
              className="
                rounded-full
                border border-white/10
                bg-white/[0.055]
                px-3 py-1
                text-[10px]
                sm:text-xs
                text-white/60
              "
            >
              {project.type}
            </span>

            <span className="font-mono text-xs text-cyanGlow">
              0{index + 1}
            </span>
          </div>

          {/* PROJECT IMAGE */}
          <div
            className="
              relative
              mb-6
              overflow-hidden
              rounded-[1.5rem]
              border border-white/10
            "
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="
                h-[180px]
                sm:h-[220px]
                md:h-[240px]
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* TITLE OVERLAY */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                {project.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-cyanGlow">
                {project.label}
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm
              leading-7
              text-white/60
            "
          >
            {project.description}
          </p>

          {/* HIGHLIGHTS */}
          <ul className="mt-6 space-y-3 text-sm text-white/60">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanGlow" />

                <span>{highlight}</span>
              </li>
            ))}
          </ul>

        
          {/* TECH STACK */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
        rounded-full
        border border-white/10
        bg-white/[0.055]
        px-3 py-1.5
        text-xs
        text-white/50
      "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
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

          {/* BUTTONS */}
          {/* <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
            <Link
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-cyanGlow
      px-5
      py-2.5
      text-sm
      font-semibold
      text-black
      transition
      duration-300
      hover:scale-[1.03]
    "
            >
              Visit Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border border-white/10
      bg-white/[0.05]
      px-5
      py-2.5
      text-sm
      font-semibold
      text-white/70
      transition
      duration-300
      hover:border-cyanGlow/30
      hover:text-white
    "
            >
              GitHub
              <Github className="h-4 w-4" />
            </Link>
          </div> */}
        </div>
      </article>
    </Reveal>
  );
}
