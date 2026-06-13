"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { type Group, type Points } from "three";

interface NodePos {
  x: number;
  y: number;
  z: number;
}

function generateNodes(count: number): NodePos[] {
  const nodes: NodePos[] = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1.2 + Math.random() * 1.5;
    nodes.push({
      x: Math.sin(phi) * Math.cos(theta) * r,
      y: Math.sin(phi) * Math.sin(theta) * r,
      z: Math.cos(phi) * r * 0.6,
    });
  }
  return nodes;
}

function Network() {
  const groupRef = useRef<Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const autoRotY = useRef(0);

  const nodePositions = useMemo(() => generateNodes(60), []);

  const edges = useMemo(() => {
    const result: [number, number][] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dx = nodePositions[i].x - nodePositions[j].x;
        const dy = nodePositions[i].y - nodePositions[j].y;
        const dz = nodePositions[i].z - nodePositions[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 2.2) {
          result.push([i, j]);
        }
      }
    }
    return result;
  }, [nodePositions]);

  const linePositions = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([i, j], idx) => {
      positions[idx * 6] = nodePositions[i].x;
      positions[idx * 6 + 1] = nodePositions[i].y;
      positions[idx * 6 + 2] = nodePositions[i].z;
      positions[idx * 6 + 3] = nodePositions[j].x;
      positions[idx * 6 + 4] = nodePositions[j].y;
      positions[idx * 6 + 5] = nodePositions[j].z;
    });
    return positions;
  }, [nodePositions, edges]);

  const particleCount = 20;
  const particleData = useRef(
    Array.from({ length: particleCount }, () => ({
      edgeIndex: Math.floor(Math.random() * edges.length),
      progress: Math.random(),
    }))
  );

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    if (edges.length === 0) {
      return positions;
    }
    particleData.current.forEach((p, i) => {
      const edgeIndex = Math.min(p.edgeIndex, edges.length - 1);
      const edge = edges[edgeIndex];
      const start = nodePositions[edge[0]];
      const end = nodePositions[edge[1]];
      positions[i * 3] = start.x + (end.x - start.x) * p.progress;
      positions[i * 3 + 1] = start.y + (end.y - start.y) * p.progress;
      positions[i * 3 + 2] = start.z + (end.z - start.z) * p.progress;
    });
    return positions;
  }, [edges, nodePositions]);

  const particleRef = useRef<Points>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 0.15,
        y: (e.clientY / window.innerHeight - 0.5) * 0.15,
      };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((_, delta) => {
    timeRef.current += delta;
    autoRotY.current += delta * 0.08;

    if (groupRef.current) {
      groupRef.current.rotation.y = autoRotY.current + mouseRef.current.x;
      groupRef.current.rotation.x = mouseRef.current.y * 0.5;
    }

    const particles = particleRef.current;
    if (particles && edges.length > 0) {
      const attr = particles.geometry.attributes.position;
      const pos = attr.array as Float32Array;
      particleData.current.forEach((p, i) => {
        p.progress += delta * 0.25;
        if (p.progress >= 1) {
          p.progress = 0;
          p.edgeIndex = Math.floor(Math.random() * edges.length);
        }
        const edgeIndex = Math.min(p.edgeIndex, edges.length - 1);
        const edge = edges[edgeIndex];
        const start = nodePositions[edge[0]];
        const end = nodePositions[edge[1]];
        pos[i * 3] = start.x + (end.x - start.x) * p.progress;
        pos[i * 3 + 1] = start.y + (end.y - start.y) * p.progress;
        pos[i * 3 + 2] = start.z + (end.z - start.z) * p.progress;
      });
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#a1a1aa" opacity={0.25} transparent />
      </lineSegments>

      {nodePositions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[i < 4 ? 0.08 : 0.05, 8, 8]} />
          <meshBasicMaterial color={i < 4 ? "#7335B2" : "#000C14"} />
        </mesh>
      ))}

      <points ref={particleRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#7335B2"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full min-h-[320px] rounded-[36px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.5, 4.5], fov: 65, near: 0.1, far: 15 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <Network />
      </Canvas>
    </div>
  );
}
