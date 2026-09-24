export interface PersonalConfig {
  name: string;
  role: string;
  title: string;
  tagline: string;
  headline: string;
  subheadline: string;
  bio: string;
  extendedBio: string[];
  status: string;
  availability: 'Available' | 'Busy' | 'Selected Projects Only';
  location: string;
  timezone: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  philosophy: {
    title: string;
    description: string;
  }[];
  focusAreas: string[];
}

export const personalConfig: PersonalConfig = {
  name: "Satyadev Arya",
  role: "AI / Backend Developer & Creative Technologist",
  title: "Building Intelligent Systems & Interactive Digital Realities",
  tagline: "BUILDING DIGITAL EXPERIENCES WITH CODE + AI",
  headline: "TURNING COMPLEX ARCHITECTURES INTO HIGH-IMPACT DIGITAL SYSTEMS.",
  subheadline: "Specializing in high-throughput backend microservices, agentic AI workflows, vector search systems, and high-performance WebGL experiences.",
  bio: "I am a full-stack engineer and creative technologist passionate about engineering scalable backend architectures, intelligent AI agents, and immersive 3D digital experiences.",
  extendedBio: [
    "With a deep background in distributed backend systems, Python, FastAPI, and modern cloud infrastructures, I build reliable, high-load production software.",
    "My current focus revolves around Autonomous AI Agents, RAG (Retrieval-Augmented Generation) pipelines, Vector Databases, and crafting next-generation 3D spatial user interfaces with Three.js and React Three Fiber.",
    "I believe great software is an art form—combining robust engineering discipline with fluid visual craftsmanship."
  ],
  status: "AVAILABLE FOR SELECTED PROJECTS",
  availability: "Selected Projects Only",
  location: "India (Available Worldwide / Remote)",
  timezone: "IST (UTC+5:30)",
  email: "satyadevarya340@gmail.com",
  github: "https://github.com/satyadevarya340",
  linkedin: "https://linkedin.com/in/satyadev-arya",
  twitter: "https://twitter.com",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "Production Microservices", value: "25+", subtext: "FastAPI, Docker & Cloud" },
    { label: "AI Workflows & Agents", value: "15+", subtext: "LangGraph, RAG & LLMs" },
    { label: "API Latency Reduction", value: "65%", subtext: "Optimized indexing & caching" },
    { label: "Client Satisfaction", value: "100%", subtext: "Delivered with precision" }
  ],
  philosophy: [
    {
      title: "Resilient & Scalable by Design",
      description: "Backends should be bulletproof, self-healing, and effortlessly scalable from day zero with modular decoupling."
    },
    {
      title: "Intelligent Automation",
      description: "Infusing generative AI and autonomous workflows where they deliver tangible multiplier effects, not just hype."
    },
    {
      title: "Obsession with Polish",
      description: "From sub-millisecond database queries to 60fps WebGL transitions, uncompromising attention to detail matters."
    }
  ],
  focusAreas: [
    "Autonomous AI Agent Workflows & LangGraph",
    "High-Performance Python & FastAPI Microservices",
    "Vector Embeddings & Hybrid RAG Pipelines",
    "3D WebGL, Three.js & Shader Architectures",
    "Distributed Postgres & Redis Caching Layer"
  ]
};
