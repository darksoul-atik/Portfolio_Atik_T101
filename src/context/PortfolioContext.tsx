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
  header as defaultHeader,
  hero as defaultHero,
  aboutCards as defaultAboutCards,
  profileCardExtras as defaultProfileCardExtras,
  contactSection as defaultContactSection,
} from "@/data/portfolio";
import { DEFAULT_THEME_COLORS } from "@/data/themeColors";

export type ProjectItem = (typeof defaultProjects)[0];
export type ExperienceItem = (typeof defaultExperience)[0];
export type ServiceItem = (typeof defaultServices)[0];
export type ResearchItem = (typeof defaultResearch)[0];
export type SkillGroupItem = (typeof defaultSkillGroups)[0];
export type StatItem = (typeof defaultStats)[0];
export type HeaderData = typeof defaultHeader;
export type HeroData = typeof defaultHero;
export type AboutCardItem = (typeof defaultAboutCards)[0];
export type ProfileCardExtras = typeof defaultProfileCardExtras;
export type ContactSectionData = typeof defaultContactSection;

export interface PortfolioData {
  profile: typeof defaultProfile;
  stats: StatItem[];
  skillGroups: SkillGroupItem[];
  skillCloud: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  research: ResearchItem[];
  header: HeaderData;
  hero: HeroData;
  aboutCards: AboutCardItem[];
  profileCardExtras: ProfileCardExtras;
  contactSection: ContactSectionData;
  themeColors?: Record<string, string>;
}

interface PortfolioContextType {
  isDevMode: boolean;
  setIsDevMode: (val: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (val: boolean) => void;
  isColorModalOpen: boolean;
  setIsColorModalOpen: (val: boolean) => void;
  isDevVisible: boolean;
  setIsDevVisible: (val: boolean) => void;
  toggleDevModePopup: () => void;
  isLoading: boolean;
  isSaving: boolean;
  data: PortfolioData;
  themeColors: Record<string, string>;
  updateThemeColor: (id: string, color: string) => void;
  updateThemeColorsBatch: (newColors: Record<string, string>) => void;
  resetThemeColors: () => void;
  updateProfile: (field: keyof typeof defaultProfile, value: string) => void;
  // Header
  updateHeader: (updated: Partial<HeaderData>) => void;
  // Hero
  updateHero: (updated: Partial<HeroData>) => void;
  updateHeroChip: (index: number, updated: Partial<HeroData["chips"][0]>) => void;
  addHeroChip: () => void;
  deleteHeroChip: (index: number) => void;
  updateHeroCodeSnippet: (updated: Partial<HeroData["codeSnippet"]>) => void;
  // About Cards
  updateAboutCard: (index: number, updated: Partial<AboutCardItem>) => void;
  addAboutCard: () => void;
  deleteAboutCard: (index: number) => void;
  // Profile Card Extras
  updateProfileCardExtras: (updated: Partial<ProfileCardExtras>) => void;
  // Contact Section
  updateContactSection: (updated: Partial<ContactSectionData>) => void;
  // Stats
  updateStat: (index: number, updated: Partial<StatItem>) => void;
  addStat: () => void;
  deleteStat: (index: number) => void;
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
  updateSkillCloud: (skills: string[]) => void;
  // Reset
  resetToDefaults: () => Promise<void>;
}

const DEV_SESSION_KEY = "portfolio_v2_devmode";

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [isDevMode, setIsDevModeState] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isDevVisible, setIsDevVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const toggleDevModePopup = () => {
    if (isDevMode) {
      setIsDevVisible((prev) => !prev);
      if (isColorModalOpen) {
        setIsColorModalOpen(false);
      }
    } else {
      setIsAuthModalOpen((prev) => {
        const next = !prev;
        setIsDevVisible(next);
        return next;
      });
    }
  };

  const initialData: PortfolioData = {
    profile: defaultProfile,
    stats: defaultStats,
    skillGroups: defaultSkillGroups,
    skillCloud: defaultSkillCloud,
    projects: defaultProjects,
    experience: defaultExperience,
    services: defaultServices,
    research: defaultResearch,
    header: defaultHeader,
    hero: defaultHero,
    aboutCards: defaultAboutCards,
    profileCardExtras: defaultProfileCardExtras,
    contactSection: defaultContactSection,
    themeColors: DEFAULT_THEME_COLORS,
  };

  const [data, setData] = useState<PortfolioData>(initialData);

  // Load from Neon DB on client mount
  useEffect(() => {
    let isMounted = true;

    try {
      const devState = sessionStorage.getItem(DEV_SESSION_KEY);
      if (devState === "true") {
        setIsDevModeState(true);
      }
    } catch {
      // Ignore
    }

    async function fetchFromNeon() {
      try {
        const res = await fetch("/api/portfolio");
        if (res.ok) {
          const json = await res.json();
          if (json.data && isMounted) {
            setData((prev) => ({
              ...prev,
              ...json.data,
              header: { ...prev.header, ...(json.data.header || {}) },
              hero: {
                ...prev.hero,
                ...(json.data.hero || {}),
                chips:
                  json.data.hero?.chips && json.data.hero.chips.length > 0
                    ? json.data.hero.chips
                    : prev.hero.chips,
                codeSnippet: {
                  ...prev.hero.codeSnippet,
                  ...(json.data.hero?.codeSnippet || {}),
                },
              },
              aboutCards:
                Array.isArray(json.data.aboutCards) && json.data.aboutCards.length > 0
                  ? json.data.aboutCards
                  : prev.aboutCards,
              profileCardExtras: {
                ...prev.profileCardExtras,
                ...(json.data.profileCardExtras || {}),
              },
              contactSection: {
                ...prev.contactSection,
                ...(json.data.contactSection || {}),
              },
              themeColors: {
                ...DEFAULT_THEME_COLORS,
                ...(json.data.themeColors || {}),
              },
            }));
          }
        }
      } catch (err) {
        console.error("Error loading portfolio from Neon DB:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchFromNeon();

    return () => {
      isMounted = false;
    };
  }, []);

  const setIsDevMode = (val: boolean) => {
    setIsDevModeState(val);
    try {
      sessionStorage.setItem(DEV_SESSION_KEY, val ? "true" : "false");
    } catch {
      // Ignore
    }
  };

  // Helper to persist data changes to Neon DB
  const persist = async (newData: PortfolioData) => {
    setData(newData);
    setIsSaving(true);
    try {
      await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
    } catch (err) {
      console.error("Error saving portfolio to Neon DB:", err);
    } finally {
      setIsSaving(false);
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

  // Header
  const updateHeader = (updated: Partial<HeaderData>) => {
    persist({
      ...data,
      header: { ...data.header, ...updated },
    });
  };

  // Hero
  const updateHero = (updated: Partial<HeroData>) => {
    persist({
      ...data,
      hero: { ...data.hero, ...updated },
    });
  };

  const updateHeroChip = (
    index: number,
    updated: Partial<HeroData["chips"][0]>
  ) => {
    const chips = [...data.hero.chips];
    chips[index] = { ...chips[index], ...updated };
    persist({
      ...data,
      hero: { ...data.hero, chips },
    });
  };

  const addHeroChip = () => {
    const newChip = {
      id: `chip-${Date.now()}`,
      icon: "Sparkles",
      text: "New Highlight",
    };
    persist({
      ...data,
      hero: { ...data.hero, chips: [...data.hero.chips, newChip] },
    });
  };

  const deleteHeroChip = (index: number) => {
    const chips = data.hero.chips.filter((_, i) => i !== index);
    persist({
      ...data,
      hero: { ...data.hero, chips },
    });
  };

  const updateHeroCodeSnippet = (
    updated: Partial<HeroData["codeSnippet"]>
  ) => {
    persist({
      ...data,
      hero: {
        ...data.hero,
        codeSnippet: { ...data.hero.codeSnippet, ...updated },
      },
    });
  };

  // About Cards
  const updateAboutCard = (
    index: number,
    updated: Partial<AboutCardItem>
  ) => {
    const aboutCards = [...data.aboutCards];
    aboutCards[index] = { ...aboutCards[index], ...updated };
    persist({ ...data, aboutCards });
  };

  const addAboutCard = () => {
    const newCard: AboutCardItem = {
      id: `about-${Date.now()}`,
      icon: "Code2",
      title: "New Domain Discipline",
      description: "Description of technical expertise and architecture practices.",
    };
    persist({ ...data, aboutCards: [...data.aboutCards, newCard] });
  };

  const deleteAboutCard = (index: number) => {
    const aboutCards = data.aboutCards.filter((_, i) => i !== index);
    persist({ ...data, aboutCards });
  };

  // Profile Card Extras
  const updateProfileCardExtras = (
    updated: Partial<ProfileCardExtras>
  ) => {
    persist({
      ...data,
      profileCardExtras: { ...data.profileCardExtras, ...updated },
    });
  };

  // Contact Section
  const updateContactSection = (
    updated: Partial<ContactSectionData>
  ) => {
    persist({
      ...data,
      contactSection: { ...data.contactSection, ...updated },
    });
  };

  // Stats
  const updateStat = (index: number, updated: Partial<StatItem>) => {
    const stats = [...data.stats];
    stats[index] = { ...stats[index], ...updated };
    persist({ ...data, stats });
  };

  const addStat = () => {
    const newStat: StatItem = { value: "100%", label: "New Metric" };
    persist({ ...data, stats: [...data.stats, newStat] });
  };

  const deleteStat = (index: number) => {
    const stats = data.stats.filter((_, i) => i !== index);
    persist({ ...data, stats });
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
      description:
        "Detailed description of the problem solved, architectural decisions made, and measurable outcomes.",
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
      id: `srv-${Date.now()}`,
      icon: "Rocket",
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

  const updateSkillCloud = (skillCloud: string[]) => {
    persist({ ...data, skillCloud });
  };

  const resetToDefaults = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/portfolio", { method: "DELETE" });
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setData(json.data);
          return;
        }
      }
    } catch (err) {
      console.error("Error resetting portfolio to defaults in Neon DB:", err);
    } finally {
      setIsSaving(false);
    }
    setData(initialData);
  };

  // Color Theme Management
  const updateThemeColor = (id: string, color: string) => {
    const updated = {
      ...data,
      themeColors: {
        ...(data.themeColors || DEFAULT_THEME_COLORS),
        [id]: color,
      },
    };
    persist(updated);
  };

  const updateThemeColorsBatch = (newColors: Record<string, string>) => {
    const updated = {
      ...data,
      themeColors: {
        ...(data.themeColors || DEFAULT_THEME_COLORS),
        ...newColors,
      },
    };
    persist(updated);
  };

  const resetThemeColors = () => {
    const updated = {
      ...data,
      themeColors: DEFAULT_THEME_COLORS,
    };
    persist(updated);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isDevMode,
        setIsDevMode,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isColorModalOpen,
        setIsColorModalOpen,
        isDevVisible,
        setIsDevVisible,
        toggleDevModePopup,
        isLoading,
        isSaving,
        data,
        themeColors: data.themeColors || DEFAULT_THEME_COLORS,
        updateThemeColor,
        updateThemeColorsBatch,
        resetThemeColors,
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
        updateSkillCloud,
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
