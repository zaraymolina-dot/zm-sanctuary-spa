/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const RoseQuartz = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
        // Gentle, calming rotation
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial 
            color="#FCEADE" // Soft Pink / Blush
            roughness={0.4} // Matte finish like smooth stone/clay
            metalness={0.1}
            transmission={0}
            distort={0.3} // Subtle organic shape change
            speed={0.5}   // Very slow
            clearcoat={0.8} // Slight ceramic shine
            clearcoatRoughness={0.2}
        />
      </Sphere>
    </Float>
  );
};

export const BeautyScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        
        {/* Warm, Spa-like lighting */}
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1} color="#FFF5E1" />
        <pointLight position={[-10, -5, -10]} intensity={1.5} color="#E6D2B5" />
        <pointLight position={[5, -5, 5]} intensity={0.8} color="#FFD1DC" />
        
        <RoseQuartz />

        {/* Gentle particles like dust motes in sunbeams */}
        <Sparkles count={40} scale={6} size={3} speed={0.4} opacity={0.4} color="#E6D2B5" />
        
        <Environment preset="sunset" blur={0.8} />
        {/* Fog to blend seamlessly into the cream background */}
        <fog attach="fog" args={['#FFFBF9', 4, 12]} />
      </Canvas>
    </div>
  );
};

export const HeroScene = BeautyScene; 
export const QuantumComputerScene = BeautyScene;