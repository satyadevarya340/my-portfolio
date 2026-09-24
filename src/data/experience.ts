export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Project / Freelance' | 'Education';
  description: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: string;
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    role: "AI & Full Stack Backend Engineer",
    company: "Autonomous Engineering & Innovation",
    location: "Remote / Hybrid",
    type: "Full-time",
    current: true,
    description: "Spearheading backend microservice development, enterprise Sales Force Automation platforms (Pharma SFA), and autonomous AI agent workflows.",
    responsibilities: [
      "Architected FastAPI backend architectures serving high-volume geo-tracking, order booking, and master inventory data.",
      "Engineered multi-agent cyclic decision workflows with LangGraph and vector semantic search (Qdrant).",
      "Designed robust database schemas in PostgreSQL with connection pooling, index optimization, and automated migrations.",
      "Built interactive 3D dashboards and frontend portals using React, TypeScript, and Three.js."
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "LangGraph", "Docker", "Redis", "React", "Three.js"],
    metrics: "4.8x faster data ingestion and 99.9% uptime"
  },
  {
    id: "exp-2",
    period: "2023 — 2024",
    role: "Backend & Systems Developer",
    company: "Digital Technology Labs",
    location: "India",
    type: "Full-time",
    description: "Developed scalable REST API services, database optimizations, and asynchronous background worker pipelines.",
    responsibilities: [
      "Engineered secure OAuth2/JWT authentication pipelines and role-based permissions across multi-tenant systems.",
      "Optimized query response times by 65% through efficient PostgreSQL indexing and Redis caching.",
      "Created containerized Docker environments for seamless local development and automated cloud deployments.",
      "Collaborated with frontend teams to deliver clean OpenAPI / Swagger specs and TypeScript bindings."
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Linux", "Git"],
    metrics: "Reduced API latency by 65%"
  },
  {
    id: "exp-3",
    period: "2021 — 2025",
    role: "Bachelor of Technology in Computer Science & Engineering",
    company: "University / Institute",
    location: "India",
    type: "Education",
    description: "Deep theoretical foundation in Data Structures, Algorithms, Distributed Systems, Database Management Systems, and Artificial Intelligence.",
    responsibilities: [
      "Mastered core computer science fundamentals: OS, Networking, OOP, DBMS, and System Architecture.",
      "Built multiple research and open-source projects centered around machine learning, REST backends, and WebGL.",
      "Participated in algorithmic coding competitions, hackathons, and software engineering workshops."
    ],
    technologies: ["Data Structures", "Algorithms", "Python", "C++", "SQL", "Computer Networks", "Software Engineering"]
  }
];
