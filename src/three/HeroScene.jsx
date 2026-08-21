import { Float, MeshDistortMaterial, Points, PointMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingObject() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;
    group.current.rotation.y = t * 0.16 + state.pointer.x * 0.12;
    group.current.rotation.x = Math.sin(t * 0.35) * 0.08 + state.pointer.y * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.45}>
        <Sphere args={[1.15, 96, 96]}>
          <MeshDistortMaterial
            color="#7C5CFF"
            emissive="#20164f"
            roughness={0.18}
            metalness={0.72}
            clearcoat={1}
            distort={0.22}
            speed={1.2}
            transparent
            opacity={0.78}
          />
        </Sphere>
        <mesh rotation={[0.7, 0.4, 0.2]}>
          <torusGeometry args={[1.55, 0.012, 16, 120]} />
          <meshStandardMaterial color="#20D9C3" emissive="#0e6b61" />
        </mesh>
        <mesh rotation={[-0.55, 0.9, 0.5]}>
          <torusGeometry args={[1.82, 0.01, 16, 120]} />
          <meshStandardMaterial color="#F5F7FA" transparent opacity={0.52} />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleField() {
  const ref = useRef();
  const points = useMemo(() => {
    const count = window.matchMedia("(max-width: 640px)").matches ? 90 : 170;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.025;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#9AA3B2" size={0.018} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px]">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 45 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <color attach="background" args={["#08090D"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={2.1} color="#ffffff" />
        <pointLight position={[-3, -1, 3]} intensity={2} color="#20D9C3" />
        <pointLight position={[2, 2, 2]} intensity={1.3} color="#7C5CFF" />
        <ParticleField />
        <FloatingObject />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_28%,rgba(8,9,13,0.2)_55%,rgba(8,9,13,0.72)_100%)]" />
    </div>
  );
}
