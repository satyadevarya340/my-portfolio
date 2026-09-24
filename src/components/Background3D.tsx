import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface ParticleDustProps {
  count: number;
}

function ParticleDust({ count }: ParticleDustProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const c1 = new THREE.Color('#8E6BFF'); // Violet
    const c2 = new THREE.Color('#B8A7FF'); // Soft purple
    const c3 = new THREE.Color('#F4B7EA'); // Soft pink

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const mix = Math.random();
      const chosen = mix < 0.4 ? c1 : mix < 0.7 ? c2 : c3;

      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.015;
      pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function Background3D({ intensity = 1.0 }: { intensity?: number }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const particleCount = isMobile ? 120 : 350;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-main">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <ParticleDust count={particleCount} />
      </Canvas>

      {/* Atmospheric radial gradients matching the reference images */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-minimal-grid opacity-60 pointer-events-none" />
    </div>
  );
}
