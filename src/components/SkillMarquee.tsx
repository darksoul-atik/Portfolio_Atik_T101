"use client";

import React, { useMemo } from "react";
import LogoLoop, { LogoItem } from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
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
  SiGit,
  SiGithub,
  SiDocker,
  SiGreensock,
  SiPandas,
  SiNumpy,
  SiDaisyui,
  SiShadcnui,
  SiReactquery,
  SiHtml5,
  SiCss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
  SiSqlite,
  SiJsonwebtokens,
  SiAxios,
  SiOpencv,
} from "react-icons/si";

export const SKILL_CONFIG: Record<
  string,
  { icon: React.ReactNode; href: string; title: string }
> = {
  React: {
    icon: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    href: "https://react.dev",
  },
  "React.js": {
    icon: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    href: "https://react.dev",
  },
  "Next.js": {
    icon: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  Nextjs: {
    icon: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  Next: {
    icon: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  NestJS: {
    icon: <SiNestjs className="text-[#E0234E]" />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  "Nest.js": {
    icon: <SiNestjs className="text-[#E0234E]" />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  Nestjs: {
    icon: <SiNestjs className="text-[#E0234E]" />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  Nest: {
    icon: <SiNestjs className="text-[#E0234E]" />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  TypeScript: {
    icon: <SiTypescript className="text-[#3178C6]" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  JavaScript: {
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  Tailwind: {
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  "Node.js": {
    icon: <SiNodedotjs className="text-[#5FA04E]" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  Express: {
    icon: <SiExpress className="text-white" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  "Express.js": {
    icon: <SiExpress className="text-white" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  FastAPI: {
    icon: <SiFastapi className="text-[#009688]" />,
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com",
  },
  Python: {
    icon: <SiPython className="text-[#3776AB]" />,
    title: "Python",
    href: "https://www.python.org",
  },
  TensorFlow: {
    icon: <SiTensorflow className="text-[#FF6F00]" />,
    title: "TensorFlow",
    href: "https://www.tensorflow.org",
  },
  "Computer Vision": {
    icon: <SiOpencv className="text-[#5C3EE8]" />,
    title: "OpenCV",
    href: "https://opencv.org",
  },
  OpenCV: {
    icon: <SiOpencv className="text-[#5C3EE8]" />,
    title: "OpenCV",
    href: "https://opencv.org",
  },
  MongoDB: {
    icon: <SiMongodb className="text-[#47A248]" />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  PostgreSQL: {
    icon: <SiPostgresql className="text-[#4169E1]" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  Firebase: {
    icon: <SiFirebase className="text-[#FFCA28]" />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  "Firebase Auth": {
    icon: <SiFirebase className="text-[#FFCA28]" />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  "TanStack Query": {
    icon: <SiReactquery className="text-[#FF4154]" />,
    title: "TanStack Query",
    href: "https://tanstack.com/query",
  },
  GSAP: {
    icon: <SiGreensock className="text-[#88CE02]" />,
    title: "GSAP",
    href: "https://gsap.com",
  },
  Git: {
    icon: <SiGit className="text-[#F05032]" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  GitHub: {
    icon: <SiGithub className="text-white" />,
    title: "GitHub",
    href: "https://github.com",
  },
  Docker: {
    icon: <SiDocker className="text-[#2496ED]" />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  Postman: {
    icon: <SiPostman className="text-[#FF6C37]" />,
    title: "Postman",
    href: "https://www.postman.com",
  },
  Vercel: {
    icon: <SiVercel className="text-white" />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  Netlify: {
    icon: <SiNetlify className="text-[#00C7B7]" />,
    title: "Netlify",
    href: "https://www.netlify.com",
  },
  Render: {
    icon: <SiRender className="text-[#46E3B7]" />,
    title: "Render",
    href: "https://render.com",
  },
  SQLite3: {
    icon: <SiSqlite className="text-[#003B57]" />,
    title: "SQLite",
    href: "https://www.sqlite.org",
  },
  SQLite: {
    icon: <SiSqlite className="text-[#003B57]" />,
    title: "SQLite",
    href: "https://www.sqlite.org",
  },
  JWT: {
    icon: <SiJsonwebtokens className="text-[#D63AFF]" />,
    title: "JWT",
    href: "https://jwt.io",
  },
  Axios: {
    icon: <SiAxios className="text-[#5A29E4]" />,
    title: "Axios",
    href: "https://axios-http.com",
  },
  Pandas: {
    icon: <SiPandas className="text-[#E70488]" />,
    title: "Pandas",
    href: "https://pandas.pydata.org",
  },
  NumPy: {
    icon: <SiNumpy className="text-[#4D77CF]" />,
    title: "NumPy",
    href: "https://numpy.org",
  },
  DaisyUI: {
    icon: <SiDaisyui className="text-[#1AD1A5]" />,
    title: "DaisyUI",
    href: "https://daisyui.com",
  },
  "ShadCN UI": {
    icon: <SiShadcnui className="text-white" />,
    title: "Shadcn UI",
    href: "https://ui.shadcn.com",
  },
  HTML5: {
    icon: <SiHtml5 className="text-[#E34F26]" />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  CSS3: {
    icon: <SiCss className="text-[#1572B6]" />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
};

export const techLogos: LogoItem[] = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNestjs className="text-[#E0234E]" />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-[#5FA04E]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress className="text-white" />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiFastapi className="text-[#009688]" />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiTensorflow className="text-[#FF6F00]" />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiOpencv className="text-[#5C3EE8]" />, title: "OpenCV", href: "https://opencv.org" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiReactquery className="text-[#FF4154]" />, title: "TanStack Query", href: "https://tanstack.com/query" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-white" />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiPostman className="text-[#FF6C37]" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNetlify className="text-[#00C7B7]" />, title: "Netlify", href: "https://www.netlify.com" },
  { node: <SiRender className="text-[#46E3B7]" />, title: "Render", href: "https://render.com" },
  { node: <SiSqlite className="text-[#003B57]" />, title: "SQLite", href: "https://www.sqlite.org" },
  { node: <SiJsonwebtokens className="text-[#D63AFF]" />, title: "JWT", href: "https://jwt.io" },
  { node: <SiAxios className="text-[#5A29E4]" />, title: "Axios", href: "https://axios-http.com" },
  { node: <SiGreensock className="text-[#88CE02]" />, title: "GSAP", href: "https://gsap.com" },
  { node: <SiPandas className="text-[#E70488]" />, title: "Pandas", href: "https://pandas.pydata.org" },
  { node: <SiNumpy className="text-[#4D77CF]" />, title: "NumPy", href: "https://numpy.org" },
  { node: <SiDaisyui className="text-[#1AD1A5]" />, title: "DaisyUI", href: "https://daisyui.com" },
  { node: <SiShadcnui className="text-white" />, title: "Shadcn UI", href: "https://ui.shadcn.com" },
  { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss className="text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];

export interface SkillMarqueeProps {
  skills?: string[];
  speed?: number;
  logoHeight?: number;
  gap?: number;
  direction?: "left" | "right";
  fadeOut?: boolean;
  fadeOutColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SkillMarquee uses the React Bits <LogoLoop /> component directly.
 * It contains NO outer marquee card/div wrapper, and strictly includes
 * ONLY technologies with a valid logo available.
 */
export function SkillMarquee({
  skills,
  speed = 90,
  logoHeight = 44,
  gap = 64,
  direction = "left",
  fadeOut = true,
  fadeOutColor = "var(--color-ink, #0b0f17)",
  className = "my-6 md:my-10",
  style,
}: SkillMarqueeProps) {
  const logos: LogoItem[] = useMemo(() => {
    if (!skills || skills.length === 0) return techLogos;

    const items: LogoItem[] = [];
    const usedTitles = new Set<string>();

    for (const skill of skills) {
      const match = SKILL_CONFIG[skill];
      // STRICT: Only include if a verified logo is available.
      // Anything without an available logo is completely excluded.
      if (match && !usedTitles.has(match.title)) {
        usedTitles.add(match.title);
        items.push({
          node: match.icon,
          title: match.title,
          href: match.href,
        });
      }
    }

    return items.length > 0 ? items : techLogos;
  }, [skills]);

  // Use <LogoLoop /> component ONLY, without any previous marquee wrapper div
  return (
    <LogoLoop
      logos={logos}
      speed={speed}
      direction={direction}
      logoHeight={logoHeight}
      gap={gap}
      hoverSpeed={0}
      scaleOnHover
      fadeOut={fadeOut}
      fadeOutColor={fadeOutColor}
      ariaLabel="Technology stack"
      className={className}
      style={style}
    />
  );
}

export default SkillMarquee;
