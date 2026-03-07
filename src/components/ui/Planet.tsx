
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

const Venus = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float
            speed={4}
            rotationIntensity={0.5}
            floatIntensity={0.5}
        >
            <mesh ref={meshRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    color="#e3bb76"
                    roughness={0.7}
                    metalness={0.2}
                    emissive="#5c3c10"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
};

const PlanetScene = () => {
    return (
        <div className="w-full h-[400px] cursor-pointer">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <Venus />
            </Canvas>
        </div>
    );
};

export default PlanetScene;
