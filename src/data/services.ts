export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  accent: string;
}

export const services: Service[] = [
  {
    id: "ai-systems",
    number: "01",
    title: "Autonomous AI Agents & RAG",
    description: "Multi-agent graph systems (LangGraph), self-healing reasoning loops, hybrid vector search pipelines, and custom LLM tool integration.",
    features: [
      "Cyclic Multi-Agent Orchestration",
      "RAG & Dense/Sparse Vector Search",
      "Custom Tool Calling & Code Sandboxes",
      "Cost-optimized Token Streaming"
    ],
    icon: "Bot",
    gradient: "from-cyan-500/20 to-blue-600/10",
    accent: "#00F2FE"
  },
  {
    id: "backend-architecture",
    number: "02",
    title: "High-Throughput Backend Systems",
    description: "Robust asynchronous microservices built with Python and FastAPI, designed for massive concurrent workloads with sub-millisecond latencies.",
    features: [
      "Async FastAPI & Pydantic v2 Core",
      "PostgreSQL Query Optimization & PostGIS",
      "Redis Caching & Message Brokering",
      "Stateless JWT / RBAC Security"
    ],
    icon: "Server",
    gradient: "from-blue-500/20 to-indigo-600/10",
    accent: "#4FACFE"
  },
  {
    id: "sales-automation",
    number: "03",
    title: "Enterprise SFA & Business Workflows",
    description: "End-to-end Sales Force Automation engines featuring real-time geo-fenced tracking, order routing, and inventory intelligence.",
    features: [
      "Live GPS & Geo-fenced Field Tracking",
      "Offline-first Order Booking & Sync",
      "Predictive Territory Analytics",
      "Multi-tenant Role Hierarchy"
    ],
    icon: "Workflow",
    gradient: "from-purple-500/20 to-violet-600/10",
    accent: "#7F00FF"
  },
  {
    id: "3d-web",
    number: "04",
    title: "Interactive 3D & Creative Web",
    description: "State-of-the-art WebGL, Three.js, and GLSL shader experiences combined with silky smooth Lenis and GSAP animations.",
    features: [
      "Three.js & React Three Fiber Scenes",
      "Custom GPU Shader Materials",
      "Lenis & GSAP Scroll Interactions",
      "Kinetic Typography & Micro-physics"
    ],
    icon: "Sparkles",
    gradient: "from-emerald-500/20 to-teal-600/10",
    accent: "#00F5A0"
  },
  {
    id: "devops-cloud",
    number: "05",
    title: "Docker, Cloud & API Gateways",
    description: "Production containerization, Nginx proxy configurations, automated health probes, and Prometheus/Grafana telemetry.",
    features: [
      "Multi-stage Docker Containerization",
      "Token-bucket Rate Limiting",
      "CI/CD Automated Deployments",
      "Real-time Telemetry & Alerting"
    ],
    icon: "Cloud",
    gradient: "from-fuchsia-500/20 to-pink-600/10",
    accent: "#E0C3FC"
  },
  {
    id: "data-solutions",
    number: "06",
    title: "Data Pipelines & Spatial Analytics",
    description: "Scalable ETL data pipelines, spatial geospatial queries with PostGIS, and high-performance background batch processors.",
    features: [
      "PostGIS Geospatial Coordinates",
      "Async Worker Task Queues",
      "Automated Report Generation",
      "Zero-downtime Schema Migrations"
    ],
    icon: "Database",
    gradient: "from-amber-500/20 to-orange-600/10",
    accent: "#F59E0B"
  }
];

export const processSteps = [
  {
    step: "01",
    phase: "DISCOVER",
    title: "Deep Architecture Discovery",
    description: "Analyze core problem statements, data contracts, performance bottlenecks, and business logic before writing a single line of code.",
    accent: "#00F2FE"
  },
  {
    step: "02",
    phase: "PLAN",
    title: "System Design & Schemas",
    description: "Design modular database schemas, REST/WebSocket API specifications, agent state graphs, and component wireframes.",
    accent: "#4FACFE"
  },
  {
    step: "03",
    phase: "BUILD",
    title: "High-Performance Execution",
    description: "Develop robust async backends, intelligent LLM reasoning nodes, and fluid 3D interfaces with clean, type-safe code.",
    accent: "#7F00FF"
  },
  {
    step: "04",
    phase: "TEST",
    title: "Rigorous Benchmarking & Audit",
    description: "Stress test API concurrency, evaluate agent token edge cases, profile WebGL frame rates, and verify strict security protocols.",
    accent: "#00F5A0"
  },
  {
    step: "05",
    phase: "DEPLOY",
    title: "Containerize & Launch",
    description: "Deploy production Docker containers with automated health checks, Nginx reverse proxies, SSL security, and live telemetry.",
    accent: "#E0C3FC"
  }
];
