import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';
import { useMediaQuery } from '../hooks/useMediaQuery';

function CentralCore() {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth lerp toward cursor
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.normalizedX * 0.6 + time * 0.12,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.normalizedY * 0.4 + Math.sin(time * 0.25) * 0.08,
        0.04
      );
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = time * 0.3;
      innerSphereRef.current.rotation.x = -time * 0.2;
    }

    if (shellRef.current) {
      shellRef.current.rotation.x = time * 0.15;
      shellRef.current.rotation.y = -time * 0.25;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.2;
      ring1Ref.current.rotation.x = Math.PI / 3.5 + Math.sin(time * 0.2) * 0.15;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.28;
      ring2Ref.current.rotation.y = Math.PI / 4 + Math.cos(time * 0.2) * 0.15;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = time * 0.35;
      ring3Ref.current.rotation.z = Math.sin(time * 0.15) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Glowing AI Sphere Core */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere ref={innerSphereRef} args={[1.35, 64, 64]}>
          <MeshDistortMaterial
            color="#159B70"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.15}
            metalness={0.8}
            emissive="#0B6B50"
            emissiveIntensity={0.6}
          />
        </Sphere>
      </Float>

      {/* Outer Wireframe Geometric Shell */}
      <Icosahedron ref={shellRef} args={[1.9, 1]}>
        <meshStandardMaterial
          color="#00F2FE"
          wireframe
          transparent
          opacity={0.35}
          emissive="#0B6B50"
          emissiveIntensity={0.4}
        />
      </Icosahedron>

      {/* Orbital Ring 1 - Emerald / Green */}
      <Torus ref={ring1Ref} args={[2.5, 0.025, 16, 120]}>
        <meshStandardMaterial
          color="#18A979"
          emissive="#18A979"
          emissiveIntensity={0.9}
          roughness={0.1}
        />
      </Torus>

      {/* Orbital Ring 2 - Blue Accent */}
      <Torus ref={ring2Ref} args={[2.9, 0.02, 16, 120]}>
        <meshStandardMaterial
          color="#4F7CFF"
          emissive="#4F7CFF"
          emissiveIntensity={0.7}
          roughness={0.2}
        />
      </Torus>

      {/* Orbital Ring 3 - Purple Accent */}
      <Torus ref={ring3Ref} args={[3.3, 0.018, 16, 120]}>
        <meshStandardMaterial
          color="#7C5CFF"
          emissive="#7C5CFF"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </Torus>

      {/* Floating Geometric Satellite Nodes */}
      <group position={[2.6, 1.4, 0.6]}>
        <Octahedron args={[0.26, 0]}>
          <meshStandardMaterial color="#00F5A0" emissive="#00F5A0" emissiveIntensity={0.9} wireframe />
        </Octahedron>
      </group>

      <group position={[-2.7, -1.2, 0.8]}>
        <Octahedron args={[0.28, 0]}>
          <meshStandardMaterial color="#4F7CFF" emissive="#4F7CFF" emissiveIntensity={0.8} wireframe />
        </Octahedron>
      </group>

      <group position={[0.8, -2.4, -0.9]}>
        <Octahedron args={[0.22, 0]}>
          <meshStandardMaterial color="#F5B83D" emissive="#F5B83D" emissiveIntensity={0.8} wireframe />
        </Octahedron>
      </group>
    </group>
  );
}

export function Hero3D() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-full h-full relative flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={isMobile ? [1, 1] : [1, 2]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2.0} color="#18A979" />
        <pointLight position={[-10, -10, -5]} intensity={1.6} color="#4F7CFF" />
        <pointLight position={[0, -10, 5]} intensity={1.2} color="#7C5CFF" />
        <directionalLight position={[0, 8, 5]} intensity={1.0} />

        <CentralCore />
      </Canvas>

      {/* Floating Technical HUD Badges in Space */}
      <div className="absolute top-6 left-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-darker/90 backdrop-blur-md border border-brand-accent/30 text-xs font-mono text-brand-light shadow-glow-green">
        <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
        <span>R3F // THREE.JS CORE ONLINE</span>
      </div>

      <div className="absolute top-6 right-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-darker/90 backdrop-blur-md border border-accent-blue/30 text-xs font-mono text-accent-blue">
        <span className="w-2 h-2 rounded-full bg-accent-blue" />
        <span>FASTAPI &amp; LANGGRAPH</span>
      </div>

      <div className="absolute bottom-6 left-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-darker/90 backdrop-blur-md border border-accent-purple/30 text-xs font-mono text-accent-purple">
        <span>POSTGRESQL // VECTOR SEARCH</span>
      </div>

      <div className="absolute bottom-6 right-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-darker/90 backdrop-blur-md border border-brand-accent/30 text-xs font-mono text-brand-light">
        <span>WEBGL 60 FPS</span>
      </div>
    </div>
  );
}
