export const profile = {
  name: "Atik Shahrear Ananto",
  role: "Software Engineer · MERN & AI Enthusiast",
  location: "Dhaka, Bangladesh",
  email: "anantoshahrear10@gmail.com",
  phone: "+8801577227127",
  whatsapp: "+8801941732054",
  github: "https://github.com/darksoul-atik",
  linkedin: "https://linkedin.com/in/atik-shahrear-186-bd",
  resume: "/resume-atik-shahrear-ananto.pdf",
  headline: "Building modern web experiences with code, creativity & motion.",
  subheadline:
    "Computer Science and Engineering student focused on full-stack MERN products, scalable APIs, secure authentication, responsive interfaces, and AI-assisted software engineering workflows.",
  availability: "Open to internship & entry-level software engineering roles",
};

export const stats = [
  { value: "3.64", label: "CGPA / 4.00" },
  { value: "Fast", label: "Learner & Adaptable" },
  { value: "MERN", label: "Core Stack" },
  { value: "AI", label: "Tech Enthusiast and Agenitc Tool User" },
  { value: "ML", label: "Data-Driven Modeling" },
  { value: "API", label: "RESTful System Design" },
  { value: "R&D", label: "Interest in Research Papers" },
  { value: "Hybrid", label: "Remote and Onsite Work Experience" },
];

export const research = [
  {
    type: "Conference Paper",
    title: "Automated Detection and Classification of Electronic Components",
    conference: "International Conference on Electrical, Computer and Communication Technologies (ECCT 2026)",
    venue: "Dhaka International University, Bangladesh",
    date: "May 07–09, 2026",
    paperId: "609",
    // authors: "Antar Chandra Das, Sharafat Ahmed, Hrikesh Kumar Hazra, Atik Shahrear Ananto, Fahad Ahammed",
    status: "Accepted",
    publisher: "Atlantis Press · Taylor & Francis",
  },
  {
    type: "Conference Paper",
    title: "TRACE-AI: A Leakage-Safe Explainable Machine Learning Framework for Digital Forensic Trace Anomaly Detection",
    conference: "TBA",
    venue: "TBA",
    date: "TBA",
    paperId: "TBA",
    // authors: "Antar Chandra Das, Sharafat Ahmed, Hrikesh Kumar Hazra, Atik Shahrear Ananto, Fahad Ahammed",
    status: "Ongoing",
    publisher: "TBA",
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
    caption: "Interfaces that feel fast, expressive, and clean.",
    skills: [
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Framer Motion",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    caption: "Secure API layers and practical full-stack systems.",
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
    caption: "Machine learning fundamentals, data analysis, and AI-accelerated development workflows.",
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
    caption: "From schema decisions to shipping production builds.",
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
  "Framer Motion",
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
      "A conversion platform that turns PDFs into structured Markdown with adaptive heading detection, table extraction, OCR fallback, cleanup options, preview modes, history, and theme support.",

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
      "Firebase Hosting frontend and Render backend",
    ],
  },

  {
    title: "HobbyHub",
    label: "Community Platform",
    type: "MERN product",
    image: "/hobbyhub.jpg",

    live: "https://hobby-hub-ea532.web.app/",
    github: "https://github.com/darksoul-atik/B11-HobbyHub-Client",

    description:
      "A community platform with role-based access, secure REST APIs, OAuth login, and responsive user flows for hobby-based communities.",

    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Firebase OAuth",
      "REST APIs",
    ],

    highlights: [
      "Role-based access control",
      "Secure API architecture",
      "Firebase-hosted responsive frontend",
    ],
  },

  {
    title: "EventFlow",
    label: "Event Discovery Platform",
    type: "Interactive discovery app",
    image: "/eventflow.jpg",

    live: "https://event-flow-45bc2.web.app/",
    github: "https://github.com/darksoul-atik/Event-Flow-V1",

    description:
      "A responsive event discovery experience with dynamic filtering, calendar visualization, and Google Sign-In authentication.",

    stack: [
      "React",
      "Firebase Auth",
      "Calendar UI",
      "Responsive Design",
      "Filtering",
    ],

    highlights: [
      "Dynamic event filtering",
      "Calendar-based visualization",
      "Google Sign-In authentication",
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
      "Worked with Agentic AI systems and AI-assisted tools including Claude Code, OpenCode, and OpenAI Codex.",
      "Designed scalable system architecture and software development pipelines in a remote-first Git workflow.",
    ],
  },
  {
    role: "B.Sc. in Computer Science and Engineering",
    org: "East West University",
    period: "2022 - 2026",
    mode: "Dhaka, Bangladesh",
    details: [
      "CGPA: 3.64/4.00.",
      "Major: Data Science.",
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
    title: "Animated Frontend Builds",
    description:
      "Responsive landing pages and dashboards with Framer Motion, GSAP, Tailwind CSS, and polished micro-interactions.",
  },
  {
    title: "Full-stack MERN Features",
    description:
      "Secure authentication, CRUD flows, REST APIs, database integration, deployment, and API-driven UI states.",
  },
  {
    title: "AI-assisted Engineering",
    description:
      "Development pipelines using AI coding tools, code review habits, architecture planning, and productivity automation.",
  },
];
