import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '../data/projects';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FloatingHoloMonitor({ project }: { project: Project }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.15;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * 0.08;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main 3D Panel */}
        <RoundedBox args={[4.2, 2.6, 0.1]} radius={0.08} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#07080d"
            roughness={0.2}
            metalness={0.8}
            emissive={project.accentColor}
            emissiveIntensity={0.15}
          />
        </RoundedBox>

        {/* Outer Glow Border */}
        <RoundedBox args={[4.25, 2.65, 0.08]} radius={0.08} smoothness={4} position={[0, 0, -0.02]}>
          <meshStandardMaterial
            color={project.accentColor}
            wireframe
            transparent
            opacity={0.4}
          />
        </RoundedBox>

        {/* Orbiting particles */}
        <mesh position={[2.5, 1.4, 0.5]}>
          <octahedronGeometry args={[0.15]} />
          <meshStandardMaterial color={project.accentColor} emissive={project.accentColor} emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[-2.5, -1.2, 0.5]}>
          <octahedronGeometry args={[0.12]} />
          <meshStandardMaterial color="#00F2FE" emissive="#00F2FE" emissiveIntensity={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

interface Project3DModalProps {
  project: Project | null;
  onClose: () => void;
}

export function Project3DModal({ project, onClose }: Project3DModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-dark-900/80 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-white transition-all"
        >
          <X size={20} />
        </button>

        {/* Left Side: 3D Hologram Stage */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] relative bg-dark-900/60 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color={project.accentColor} />
            <FloatingHoloMonitor project={project} />
          </Canvas>

          <div className="absolute bottom-4 left-4 font-mono text-[11px] text-cyan-400 bg-dark-950/80 px-2.5 py-1 rounded-md border border-cyan-500/20">
            3D SPATIAL TELEMETRY
          </div>
        </div>

        {/* Right Side: Deep Project Info */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-cyan-400 font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                PROJECT {project.id}
              </span>
              <span className="font-mono text-xs text-neutral-500">{project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Tech Architecture
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-dark-900/80 text-xs font-mono text-cyan-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.caseStudy.results.slice(0, 2).map((res, i) => (
                <div key={i} className="p-3 rounded-xl bg-dark-900/60 border border-white/5">
                  <div className="text-lg font-display font-bold text-white text-gradient-cyan">
                    {res.metric}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <Link
              to={`/projects/${project.slug}`}
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-dark-950 font-bold text-xs hover:shadow-glow-cyan transition-all"
            >
              <span>Full Case Study</span>
              <ArrowRight size={14} />
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-dark-900/90 hover:bg-dark-800 border border-white/10 text-neutral-300 hover:text-white transition-all"
                title="View Source on GitHub"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
