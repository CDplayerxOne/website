"use client";

import { useEffect, useMemo, useState } from "react";

type NodeConfig = {
  x: number;
  y: number;
  size: number;
  ampX: number;
  ampY: number;
  speed: number;
  phase: number;
};

type EdgeConfig = {
  from: number;
  to: number;
  driftX: number;
  driftY: number;
  speed: number;
  phase: number;
};

type NodePosition = {
  x: number;
  y: number;
  size: number;
};

// Fixed node anchors keep the graph subtle and predictable.
const nodes: NodeConfig[] = [
  { x: 0.04, y: 0.14, size: 12, ampX: 18, ampY: 14, speed: 0.55, phase: 0.1 },
  { x: 0.14, y: 0.46, size: 10, ampX: 16, ampY: 10, speed: 0.42, phase: 1.4 },
  { x: 0.18, y: 0.82, size: 14, ampX: 10, ampY: 12, speed: 0.48, phase: 2.2 },
  { x: 0.31, y: 0.24, size: 9, ampX: 14, ampY: 10, speed: 0.6, phase: 0.8 },
  { x: 0.44, y: 0.38, size: 16, ampX: 12, ampY: 16, speed: 0.38, phase: 1.8 },
  { x: 0.52, y: 0.12, size: 10, ampX: 16, ampY: 10, speed: 0.58, phase: 2.6 },
  { x: 0.59, y: 0.66, size: 12, ampX: 18, ampY: 14, speed: 0.44, phase: 0.4 },
  { x: 0.71, y: 0.22, size: 9, ampX: 12, ampY: 18, speed: 0.52, phase: 1.1 },
  { x: 0.78, y: 0.58, size: 14, ampX: 14, ampY: 8, speed: 0.35, phase: 2.4 },
  { x: 0.88, y: 0.18, size: 11, ampX: 10, ampY: 14, speed: 0.62, phase: 1.7 },
  { x: 0.92, y: 0.74, size: 12, ampX: 16, ampY: 12, speed: 0.33, phase: 0.9 },
];

// Each edge references two nodes so it always follows the moving points.
const edges: EdgeConfig[] = [
  { from: 0, to: 3, driftX: 8, driftY: 6, speed: 0.42, phase: 0.3 },
  { from: 1, to: 3, driftX: -10, driftY: 8, speed: 0.34, phase: 1.2 },
  { from: 3, to: 4, driftX: 8, driftY: -6, speed: 0.39, phase: 0.7 },
  { from: 4, to: 5, driftX: -12, driftY: 10, speed: 0.31, phase: 1.9 },
  { from: 4, to: 6, driftX: 10, driftY: 12, speed: 0.28, phase: 0.9 },
  { from: 6, to: 8, driftX: -8, driftY: -10, speed: 0.36, phase: 1.4 },
  { from: 8, to: 10, driftX: 10, driftY: -8, speed: 0.32, phase: 2.1 },
  { from: 7, to: 9, driftX: -10, driftY: 6, speed: 0.4, phase: 0.5 },
  { from: 5, to: 7, driftX: 8, driftY: 8, speed: 0.45, phase: 1.6 },
  { from: 2, to: 4, driftX: -10, driftY: -8, speed: 0.29, phase: 2.4 },
  { from: 1, to: 2, driftX: 8, driftY: 10, speed: 0.38, phase: 0.2 },
  { from: 6, to: 10, driftX: -12, driftY: -10, speed: 0.27, phase: 1.8 },
  { from: 0, to: 1, driftX: 8, driftY: 8, speed: 0.43, phase: 0.8 },
  { from: 3, to: 7, driftX: -8, driftY: 6, speed: 0.35, phase: 1.1 },
  { from: 4, to: 9, driftX: 8, driftY: -6, speed: 0.3, phase: 2.7 },
];

export function AnimatedGraphBackground() {
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });
  const basePositions = useMemo(
    () =>
      nodes.map((node) => ({
        x: node.x * viewport.width,
        y: node.y * viewport.height,
        size: node.size,
      })),
    [viewport.height, viewport.width],
  );
  const [positions, setPositions] = useState<NodePosition[]>(basePositions);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateViewport();
    updateMotionPreference();

    window.addEventListener("resize", updateViewport);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      window.removeEventListener("resize", updateViewport);

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let frameId = 0;

    const animate = (time: number) => {
      const seconds = time / 1000;

      setPositions(
        nodes.map((node) => ({
          x:
            node.x * viewport.width +
            Math.sin(seconds * node.speed + node.phase) * node.ampX,
          y:
            node.y * viewport.height +
            Math.cos(seconds * node.speed * 1.1 + node.phase) * node.ampY,
          size: node.size,
        })),
      );

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [reduceMotion, viewport.height, viewport.width]);

  const renderedPositions = reduceMotion ? basePositions : positions;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft gradients add depth without introducing another strong color. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_42%),radial-gradient(circle_at_center,rgba(0,0,0,0.035),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_34%)]" />

      {/* The SVG draws the connecting lines across the full viewport. */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${viewport.width} ${viewport.height}`}
        preserveAspectRatio="none"
      >
        {edges.map(({ from, to }) => {
          const start = renderedPositions[from];
          const end = renderedPositions[to];

          return (
            <g key={`${from}-${to}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                vectorEffect="non-scaling-stroke"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="3"
              />
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                vectorEffect="non-scaling-stroke"
                stroke="rgba(0, 0, 0, 0.3)"
                strokeWidth="1.2"
              />
            </g>
          );
        })}
      </svg>

      {/* Each node drifts a few pixels on its own slow loop. */}
      {nodes.map((node, index) => (
        <span
          key={`${node.x}-${node.y}`}
          className="graph-node absolute rounded-full border border-black/55 bg-blue-500 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_0_18px_rgba(0,0,0,0.05)]"
          style={{
            left: `${renderedPositions[index]?.x ?? node.x * viewport.width}px`,
            top: `${renderedPositions[index]?.y ?? node.y * viewport.height}px`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            transform: "translate(-50%, -50%)",
            opacity: index % 2 === 0 ? 0.72 : 0.52,
          }}
        />
      ))}

      {/* This fade keeps the graph from competing with the home text. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 32% 48%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 18%, rgba(255,255,255,0.82) 36%, rgba(255,255,255,0.42) 58%, rgba(255,255,255,0) 78%)",
        }}
      />
    </div>
  );
}
