export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: {
    title: string;
    description: string;
    points: string[];
  };
  challenges: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI & GenAI' | 'Backend Systems' | 'Full Stack & 3D' | 'Cloud & Automation';
  year: string;
  role: string;
  featured: boolean;
  technologies: string[];
  accentColor: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  coverImage: string;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "pharma-sfa",
    title: "Pharma SFA — Sales Force Automation",
    tagline: "Enterprise-grade Sales Automation & Field Tracking Engine",
    description: "A comprehensive Sales Force Automation platform engineered with FastAPI, PostgreSQL, and React. Built to streamline field representative reporting, live Geo-tracking, order booking, and inventory intelligence.",
    category: "Backend Systems",
    year: "2026",
    role: "Lead Backend & Architecture Engineer",
    featured: true,
    technologies: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "React", "Tailwind CSS"],
    accentColor: "#00F2FE",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    caseStudy: {
      overview: "Pharma SFA is an enterprise Sales Force Automation backend and portal built to handle thousands of daily field transactions, medical representative itineraries, live visit verification, and sales order processing with zero latency.",
      problem: "Pharmaceutical sales operations suffered from inaccurate paper-based field reporting, delayed order synchronization, inventory discrepancies, and lack of real-time geographical verification for field doctors' calls.",
      solution: "Engineered a high-throughput async FastAPI backend integrated with PostGIS for spatial geo-fencing, JWT-secured role-based access control, Redis caching for fast catalog lookups, and automated offline-first sync workers.",
      keyFeatures: [
        "Real-time Geo-fenced Doctor Visit Verification & Check-in",
        "Instant Sample & Gift Allocation tracking with strict compliance logs",
        "Offline-first Sales Order Booking with automated reconciliation queue",
        "Target vs Achievement visual analytics and predictive forecasting",
        "Admin control hub with granular Territory & Hierarchy management"
      ],
      architecture: {
        title: "Microservice-ready Async Architecture",
        description: "Built on asynchronous Python with SQLAlchemy 2.0 AsyncIO and Redis pub/sub for real-time order processing queues.",
        points: [
          "FastAPI REST API gateway with Pydantic v2 data validation",
          "PostgreSQL database with connection pooling (AsyncPG) & PostGIS extensions",
          "Redis multi-layer caching for master pharmaceutical product catalogues",
          "Celery / Background worker pool for daily report aggregation & PDF export",
          "Docker containerized deployment with Nginx reverse proxy"
        ]
      },
      challenges: [
        {
          title: "High concurrency during end-of-day order submission",
          description: "Overcame database lock contention by shifting from synchronous writes to a Redis-backed message queue with batch commit workers."
        },
        {
          title: "Accurate GPS jitter filtration in low-connectivity areas",
          description: "Implemented Kalman filter algorithms on incoming coordinate telemetry to ensure fraud-proof location verification."
        }
      ],
      results: [
        { metric: "99.9%", label: "System Uptime" },
        { metric: "4.8x", label: "Faster Order Processing" },
        { metric: "10,000+", label: "Daily Field Check-ins" },
        { metric: "100%", label: "Audit Compliance" }
      ]
    }
  },
  {
    id: "02",
    slug: "nexus-agent-ai",
    title: "Nexus Agentic Workspace",
    tagline: "Autonomous Multi-Agent AI Orchestrator & Memory Core",
    description: "An autonomous multi-agent orchestration framework utilizing LangGraph, FastAPI, and Qdrant vector database. Coordinates autonomous agents to execute complex research, coding, and workflow automation.",
    category: "AI & GenAI",
    year: "2026",
    role: "AI & Systems Architect",
    featured: true,
    technologies: ["LangGraph", "LangChain", "Python", "FastAPI", "Qdrant", "OpenAI / Claude API", "React"],
    accentColor: "#7F00FF",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    caseStudy: {
      overview: "Nexus is an advanced AI agent platform designed to allow specialized LLM agents (researcher, planner, coder, reviewer) to collaborate seamlessly on multi-step objectives with stateful cyclical graph execution.",
      problem: "Single-prompt LLMs fail when handling open-ended, complex tasks requiring self-correction, tool execution, long-term memory retrieval, and deterministic verification.",
      solution: "Built a cyclical graph architecture using LangGraph where each node represents an isolated agent capability with persistent semantic memory in Qdrant and human-in-the-loop control triggers.",
      keyFeatures: [
        "Stateful Multi-Agent Graph orchestration with LangGraph",
        "Persistent Short-term & Long-term Episodic Memory via Vector Store",
        "Autonomous Web Search, Code Execution Sandbox, and API tooling",
        "Live WebSocket visual streaming of agent cognitive chains and tool calls",
        "Dynamic token budgeting and prompt distillation to minimize LLM costs"
      ],
      architecture: {
        title: "Cyclical Agent Graph Engine",
        description: "State-machine driven execution graph running over asynchronous event streams.",
        points: [
          "FastAPI WebSocket engine broadcasting real-time agent thoughts and states",
          "LangGraph state router ensuring deterministic fallback transitions",
          "Qdrant vector collection storing embeddings for semantic knowledge indexing",
          "Sandboxed Python code execution environment via isolated Docker micro-containers"
        ]
      },
      challenges: [
        {
          title: "Preventing infinite agent hallucination loops",
          description: "Implemented state verification validators and heuristic cycle detectors that intervene when confidence thresholds drop."
        },
        {
          title: "Streaming nested token output without latency bottlenecks",
          description: "Engineered a custom token multiplexer over WebSocket channels with client-side reconcilers."
        }
      ],
      results: [
        { metric: "85%", label: "Task Completion Accuracy" },
        { metric: "<1.2s", label: "Median Agent Response Time" },
        { metric: "40%", label: "Cost Reduction via Distillation" },
        { metric: "50+", label: "Integrated Custom Tools" }
      ]
    }
  },
  {
    id: "03",
    slug: "neural-3d-studio",
    title: "Neural 3D Web Visualizer",
    tagline: "Interactive WebGL Spatial Data & Model Visualizer",
    description: "A high-performance 3D web application built with Three.js, React Three Fiber, GLSL Shaders, and WebAudio. Renders dynamic particle topologies, interactive spatial data structures, and procedural generative nodes.",
    category: "Full Stack & 3D",
    year: "2025",
    role: "Creative Technologist",
    featured: true,
    technologies: ["Three.js", "React Three Fiber", "@react-three/drei", "GLSL Shaders", "GSAP", "TypeScript"],
    accentColor: "#00F5A0",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    caseStudy: {
      overview: "An experimental creative technology project demonstrating GPU-accelerated spatial data visualization, custom vertex/fragment shaders, and buttery smooth 60fps animations in the browser.",
      problem: "Complex multi-dimensional data sets are often represented via flat, static charts that fail to convey depth, relational clusters, and spatial hierarchies.",
      solution: "Developed custom WebGL shader materials and instanced mesh renderers that visualize 100,000+ interactive nodes in real-time with zero frame drops.",
      keyFeatures: [
        "Instanced rendering supporting 100k+ particles with GPU vertex manipulation",
        "Custom audio-reactive GLSL fragment shaders",
        "Smooth camera navigation powered by GSAP & Lenis smooth scrolling",
        "Dynamic post-processing pipeline (bloom, chromatic aberration, depth of field)",
        "Mobile-adaptive level-of-detail (LOD) degradation system"
      ],
      architecture: {
        title: "WebGL Shader & Instancing Pipeline",
        description: "Zero-overhead Three.js rendering layer optimized for high frame rate rendering on varied hardware.",
        points: [
          "React Three Fiber declarative scene management",
          "Custom GLSL vertex shaders running directly on GPU",
          "Adaptive canvas pixel-ratio detection to prevent battery drain on mobile",
          "Post-processing composer with custom blend passes"
        ]
      },
      challenges: [
        {
          title: "Achieving steady 60 FPS on mobile GPUs",
          description: "Introduced dynamic geometry simplification and shader branch removal based on client device capability scores."
        }
      ],
      results: [
        { metric: "60 FPS", label: "Consistent Frame Rate" },
        { metric: "100k+", label: "Simultaneous Particle Nodes" },
        { metric: "0ms", label: "Main Thread Blocking" }
      ]
    }
  },
  {
    id: "04",
    slug: "cyberops-cloud-gateway",
    title: "CyberOps Cloud API Gateway",
    tagline: "Ultra-Fast Distributed Microservices Proxy & Telemetry Hub",
    description: "A secure, high-speed API gateway designed with Python, Redis, and Prometheus. Provides automated rate-limiting, distributed JWT validation, dynamic routing, and instant anomaly alerting.",
    category: "Cloud & Automation",
    year: "2025",
    role: "Backend & DevOps Engineer",
    featured: false,
    technologies: ["Python", "FastAPI", "Redis", "Docker", "Prometheus", "Grafana", "AWS"],
    accentColor: "#E0C3FC",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    caseStudy: {
      overview: "CyberOps is a lightweight API gateway and monitoring suite that protects backend microservices against DDoS, enforces strict rate-limits, and visualizes live traffic spikes.",
      problem: "Unprotected microservices were susceptible to noisy neighbor problems, unmonitored request surges, and slow authentication handshakes.",
      solution: "Created a centralized gateway that offloads token verification, runs token-bucket rate limiting in Redis memory, and streams telemetry directly to Prometheus.",
      keyFeatures: [
        "Sub-millisecond token-bucket rate limiter powered by Redis scripts",
        "Automated health probes and circuit breaker patterns",
        "Live Prometheus metrics exporter with Grafana dashboards",
        "Zero-trust API key and HMAC signature verification"
      ],
      architecture: {
        title: "Distributed Edge Proxy Architecture",
        description: "Built for horizontally scalable container clusters.",
        points: [
          "Asynchronous proxy pass with connection keep-alive pools",
          "Redis cluster integration for distributed token states",
          "Docker Compose orchestration with auto-restarting services"
        ]
      },
      challenges: [
        {
          title: "Minimizing gateway proxy latency overhead",
          description: "Utilized uvloop and orjson serialization to drop gateway hop time down to under 1.8 milliseconds."
        }
      ],
      results: [
        { metric: "<2ms", label: "Proxy Latency" },
        { metric: "5M+", label: "Requests Processed Daily" },
        { metric: "0", label: "Security Breaches" }
      ]
    }
  }
];
