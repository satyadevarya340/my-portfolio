import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface ParticleFieldProps {
  count: number;
  intensity: number;
}

function ParticleField({ count, intensity }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate particle positions and colors
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#00F2FE'); // Cyan
    const color2 = new THREE.Color('#7F00FF'); // Purple
    const color3 = new THREE.Color('#1f2438'); // Dark blue

    for (let i = 0; i < count; i++) {
      // Spread in a wide 3D space
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const mixed = Math.random();
      const chosenColor = mixed < 0.4 ? color1 : mixed < 0.7 ? color2 : color3;
      
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03 * intensity;
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.05 * intensity;
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
        size={0.06}
        vertexColors
        transparent
        opacity={0.45 * intensity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      const time = state.clock.getElapsedTime();
      gridRef.current.position.y = -4 + Math.sin(time * 0.5) * 0.2;
      gridRef.current.rotation.x = -Math.PI / 2.3;
    }
  });

  return (
    <group ref={gridRef} position={[0, -4, -5]}>
      <gridHelper args={[40, 40, '#00F2FE', '#121626']} />
    </group>
  );
}

export function Background3D({ intensity = 1.0 }: { intensity?: number }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const particleCount = isMobile ? 300 : 900;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-dark-950">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <ParticleField count={particleCount} intensity={intensity} />
        {!isMobile && <FloatingGrid />}
      </Canvas>
      {/* Radial vignette gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950/90 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
}
