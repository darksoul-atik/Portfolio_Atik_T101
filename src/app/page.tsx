"use client";

import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
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
  SiReactquery,
  SiDaisyui,
  SiZod,
  SiPrisma,
  SiPostman,
  SiHoppscotch,
} from "react-icons/si";

import { FaServer, FaDatabase, FaCloud, FaCode } from "react-icons/fa";
import { TbApi, TbBrandOpenai } from "react-icons/tb";

import { PointerEvent, ReactNode, useEffect, useRef, useState, useMemo } from "react";
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
  ExternalLink,
  Edit2,
  Camera,
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollFloatingIcons } from "@/components/ScrollFloatingIcons";
import ProfileCard from "@/components/ProfileCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { LogoLoop } from "@/components/LogoLoop";
import { techLogos } from "@/components/SkillMarquee";
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
  AboutCardItem,
} from "@/context/PortfolioContext";
import {
  IconPickerModal,
  renderDynamicIcon,
} from "@/components/IconPicker";
import { ImageUploadModal } from "@/components/ImageUploadModal";
import { generateThemeCSS } from "@/data/themeColors";

const skillIconMap: Record<string, React.ReactNode> = {
  // Frontend
  "Next.js": <SiNextdotjs />,
  Nextjs: <SiNextdotjs />,
  Next: <SiNextdotjs />,
  "React.js": <SiReact />,
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
  Axios: <SiAxios />,
  GSAP: <FaCode />,
  "TanStack Query": <SiReactquery />,
  DaisyUI: <SiDaisyui />,
  Zod: <SiZod />,
  zod: <SiZod />,

  // Backend & APIs
  "Nest.js": <SiNestjs />,
  NestJS: <SiNestjs />,
  Nestjs: <SiNestjs />,
  Nest: <SiNestjs />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  FastAPI: <SiFastapi />,
  "RESTful API Design": <TbApi />,
  Postman: <SiPostman />,
  postman: <SiPostman />,
  Hoppscotch: <SiHoppscotch />,
  hoppscotch: <SiHoppscotch />,
  JWT: <FaServer />,
  "Firebase Auth": <SiFirebase />,
  "System Design": <FaServer />,

  // AI & Data Engineering
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
  AntiGravity: <Sparkles />,

  // Database & Deployment
  Prisma: <SiPrisma />,
  prisma: <SiPrisma />,
  "Prisma ORM": <SiPrisma />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  NeonDB: <SiPostgresql />,
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
    themeColors,
    isDevMode,
    updateProfile,
    updateHeader,
    updateHero,
    updateHeroChip,
    addHeroChip,
    deleteHeroChip,
    updateHeroCodeSnippet,
    updateAboutCard,
    addAboutCard,
    deleteAboutCard,
    updateProfileCardExtras,
    updateContactSection,
    updateStat,
    addStat,
    deleteStat,
    addProject,
    deleteProject,
    updateProject,
    addSkillGroup,
    deleteSkillGroup,
    updateSkillGroup,
    updateSkillCloud,
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

  const {
    profile,
    stats,
    skillGroups,
    skillCloud,
    projects,
    experience,
    services,
    research,
    header,
    hero,
    aboutCards,
    profileCardExtras,
    contactSection,
  } = data;

  const [mobileOpen, setMobileOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cvInputRef = useRef<HTMLInputElement>(null);

  // Modals for Icon & Image Picker
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean;
    title: string;
    currentUrl: string;
    aspectRatio: "square" | "video" | "auto";
    onSave: (url: string) => void;
  }>({
    isOpen: false,
    title: "Edit Image",
    currentUrl: "",
    aspectRatio: "auto",
    onSave: () => {},
  });

  const [iconModal, setIconModal] = useState<{
    isOpen: boolean;
    title: string;
    selectedId: string;
    onSelect: (iconId: string) => void;
  }>({
    isOpen: false,
    title: "Select Icon",
    selectedId: "Code2",
    onSelect: () => {},
  });

  const openImagePicker = (
    title: string,
    currentUrl: string,
    onSave: (url: string) => void,
    aspectRatio: "square" | "video" | "auto" = "auto"
  ) => {
    setImageModal({
      isOpen: true,
      title,
      currentUrl,
      aspectRatio,
      onSave,
    });
  };

  const openIconPicker = (
    title: string,
    selectedId: string,
    onSelect: (iconId: string) => void
  ) => {
    setIconModal({
      isOpen: true,
      title,
      selectedId,
      onSelect,
    });
  };

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
      <ScrollFloatingIcons />

      {/* Global Image & Icon Modals */}
      <ImageUploadModal
        isOpen={imageModal.isOpen}
        onClose={() => setImageModal((prev) => ({ ...prev, isOpen: false }))}
        title={imageModal.title}
        currentUrl={imageModal.currentUrl}
        aspectRatio={imageModal.aspectRatio}
        onSave={imageModal.onSave}
      />

      <IconPickerModal
        isOpen={iconModal.isOpen}
        onClose={() => setIconModal((prev) => ({ ...prev, isOpen: false }))}
        title={iconModal.title}
        selectedId={iconModal.selectedId}
        onSelect={iconModal.onSelect}
      />

      {/* Header */}
      <Header
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        isDevMode={isDevMode}
        header={header}
        onUpdateHeader={updateHeader}
        onEditLogo={() =>
          openImagePicker(
            "Change Logo Image",
            header.logo,
            (url) => updateHeader({ logo: url }),
            "square"
          )
        }
      />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="section-shell relative flex min-h-screen flex-col items-center justify-center pb-20 pt-28 md:pb-28 md:pt-36"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] relative z-10">
          <div className="flex flex-col justify-center">
            {/* Headline */}
            {isDevMode ? (
              <div className="hero-reveal mb-4 space-y-2">
                <textarea
                  rows={3}
                  value={hero.headline}
                  onChange={(e) => updateHero({ headline: e.target.value })}
                  className="w-full text-balance text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white bg-white/10 border-2 border-dashed border-amber-400/60 rounded-2xl p-3 outline-none"
                  placeholder="Hero headline"
                />
              </div>
            ) : (
              <h1 className="hero-reveal max-w-5xl text-balance text-4xl font-black leading-[0.96] tracking-[-0.075em] text-white sm:text-6xl md:text-7xl xl:text-[6.2rem]">
                {hero.headline}
              </h1>
            )}

            {/* Subheadline */}
            {isDevMode ? (
              <textarea
                rows={3}
                value={hero.subheadline || profile.subheadline}
                onChange={(e) => updateHero({ subheadline: e.target.value })}
                className="hero-reveal mt-4 w-full text-pretty text-sm sm:text-base leading-7 text-white/80 bg-white/10 border border-amber-400/50 rounded-xl p-2.5 outline-none"
                placeholder="Hero subheadline"
              />
            ) : (
              <p className="hero-reveal mt-7 max-w-2xl text-pretty text-base leading-8 text-white/70 md:text-lg">
                {hero.subheadline || profile.subheadline}
              </p>
            )}

            {/* Action Buttons */}
            <div className="hero-reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton href="#projects">
                {isDevMode ? (
                  <input
                    type="text"
                    value={hero.viewProjectsText || "View projects"}
                    onChange={(e) =>
                      updateHero({ viewProjectsText: e.target.value })
                    }
                    className="bg-transparent border-b border-white/50 text-white outline-none w-28 text-center text-sm font-semibold"
                  />
                ) : (
                  <span>{hero.viewProjectsText || "View projects"}</span>
                )}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href={profile.resume}
                variant="secondary"
                download
              >
                {isDevMode ? (
                  <input
                    type="text"
                    value={hero.downloadCvText || "Download CV"}
                    onChange={(e) =>
                      updateHero({ downloadCvText: e.target.value })
                    }
                    className="bg-transparent border-b border-white/50 text-white outline-none w-28 text-center text-sm font-semibold"
                  />
                ) : (
                  <span>{hero.downloadCvText || "Download CV"}</span>
                )}
                <Download className="h-4 w-4" />
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
                {isDevMode ? (
                  <input
                    type="text"
                    value={hero.contactMeText || "Contact me"}
                    onChange={(e) =>
                      updateHero({ contactMeText: e.target.value })
                    }
                    className="bg-transparent border-b border-white/50 text-white outline-none w-24 text-center text-sm font-semibold"
                  />
                ) : (
                  <span>{hero.contactMeText || "Contact me"}</span>
                )}
                <Mail className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Hero Visual (ProfileCard & Code Card) */}
          <HeroVisual
            isDevMode={isDevMode}
            hero={hero}
            profileCardExtras={profileCardExtras}
            onUpdateHero={updateHero}
            onUpdateHeroChip={updateHeroChip}
            onAddHeroChip={addHeroChip}
            onDeleteHeroChip={deleteHeroChip}
            onUpdateHeroCodeSnippet={updateHeroCodeSnippet}
            onUpdateProfileCardExtras={updateProfileCardExtras}
            onOpenImagePicker={openImagePicker}
            onOpenIconPicker={openIconPicker}
          />
        </div>

        {/* Feature Stats */}
        <div className="hero-reveal mt-12 sm:mt-16 w-full">
          {isDevMode && (
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={addStat}
                className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-mono font-bold text-amber-300 hover:bg-amber-400/20"
              >
                <Plus className="h-3.5 w-3.5" /> Add Metric
              </button>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className={`group relative rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
                  isDevMode ? "border-amber-400/40 border-dashed" : ""
                }`}
              >
                {isDevMode && (
                  <button
                    type="button"
                    onClick={() => deleteStat(index)}
                    className="absolute right-2 top-2 rounded-full p-1 text-red-400 opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition"
                    title="Delete metric"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                )}

                {isDevMode ? (
                  <div className="space-y-1">
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) =>
                        updateStat(index, { value: e.target.value })
                      }
                      className="w-full text-xl font-black text-white bg-white/10 rounded px-1 outline-none"
                    />
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        updateStat(index, { label: e.target.value })
                      }
                      className="w-full text-[11px] text-white/70 bg-white/10 rounded px-1 outline-none"
                    />
                  </div>
                ) : (
                  <>
                    <p className="text-2xl font-black text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/40">
                      {item.label}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-shell py-20 md:py-32">
        <SectionHeader
          eyebrow="About / Background"
          title="Software Engineer focused on full-stack architecture, APIs, and modern UI."
          description="Experienced in the React/Next.js ecosystem, Node.js and Python backends, database modeling, and AI-accelerated development workflows."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: Profile Summary Card */}
          <Reveal className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 sm:p-7 md:p-9 backdrop-blur-xl">
            {isDevMode && (
              <div className="absolute top-4 right-4">
                <button
                  type="button"
                  onClick={() =>
                    openImagePicker(
                      "Change About Avatar",
                      profileCardExtras.avatarUrl || "/avatar.png",
                      (url) => updateProfileCardExtras({ avatarUrl: url }),
                      "square"
                    )
                  }
                  className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-mono font-bold text-amber-300 hover:bg-amber-400/20"
                >
                  <Camera className="h-3.5 w-3.5" /> Edit Photo
                </button>
              </div>
            )}

            <div className="flex items-center gap-5">
              <div
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-cyanGlow/30 bg-cyanGlow/10 shadow-glow cursor-pointer group"
                onClick={() => {
                  if (isDevMode) {
                    openImagePicker(
                      "Change About Avatar",
                      profileCardExtras.avatarUrl || "/avatar.png",
                      (url) => updateProfileCardExtras({ avatarUrl: url }),
                      "square"
                    );
                  }
                }}
              >
                <Image
                  src={profileCardExtras.avatarUrl || "/avatar.png"}
                  alt={profile.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                {isDevMode && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[10px] font-bold text-amber-300">
                    EDIT
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                {isDevMode ? (
                  <div className="space-y-1.5">
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => updateProfile("name", e.target.value)}
                      className="w-full text-lg font-bold text-white bg-white/10 border border-amber-400/50 rounded px-2 py-0.5 outline-none"
                    />
                    <input
                      type="text"
                      value={profile.role}
                      onChange={(e) => updateProfile("role", e.target.value)}
                      className="w-full text-xs text-white/70 bg-white/10 border border-amber-400/50 rounded px-2 py-0.5 outline-none"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white truncate">
                      {profile.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/50 truncate">
                      {profile.role}
                    </p>
                  </>
                )}
              </div>
            </div>

            {isDevMode ? (
              <textarea
                rows={4}
                value={profileCardExtras.bio}
                onChange={(e) =>
                  updateProfileCardExtras({ bio: e.target.value })
                }
                className="mt-6 w-full text-sm leading-7 text-white/80 bg-white/10 border border-amber-400/50 rounded-xl p-3 outline-none"
                placeholder="About bio paragraph"
              />
            ) : (
              <p className="mt-6 text-pretty text-base leading-8 text-white/60">
                {profileCardExtras.bio ||
                  "I build web applications and scalable backends with emphasis on responsiveness, secure authentication, clean RESTful APIs, database integrity, and production-ready code."}
              </p>
            )}

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
                  <span className="text-cyanGlow">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Location
                    </p>
                    {isDevMode ? (
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) =>
                          updateProfile("location", e.target.value)
                        }
                        className="bg-white/10 border border-amber-400/40 rounded px-1.5 py-0.5 text-sm text-white outline-none w-48"
                      />
                    ) : (
                      <p className="text-sm font-medium text-white/90">
                        {profile.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: 4 Editable Feature Cards */}
          <div>
            {isDevMode && (
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={addAboutCard}
                  className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-mono font-bold text-amber-300 hover:bg-amber-400/20"
                >
                  <Plus className="h-4 w-4" /> Add Feature Card
                </button>
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              {aboutCards.map((card, index) => (
                <Reveal
                  key={card.id || index}
                  className={`about-highlight-card relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 sm:p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
                    isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
                  }`}
                  delay={index * 0.06}
                >
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      disabled={!isDevMode}
                      onClick={() => {
                        if (isDevMode) {
                          openIconPicker(
                            `Select Icon for "${card.title}"`,
                            card.icon,
                            (iconId) => updateAboutCard(index, { icon: iconId })
                          );
                        }
                      }}
                      className={`grid h-12 w-12 place-items-center rounded-2xl border border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow shadow-glow ${
                        isDevMode
                          ? "cursor-pointer hover:border-amber-400 hover:bg-amber-400/20"
                          : ""
                      }`}
                      title={isDevMode ? "Click to change icon" : undefined}
                    >
                      {renderDynamicIcon(card.icon, "h-5 w-5")}
                    </button>

                    {isDevMode && (
                      <button
                        type="button"
                        onClick={() => deleteAboutCard(index)}
                        className="rounded-full bg-red-500/20 p-1.5 text-red-300 hover:bg-red-500/40 transition"
                        title="Delete card"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {isDevMode ? (
                    <div className="mt-4 space-y-2">
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) =>
                          updateAboutCard(index, { title: e.target.value })
                        }
                        className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-1.5 text-base font-bold text-white outline-none"
                        placeholder="Card title"
                      />
                      <textarea
                        rows={3}
                        value={card.description}
                        onChange={(e) =>
                          updateAboutCard(index, {
                            description: e.target.value,
                          })
                        }
                        className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-2 text-xs text-white/70 outline-none"
                        placeholder="Card description"
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="mt-6 text-xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/60">
                        {card.description}
                      </p>
                    </>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-shell py-20 md:py-32">
        <SectionHeader
          eyebrow="Skills / Tech Stack"
          title="Core technologies for full-stack engineering and data modeling."
          description="Technologies organized by production engineering layer: frontend clients, backend services, applied machine learning, and persistence."
        />

        <Reveal>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={44}
            gap={64}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={true}
            fadeOutColor="var(--color-ink, #0b0f17)"
            ariaLabel="Technologies and framework stack"
            className="my-6 md:my-10"
          />
        </Reveal>

        {isDevMode && (
          <div className="mt-6 flex flex-wrap items-center justify-end gap-4 rounded-2xl border border-amber-400/30 bg-black/40 p-4">
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
              className={`relative flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
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

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => {
                  const Icon = skillIconMap[skill];
                  return (
                    <span
                      key={`${skill}-${sIdx}`}
                      className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-white/60 transition-all duration-300 hover:scale-[1.05] hover:border-cyanGlow/40 hover:text-white"
                    >
                      {Icon ? (
                        <span className="text-base text-cyanGlow">{Icon}</span>
                      ) : (
                        <span className="text-xs text-cyanGlow">
                          {renderDynamicIcon(skill, "h-3.5 w-3.5")}
                        </span>
                      )}
                      <span>{skill}</span>
                      {isDevMode && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = group.skills.filter(
                              (_, i) => i !== sIdx
                            );
                            updateSkillGroup(index, { skills: updated });
                          }}
                          className="text-red-400 hover:text-red-300 ml-1"
                        >
                          ×
                        </button>
                      )}
                    </span>
                  );
                })}

                {isDevMode && (
                  <button
                    type="button"
                    onClick={() => {
                      const newSkill = prompt("Enter new skill tag:");
                      if (newSkill && newSkill.trim()) {
                        updateSkillGroup(index, {
                          skills: [...group.skills, newSkill.trim()],
                        });
                      }
                    }}
                    className="flex items-center gap-1 rounded-full border border-dashed border-cyanGlow/50 bg-cyanGlow/10 px-2.5 py-1 text-xs text-cyan-200 hover:bg-cyanGlow/20"
                  >
                    <Plus className="h-3 w-3" /> Add Tag
                  </button>
                )}
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
              onEditImage={() =>
                openImagePicker(
                  `Change Image for "${project.title}"`,
                  project.image,
                  (url) => updateProject(index, { image: url }),
                  "video"
                )
              }
            />
          ))}
        </div>

        {/* Direct GitHub Link */}
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
      <section id="research" className="section-shell py-20 md:py-32">
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
                className={`relative flex h-full flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 sm:p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
                  isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  {isDevMode ? (
                    <input
                      type="text"
                      value={item.type}
                      onChange={(e) =>
                        updateResearch(index, { type: e.target.value })
                      }
                      className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100 outline-none w-36"
                    />
                  ) : (
                    <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {item.type}
                    </span>
                  )}

                  <div className="flex items-center gap-2">
                    {isDevMode ? (
                      <input
                        type="text"
                        value={item.status}
                        onChange={(e) =>
                          updateResearch(index, { status: e.target.value })
                        }
                        className="rounded-full border border-amber-400/40 bg-white/10 px-3 py-1 text-xs font-semibold text-white outline-none w-28 text-center"
                      />
                    ) : (
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                          item.status === "Accepted"
                            ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                            : "border-sky-400/25 bg-sky-400/10 text-sky-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}

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
                  <p className="flex items-center gap-2">
                    <span className="text-white/30 shrink-0">Venue · </span>
                    {isDevMode ? (
                      <input
                        type="text"
                        value={item.venue}
                        onChange={(e) =>
                          updateResearch(index, { venue: e.target.value })
                        }
                        className="w-full bg-white/10 border border-amber-400/40 rounded px-1.5 py-0.5 text-xs text-white outline-none"
                      />
                    ) : (
                      item.venue
                    )}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/30 shrink-0">Date · </span>
                    {isDevMode ? (
                      <input
                        type="text"
                        value={item.date}
                        onChange={(e) =>
                          updateResearch(index, { date: e.target.value })
                        }
                        className="w-full bg-white/10 border border-amber-400/40 rounded px-1.5 py-0.5 text-xs text-white outline-none"
                      />
                    ) : (
                      item.date
                    )}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/30 shrink-0">Identifier · </span>
                    {isDevMode ? (
                      <input
                        type="text"
                        value={item.paperId}
                        onChange={(e) =>
                          updateResearch(index, { paperId: e.target.value })
                        }
                        className="w-full bg-white/10 border border-amber-400/40 rounded px-1.5 py-0.5 text-xs text-white outline-none"
                      />
                    ) : (
                      item.paperId
                    )}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-white/30 shrink-0">Publisher · </span>
                    {isDevMode ? (
                      <input
                        type="text"
                        value={item.publisher}
                        onChange={(e) =>
                          updateResearch(index, { publisher: e.target.value })
                        }
                        className="w-full bg-white/10 border border-amber-400/40 rounded px-1.5 py-0.5 text-xs text-white outline-none"
                      />
                    ) : (
                      item.publisher
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="section-shell py-20 md:py-32">
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
                  className={`relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } ${isDevMode ? "border-2 border-dashed border-amber-400/40" : ""}`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    {isDevMode ? (
                      <input
                        type="text"
                        value={item.period}
                        onChange={(e) =>
                          updateExperience(index, { period: e.target.value })
                        }
                        className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100 outline-none w-36"
                      />
                    ) : (
                      <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                        {item.period}
                      </span>
                    )}

                    <div className="flex items-center gap-2">
                      {isDevMode ? (
                        <input
                          type="text"
                          value={item.mode}
                          onChange={(e) =>
                            updateExperience(index, { mode: e.target.value })
                          }
                          className="text-xs text-white/70 bg-white/10 border border-amber-400/40 rounded px-2 py-0.5 outline-none w-28 text-center"
                        />
                      ) : (
                        <span className="text-xs text-white/40">{item.mode}</span>
                      )}

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

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 text-sm text-white/60">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-cyanGlow mt-1">•</span>
                        {isDevMode ? (
                          <div className="flex-1 flex items-center gap-1.5">
                            <input
                              type="text"
                              value={detail}
                              onChange={(e) => {
                                const newDetails = [...item.details];
                                newDetails[dIdx] = e.target.value;
                                updateExperience(index, { details: newDetails });
                              }}
                              className="flex-1 bg-white/10 border border-amber-400/40 rounded px-2 py-0.5 text-xs text-white outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newDetails = item.details.filter(
                                  (_, i) => i !== dIdx
                                );
                                updateExperience(index, { details: newDetails });
                              }}
                              className="text-red-400 hover:text-red-300 text-xs px-1"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <span>{detail}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {isDevMode && (
                    <button
                      type="button"
                      onClick={() => {
                        updateExperience(index, {
                          details: [
                            ...item.details,
                            "New engineering accomplishment or coursework detail.",
                          ],
                        });
                      }}
                      className="mt-3 flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:underline"
                    >
                      <Plus className="h-3 w-3" /> Add Detail Bullet
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-shell py-20 md:py-32">
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
              className={`relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
                isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
              }`}
              delay={index * 0.06}
            >
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  disabled={!isDevMode}
                  onClick={() => {
                    if (isDevMode) {
                      openIconPicker(
                        `Select Icon for "${service.title}"`,
                        service.icon || "Rocket",
                        (iconId) => updateService(index, { icon: iconId })
                      );
                    }
                  }}
                  className={`grid h-12 w-12 place-items-center rounded-2xl border border-cyanGlow/25 bg-cyanGlow/10 text-cyanGlow shadow-glow ${
                    isDevMode
                      ? "cursor-pointer hover:border-amber-400 hover:bg-amber-400/20"
                      : ""
                  }`}
                  title={isDevMode ? "Click to change icon" : undefined}
                >
                  {renderDynamicIcon(service.icon || "Rocket", "h-5 w-5")}
                </button>

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
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 sm:p-8 md:p-10 lg:p-14 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
              {/* Left Column: Info & Obfuscated details */}
              <div className="min-w-0">
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cyanGlow">
                  {contactSection.eyebrow}
                </p>

                {isDevMode ? (
                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      value={contactSection.title}
                      onChange={(e) =>
                        updateContactSection({ title: e.target.value })
                      }
                      className="w-full text-2xl sm:text-4xl font-black text-white bg-white/10 border border-amber-400/60 rounded-xl p-2 outline-none"
                    />
                    <textarea
                      rows={3}
                      value={contactSection.description}
                      onChange={(e) =>
                        updateContactSection({ description: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm text-white/80 bg-white/10 border border-amber-400/60 rounded-xl p-2 outline-none"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                      {contactSection.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                      {contactSection.description}
                    </p>
                  </>
                )}

                <div className="mt-8 space-y-3 max-w-md">
                  <ObfuscatedContact
                    type="email"
                    encodedValue={btoa(profile.email)}
                    label={contactSection.emailLabel || "Direct Email"}
                    icon={<Mail className="h-4 w-4" />}
                  />
                  <ObfuscatedContact
                    type="phone"
                    encodedValue={btoa(profile.phone)}
                    label={contactSection.phoneLabel || "Phone"}
                    icon={<Phone className="h-4 w-4" />}
                  />
                  <ObfuscatedContact
                    type="whatsapp"
                    encodedValue={btoa(profile.whatsapp)}
                    label={contactSection.whatsappLabel || "WhatsApp"}
                    icon={<MessageCircle className="h-4 w-4" />}
                  />
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-cyanGlow">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40">
                          {contactSection.locationLabel || "Location"}
                        </p>
                        <p className="text-sm font-medium text-white/90">
                          {profile.location}
                        </p>
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
  isDevMode,
  header,
  onUpdateHeader,
  onEditLogo,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  isDevMode: boolean;
  header: { logo: string; title: string; hireMeText: string; hireMeLink: string };
  onUpdateHeader: (updated: Partial<typeof header>) => void;
  onEditLogo: () => void;
}) {
  const { data, toggleDevModePopup } = usePortfolio();
  const { profile } = data;

  const clickTimesRef = useRef<number[]>([]);
  const singleClickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const now = Date.now();
    // Keep clicks within the last 1400ms
    clickTimesRef.current = clickTimesRef.current.filter((t) => now - t < 1400);
    clickTimesRef.current.push(now);

    if (clickTimesRef.current.length >= 3) {
      clickTimesRef.current = [];
      if (singleClickTimeoutRef.current) {
        clearTimeout(singleClickTimeoutRef.current);
        singleClickTimeoutRef.current = null;
      }
      toggleDevModePopup();
    } else if (isDevMode) {
      if (singleClickTimeoutRef.current) {
        clearTimeout(singleClickTimeoutRef.current);
      }
      singleClickTimeoutRef.current = setTimeout(() => {
        onEditLogo();
        singleClickTimeoutRef.current = null;
      }, 350);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-[70] px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-4 py-3 shadow-card backdrop-blur-2xl md:px-5">
        <div className="flex items-center gap-3">
          <div
            className={`relative group rounded-full overflow-hidden select-none cursor-pointer ${
              isDevMode ? "ring-2 ring-amber-400" : ""
            }`}
            onClick={handleLogoClick}
            title={
              isDevMode
                ? "Click to change logo (or click 3x to toggle DevMode)"
                : "Atik Portfolio (Click 3x to toggle DevMode)"
            }
          >
            <img
              src={header.logo || "/logo.png"}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover shadow-glow transition duration-300 group-hover:scale-105 pointer-events-none"
            />
            {isDevMode && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[9px] font-bold text-amber-300 pointer-events-none">
                EDIT
              </div>
            )}
          </div>

          {isDevMode ? (
            <input
              type="text"
              value={header.title}
              onChange={(e) => onUpdateHeader({ title: e.target.value })}
              className="text-sm font-semibold text-white/90 bg-white/10 border border-amber-400/50 rounded px-2 py-0.5 outline-none w-32"
            />
          ) : (
            <Link
              href="#home"
              className="focus-ring hidden text-sm font-semibold text-white/90 sm:block"
            >
              {header.title}
            </Link>
          )}
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Desktop Actions */}
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

          {isDevMode ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={header.hireMeText}
                onChange={(e) => onUpdateHeader({ hireMeText: e.target.value })}
                className="rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 outline-none w-20 text-center"
              />
            </div>
          ) : (
            <Link
              href={header.hireMeLink || "#contact"}
              className="rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyanGlow/20"
            >
              {header.hireMeText}
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
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
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <Link
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center rounded-xl bg-cyanGlow/20 border border-cyanGlow/40 py-2.5 text-sm font-semibold text-cyan-100"
            >
              {header.hireMeText || "Hire me"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual({
  isDevMode,
  hero,
  profileCardExtras,
  onUpdateHero,
  onUpdateHeroChip,
  onAddHeroChip,
  onDeleteHeroChip,
  onUpdateHeroCodeSnippet,
  onUpdateProfileCardExtras,
  onOpenImagePicker,
  onOpenIconPicker,
}: {
  isDevMode: boolean;
  hero: any;
  profileCardExtras: any;
  onUpdateHero: (updated: any) => void;
  onUpdateHeroChip: (index: number, updated: any) => void;
  onAddHeroChip: () => void;
  onDeleteHeroChip: (index: number) => void;
  onUpdateHeroCodeSnippet: (updated: any) => void;
  onUpdateProfileCardExtras: (updated: any) => void;
  onOpenImagePicker: (
    title: string,
    currentUrl: string,
    onSave: (url: string) => void,
    aspectRatio?: "square" | "video" | "auto"
  ) => void;
  onOpenIconPicker: (
    title: string,
    selectedId: string,
    onSelect: (iconId: string) => void
  ) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const { data } = usePortfolio();
  const { profile } = data;
  const snippet = hero.codeSnippet || {};

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[32rem] sm:max-w-[34rem] lg:max-w-none flex items-center justify-center"
      style={{ perspective: "800px", perspectiveOrigin: "50% 50%" }}
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
          className={`hero-code-card rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.045] p-3.5 sm:p-4 md:p-5 shadow-card backdrop-blur-2xl transition-all duration-300 ${
            hovered
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          } ${isDevMode ? "border-amber-400/50 border-dashed" : ""}`}
        >
          {/* Top bar */}
          <div className="hero-code-topbar mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-pinkGlow" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-cyanGlow" />
            </div>

            {isDevMode ? (
              <input
                type="text"
                value={snippet.fileName || "developer.ts"}
                onChange={(e) =>
                  onUpdateHeroCodeSnippet({ fileName: e.target.value })
                }
                className="font-mono text-[10px] sm:text-xs text-white/70 bg-white/10 rounded px-1.5 py-0.5 outline-none"
              />
            ) : (
              <span className="font-mono text-[10px] sm:text-xs text-white/40">
                {snippet.fileName || "developer.ts"}
              </span>
            )}
          </div>

          {/* JavaScript Object Literal Snippet */}
          <div className="space-y-2.5 sm:space-y-3 font-mono text-[11px] leading-5 sm:text-xs sm:leading-6 md:text-sm text-white/60 break-words">
            <p>
              <span className="code-keyword text-pinkGlow">const</span>{" "}
              <span className="code-text">developer =</span>{" "}
              <span className="code-string text-cyanGlow">&#123;</span>
            </p>

            <p className="pl-3 sm:pl-4 flex items-center gap-1.5">
              name:{" "}
              {isDevMode ? (
                <input
                  type="text"
                  value={snippet.name || profile.name}
                  onChange={(e) =>
                    onUpdateHeroCodeSnippet({ name: e.target.value })
                  }
                  className="bg-white/10 text-white border border-amber-400/40 rounded px-1 outline-none text-xs"
                />
              ) : (
                <span className="text-white">&quot;{snippet.name || profile.name}&quot;,</span>
              )}
            </p>

            <p className="pl-3 sm:pl-4 flex items-center gap-1.5 flex-wrap">
              focus: [
              {isDevMode ? (
                <input
                  type="text"
                  value={(snippet.focus || ["Full-Stack", "AI-Assisted Dev"]).join(", ")}
                  onChange={(e) =>
                    onUpdateHeroCodeSnippet({
                      focus: e.target.value.split(",").map((s: string) => s.trim()),
                    })
                  }
                  className="bg-white/10 text-white border border-amber-400/40 rounded px-1 outline-none text-xs w-48"
                  placeholder="Tag 1, Tag 2"
                />
              ) : (
                (snippet.focus || ["Full-Stack", "AI-Assisted Dev"]).map(
                  (f: string, i: number) => (
                    <span key={f} className="text-white">
                      &quot;{f}&quot;{i < (snippet.focus?.length || 2) - 1 ? ", " : ""}
                    </span>
                  )
                )
              )}
              ],
            </p>

            <p className="pl-3 sm:pl-4 flex items-center gap-1.5">
              currentRole:{" "}
              {isDevMode ? (
                <input
                  type="text"
                  value={snippet.currentRole || profile.role}
                  onChange={(e) =>
                    onUpdateHeroCodeSnippet({ currentRole: e.target.value })
                  }
                  className="bg-white/10 text-white border border-amber-400/40 rounded px-1 outline-none text-xs w-36"
                />
              ) : (
                <span className="text-white">&quot;{snippet.currentRole || profile.role}&quot;,</span>
              )}
            </p>

            {/* Interactive hover line */}
            <p
              className="pl-3 sm:pl-4 cursor-pointer py-1 rounded hover:bg-cyanGlow/10 transition"
              onMouseEnter={() => setHovered(true)}
              onClick={() => setHovered((prev) => !prev)}
            >
              myPhoto:{" "}
              <span className="text-cyanGlow animate-pulse">
                &quot;{snippet.myPhotoPrompt || "Hover to reveal my face"}&quot;
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
          <div className="scale-[0.74] xs:scale-[0.8] sm:scale-[0.88] md:scale-95 lg:scale-100 max-w-full">
            <ProfileCard
              avatarUrl={profileCardExtras.avatarUrl || "/avatar.png"}
              name={profileCardExtras.name || profile.name}
              title={profileCardExtras.title || profile.role}
              handle={profileCardExtras.handle || "Atik Shahrear Ananto"}
              status={profileCardExtras.status || "Open to opportunities"}
              contactText={profileCardExtras.contactText || "Contact Me"}
              bio={profileCardExtras.bio}
              showUserInfo={true}
              enableTilt={true}
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,#6de8ff1a 0%,#a986ff22 100%)"
              isDevMode={isDevMode}
              onEditAvatar={() =>
                onOpenImagePicker(
                  "Change Profile Avatar",
                  profileCardExtras.avatarUrl || "/avatar.png",
                  (url) => onUpdateProfileCardExtras({ avatarUrl: url }),
                  "square"
                )
              }
              onUpdate={onUpdateProfileCardExtras}
              onContactClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div
        className={`transition-opacity duration-300 ${
          hovered ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        {(hero.chips || []).map((chip: any, index: number) => {
          const positions = [
            "left-0 top-16",
            "right-0 top-28",
            "bottom-20 left-4 sm:left-8",
            "bottom-10 right-2 sm:right-6",
          ];
          const posClass = positions[index % positions.length];
          return (
            <div
              key={chip.id || index}
              className={`absolute hidden rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-1.5 text-xs sm:text-sm text-white/75 shadow-card backdrop-blur-xl animate-float sm:flex sm:items-center sm:gap-2 ${posClass} ${
                isDevMode ? "border-amber-400/50 bg-black/70" : ""
              }`}
            >
              <button
                type="button"
                disabled={!isDevMode}
                onClick={() => {
                  if (isDevMode) {
                    onOpenIconPicker(
                      `Select Icon for "${chip.text}"`,
                      chip.icon,
                      (iconId) => onUpdateHeroChip(index, { icon: iconId })
                    );
                  }
                }}
                className={`text-cyanGlow ${
                  isDevMode ? "cursor-pointer hover:scale-125 transition" : ""
                }`}
                title={isDevMode ? "Change Icon" : undefined}
              >
                {renderDynamicIcon(chip.icon, "h-4 w-4")}
              </button>

              {isDevMode ? (
                <input
                  type="text"
                  value={chip.text}
                  onChange={(e) =>
                    onUpdateHeroChip(index, { text: e.target.value })
                  }
                  className="bg-transparent border-b border-amber-400/40 text-xs text-white outline-none w-24"
                />
              ) : (
                <span>{chip.text}</span>
              )}

              {isDevMode && (
                <button
                  type="button"
                  onClick={() => onDeleteHeroChip(index)}
                  className="text-red-400 hover:text-red-300 ml-1 text-xs"
                  title="Delete chip"
                >
                  ×
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isDevMode,
  onUpdate,
  onDelete,
  onEditImage,
}: {
  project: ProjectItem;
  index: number;
  isDevMode?: boolean;
  onUpdate?: (updated: Partial<ProjectItem>) => void;
  onDelete?: () => void;
  onEditImage?: () => void;
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
        className={`project-card group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 sm:p-5 md:p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyanGlow/30 hover:bg-white/[0.07] ${
          isDevMode ? "border-2 border-dashed border-amber-400/40" : ""
        }`}
      >
        <div className="relative z-10 flex h-full flex-col">
          {/* Top Bar */}
          <div className="mb-5 flex items-center justify-between gap-4">
            {isDevMode && onUpdate ? (
              <input
                type="text"
                value={project.type}
                onChange={(e) => onUpdate({ type: e.target.value })}
                className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 text-[11px] text-white/80 outline-none w-40"
                placeholder="Project type"
              />
            ) : (
              <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-[10px] sm:text-xs text-white/60">
                {project.type}
              </span>
            )}

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
          <div className="relative mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 group/img">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="h-[180px] sm:h-[220px] md:h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Dev mode image change button overlay */}
            {isDevMode && onEditImage && (
              <button
                type="button"
                onClick={onEditImage}
                className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-amber-400/60 bg-black/75 px-3 py-1.5 text-xs font-mono font-bold text-amber-300 shadow-card backdrop-blur-md transition hover:bg-black/90"
              >
                <Camera className="h-3.5 w-3.5" /> Change Image
              </button>
            )}

            <div className="absolute bottom-4 left-4 right-4">
              {isDevMode && onUpdate ? (
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => onUpdate({ title: e.target.value })}
                  className="w-full rounded border border-dashed border-amber-400/60 bg-black/70 p-1 text-lg font-black text-white outline-none"
                  placeholder="Project Title"
                />
              ) : (
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white truncate">
                  {project.title}
                </h3>
              )}

              {isDevMode && onUpdate ? (
                <input
                  type="text"
                  value={project.label}
                  onChange={(e) => onUpdate({ label: e.target.value })}
                  className="mt-1 w-full rounded border border-dashed border-amber-400/60 bg-black/70 p-1 text-xs text-cyanGlow outline-none"
                  placeholder="Project Label / Subtitle"
                />
              ) : (
                <p className="mt-1 text-xs sm:text-sm text-cyanGlow truncate">
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
              className="w-full rounded border border-dashed border-amber-400/60 bg-white/10 p-2 text-xs text-white/80 outline-none resize-none"
              placeholder="Project description"
            />
          ) : (
            <p className="text-sm leading-7 text-white/60">
              {project.description}
            </p>
          )}

          {/* Highlights */}
          <div className="mt-5">
            <p className="text-[11px] font-mono uppercase tracking-wider text-cyanGlow/80 mb-2">
              Key Highlights
            </p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanGlow" />
                  {isDevMode && onUpdate ? (
                    <div className="flex-1 flex items-center gap-1.5">
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => {
                          const newHighlights = [...project.highlights];
                          newHighlights[hIdx] = e.target.value;
                          onUpdate({ highlights: newHighlights });
                        }}
                        className="flex-1 bg-white/10 border border-amber-400/40 rounded px-2 py-0.5 text-xs text-white outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newHighlights = project.highlights.filter(
                            (_, i) => i !== hIdx
                          );
                          onUpdate({ highlights: newHighlights });
                        }}
                        className="text-red-400 hover:text-red-300 text-xs px-1"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <span>{highlight}</span>
                  )}
                </li>
              ))}
            </ul>
            {isDevMode && onUpdate && (
              <button
                type="button"
                onClick={() => {
                  onUpdate({
                    highlights: [
                      ...project.highlights,
                      "New feature highlight or achievement.",
                    ],
                  });
                }}
                className="mt-2 flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:underline"
              >
                <Plus className="h-3 w-3" /> Add Highlight
              </button>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech, tIdx) => (
              <span
                key={`${tech}-${tIdx}`}
                className="project-tag rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs text-white/60 flex items-center gap-1.5"
              >
                <span>{tech}</span>
                {isDevMode && onUpdate && (
                  <button
                    type="button"
                    onClick={() => {
                      const newStack = project.stack.filter(
                        (_, i) => i !== tIdx
                      );
                      onUpdate({ stack: newStack });
                    }}
                    className="text-red-400 hover:text-red-300"
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
            {isDevMode && onUpdate && (
              <button
                type="button"
                onClick={() => {
                  const newTech = prompt("Enter tech stack name:");
                  if (newTech && newTech.trim()) {
                    onUpdate({ stack: [...project.stack, newTech.trim()] });
                  }
                }}
                className="rounded-full border border-dashed border-cyanGlow/50 bg-cyanGlow/10 px-2.5 py-1 text-xs text-cyan-200 hover:bg-cyanGlow/20"
              >
                + Add Tech
              </button>
            )}
          </div>

          {/* Links Edit in DevMode */}
          {isDevMode && onUpdate && (
            <div className="mt-5 space-y-1.5 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-white/50 w-12">
                  Live:
                </span>
                <input
                  type="text"
                  value={project.live}
                  onChange={(e) => onUpdate({ live: e.target.value })}
                  className="flex-1 bg-white/10 border border-amber-400/40 rounded px-2 py-0.5 text-xs text-white outline-none"
                  placeholder="https://..."
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-white/50 w-12">
                  GitHub:
                </span>
                <input
                  type="text"
                  value={project.github}
                  onChange={(e) => onUpdate({ github: e.target.value })}
                  className="flex-1 bg-white/10 border border-amber-400/40 rounded px-2 py-0.5 text-xs text-white outline-none"
                  placeholder="https://github.com/..."
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto pt-7 flex flex-wrap gap-3">
            <MagneticButton
              href={project.live}
              target="_blank"
              className="justify-center flex-1 sm:flex-initial"
            >
              Live Preview
            </MagneticButton>

            <MagneticButton
              href={project.github}
              target="_blank"
              variant="secondary"
              className="justify-center flex-1 sm:flex-initial"
            >
              GitHub Repo
            </MagneticButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
