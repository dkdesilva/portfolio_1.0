
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const VenusSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.15;
            meshRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[2.5, 64, 64]} />
                <meshStandardMaterial
                    color="#e3bb76"
                    roughness={0.8}
                    metalness={0.2}
                    emissive="#5c3c10"
                    emissiveIntensity={0.15}
                />
            </mesh>
        </Float>
    );
};

const Venus = () => {
    return (
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40 blur-[2px]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffd27d" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <VenusSphere />
            </Canvas>
        </div>
    );
};

export default Venus;
