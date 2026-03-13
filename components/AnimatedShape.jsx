"use client";
import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 500;
const CONVERGE_DURATION = 2.5;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function generateBracketTargets(count) {
  const targets = [];
  const half = Math.floor(count / 2);

  // Key points tracing the left brace { shape
  const leftKeys = [
    [0.35, 1.8],
    [0.20, 1.4],
    [0.05, 1.0],
    [-0.15, 0.6],
    [-0.40, 0.3],
    [-0.55, 0.1],
    [-0.60, 0.0],
    [-0.55, -0.1],
    [-0.40, -0.3],
    [-0.15, -0.6],
    [0.05, -1.0],
    [0.20, -1.4],
    [0.35, -1.8],
  ];

  // Interpolate particles along left brace outline
  for (let i = 0; i < half; i++) {
    const t = i / (half - 1);
    const idx = t * (leftKeys.length - 1);
    const lo = Math.floor(idx);
    const hi = Math.min(lo + 1, leftKeys.length - 1);
    const frac = idx - lo;
    const x = leftKeys[lo][0] + (leftKeys[hi][0] - leftKeys[lo][0]) * frac - 0.9;
    const y = leftKeys[lo][1] + (leftKeys[hi][1] - leftKeys[lo][1]) * frac;
    const z = (Math.random() - 0.5) * 0.15;
    targets.push(new THREE.Vector3(x, y, z));
  }

  // Right brace } is the mirrored left brace
  const rightCount = count - half;
  for (let i = 0; i < rightCount; i++) {
    const t = i / (rightCount - 1);
    const idx = t * (leftKeys.length - 1);
    const lo = Math.floor(idx);
    const hi = Math.min(lo + 1, leftKeys.length - 1);
    const frac = idx - lo;
    const x = -(leftKeys[lo][0] + (leftKeys[hi][0] - leftKeys[lo][0]) * frac) + 0.9;
    const y = leftKeys[lo][1] + (leftKeys[hi][1] - leftKeys[lo][1]) * frac;
    const z = (Math.random() - 0.5) * 0.15;
    targets.push(new THREE.Vector3(x, y, z));
  }

  return targets;
}

export default function AnimatedShape() {
  const pointsRef = useRef();
  const triggerTime = useRef(null);
  const inView = useRef(false);

  // Scroll-trigger: observe the #about section entering the viewport
  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) inView.current = true;
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const { scatterPositions, targetPositions, initialPositions, sizes } = useMemo(() => {
    const targets = generateBracketTargets(PARTICLE_COUNT);
    const scatter = [];
    const initial = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 3;
      const sx = r * Math.sin(phi) * Math.cos(theta);
      const sy = r * Math.sin(phi) * Math.sin(theta);
      const sz = r * Math.cos(phi);
      scatter.push(new THREE.Vector3(sx, sy, sz));
      initial[i * 3] = sx;
      initial[i * 3 + 1] = sy;
      initial[i * 3 + 2] = sz;
      sizes[i] = 1.0 + Math.random() * 1.5;
    }

    return { scatterPositions: scatter, targetPositions: targets, initialPositions: initial, sizes };
  }, []);

  // Stable refs for bufferAttribute args (prevents R3F reconciler from recreating)
  const posArgs = useMemo(() => [initialPositions, 3], [initialPositions]);
  const sizeArgs = useMemo(() => [sizes, 1], [sizes]);

  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#00d4aa") },
      uTime: { value: 0 },
      uProgress: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    let progress = 0;

    if (inView.current) {
      if (triggerTime.current === null) triggerTime.current = t;
      const elapsed = t - triggerTime.current;
      progress = easeInOutCubic(Math.min(elapsed / CONVERGE_DURATION, 1));
    }

    const posArr = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const s = scatterPositions[i];
      const tgt = targetPositions[i];
      let x = s.x + (tgt.x - s.x) * progress;
      let y = s.y + (tgt.y - s.y) * progress;
      let z = s.z + (tgt.z - s.z) * progress;

      // Gentle floating after full convergence
      if (progress >= 1) {
        const o = i * 0.013;
        x += Math.sin(t * 0.5 + o) * 0.015;
        y += Math.cos(t * 0.35 + o) * 0.02;
        z += Math.sin(t * 0.4 + o * 2) * 0.01;
      }

      posArr[i * 3] = x;
      posArr[i * 3 + 1] = y;
      posArr[i * 3 + 2] = z;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Subtle breathing scale after convergence
    if (progress >= 1) {
      pointsRef.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.02);
    }

    uniforms.uTime.value = t;
    uniforms.uProgress.value = progress;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={posArgs} />
        <bufferAttribute attach="attributes-aSize" args={sizeArgs} />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={`
          attribute float aSize;
          uniform float uProgress;
          varying float vAlpha;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (50.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
            vAlpha = 0.3 + uProgress * 0.7;
          }
        `}
        fragmentShader={`
          uniform vec3 uColor;
          uniform float uTime;
          varying float vAlpha;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = smoothstep(0.5, 0.0, d);
            float flicker = 0.92 + 0.08 * sin(uTime * 3.0 + gl_PointCoord.x * 10.0);
            gl_FragColor = vec4(uColor, glow * vAlpha * flicker);
          }
        `}
      />
    </points>
  );
}
