"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { motion } from "motion/react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
}

interface Edge {
  from: number;
  to: number;
}

interface ParticleData {
  edgeIdx: number;
  progress: number;
  speed: number;
}

const NODE_COUNT = 40;
const CONNECTION_DIST = 180;
const MOUSE_INFLUENCE = 220;

function generateNodes(w: number, h: number): Node[] {
  const nodes: Node[] = [];
  const cols = 7;
  const rows = Math.ceil(NODE_COUNT / cols);
  const cellW = w / (cols + 1);
  const cellH = h / (rows + 1);

  for (let i = 0; i < NODE_COUNT; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const baseRadius = 1.5 + Math.random() * 2.5;
    nodes.push({
      x: cellW * (col + 1) + (Math.random() - 0.5) * cellW * 0.6,
      y: cellH * (row + 1) + (Math.random() - 0.5) * cellH * 0.6,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: baseRadius,
      baseRadius,
    });
  }
  return nodes;
}

function computeEdges(nodes: Node[], w: number): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECTION_DIST * (w / 1200)) {
        edges.push({ from: i, to: j });
      }
    }
  }
  return edges;
}

export function InteractiveNodes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });

  const nodes = useMemo(() => generateNodes(dimensions.w, dimensions.h), [dimensions]);
  const edges = useMemo(() => computeEdges(nodes, dimensions.w), [nodes, dimensions.w]);

  const mouseX = useRef(-9999);
  const mouseY = useRef(-9999);

  const [edgeData, setEdgeData] = useState<{ opacity: number; glow: number }[]>(
    () => edges.map(() => ({ opacity: 0, glow: 0 }))
  );
  const [particles, setParticles] = useState<ParticleData[]>(() => {
    const arr: ParticleData[] = [];
    for (let i = 0; i < 15; i++) {
      arr.push({
        edgeIdx: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
      });
    }
    return arr;
  });

  const frameRef = useRef<number>(0);
  const edgeDataRef = useRef(edgeData);
  const particlesRef = useRef(particles);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ w: Math.round(width), h: Math.round(height) });
      }
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX.current = e.clientX - rect.left;
      mouseY.current = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouseX.current = -9999;
      mouseY.current = -9999;
    };

    container.addEventListener("mousemove", handleMouse);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouse);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    edgeDataRef.current = edges.map(() => ({ opacity: 0, glow: 0 }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEdgeData(edges.map(() => ({ opacity: 0, glow: 0 })));

    const newParticles: ParticleData[] = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        edgeIdx: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
      });
    }
    particlesRef.current = newParticles;
    setParticles(newParticles);
  }, [edges]);

  useEffect(() => {
    let running = true;

    const tick = () => {
      if (!running) return;

      const mx = mouseX.current;
      const my = mouseY.current;
      const current = edgeDataRef.current;
      const updated = current.map((_, i) => {
        const edge = edges[i];
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const dx = midX - mx;
        const dy = midY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const raw = Math.max(0, 1 - dist / MOUSE_INFLUENCE);
        const target = mx > -1000 ? Math.pow(raw, 1.5) : 0;
        const glowTarget = mx > -1000 ? Math.pow(raw, 2) * 1.5 : 0;
        const prev = current[i] ?? { opacity: 0, glow: 0 };
        const lerp = 0.06;
        return {
          opacity: prev.opacity + (target - prev.opacity) * lerp,
          glow: prev.glow + (glowTarget - prev.glow) * lerp,
        };
      });

      edgeDataRef.current = updated;

      const newParticles = particlesRef.current.map((p) => {
        let progress = p.progress + p.speed;
        let edgeIdx = p.edgeIdx;
        if (progress >= 1) {
          progress = 0;
          edgeIdx = Math.floor(Math.random() * edges.length);
        }
        return { ...p, progress, edgeIdx };
      });
      particlesRef.current = newParticles;

      if (running) {
        setEdgeData(updated);
        setParticles(newParticles);
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => { running = false; cancelAnimationFrame(frameRef.current); };
  }, [edges, nodes]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(254,69,226,0)" />
            <stop offset="50%" stopColor="rgba(115,53,178,0.6)" />
            <stop offset="100%" stopColor="rgba(254,69,226,0)" />
          </linearGradient>
        </defs>

        {edges.map((edge, i) => {
          const from = nodes[edge.from];
          const to = nodes[edge.to];
          const data = edgeData[i];
          if (!data || data.opacity < 0.01) return null;
          const { opacity, glow } = data;

          return (
            <g key={`edge-${i}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#edge-grad)"
                strokeWidth={0.5 + glow * 1.5}
                opacity={opacity * 0.8}
                strokeLinecap="round"
              />
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(115,53,178,0.4)"
                strokeWidth={glow * 4}
                opacity={glow * 0.3}
                strokeLinecap="round"
                filter="url(#node-glow)"
              />
            </g>
          );
        })}

        {nodes.map((node, i) => {
          const connected = edgeData.some(
            (d, ei) => d.opacity > 0.05 && (edges[ei].from === i || edges[ei].to === i)
          );
          return (
            <motion.circle
              key={`node-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.baseRadius}
              fill={connected ? "rgba(115,53,178,0.6)" : "rgba(255,255,255,0.15)"}
              animate={{
                r: [node.baseRadius, node.baseRadius * 1.15, node.baseRadius],
              }}
              transition={{
                duration: 6 + (i % 5) * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {particles.map((p, i) => {
          const edge = edges[p.edgeIdx];
          if (!edge) return null;
          const from = nodes[edge.from];
          const to = nodes[edge.to];
          const x = from.x + (to.x - from.x) * p.progress;
          const y = from.y + (to.y - from.y) * p.progress;
          const isVisible = (edgeData[p.edgeIdx]?.opacity ?? 0) > 0.05;

          return (
            <motion.circle
              key={`particle-${i}`}
              cx={x}
              cy={y}
              r={2}
              fill="rgba(254,69,226,0.8)"
              style={{ filter: "url(#node-glow)" }}
              animate={{
                opacity: isVisible ? [0.4, 1, 0.4] : [0, 0, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
