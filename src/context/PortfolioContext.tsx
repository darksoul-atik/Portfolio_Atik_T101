"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  profile as defaultProfile,
  stats as defaultStats,
  skillGroups as defaultSkillGroups,
  skillCloud as defaultSkillCloud,
  projects as defaultProjects,
  experience as defaultExperience,
  services as defaultServices,
  research as defaultResearch,
} from "@/data/portfolio";

export type ProjectItem = (typeof defaultProjects)[0];
export type ExperienceItem = (typeof defaultExperience)[0];
export type ServiceItem = (typeof defaultServices)[0];
export type ResearchItem = (typeof defaultResearch)[0];
export type SkillGroupItem = (typeof defaultSkillGroups)[0];
export type StatItem = (typeof defaultStats)[0];

interface PortfolioData {
  profile: typeof defaultProfile;
  stats: StatItem[];
  skillGroups: SkillGroupItem[];
  skillCloud: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  research: ResearchItem[];
}

interface PortfolioContextType {
  isDevMode: boolean;
  setIsDevMode: (val: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (val: boolean) => void;
  data: PortfolioData;
  updateProfile: (field: keyof typeof defaultProfile, value: string) => void;
  // Projects
  addProject: () => void;
  updateProject: (index: number, updated: Partial<ProjectItem>) => void;
  deleteProject: (index: number) => void;
  // Experience
  addExperience: () => void;
  updateExperience: (index: number, updated: Partial<ExperienceItem>) => void;
  deleteExperience: (index: number) => void;
  // Services
  addService: () => void;
  updateService: (index: number, updated: Partial<ServiceItem>) => void;
  deleteService: (index: number) => void;
  // Research
  addResearch: () => void;
  updateResearch: (index: number, updated: Partial<ResearchItem>) => void;
  deleteResearch: (index: number) => void;
  // Skills
  addSkillGroup: () => void;
  updateSkillGroup: (index: number, updated: Partial<SkillGroupItem>) => void;
  deleteSkillGroup: (index: number) => void;
  // Reset
  resetToDefaults: () => void;
}

const STORAGE_KEY = "portfolio_v2_data";
const DEV_SESSION_KEY = "portfolio_v2_devmode";

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [isDevMode, setIsDevModeState] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const initialData: PortfolioData = {
    profile: defaultProfile,
    stats: defaultStats,
    skillGroups: defaultSkillGroups,
    skillCloud: defaultSkillCloud,
    projects: defaultProjects,
    experience: defaultExperience,
    services: defaultServices,
    research: defaultResearch,
  };

  const [data, setData] = useState<PortfolioData>(initialData);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const devState = sessionStorage.getItem(DEV_SESSION_KEY);
      if (devState === "true") {
        setIsDevModeState(true);
      }

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setData(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const setIsDevMode = (val: boolean) => {
    setIsDevModeState(val);
    try {
      sessionStorage.setItem(DEV_SESSION_KEY, val ? "true" : "false");
    } catch {
      // Ignore
    }
  };

  // Helper to persist data changes
  const persist = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch {
      // Ignore
    }
  };

  const updateProfile = (field: keyof typeof defaultProfile, value: string) => {
    const updated = {
      ...data,
      profile: {
        ...data.profile,
        [field]: value,
      },
    };
    persist(updated);
  };

  // Project handlers
  const addProject = () => {
    const newProject: ProjectItem = {
      title: "New Project",
      label: "Full-Stack Project",
      type: "Production Application",
      image: "/eventflow.jpg",
      live: "https://github.com/darksoul-atik",
      github: "https://github.com/darksoul-atik",
      description: "Detailed description of the problem solved, architectural decisions made, and measurable outcomes.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      highlights: [
        "Feature or key achievement",
        "Performance or scaling decision",
      ],
    };
    persist({ ...data, projects: [newProject, ...data.projects] });
  };

  const updateProject = (index: number, updated: Partial<ProjectItem>) => {
    const projects = [...data.projects];
    projects[index] = { ...projects[index], ...updated };
    persist({ ...data, projects });
  };

  const deleteProject = (index: number) => {
    const projects = data.projects.filter((_, i) => i !== index);
    persist({ ...data, projects });
  };

  // Experience handlers
  const addExperience = () => {
    const newExp: ExperienceItem = {
      role: "Software Engineer",
      org: "Tech Organization",
      period: "2026 - Present",
      mode: "Remote / Hybrid",
      details: [
        "Architecting full-stack systems and engineering features.",
        "Collaborating with cross-functional teams to deliver production-ready software.",
      ],
    };
    persist({ ...data, experience: [newExp, ...data.experience] });
  };

  const updateExperience = (index: number, updated: Partial<ExperienceItem>) => {
    const experience = [...data.experience];
    experience[index] = { ...experience[index], ...updated };
    persist({ ...data, experience });
  };

  const deleteExperience = (index: number) => {
    const experience = data.experience.filter((_, i) => i !== index);
    persist({ ...data, experience });
  };

  // Service handlers
  const addService = () => {
    const newService: ServiceItem = {
      title: "New Service Offering",
      description:
        "High quality engineering service with clean code, testing, and modern deployment standards.",
    };
    persist({ ...data, services: [...data.services, newService] });
  };

  const updateService = (index: number, updated: Partial<ServiceItem>) => {
    const services = [...data.services];
    services[index] = { ...services[index], ...updated };
    persist({ ...data, services });
  };

  const deleteService = (index: number) => {
    const services = data.services.filter((_, i) => i !== index);
    persist({ ...data, services });
  };

  // Research handlers
  const addResearch = () => {
    const newRes: ResearchItem = {
      type: "Conference Paper",
      title: "Novel Research on Machine Learning & Systems",
      conference: "International Conference on AI & Systems (2026)",
      venue: "Conference Venue",
      date: "2026",
      paperId: "ID-TBA",
      status: "Accepted",
      publisher: "Academic Press",
    };
    persist({ ...data, research: [newRes, ...data.research] });
  };

  const updateResearch = (index: number, updated: Partial<ResearchItem>) => {
    const research = [...data.research];
    research[index] = { ...research[index], ...updated };
    persist({ ...data, research });
  };

  const deleteResearch = (index: number) => {
    const research = data.research.filter((_, i) => i !== index);
    persist({ ...data, research });
  };

  // Skill Group handlers
  const addSkillGroup = () => {
    const newGroup: SkillGroupItem = {
      title: "New Domain Engineering",
      caption: "Specialized tools and libraries for targeted problem domains.",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
    };
    persist({ ...data, skillGroups: [...data.skillGroups, newGroup] });
  };

  const updateSkillGroup = (index: number, updated: Partial<SkillGroupItem>) => {
    const skillGroups = [...data.skillGroups];
    skillGroups[index] = { ...skillGroups[index], ...updated };
    persist({ ...data, skillGroups });
  };

  const deleteSkillGroup = (index: number) => {
    const skillGroups = data.skillGroups.filter((_, i) => i !== index);
    persist({ ...data, skillGroups });
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(initialData);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isDevMode,
        setIsDevMode,
        isAuthModalOpen,
        setIsAuthModalOpen,
        data,
        updateProfile,
        addProject,
        updateProject,
        deleteProject,
        addExperience,
        updateExperience,
        deleteExperience,
        addService,
        updateService,
        deleteService,
        addResearch,
        updateResearch,
        deleteResearch,
        addSkillGroup,
        updateSkillGroup,
        deleteSkillGroup,
        resetToDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
