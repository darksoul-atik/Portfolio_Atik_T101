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
      "Express.js",
      "FastAPI",
      "RESTful API Design",
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
    role: "Trainee AI and Software Engineer",
    org: "SugarClass Ltd. Hong Kong (Remote)",
    period: "March 2026 - Present",
    mode: "Remote",
    details: [
      "Building full-stack web applications and AI-augmented developer tooling utilizing Claude Code, OpenCode, and OpenAI Codex.",
      "Designing scalable API integrations and engineering workflows in a distributed, remote-first Git environment.",
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
    title: "Performant Web Applications",
    description:
      "Modern, responsive web applications built with Next.js, React, TypeScript, and GSAP with smooth transitions and clean accessibility.",
  },
  {
    title: "Full-Stack & API Development",
    description:
      "Secure authentication flows, RESTful APIs, relational/NoSQL databases, and robust server architecture using Node.js, Express, and FastAPI.",
  },
  {
    title: "AI & Automation Workflows",
    description:
      "Integrating applied machine learning pipelines, LLM utilities, and agentic development tools to accelerate delivery and automate workflows.",
  },
];
