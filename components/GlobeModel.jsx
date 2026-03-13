"use client";
import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 60;
const CONNECTION_DIST = 2.2;

export default function GlobeModel() {
  const groupRef = useRef();
  const nodesRef = useRef();
  const mouseRef = useRef([0, 0]);

  const { nodePositions, edgeData, degrees } = useMemo(() => {
    const positions = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 1.3;
      positions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }

    const edges = [];
    const degrees = new Array(NODE_COUNT).fill(0);
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = positions[i][0] - positions[j][0];
        const dy = positions[i][1] - positions[j][1];
        const dz = positions[i][2] - positions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DIST) {
          edges.push({ from: i, to: j, phase: Math.random() * Math.PI * 2 });
          degrees[i]++;
          degrees[j]++;
        }
      }
    }

    return { nodePositions: positions, edgeData: edges, degrees };
  }, []);

  // Set up instanced mesh transforms (scale by connection degree)
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!nodesRef.current) return;
    const maxDeg = Math.max(...degrees, 1);
    for (let i = 0; i < NODE_COUNT; i++) {
      dummy.position.set(nodePositions[i][0], nodePositions[i][1], nodePositions[i][2]);
      const s = 0.6 + (degrees[i] / maxDeg) * 1.4;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      nodesRef.current.setMatrixAt(i, dummy.matrix);
    }
    nodesRef.current.instanceMatrix.needsUpdate = true;
  }, [nodePositions, degrees, dummy]);

  // Build line geometry with per-vertex phase for pulsing
  const lineGeo = useMemo(() => {
    const pos = new Float32Array(edgeData.length * 6);
    const phases = new Float32Array(edgeData.length * 2);
    edgeData.forEach((edge, idx) => {
      const a = nodePositions[edge.from];
      const b = nodePositions[edge.to];
      pos[idx * 6] = a[0]; pos[idx * 6 + 1] = a[1]; pos[idx * 6 + 2] = a[2];
      pos[idx * 6 + 3] = b[0]; pos[idx * 6 + 4] = b[1]; pos[idx * 6 + 5] = b[2];
      // Offset endpoints so pulse travels along the line
      phases[idx * 2] = edge.phase;
      phases[idx * 2 + 1] = edge.phase + 1.5;
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    return geo;
  }, [edgeData, nodePositions]);

  useEffect(() => {
    return () => lineGeo.dispose();
  }, [lineGeo]);

  // Node glow layer — soft halos around each node
  const { glowPositions, glowSizes } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    const sizes = new Float32Array(NODE_COUNT);
    const maxDeg = Math.max(...degrees, 1);
    nodePositions.forEach((p, i) => {
      pos[i * 3] = p[0];
      pos[i * 3 + 1] = p[1];
      pos[i * 3 + 2] = p[2];
      sizes[i] = 40 + (degrees[i] / maxDeg) * 80;
    });
    return { glowPositions: pos, glowSizes: sizes };
  }, [nodePositions, degrees]);

  const glowPosArgs = useMemo(() => [glowPositions, 3], [glowPositions]);
  const glowSizeArgs = useMemo(() => [glowSizes, 1], [glowSizes]);

  // Mouse & touch tracking for parallax
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current[0] = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current[1] = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onTouch = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current[0] = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseRef.current[1] = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  const lineUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#00d4aa") },
    }),
    []
  );

  const glowUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#00d4aa") },
    }),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    lineUniforms.uTime.value = t;

    if (groupRef.current) {
      // Slow continuous rotation
      groupRef.current.rotation.y += 0.003;
      // Mouse parallax with smooth lerp
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseRef.current[1] * 0.3,
        0.03
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouseRef.current[0] * 0.15,
        0.03
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Instanced nodes */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color="#00d4aa" toneMapped={false} />
      </instancedMesh>

      {/* Pulsing connection lines */}
      <lineSegments geometry={lineGeo}>
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={lineUniforms}
          vertexShader={`
            attribute float aPhase;
            uniform float uTime;
            varying float vBrightness;
            void main() {
              vBrightness = 0.15 + 0.85 * (0.5 + 0.5 * sin(uTime * 1.5 + aPhase));
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 uColor;
            varying float vBrightness;
            void main() {
              gl_FragColor = vec4(uColor * vBrightness, vBrightness * 0.5);
            }
          `}
        />
      </lineSegments>

      {/* Node glow halos */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={glowPosArgs} />
          <bufferAttribute attach="attributes-aGlowSize" args={glowSizeArgs} />
        </bufferGeometry>
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={glowUniforms}
          vertexShader={`
            attribute float aGlowSize;
            void main() {
              vec4 mv = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = aGlowSize / -mv.z;
              gl_Position = projectionMatrix * mv;
            }
          `}
          fragmentShader={`
            uniform vec3 uColor;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float alpha = smoothstep(0.5, 0.0, d) * 0.25;
              gl_FragColor = vec4(uColor, alpha);
            }
          `}
        />
      </points>

      {/* Subtle central ambient glow */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color="#00d4aa" transparent opacity={0.04} toneMapped={false} />
      </mesh>
    </group>
  );
}
