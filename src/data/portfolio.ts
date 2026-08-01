/**
 * Single source of truth for portfolio content.
 * Every entry below is extracted from documents supplied by Satyanarayana
 * (ATS resume, DigiLocker marksheets, JNTUK result sheet, certificate PDFs).
 * Nothing here is invented — missing data is marked with a TODO note.
 */

export const profileImage = "/profile.jpeg";
export const resumeUrl = "/Satyanarayana_Annamneedi_Resume.docx";

export const person = {
  name: "Satyanarayana Annamneedi",
  shortName: "Satyanarayana",
  role: "Software Engineer",
  tagline: "I build reliable, scalable backends and the interfaces that make them useful.",
  roles: [
    "Full Stack Developer",
    "Backend Engineer",
    "Cloud & DevOps Practitioner",
    "AI Application Builder",
  ],
  summary:
    "Computer Science undergraduate (2027) with strong foundations in Java, Object-Oriented Programming, Data Structures, DBMS and Full Stack Web Development. Experienced in building scalable applications using Java, Spring Boot fundamentals, React, FastAPI, Node.js, PostgreSQL, REST APIs and AWS. Hands-on experience in authentication, cloud deployment, backend development and modern software engineering practices.",
  location: "Andhra Pradesh, India",
  email: "annamneedisatya9@gmail.com",
  phone: "+91 95156 96563",
  github: "https://github.com/satya-1114",
  githubHandle: "satya-1114",
  linkedin: "https://www.linkedin.com/in/annamneedi-s14",
  linkedinHandle: "annamneedi-s14",
} as const;

export const heroStats = [
  { label: "Internships", value: "6" },
  { label: "Shipped projects", value: "5" },
  { label: "Certifications", value: "20+" },
  { label: "CGPA", value: "8.5" },
] as const;

export const aboutStory = [
  "I started with a simple question that never went away: what actually happens after you click submit? Chasing that answer took me from writing my first Java class to designing REST APIs, modelling relational schemas and shipping services onto AWS.",
  "Today I work mostly at the layer recruiters rarely see on a screenshot — authentication flows, role-based access control, request validation, deployment pipelines and graceful fallbacks for when a dependency (an AI model, a queue, a third-party service) is simply unavailable.",
  "I optimise for systems that keep working. Clean module boundaries, predictable data flow, code that the next engineer can read without a guided tour. I'm looking for a full stack or backend role where correctness and scale both matter.",
];

export const principles = [
  {
    title: "Design the failure path first",
    body: "ParkShare's AI recommendations run on IBM Granite — with a deterministic backend fallback, so the product never goes dark when the model does.",
  },
  {
    title: "Security is not a later ticket",
    body: "JWT auth, role-based access control and Zod request validation are part of the first commit, not a hardening sprint bolted on at the end.",
  },
  {
    title: "Ship it to a real server",
    body: "Nginx, PM2, EC2, S3, SNS. A project isn't finished on localhost — production behaviour is where the interesting bugs live.",
  },
  {
    title: "Fundamentals compound",
    body: "Data Structures, DBMS, Operating Systems and Computer Networks — the reason I can reason about a slow query instead of guessing at it.",
  },
];

export type Education = {
  institution: string;
  qualification: string;
  period: string;
  score: string;
  detail: string;
};

export const education: Education[] = [
  {
    institution: "Bonam Venkata Chalamayya Engineering College (JNTU Kakinada)",
    qualification: "B.Tech, Computer Science and Engineering",
    period: "2023 — 2027",
    score: "CGPA 8.50 / 10",
    detail:
      "Hall ticket 23221A0509. Six semesters completed with a consistent 8.50 CGPA; coursework in Data Structures, Advanced Data Structures & Algorithm Analysis, Object Oriented Programming through Java, DBMS, Operating Systems, Computer Networks and Digital Logic & Computer Organization.",
  },
  {
    institution: "Board of Intermediate Education, Andhra Pradesh",
    qualification: "Intermediate (MPC — Maths, Physics, Chemistry)",
    period: "2021 — 2023",
    score: "669 marks",
    detail:
      "Registration 2303237569. Passed the Intermediate Public Examination, March 2023, with English as the medium of instruction.",
  },
  {
    institution: "Children's (EM) High School, Sompalli, East Godavari",
    qualification: "Secondary School Certificate (SSC)",
    period: "Completed 2021",
    score: "529 / 600 — First Division",
    detail:
      "Board of Secondary Education, Andhra Pradesh. Mathematics 88, General Science 88, Social Studies 90, Telugu 92.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  status?: string;
  points: string[];
  stack: string[];
  credential?: string;
};

export const experience: Experience[] = [
  {
    role: "AI/ML Intern",
    company: "Infosys Springboard",
    period: "Jun 2026 — Present",
    status: "Current",
    points: [
      "Working on AI-enabled software development projects with emphasis on problem solving and application development.",
    ],
    stack: ["Python", "AI/ML", "Application Development"],
  },
  {
    role: "AWS Cloud Computing & DevOps Intern",
    company: "APSSDC — Govt. of Andhra Pradesh",
    period: "May 2026 — Jul 2026",
    points: [
      "Built and deployed FoodLink, a cloud-based food donation platform, end to end.",
      "Deployed applications using AWS EC2, S3, DynamoDB, SNS, Nginx and PM2.",
      "Worked across backend APIs, cloud infrastructure and deployment workflows.",
    ],
    stack: ["AWS EC2", "S3", "DynamoDB", "SNS", "Nginx", "PM2"],
    credential: "APSSDC/SIP/2026-27/30716",
  },
  {
    role: "Emerging Technologies Intern (Agentic AI, Cyber Security, Quantum)",
    company: "Edunet Foundation × IBM SkillsBuild, with AICTE",
    period: "Jun 2026 — Jul 2026",
    points: [
      "Completed a 4-week internship leveraging IBM SkillsBuild, IBM Cloud and IBM BoB.",
      "Developed an industry-relevant project in Artificial Intelligence and Cloud Computing.",
    ],
    stack: ["IBM Cloud", "Agentic AI", "Cyber Security", "Quantum Computing"],
    credential: "INTERNSHIP_177763906469f49e98e105d",
  },
  {
    role: "AI & Machine Learning Virtual Intern",
    company: "SmartBridge × APSCHE",
    period: "Completed Jul 2026",
    points: [
      "Short-term virtual internship programme of 2 months (120 hours) in Artificial Intelligence and Machine Learning.",
    ],
    stack: ["Python", "Machine Learning"],
    credential: "VIP-AIML-2026-0159",
  },
  {
    role: "Salesforce Administrator (AI Agentforce) Virtual Intern",
    company: "SmartBridge × APSCHE",
    period: "Completed Jul 2026",
    points: [
      "2-month (120 hour) programme on Salesforce Certified Administrator with AI Agentforce specialisation.",
    ],
    stack: ["Salesforce", "Agentforce"],
    credential: "VIP-SF-2026-0110",
  },
  {
    role: "Web Development Intern",
    company: "VaultofCodes",
    period: "Jun 2025 — Jul 2025",
    points: [
      "Developed responsive web applications using HTML, CSS and JavaScript.",
      "Built reusable UI components and managed projects with Git and GitHub.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Git"],
    credential: "AICTE CORPORATE6511252d7c3271695622445",
  },
];

export type Project = {
  slug: string;
  name: string;
  headline: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenge: string;
  learning: string;
  stack: string[];
  accent: string;
  /** TODO: add public repository / live demo URLs when available. */
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "foodlink",
    name: "FoodLink",
    headline: "Smart food donation & distribution platform",
    problem:
      "Surplus food and the NGOs that could distribute it rarely find each other in time. Donations depend on phone calls, with no verified record of who collected what.",
    solution:
      "A full stack platform connecting donors with NGOs through secure role-based workflows, with donation tracking and real-time status updates from pickup to distribution.",
    architecture: [
      "Express.js REST API layer with role-scoped authentication",
      "PostgreSQL for relational donation and user data; DynamoDB for high-write status events",
      "Amazon S3 for donation media, SNS for notification fan-out",
      "Deployed on AWS EC2 behind Nginx, processes supervised by PM2",
    ],
    features: [
      "Role-based donor / NGO workflows",
      "Donation lifecycle tracking",
      "Real-time status updates",
      "Cloud notifications via SNS",
      "Production-grade deployment pipeline",
    ],
    challenge:
      "Keeping donation state consistent across a relational store and a NoSQL event store while notifications fired asynchronously.",
    learning:
      "How much of 'production ready' lives outside application code — process supervision, reverse proxying, environment isolation and observability.",
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "AWS EC2",
      "DynamoDB",
      "Amazon S3",
      "SNS",
      "Nginx",
      "PM2",
    ],
    accent: "from-[oklch(0.715_0.126_215.2)] to-[oklch(0.585_0.204_277.1)]",
    repo: "https://github.com/satya-1114/FoodLink",
  },

  {
    slug: "parkshare",
    name: "ParkShare",
    headline: "AI-enhanced community parking marketplace",
    problem:
      "Private driveways sit empty while drivers circle the block. Neither side has a trustworthy way to price, verify or book that space.",
    solution:
      "A two-sided marketplace where owners list verified private parking and drivers discover and book it, with IBM watsonx.ai Granite models generating recommendations, price suggestions and trust-score explanations.",
    architecture: [
      "React + TypeScript frontend against a FastAPI service",
      "SQLAlchemy models over PostgreSQL for listings, bookings and trust scores",
      "JWT-based authentication with scoped owner/driver permissions",
      "Langflow-orchestrated IBM Granite calls with a deterministic rule-based fallback",
    ],
    features: [
      "Verified listing management for owners",
      "Search and booking flow for drivers",
      "AI price suggestions and trust-score explanations",
      "Deterministic fallback when AI services are unavailable",
      "Typed end-to-end API contracts",
    ],
    challenge:
      "Making an AI-dependent feature safe to ship: the product had to stay fully functional, and honest with the user, whenever the model layer degraded.",
    learning:
      "Treat a model as an unreliable network dependency, not as a library call — design timeouts, fallbacks and explainability around it.",
    stack: [
      "React.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "IBM Granite",
      "Langflow",
    ],
    accent: "from-[oklch(0.606_0.219_292.7)] to-[oklch(0.585_0.204_277.1)]",
    repo: "https://github.com/satya-1114/ParkShare",
  },

  {
    slug: "finance-api",
    name: "Finance Data API",
    headline: "Data processing & access control service",
    problem:
      "Financial data has to be readable by analysts, editable by admins and invisible to everyone else — enforced by the API, not by the UI.",
    solution:
      "A secure REST backend with JWT authentication and three-tier role-based access control (Viewer, Analyst, Admin) over validated CRUD endpoints and category-based analytics.",
    architecture: [
      "Express.js routers organised by domain with a clean service/data separation",
      "Prisma ORM over PostgreSQL with typed migrations",
      "Zod schemas validating every request boundary",
      "Middleware chain for authentication, role checks and error normalisation",
    ],
    features: [
      "JWT authentication",
      "Viewer / Analyst / Admin role-based access control",
      "Fully validated CRUD endpoints",
      "Category-based financial analytics",
      "Modular, testable architecture",
    ],
    challenge:
      "Expressing permission rules once, at the middleware layer, instead of scattering conditionals through every handler.",
    learning:
      "Schema-first validation removes an entire class of bugs — and doubles as living API documentation.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Zod", "JWT"],
    accent: "from-[oklch(0.585_0.204_277.1)] to-[oklch(0.715_0.126_215.2)]",
    repo: "https://github.com/satya-1114/finance-backend",
  },

  {
    slug: "ai-tool-recommendation-platform",
    name: "AI Tool Recommendation Platform",
    headline: "Decision-focused AI tool recommender",
    problem:
      "With the explosion of AI tools, users struggle to know which tool fits their task, whether the free tier is enough, and what a paid plan actually unlocks. Most sites list tools randomly or promote paid products without context.",
    solution:
      "A static web application that asks what the user wants to do (text, image, audio, video, code) and why (learning, content creation, professional work), then recommends multiple free and paid tools with the reasoning behind each pick.",
    architecture: [
      "Fully static front end — HTML5 structure with no framework dependencies",
      "Hand-written CSS3 for layout, styling and responsive behaviour",
      "Vanilla JavaScript recommendation logic over a manually curated tool dataset",
      "Version controlled with Git/GitHub and deployed on GitHub Pages",
    ],
    features: [
      "Category-based AI tool selection",
      "Intent-based filtering (Learning / Content / Professional)",
      "Multiple recommendations per selection",
      "Clear free-tier limitations and paid feature breakdowns",
      "Interactive UI with loading feedback",
      "Clean, responsive, fully static design",
    ],
    challenge:
      "Designing a decision-driven product rather than a directory: every recommendation had to explain why the tool fits, where the free tier stops and what paid plans practically add.",
    learning:
      "How to structure a front-end product around a decision flow instead of a page layout — and how far you can get on fundamentals alone, with no framework and no backend.",
    stack: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub Pages"],
    accent: "from-[oklch(0.8_0.14_190)] to-[oklch(0.606_0.219_292.7)]",
    repo: "https://github.com/satya-1114/AI-Tool-Recommendation-Platform",
    demo: "https://satya-1114.github.io/AI-Tool-Recommendation-Platform/",
  },
  {
    slug: "ai-audit-system",
    name: "Behavior-Based Intelligent Audit Assistant",
    headline: "Explainable anomaly detection for financial audits",
    problem:
      "Traditional audit tooling relies on hard-coded rules that miss novel behaviour and give auditors no reasoning for a flag, so every exception still has to be investigated from scratch.",
    solution:
      "A lightweight, explainable AI system that learns behavioural patterns from transaction data, detects deviations in real time and generates human-readable audit insights with risk classification.",
    architecture: [
      "Data preprocessing and feature engineering — cleaning plus time feature extraction",
      "Behaviour Learning Agent that learns normal spending patterns and frequent vendors",
      "Anomaly Detection Agent flagging deviations from learned behaviour",
      "Explanation Agent producing contextual, human-readable reasoning",
      "Risk scoring engine classifying High / Moderate / Normal",
      "Streamlit audit dashboard for transaction-level analysis and summaries",
    ],
    features: [
      "Behaviour-based anomaly detection with no hard-coded rules",
      "Explainable AI — clear reasoning for every anomaly",
      "Real-time audit insights",
      "Interactive Streamlit dashboard",
      "Risk prioritisation for audit efficiency",
      "Sample audit dataset for evaluation",
    ],
    challenge:
      "Making anomaly detection defensible: a flag is only useful to an auditor if the system can state, in plain language, which learned behaviour the transaction deviated from.",
    learning:
      "Splitting the pipeline into focused agents — learning, detection, explanation, scoring — kept each stage independently testable and made explanations a first-class output rather than an afterthought.",
    stack: ["Python", "Pandas", "Streamlit", "Statistical anomaly detection"],
    accent: "from-[oklch(0.585_0.204_277.1)] to-[oklch(0.8_0.14_190)]",
    repo: "https://github.com/satya-1114/ai-audit-system",
    demo: "https://ai-audit-system-b3wmhejrdndqozwekyvcxe.streamlit.app/",
  },
];

export type SkillGroup = {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 82 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 86 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "Spring Boot", level: 70 },
      { name: "REST APIs & JWT", level: 90 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 86 },
      { name: "Prisma ORM", level: 80 },
      { name: "SQLAlchemy", level: 76 },
      { name: "Amazon DynamoDB", level: 72 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS EC2 / S3 / SNS", level: 82 },
      { name: "Nginx & PM2", level: 78 },
      { name: "Render / Vercel", level: 85 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
  {
    category: "AI & Core CS",
    icon: "Brain",
    skills: [
      { name: "IBM watsonx / Granite", level: 72 },
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "DBMS & Operating Systems", level: 85 },
      { name: "Computer Networks & OOP", level: 86 },
    ],
  },
];

export const research = {
  title:
    "Pre-Publication Cryptographic Verification for Tamper-Proof News Distribution Using Blockchain",
  journal: "International Journal of Engineering Development and Research (IJEDR)",
  volume: "Volume 14, Issue 1",
  published: "31 March 2026",
  impactFactor: "9.37 (Google Scholar)",
  area: "Blockchain · Information Security · Distributed Systems",
  coAuthors: "Akula Siva Naga Prasad and co-authors",
  abstract:
    "The paper proposes a cryptographic verification layer applied before publication, so that a news artefact carries a verifiable, tamper-evident signature through every stage of distribution. By anchoring content hashes on a blockchain prior to release, downstream readers and aggregators can independently confirm that an article has not been altered after it left the publisher.",
  publication: undefined,
  repo: "https://github.com/satya-1114/cryptographic-news-verification",
};


export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  credential?: string;
  category: "Engineering" | "Cloud & Platforms" | "AI" | "Academic" | "Recognition";
};

export const certifications: Certification[] = [
  {
    name: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. (Forage)",
    date: "12 February 2026",
    credential: "56cbxfkSr95SXqv7d",
    category: "Engineering",
  },
  {
    name: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    category: "Engineering",
  },
  {
    name: "Software Project Management (Elite)",
    issuer: "NPTEL · IIT",
    date: "Jul — Oct 2025",
    credential: "NPTEL25CS109S551100068",
    category: "Academic",
  },
  {
    name: "Introduction to Internet of Things",
    issuer: "NPTEL · IIT",
    date: "Jan — Apr 2026",
    credential: "NPTEL26CS37S750100176",
    category: "Academic",
  },
  {
    name: "Salesforce Certified Administrator with AI Agentforce Specialization",
    issuer: "SmartBridge × APSCHE",
    date: "31 July 2026",
    credential: "VIP-SF-2026-0110",
    category: "Cloud & Platforms",
  },
  {
    name: "ServiceNow Virtual Internship & CSA Track",
    issuer: "ServiceNow × SmartBridge × AICTE",
    date: "19 May 2026",
    credential: "SNU2020769",
    category: "Cloud & Platforms",
  },
  {
    name: "AWS Cloud Computing — DevOps",
    issuer: "APSSDC, Government of Andhra Pradesh",
    date: "May — Jul 2026",
    credential: "APSSDC/SIP/2026-27/30716",
    category: "Cloud & Platforms",
  },
  {
    name: "Emerging Technologies Internship (IBM SkillsBuild)",
    issuer: "Edunet Foundation × IBM × AICTE",
    date: "Jun — Jul 2026",
    credential: "INTERNSHIP_177763906469f49e98e105d",
    category: "Cloud & Platforms",
  },
  {
    name: "Artificial Intelligence & Machine Learning Internship",
    issuer: "SmartBridge × APSCHE",
    date: "27 July 2026",
    credential: "VIP-AIML-2026-0159",
    category: "AI",
  },
  {
    name: "Generative AI and Prompt Engineering",
    issuer: "APSSDC",
    category: "AI",
  },
  {
    name: "AI + Sustainability Virtual Internship",
    issuer: "1M1B",
    date: "19 June 2026",
    credential: "PLAN-5C114CF1ADED",
    category: "AI",
  },
  {
    name: "1M1B Bootcamp",
    issuer: "1M1B",
    category: "AI",
  },
  {
    name: "Claude AI Fluency",
    issuer: "Anthropic",
    category: "AI",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    category: "AI",
  },
  {
    name: "AI Skills Passport",
    issuer: "EY × Microsoft",
    category: "AI",
  },
  {
    name: "Critical Thinking in the AI Era",
    issuer: "HP LIFE · HP Foundation",
    date: "22 January 2026",
    credential: "3ff2fef5-708e-4b38-80c3-671eadb17648",
    category: "AI",
  },
  {
    name: "Code Vipassana — Season 14",
    issuer: "Google Developer Groups",
    category: "Engineering",
  },
  {
    name: "Code Vipassana — Season 15",
    issuer: "Google Developer Groups",
    category: "Engineering",
  },
  {
    name: "Web Development Internship",
    issuer: "VaultofCodes",
    date: "Jun — Jul 2025",
    credential: "CORPORATE6511252d7c3271695622445",
    category: "Engineering",
  },
  {
    name: "Certified Online Fraud Prevention Specialist (COFPS)",
    category: "Recognition",
  },
  {
    name: "Supply Chain Operations Analyst (S.C.O.A)",
    issuer: "Flipkart",
    category: "Recognition",
  },
  {
    name: "Samsung Galaxy AI Treasure Hunt 2026",
    issuer: "Samsung",
    date: "25 June 2026",
    category: "Recognition",
  },
  {
    name: "National Financial Literacy Quiz 2026 (College Round)",
    issuer: "Government of India · College Round",
    date: "2026",
    category: "Recognition",
  },
];

export const achievements = [
  {
    title: "Published researcher",
    body: "Blockchain-based tamper-proof news verification, IJEDR Volume 14 Issue 1 (March 2026).",
  },
  {
    title: "NPTEL Elite — Software Project Management",
    body: "Scored 72 in the 12-week IIT-delivered course; 76 in Introduction to IoT.",
  },
  {
    title: "Google Developer Groups · Code Vipassana",
    body: "Completed Season 14 and Season 15 of the deep-dive cloud engineering series.",
  },
  {
    title: "Consistent academic record",
    body: "8.50 CGPA across six B.Tech semesters; First Division with 529/600 in SSC.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;
