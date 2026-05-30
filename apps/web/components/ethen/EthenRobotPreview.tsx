"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import type { Group } from "three";
import { useProgress } from "@react-three/drei";

function LoadingSpinner() {
  const { loaded, total } = useProgress();
  const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;
  return (
    <div className="ethen-robot-preview__loading">
      <div className="ethen-robot-preview__spinner" />
      {total > 0 && (
        <span className="ethen-robot-preview__progress">{pct}%</span>
      )}
    </div>
  );
}

function RobotModel() {
  const { scene } = useGLTF("/ethen/humanoid-robot-ai.glb");
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={ref} scale={1.2} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} />
      <Suspense fallback={null}>
        <RobotModel />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.35}
          scale={4}
          blur={2}
          far={2}
        />
        <Environment preset="city" />
      </Suspense>
    </>
  );
}

export function EthenRobotPreview() {
  return (
    <div className="ethen-robot-preview">
      <div className="ethen-robot-preview__viewport">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            camera={{ position: [0, 0.2, 3.5], fov: 40 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true }}
            style={{ width: "100%", height: "100%" }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </div>
      <p className="ethen-robot-preview__hint">Your AI guide</p>
    </div>
  );
}
