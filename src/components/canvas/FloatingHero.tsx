"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingLetters() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
      groupRef.current.rotation.x = Math.cos(t * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Text
          fontSize={1.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/GeistVF.woff"
          position={[0, 0.6, 0]}
        >
          BASR
        </Text>
      </Float>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Text
          fontSize={1.2}
          color="#0066ff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/GeistVF.woff"
          position={[0, -0.6, 0]}
        >
          HICHAM
        </Text>
      </Float>
    </group>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        speed: Math.random() * 0.5 + 0.1,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    particles.forEach((particle, i) => {
      const { position, speed, offset } = particle;
      dummy.position.set(
        position[0] + Math.sin(t * speed + offset) * 0.5,
        position[1] + Math.cos(t * speed + offset) * 0.3,
        position[2] + Math.sin(t * speed * 0.5 + offset) * 0.2
      );
      dummy.scale.setScalar(
        0.02 + Math.sin(t * speed + offset) * 0.01
      );
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#0066ff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      const t = state.clock.getElapsedTime();
      lightRef.current.position.x = Math.sin(t * 0.5) * 5;
      lightRef.current.position.y = Math.cos(t * 0.3) * 3 + 2;
      lightRef.current.position.z = 5;
    }
  });

  return <pointLight ref={lightRef} intensity={1} color="#0066ff" distance={20} />;
}

export default function FloatingHero() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <MouseLight />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <FloatingLetters />
      <Particles count={150} />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={20}
        blur={2}
        far={4}
        color="#0066ff"
      />
    </>
  );
}
