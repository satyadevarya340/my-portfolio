import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, RoundedBox, Sphere, Cylinder, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';
import { useMediaQuery } from '../hooks/useMediaQuery';

function AbstractSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRingRef = useRef<THREE.Mesh>(null);
  const innerDiscRef = useRef<THREE.Mesh>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle, calm mouse parallax with slow inertia
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0.3 + mouse.normalizedX * 0.18,
        0.03
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        0.2 - mouse.normalizedY * 0.12,
        0.03
      );
    }

    if (coreRingRef.current) {
      // Slow, tranquil rotation
      coreRingRef.current.rotation.z = time * 0.08;
      coreRingRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.4) * 0.05;
    }

    if (innerDiscRef.current) {
      innerDiscRef.current.rotation.y = -time * 0.06;
    }

    if (orbRef.current) {
      orbRef.current.position.y = 0.45 + Math.sin(time * 1.2) * 0.08;
      orbRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0.1, -0.1, 0]}>
      {/* Soft Ambient Shadow Disc on Ground */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.8, 64]} />
        <meshBasicMaterial
          color="#D8CEFF"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>

      {/* Floating Abstract Pearl White Geometry */}
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
        {/* Main Curved Architectural Pearl Ring */}
        <Torus
          ref={coreRingRef}
          args={[1.8, 0.45, 48, 120]}
          position={[0, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.14}
            metalness={0.05}
            envMapIntensity={0.8}
          />
        </Torus>

        {/* Inner Pearl Slanted Disc Platform */}
        <Cylinder
          ref={innerDiscRef}
          args={[1.1, 1.1, 0.18, 64]}
          position={[0, -0.2, 0]}
          rotation={[Math.PI / 8, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#FAFAFF"
            roughness={0.18}
            metalness={0.08}
          />
        </Cylinder>

        {/* Central Floating Pearl Orb with Subtle Specular Sheen */}
        <Sphere
          ref={orbRef}
          args={[0.42, 64, 64]}
          position={[0, 0.45, 0.3]}
          castShadow
        >
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.2}
          />
        </Sphere>

        {/* Delicate Orbiting Mini Sphere */}
        <Sphere args={[0.12, 32, 32]} position={[1.9, 0.8, 0.4]} castShadow>
          <meshStandardMaterial
            color="#FAF8FF"
            roughness={0.12}
            metalness={0.15}
          />
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
        camera={{ position: [2.5, 1.8, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1] : [1, 2]}
      >
        {/* Soft studio ambient light */}
        <ambientLight intensity={0.85} color="#FAF9FF" />

        {/* Main Sun Key Light (casting soft studio shadow) */}
        <directionalLight
          position={[5, 7, 4]}
          intensity={1.5}
          color="#FFFFFF"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />

        {/* Lavender Rim Light */}
        <pointLight position={[-4, 2.5, -2]} intensity={2.8} color="#8E6BFF" distance={10} />

        {/* Subtle Pink / Magenta Glow passing through */}
        <pointLight position={[3, -1.5, 2.5]} intensity={1.8} color="#E66BFF" distance={8} />

        {/* Subtle Blue Accent */}
        <pointLight position={[-1, 4, 3]} intensity={0.9} color="#A9C9FF" distance={8} />

        <AbstractSculpture />
      </Canvas>
    </div>
  );
}
