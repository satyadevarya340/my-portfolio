import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';
import { useMediaQuery } from '../hooks/useMediaQuery';

function CyberCore() {
  const meshRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Smooth lerp rotation toward mouse position
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.normalizedX * 0.8 + time * 0.15,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -mouse.normalizedY * 0.5 + Math.sin(time * 0.3) * 0.1,
        0.05
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.4;
      innerRef.current.rotation.y = time * 0.3;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.25;
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(time * 0.2) * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.35;
      ring2Ref.current.rotation.y = Math.PI / 3 + Math.cos(time * 0.25) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Distorted Glowing Sphere Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#00F2FE"
            attach="material"
            distort={0.35}
            speed={2.2}
            roughness={0.2}
            metalness={0.85}
            wireframe={false}
          />
        </Sphere>
      </Float>

      {/* Outer Wireframe Icosahedron */}
      <Icosahedron ref={innerRef} args={[1.7, 1]}>
        <meshStandardMaterial
          color="#7F00FF"
          wireframe
          transparent
          opacity={0.35}
          emissive="#7F00FF"
          emissiveIntensity={0.4}
        />
      </Icosahedron>

      {/* Orbiting Tech Ring 1 */}
      <Torus ref={ring1Ref} args={[2.3, 0.025, 16, 100]}>
        <meshStandardMaterial
          color="#00F2FE"
          emissive="#00F2FE"
          emissiveIntensity={0.8}
          roughness={0.1}
        />
      </Torus>

      {/* Orbiting Tech Ring 2 */}
      <Torus ref={ring2Ref} args={[2.7, 0.02, 16, 100]}>
        <meshStandardMaterial
          color="#E0C3FC"
          emissive="#7F00FF"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </Torus>

      {/* Floating Satellites */}
      <group position={[2.2, 1.2, 0.5]}>
        <Octahedron args={[0.25, 0]}>
          <meshStandardMaterial color="#00F5A0" emissive="#00F5A0" emissiveIntensity={0.6} wireframe />
        </Octahedron>
      </group>

      <group position={[-2.4, -1.0, 0.8]}>
        <Octahedron args={[0.3, 0]}>
          <meshStandardMaterial color="#00F2FE" emissive="#00F2FE" emissiveIntensity={0.6} wireframe />
        </Octahedron>
      </group>
    </group>
  );
}

export function Hero3D() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={isMobile ? [1, 1] : [1, 2]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F2FE" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#7F00FF" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />

        <CyberCore />
      </Canvas>

      {/* Holographic HUD Overlay Elements floating near the 3D scene */}
      <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-cyan-500/20 text-xs font-mono text-cyan-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>R3F // GLSL CORE ONLINE</span>
      </div>

      <div className="absolute bottom-6 left-6 hidden md:flex flex-col gap-1 px-3 py-2 rounded-lg bg-dark-900/70 backdrop-blur-md border border-white/5 text-[11px] font-mono text-neutral-400">
        <div className="text-cyan-400 font-semibold">CORE ARCHITECTURE</div>
        <div>FASTAPI • LANGGRAPH • THREE.JS</div>
      </div>
    </div>
  );
}
