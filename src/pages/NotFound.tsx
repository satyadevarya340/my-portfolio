import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { MagneticButton } from '../components/MagneticButton';
import { ArrowLeft, Terminal } from 'lucide-react';

function BrokenNode() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1.6, 1]}>
        <meshStandardMaterial
          color="#FF3366"
          wireframe
          emissive="#FF3366"
          emissiveIntensity={0.6}
        />
      </Icosahedron>
    </Float>
  );
}

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden pt-28">
      {/* Background 3D Broken Node */}
      <div className="w-72 h-72 relative mb-6">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF3366" />
          <BrokenNode />
        </Canvas>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs uppercase tracking-widest mb-4">
        <Terminal size={14} />
        <span>ERROR // 404: SECTOR NOT FOUND</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4">
        THIS PAGE ESCAPED THE SYSTEM.
      </h1>

      <p className="text-sm sm:text-base text-neutral-400 max-w-md mb-8 font-sans">
        The coordinate you are attempting to access does not exist in the spatial graph or has been archived.
      </p>

      <Link to="/">
        <MagneticButton variant="primary">
          <ArrowLeft size={16} />
          <span>RETURN TO HOME</span>
        </MagneticButton>
      </Link>
    </div>
  );
}
