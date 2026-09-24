export const profile = {
  name: "Atik Shahrear Ananto",
  role: "Software Engineer · Full-Stack & AI",
  location: "Dhaka, Bangladesh",
  email: "anantoshahrear10@gmail.com",
  phone: "+8801577227127",
  whatsapp: "+8801941732054",
  github: "https://github.com/darksoul-atik",
  linkedin: "https://linkedin.com/in/atik-shahrear-186-bd",
  resume: "/resume-atik-shahrear-ananto.pdf",
  headline: "Building high-performance web products with clean architecture & modern tooling.",
  subheadline:
    "Computer Science and Engineering graduate specialized in full-stack MERN engineering, scalable RESTful APIs, robust authentication, and AI-accelerated development workflows.",
  availability: "Available for Software Engineering & Full-Stack roles",
};

export const stats = [
  { value: "Full Stack", label: "Web & API Architecture" },
  { value: "Fast", label: "Learner & Adaptable" },
  { value: "MERN", label: "Core Stack" },
  { value: "AI", label: "Tech Enthusiast and Agentic Tool User" },
  { value: "ML", label: "Data-Driven Modeling" },
  { value: "API", label: "RESTful System Design" },
  { value: "R&D", label: "Applied Machine Learning Research" },
  { value: "Hybrid", label: "Remote & On-site Experience" },
];

export const research = [
  {
    type: "Conference Paper",
    title: "Automated Detection and Classification of Electronic Components",
    conference: "International Conference on Electrical, Computer and Communication Technologies (ECCT 2026)",
    venue: "Dhaka International University, Bangladesh",
    date: "May 07–09, 2026",
    paperId: "609",
    status: "Accepted",
    publisher: "Atlantis Press · Taylor & Francis",
  },
  {
    type: "Research Project",
    title: "TRACE-AI: A Leakage-Safe Explainable Machine Learning Framework for Digital Forensic Trace Anomaly Detection",
    conference: "Manuscript in Preparation",
    venue: "Peer-reviewed submission in progress",
    date: "2026",
    paperId: "TRACE-2026",
    status: "Ongoing",
    publisher: "Under Review",
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    caption: "Responsive, accessible interfaces built for speed and maintainability.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "GSAP",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    caption: "Secure authentication, RESTful services, and structured backend architecture.",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "FastAPI",
      "RESTful API Design",
      "Zod",
      "Postman",
      "Hoppscotch",
      "JWT",
      "Firebase Auth",
      "System Design",
    ],
  },
  {
    title: "AI & Data Engineering",
    caption: "Machine learning modeling, computer vision, and AI-assisted workflows.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "TensorFlow",
      "Computer Vision",
      "Time Series",
      "Regression",
      "Classification",
      "Claude Code",
      "OpenAI Codex",
      "OpenCode",
    ],
  },
  {
    title: "Database & Deployment",
    caption: "Data persistence, schema design, and production deployment environments.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "SQLite3",
      "Oracle SQL",
      "Git",
      "GitHub",
      "Firebase Hosting",
      "Netlify",
      "Vercel",
      "Render",
    ],
  },
];

export const skillCloud = [
  "React",
  "Next.js",
  "TypeScript",
  "GSAP",
  "Tailwind",
  "Node.js",
  "Express",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "JWT",
  "TanStack Query",
  "Python",
  "TensorFlow",
  "Computer Vision",
  "DaisyUI",
  "ShadCN UI",
  "AI Pipelines",
];

export const projects = [
  {
    title: "Folio",
    label: "PDF to Markdown Converter",
    type: "Full-stack AI-ready utility",
    image: "/folio.jpg",

    live: "https://folio-pdf2md.web.app/",
    github: "https://github.com/darksoul-atik/Folio_pdf2md_Client",

    description:
      "A conversion platform that turns complex PDFs into structured Markdown with adaptive heading detection, table extraction, OCR fallback, cleanup options, preview modes, history, and theme support.",

    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PyMuPDF",
      "pdfplumber",
      "Tesseract OCR",
      "Ollama/Mistral",
    ],

    highlights: [
      "Adaptive heading and table extraction pipeline",
      "4-mode preview panel with conversion stats",
      "Firebase Hosting frontend with Render-deployed backend",
    ],
  },

  {
    title: "HobbyHub",
    label: "Community Platform",
    type: "Full-stack MERN Application",
    image: "/hobbyhub.jpg",

    live: "https://hobby-hub-ea532.web.app/",
    github: "https://github.com/darksoul-atik/B11-HobbyHub-Client",

    description:
      "A community platform with role-based access control, secure REST APIs, OAuth login, and responsive user flows designed for hobby-centric community collaboration.",

    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Firebase OAuth",
      "REST APIs",
    ],

    highlights: [
      "Role-based access control and protected routes",
      "Secure REST API architecture with JWT authentication",
      "Responsive frontend hosted on Firebase",
    ],
  },

  {
    title: "EventFlow",
    label: "Event Discovery Platform",
    type: "Interactive Event Portal",
    image: "/eventflow.jpg",

    live: "https://event-flow-45bc2.web.app/",
    github: "https://github.com/darksoul-atik/Event-Flow-V1",

    description:
      "A responsive event discovery application featuring multi-criteria filtering, calendar-based scheduling visualization, and Google Sign-In authentication.",

    stack: [
      "React",
      "Firebase Auth",
      "Calendar UI",
      "Responsive Design",
      "Filtering",
    ],

    highlights: [
      "Dynamic multi-parameter event filtering",
      "Interactive calendar-based event scheduling",
      "Google Sign-In authentication integration",
    ],
  },
];

export const experience = [
  {
    role: "Agentic Software Engineering Intern",
    org: "6sense HQ Limited",
    period: "September 2026 – Present",
    mode: "Dhaka, Bangladesh",
    details: [
      "Develop real-world software using agentic workflows, leveraging coding agents, subagents, MCP, and context engineering to explore codebases, implement features, debug, refactor, and test applications.",
      "Design and orchestrate AI-assisted development workflows while reviewing and validating agent-generated code across frontend, backend, APIs, databases, testing, Git/GitHub, CI/CD, and deployment.",
    ],
  },
  {
    role: "Former Trainee AI and Software Engineer",
    org: "SugarClass Ltd. | Remote",
    period: "May 2025 – June 2026",
    mode: "Remote",
    details: [
      "Worked with Agentic AI systems and AI-assisted tools including Claude Code, OpenCode, and OpenAI Codex to accelerate development workflows and improve engineering productivity.",
      "Designed scalable system architecture and software development pipelines while collaborating in a remote-first team using Git-based workflows and version control practices.",
    ],
  },
  {
    role: "B.Sc. in Computer Science and Engineering",
    org: "East West University",
    period: "2022 - 2026",
    mode: "Dhaka, Bangladesh",
    details: [
      "Graduated with CGPA 3.64 / 4.00 (Major: Data Science).",
      "Relevant coursework: Data Structures & Algorithms, Database Systems, Operating Systems, Computer Networks, Software Engineering, Machine Learning, and Computer Vision.",
    ],
  },
  {
    role: "Executive Member & Volunteer Organizer",
    org: "EWUCoPC / East West National Robofest",
    period: "2022 - 2024",
    mode: "Extracurricular Activities",
    details: [
      "Former Executive Member of East-West University Computer Programming Club.",
      "Volunteer Organizer for East West National Robofest 2024.",
    ],
  },
];

export const services = [
  {
    id: "srv-1",
    icon: "Rocket",
    title: "Performant Web Applications",
    description:
      "Modern, responsive web applications built with Next.js, React, TypeScript, and GSAP with smooth transitions and clean accessibility.",
  },
  {
    id: "srv-2",
    icon: "Layers3",
    title: "Full-Stack & API Development",
    description:
      "Secure authentication flows, RESTful APIs, relational/NoSQL databases, and robust server architecture using Node.js, Express, and FastAPI.",
  },
  {
    id: "srv-3",
    icon: "Sparkles",
    title: "AI & Automation Workflows",
    description:
      "Integrating applied machine learning pipelines, LLM utilities, and agentic development tools to accelerate delivery and automate workflows.",
  },
];

export const header = {
  logo: "/logo.png",
  title: "Atik Shahrear",
  hireMeText: "Hire me",
  hireMeLink: "#contact",
};

export const hero = {
  headline: "Building high-performance web products with clean architecture.",
  highlightWord: "web products",
  subheadline:
    "Computer Science and Engineering graduate specialized in full-stack MERN engineering, scalable RESTful APIs, robust authentication, and AI-accelerated development workflows.",
  availabilityBadge: "Available for Software Engineering & Full-Stack roles",
  viewProjectsText: "View projects",
  downloadCvText: "Download CV",
  contactMeText: "Contact me",
  chips: [
    { id: "chip-1", icon: "Code2", text: "Full Stack Focus" },
    { id: "chip-2", icon: "Sparkles", text: "Agentic AI" },
    { id: "chip-3", icon: "BriefcaseBusiness", text: "Open to work" },
    { id: "chip-4", icon: "GraduationCap", text: "Data Science & ML" },
  ],
  codeSnippet: {
    fileName: "developer.ts",
    name: "Atik Shahrear",
    focus: ["Full-Stack", "AI-Assisted Dev"],
    currentRole: "Software Engineer",
    myPhotoPrompt: "Hover to reveal my face",
  },
};

export const aboutCards = [
  {
    id: "about-1",
    icon: "Code2",
    title: "Frontend Architecture",
    description:
      "React, TypeScript, Tailwind CSS, TanStack Query, and GSAP for modular, accessible interfaces.",
  },
  {
    id: "about-2",
    icon: "Layers3",
    title: "Backend & Systems",
    description:
      "Node.js, Express, FastAPI, JWT & Firebase authentication, RESTful APIs, and database persistence.",
  },
  {
    id: "about-3",
    icon: "Boxes",
    title: "Data Science & ML",
    description:
      "NumPy, Pandas, TensorFlow, computer vision modeling, regression, classification, and statistical analysis.",
  },
  {
    id: "about-4",
    icon: "Sparkles",
    title: "Agentic Workflows",
    description:
      "Applied usage of Claude Code, OpenCode, Codex, and agentic workflows to increase engineering velocity.",
  },
];

export const profileCardExtras = {
  avatarUrl: "/avatar.png",
  name: "Atik Shahrear Ananto",
  title: "Software Engineer · Full-Stack & AI",
  handle: "Atik Shahrear Ananto",
  status: "Open to opportunities",
  contactText: "Contact Me",
  bio: "B.Sc. CSE @ East West University · Software Engineer at SugarClass Ltd Hong Kong · Focused on MERN, FastAPI, and agentic AI engineering workflows.",
};

export const contactSection = {
  eyebrow: "Contact / Communication",
  title: "Let's build high-performance web products together.",
  description:
    "I am available for software engineering roles, full-stack engineering, and technical collaborations. Use the contact form or verified communication channels below.",
  emailLabel: "Direct Email",
  phoneLabel: "Phone",
  whatsappLabel: "WhatsApp",
  locationLabel: "Location",
};
