"use client";

import React, { useState } from "react";
import {
  Code,
  Code2,
  Layers,
  Layers3,
  Boxes,
  Sparkles,
  Rocket,
  ShieldCheck,
  Cpu,
  Database,
  Server,
  Cloud,
  Terminal,
  Brain,
  Globe,
  Lock,
  Zap,
  Star,
  Award,
  Briefcase,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Compass,
  FolderGit2,
  Activity,
  Workflow,
  Laptop,
  Palette,
  Layout,
  FileCode,
  Binary,
  Bot,
  Search,
  Check,
  X,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
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
  SiDocker,
  SiGraphql,
  SiHtml5,
  SiCss,
  SiNestjs,
} from "react-icons/si";

export interface IconOption {
  id: string;
  label: string;
  category: "General" | "Tech" | "Backend" | "Data & AI";
  icon: React.ReactNode;
}

export const ICON_CATALOG: IconOption[] = [
  // General UI & Badges
  { id: "Code2", label: "Code", category: "General", icon: <Code2 /> },
  { id: "Layers3", label: "Layers", category: "General", icon: <Layers3 /> },
  { id: "Boxes", label: "Boxes", category: "General", icon: <Boxes /> },
  { id: "Sparkles", label: "Sparkles", category: "General", icon: <Sparkles /> },
  { id: "Rocket", label: "Rocket", category: "General", icon: <Rocket /> },
  { id: "ShieldCheck", label: "Shield", category: "General", icon: <ShieldCheck /> },
  { id: "Cpu", label: "CPU / Hardware", category: "General", icon: <Cpu /> },
  { id: "Zap", label: "Speed / Zap", category: "General", icon: <Zap /> },
  { id: "Star", label: "Star", category: "General", icon: <Star /> },
  { id: "Award", label: "Award", category: "General", icon: <Award /> },
  { id: "BriefcaseBusiness", label: "Career / Work", category: "General", icon: <BriefcaseBusiness /> },
  { id: "GraduationCap", label: "Education", category: "General", icon: <GraduationCap /> },
  { id: "Globe", label: "Global / Web", category: "General", icon: <Globe /> },
  { id: "Workflow", label: "Workflow / Architecture", category: "General", icon: <Workflow /> },
  { id: "Palette", label: "Design / UI", category: "General", icon: <Palette /> },
  { id: "Bot", label: "Agent / Bot", category: "General", icon: <Bot /> },

  // Tech / Frontend
  { id: "SiReact", label: "React", category: "Tech", icon: <SiReact /> },
  { id: "SiNextdotjs", label: "Next.js", category: "Tech", icon: <SiNextdotjs /> },
  { id: "SiTypescript", label: "TypeScript", category: "Tech", icon: <SiTypescript /> },
  { id: "SiJavascript", label: "JavaScript", category: "Tech", icon: <SiJavascript /> },
  { id: "SiTailwindcss", label: "Tailwind CSS", category: "Tech", icon: <SiTailwindcss /> },
  { id: "SiHtml5", label: "HTML5", category: "Tech", icon: <SiHtml5 /> },
  { id: "SiCss", label: "CSS3", category: "Tech", icon: <SiCss /> },
  { id: "SiGraphql", label: "GraphQL", category: "Tech", icon: <SiGraphql /> },

  // Backend & Cloud
  { id: "SiNodedotjs", label: "Node.js", category: "Backend", icon: <SiNodedotjs /> },
  { id: "SiNestjs", label: "NestJS", category: "Backend", icon: <SiNestjs /> },
  { id: "SiExpress", label: "Express.js", category: "Backend", icon: <SiExpress /> },
  { id: "SiFastapi", label: "FastAPI", category: "Backend", icon: <SiFastapi /> },
  { id: "Server", label: "Server Systems", category: "Backend", icon: <Server /> },
  { id: "Cloud", label: "Cloud Services", category: "Backend", icon: <Cloud /> },
  { id: "Terminal", label: "CLI / Terminal", category: "Backend", icon: <Terminal /> },
  { id: "SiDocker", label: "Docker", category: "Backend", icon: <SiDocker /> },
  { id: "SiVercel", label: "Vercel", category: "Backend", icon: <SiVercel /> },
  { id: "SiNetlify", label: "Netlify", category: "Backend", icon: <SiNetlify /> },
  { id: "SiFirebase", label: "Firebase", category: "Backend", icon: <SiFirebase /> },
  { id: "SiGithub", label: "GitHub", category: "Backend", icon: <SiGithub /> },
  { id: "SiGit", label: "Git", category: "Backend", icon: <SiGit /> },

  // Data & AI
  { id: "Database", label: "Database", category: "Data & AI", icon: <Database /> },
  { id: "SiPostgresql", label: "PostgreSQL / Neon", category: "Data & AI", icon: <SiPostgresql /> },
  { id: "SiMongodb", label: "MongoDB", category: "Data & AI", icon: <SiMongodb /> },
  { id: "SiPython", label: "Python", category: "Data & AI", icon: <SiPython /> },
  { id: "SiTensorflow", label: "TensorFlow", category: "Data & AI", icon: <SiTensorflow /> },
  { id: "Brain", label: "Machine Learning", category: "Data & AI", icon: <Brain /> },
  { id: "Binary", label: "Binary Data", category: "Data & AI", icon: <Binary /> },
];

export function renderDynamicIcon(
  iconId: string | undefined,
  className = "h-5 w-5"
): React.ReactNode {
  if (!iconId) return <Code2 className={className} />;

  const match = ICON_CATALOG.find(
    (item) =>
      item.id.toLowerCase() === iconId.toLowerCase() ||
      item.label.toLowerCase() === iconId.toLowerCase()
  );
  if (match) {
    return React.cloneElement(match.icon as React.ReactElement<{ className?: string }>, {
      className,
    });
  }

  // Common fallbacks
  switch (iconId.toLowerCase()) {
    case "next.js":
    case "nextjs":
    case "next":
    case "sinextdotjs":
      return <SiNextdotjs className={className} />;
    case "nest.js":
    case "nestjs":
    case "nest":
    case "sinestjs":
      return <SiNestjs className={className} />;
    case "rocket":
      return <Rocket className={className} />;
    case "layers":
    case "layers3":
      return <Layers3 className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "code":
    case "code2":
      return <Code2 className={className} />;
    case "boxes":
      return <Boxes className={className} />;
    case "shieldcheck":
      return <ShieldCheck className={className} />;
    case "database":
      return <Database className={className} />;
    case "server":
      return <Server className={className} />;
    case "briefcase":
    case "briefcasebusiness":
      return <BriefcaseBusiness className={className} />;
    case "graduationcap":
      return <GraduationCap className={className} />;
    default:
      return <Code2 className={className} />;
  }
}

interface IconPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedId: string;
  onSelect: (iconId: string) => void;
  title?: string;
}

export function IconPickerModal({
  isOpen,
  onClose,
  selectedId,
  onSelect,
  title = "Choose an Icon",
}: IconPickerModalProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (!isOpen) return null;

  const categories = ["All", "General", "Tech", "Backend", "Data & AI"];

  const filtered = ICON_CATALOG.filter((item) => {
    const matchesSearch =
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-[2rem] border border-cyanGlow/30 bg-[#0c1220] p-6 shadow-card max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-xs text-white/50">Select an icon to display</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="mt-4">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 h-4 w-4 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search icons (React, Database, Rocket, Shield)..."
              className="w-full rounded-xl border border-white/15 bg-white/[0.05] pl-10 pr-4 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-cyanGlow focus:ring-1 focus:ring-cyanGlow"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                selectedCategory === cat
                  ? "bg-cyanGlow text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="mt-4 overflow-y-auto flex-1 pr-1 grid grid-cols-4 sm:grid-cols-5 gap-2.5">
          {filtered.map((item) => {
            const isSelected =
              item.id.toLowerCase() === (selectedId || "").toLowerCase();
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect(item.id);
                  onClose();
                }}
                className={`group flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3 transition duration-200 ${
                  isSelected
                    ? "border-cyanGlow bg-cyanGlow/20 text-cyan-200 shadow-glow"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:border-cyanGlow/40 hover:bg-white/[0.08] hover:text-white"
                }`}
                title={item.label}
              >
                <span className="text-xl">
                  {React.cloneElement(
                    item.icon as React.ReactElement<{ className?: string }>,
                    { className: "h-5 w-5" }
                  )}
                </span>
                <span className="text-[10px] text-center font-medium leading-tight truncate w-full">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
