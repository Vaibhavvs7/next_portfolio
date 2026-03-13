
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Background() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Variables for dimensions and animation state
    let width, height;
    let particles = [];
    let animationFrameId;
    let mouse = { x: null, y: null };
    
    // Configurable parameters
    const PARTICLE_COUNT = 150;     // Number of particles
    const CONNECTION_DISTANCE = 120; // How close particles must be to connect (in px)
    const SPEED_FACTOR = 0.3;       // Multiplier for random velocity
    const PARALLAX_DISTANCE = 300;  // Radius of mouse effect
    const PARALLAX_FORCE = 0.05;    // Strength of mouse pull

    // Setup function to initialize/resize canvas
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Create particles
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Mostly neutral, occasionally the teal accent
        const isAccent = Math.random() > 0.9;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * SPEED_FACTOR,
          vy: (Math.random() - 0.5) * SPEED_FACTOR,
          radius: Math.random() * 1.5 + 0.5,
          isAccent,
        });
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current !== 'light';

      // Update and draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Normal drifting movement
        p.x += p.vx;
        p.y += p.vy;

        // Mouse Parallax effect (localized gravity well)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distToMouse = Math.hypot(dx, dy);

          // Only affect particles within the parallax distance
          if (distToMouse < PARALLAX_DISTANCE) {
            // Stronger force closer to the mouse
            const force = (PARALLAX_DISTANCE - distToMouse) / PARALLAX_DISTANCE;
            
            p.x += dx * force * PARALLAX_FORCE * 0.1;
            p.y += dy * force * PARALLAX_FORCE * 0.1;
          }
        }

        // Screen boundary wrapping (keep particles on screen)
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent
          ? 'rgba(0, 212, 170, 0.7)'
          : isDark
            ? 'rgba(255, 255, 255, 0.4)'
            : 'rgba(30, 30, 30, 0.2)';
        ctx.fill();

        // Connect particles within distance
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < CONNECTION_DISTANCE) {
            // Opacity scales linearly based on distance
            const opacity = 1 - (dist / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // using theme-aware lines, applying opacity
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${opacity * 0.15})`
              : `rgba(30, 30, 30, ${opacity * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Request next frame
      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    const handleResize = () => init();
    
    // Only track mouse if within window
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    // Reset mouse when leaving the window so particles stop tracking
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Initial setup and start loop
    init();
    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] min-h-screen w-full bg-gray-50 dark:bg-zinc-950 overflow-hidden">
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
        style={{ pointerEvents: 'none' }} // Ensure canvas doesn't block clicks to underlying elements
      />

      {/* Animated Gradient Shapes - Retained for atmosphere context */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-zinc-200 via-gray-100 to-transparent dark:from-slate-800 dark:via-zinc-900 dark:to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] -right-[15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-zinc-200 via-gray-100 to-transparent dark:from-zinc-800 dark:via-slate-900 dark:to-transparent blur-3xl"
      />
    </div>
  );
}
