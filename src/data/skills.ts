export interface Skill {
  name: string;
  category: 'Backend' | 'AI / GenAI' | 'Frontend' | 'Tools & Cloud';
  icon: string;
  level: string;
  years: string;
  description: string;
  highlight?: boolean;
}

export const skills: Skill[] = [
  // Backend
  {
    name: "Python",
    category: "Backend",
    icon: "Code2",
    level: "Advanced",
    years: "3+ Years",
    description: "Core language for backend microservices, async concurrency, algorithms, and AI agent integration.",
    highlight: true
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: "Zap",
    level: "Advanced",
    years: "3+ Years",
    description: "High-performance REST & WebSocket API development with Pydantic v2 validation and AsyncIO.",
    highlight: true
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: "Database",
    level: "Advanced",
    years: "3+ Years",
    description: "Relational database design, query optimization, indexing, connection pooling, and PostGIS spatial queries."
  },
  {
    name: "Redis",
    category: "Backend",
    icon: "Layers",
    level: "Proficient",
    years: "2+ Years",
    description: "In-memory caching layer, rate-limiting, session management, and pub/sub messaging."
  },
  {
    name: "REST APIs & WebSockets",
    category: "Backend",
    icon: "Radio",
    level: "Advanced",
    years: "3+ Years",
    description: "Clean API contract design, OpenAPI documentation, live telemetry broadcasting, and authentication."
  },
  {
    name: "JWT & OAuth2",
    category: "Backend",
    icon: "ShieldCheck",
    level: "Advanced",
    years: "3+ Years",
    description: "Stateless authorization, role-based access control (RBAC), token rotation, and security headers."
  },

  // AI / GenAI
  {
    name: "LangGraph",
    category: "AI / GenAI",
    icon: "Cpu",
    level: "Advanced",
    years: "2+ Years",
    description: "Cyclic multi-agent workflow orchestration, stateful human-in-the-loop loops, and deterministic fallback paths.",
    highlight: true
  },
  {
    name: "LangChain",
    category: "AI / GenAI",
    icon: "Sparkles",
    level: "Advanced",
    years: "2+ Years",
    description: "LLM abstraction chains, tool binding, output parsers, and prompt engineering architectures."
  },
  {
    name: "RAG & Vector DBs",
    category: "AI / GenAI",
    icon: "Binary",
    level: "Advanced",
    years: "2+ Years",
    description: "Hybrid vector search, dense/sparse embeddings, Qdrant/ChromaDB indexing, and semantic chunking.",
    highlight: true
  },
  {
    name: "LLM APIs (OpenAI / Claude)",
    category: "AI / GenAI",
    icon: "Bot",
    level: "Advanced",
    years: "2+ Years",
    description: "Cost-optimized prompt pipelines, JSON schema structured outputs, function calling, and token budgeting."
  },
  {
    name: "Autonomous AI Agents",
    category: "AI / GenAI",
    icon: "Flame",
    level: "Advanced",
    years: "2+ Years",
    description: "Self-correcting agent teams equipped with code execution sandboxes, search tools, and long-term memory."
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: "Atom",
    level: "Advanced",
    years: "3+ Years",
    description: "Modern component architecture, custom hooks, state management, and performance tuning.",
    highlight: true
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "FileCode",
    level: "Advanced",
    years: "3+ Years",
    description: "Strict static typing, robust interfaces, generics, and seamless full-stack type safety."
  },
  {
    name: "Three.js & R3F",
    category: "Frontend",
    icon: "Box",
    level: "Proficient",
    years: "1+ Years",
    description: "3D scene graphs, lighting, camera controls, GLSL materials, and spatial WebGL visualizations.",
    highlight: true
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Palette",
    level: "Advanced",
    years: "3+ Years",
    description: "Utility-first modern design systems, custom themes, dark mode palettes, and responsive layouts."
  },
  {
    name: "GSAP & Framer Motion",
    category: "Frontend",
    icon: "Move",
    level: "Advanced",
    years: "2+ Years",
    description: "ScrollTrigger driven storytelling, magnetic physics animations, layout morphs, and micro-interactions."
  },

  // Tools & Cloud
  {
    name: "Docker & Containers",
    category: "Tools & Cloud",
    icon: "Container",
    level: "Advanced",
    years: "3+ Years",
    description: "Multi-stage Docker builds, container networking, development sandboxes, and minimal Alpine images."
  },
  {
    name: "Git & GitHub",
    category: "Tools & Cloud",
    icon: "GitBranch",
    level: "Advanced",
    years: "4+ Years",
    description: "Version control, branching workflows, PR reviews, CI/CD automated test runs, and semantic versioning."
  },
  {
    name: "Linux & Bash",
    category: "Tools & Cloud",
    icon: "Terminal",
    level: "Advanced",
    years: "3+ Years",
    description: "Server administration, shell scripting, performance monitoring, and environment configuration."
  },
  {
    name: "AWS / Cloud Deploy",
    category: "Tools & Cloud",
    icon: "Cloud",
    level: "Proficient",
    years: "2+ Years",
    description: "EC2 provisioning, S3 bucket storage, Nginx reverse proxy configuration, SSL certificates, and cloud setups."
  }
];

export const skillCategories = ['All', 'Backend', 'AI / GenAI', 'Frontend', 'Tools & Cloud'] as const;
