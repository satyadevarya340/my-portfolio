import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
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
        {/* Main 3D Pearl Panel */}
        <RoundedBox args={[4.2, 2.6, 0.1]} radius={0.08} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.15}
            metalness={0.2}
            emissive="#8E6BFF"
            emissiveIntensity={0.05}
          />
        </RoundedBox>

        {/* Outer Glow Border */}
        <RoundedBox args={[4.25, 2.65, 0.08]} radius={0.08} smoothness={4} position={[0, 0, -0.02]}>
          <meshStandardMaterial
            color="#D8CEFF"
            wireframe
            transparent
            opacity={0.6}
          />
        </RoundedBox>

        {/* Orbiting particles */}
        <mesh position={[2.5, 1.4, 0.5]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#8E6BFF" emissive="#8E6BFF" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-2.5, -1.2, 0.5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#E66BFF" emissive="#E66BFF" emissiveIntensity={0.5} />
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/40 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border border-lavender-300 shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-lavender-100 hover:bg-lavender-200 text-navy-900 transition-all shadow-sm"
        >
          <X size={18} />
        </button>

        {/* Left Side: 3D Hologram Stage */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] relative bg-lavender-50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-lavender-200">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.9} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#8E6BFF" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#E66BFF" />
            <FloatingHoloMonitor project={project} />
          </Canvas>

          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-accent-violet bg-white/90 px-3 py-1 rounded-full border border-lavender-200 shadow-sm">
            SPATIAL 3D TELEMETRY
          </div>
        </div>

        {/* Right Side: Deep Project Info */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent-violet font-bold px-3 py-0.5 rounded-full bg-lavender-100 border border-lavender-200">
                PROJECT {project.id}
              </span>
              <span className="font-mono text-xs text-muted-subtle">{project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-muted-text mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-muted-subtle mb-2">
                Tech Architecture
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-lavender-50 text-xs font-mono text-navy-900 border border-lavender-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.caseStudy.results.slice(0, 2).map((res, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-lavender-50/60 border border-lavender-200">
                  <div className="text-lg font-display font-bold text-navy-900 text-gradient-violet">
                    {res.metric}
                  </div>
                  <div className="text-[11px] text-muted-text font-mono">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-lavender-200">
            <Link
              to={`/projects/${project.slug}`}
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-navy-800 transition-all shadow-sm"
            >
              <span>Full Case Study</span>
              <ArrowRight size={14} />
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-lavender-100 hover:bg-lavender-200 text-navy-900 transition-all"
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
