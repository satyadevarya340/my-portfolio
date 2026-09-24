import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Torus, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';
import { useMediaQuery } from '../hooks/useMediaQuery';

function ArchitecturalSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const coinRef = useRef<THREE.Mesh>(null);
  const disc1Ref = useRef<THREE.Mesh>(null);
  const disc2Ref = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth subtle gyro tracking
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0.35 + mouse.normalizedX * 0.25,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        0.25 - mouse.normalizedY * 0.15,
        0.04
      );
    }

    if (coinRef.current) {
      // Floating lens rotation with specular reflections
      coinRef.current.rotation.y = time * 0.4;
      coinRef.current.position.y = 0.5 + Math.sin(time * 1.5) * 0.15;
    }

    if (disc1Ref.current) {
      disc1Ref.current.rotation.y = time * 0.05;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -time * 0.2;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0.2, -0.2, 0]}>
      {/* 1. Large Lower Tier Architectural Base Disc */}
      <Cylinder args={[2.5, 2.5, 0.3, 64]} position={[0, -1.2, 0]} receiveShadow>
        <meshStandardMaterial
          color="#FAF8FF"
          roughness={0.25}
          metalness={0.08}
        />
      </Cylinder>

      {/* 2. Middle Tier Stepped Disc with Groove */}
      <Cylinder ref={disc1Ref} args={[1.9, 1.9, 0.4, 64]} position={[0, -0.7, 0]} receiveShadow castShadow>
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.2}
          metalness={0.12}
        />
      </Cylinder>

      {/* 3. Upper Architectural Wedge / Platform */}
      <group position={[0.4, -0.2, 0.2]}>
        <RoundedBox args={[1.8, 0.5, 1.4]} radius={0.08} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.18}
            metalness={0.1}
          />
        </RoundedBox>
      </group>

      {/* 4. Floating Holographic Gold / Violet Gem Coin */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[-0.4, 0.6, 0.8]}>
          <Cylinder ref={coinRef} args={[0.45, 0.45, 0.09, 32]} rotation={[Math.PI / 2.5, 0, 0]} castShadow>
            <meshStandardMaterial
              color="#F5B83D"
              roughness={0.15}
              metalness={0.92}
              emissive="#E66BFF"
              emissiveIntensity={0.25}
            />
          </Cylinder>

          {/* Glowing purple ambient halo behind the coin */}
          <pointLight position={[0, 0, 0]} intensity={1.8} color="#E66BFF" distance={2.5} />
        </group>
      </Float>

      {/* 5. Translucent Ethereal Glass / Pearl Orbit Ring */}
      <Torus ref={ringRef} args={[2.1, 0.04, 16, 100]} position={[0, 0.1, 0]}>
        <meshStandardMaterial
          color="#D8CEFF"
          roughness={0.1}
          metalness={0.4}
          transparent
          opacity={0.8}
        />
      </Torus>

      {/* 6. Floating Pearl Nodes */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <Sphere args={[0.18, 32, 32]} position={[1.8, 0.9, 0.5]} castShadow>
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.15} />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.12, 32, 32]} position={[-1.7, -0.2, 1.1]} castShadow>
          <meshStandardMaterial color="#B8A7FF" roughness={0.2} metalness={0.2} />
        </Sphere>
      </Float>
    </group>
  );
}

export function Hero3D() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <Canvas
        shadows
        camera={{ position: [3, 2.5, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1] : [1, 2]}
      >
        {/* Studio Lighting Setup matching the reference images */}
        <ambientLight intensity={0.8} color="#F3F1FA" />
        
        {/* Key Directional Sun Light (Soft warm daylight) */}
        <directionalLight
          position={[5, 8, 4]}
          intensity={1.4}
          color="#FFFFFF"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />

        {/* Violet / Lavender Rim Light (creating the signature glow in reference) */}
        <pointLight position={[-4, 2, -2]} intensity={2.4} color="#8E6BFF" distance={10} />

        {/* Soft Magenta Bottom-Right Fill Light */}
        <pointLight position={[3, -2, 3]} intensity={1.6} color="#E66BFF" distance={8} />

        {/* Ethereal Top Blue Accent */}
        <pointLight position={[0, 5, 2]} intensity={0.9} color="#A9C9FF" />

        <ArchitecturalSculpture />
      </Canvas>

      {/* Floating Minimal Technical Badges */}
      <div className="absolute top-8 right-8 hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full pearl-glass text-[11px] font-mono text-navy-800 shadow-pearl">
        <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
        <span>R3F // ARCHITECTURAL CORE</span>
      </div>

      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-1 px-4 py-2.5 rounded-2xl pearl-glass text-[11px] font-mono text-muted-text shadow-pearl">
        <div className="text-navy-900 font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-magenta" />
          SYSTEM MATRIX
        </div>
        <div className="text-[10px] text-muted-subtle">
          FASTAPI • LANGGRAPH • THREE.JS
        </div>
      </div>
    </div>
  );
}
