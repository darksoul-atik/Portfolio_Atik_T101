"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.22,
  vy: (Math.random() - 0.5) * 0.22,
  radius: Math.random() * 1.3 + 0.45,
  alpha: Math.random() * 0.22 + 0.06,
});

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let particles: Particle[] = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const amount = Math.min(60, Math.max(25, Math.floor(width / 30)));
      particles = Array.from({ length: amount }, () =>
        createParticle(width, height)
      );
    };

    const draw = () => {
      time += 0.003;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      const waveY = height * 0.45 + Math.sin(time * 1.2) * 20;
      const waveGradient = context.createLinearGradient(
        0,
        waveY - 100,
        width,
        waveY + 100
      );

      waveGradient.addColorStop(0, "rgba(255,255,255,0)");
      waveGradient.addColorStop(0.48, "rgba(255,255,255,0.015)");
      waveGradient.addColorStop(0.64, "rgba(100,116,139,0.02)");
      waveGradient.addColorStop(1, "rgba(255,255,255,0)");

      context.strokeStyle = waveGradient;
      context.lineWidth = 0.8;

      for (let i = 0; i < 4; i += 1) {
        context.beginPath();

        for (let x = 0; x <= width; x += 35) {
          const y =
            waveY + i * 25 + Math.sin(x * 0.006 + time * 2.1 + i) * 10;

          if (x === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.stroke();
      }

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -16) particle.x = width + 16;
        if (particle.x > width + 16) particle.x = -16;
        if (particle.y < -16) particle.y = height + 16;
        if (particle.y > height + 16) particle.y = -16;

        const glow = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 6
        );

        glow.addColorStop(0, `rgba(226,232,240,${particle.alpha})`);
        glow.addColorStop(0.45, `rgba(148,163,184,${particle.alpha * 0.15})`);
        glow.addColorStop(1, "rgba(255,255,255,0)");

        context.fillStyle = glow;
        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius * 6,
          0,
          Math.PI * 2
        );
        context.fill();

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            context.strokeStyle = `rgba(226,232,240,${
              (1 - distance / 110) * 0.035
            })`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      context.globalCompositeOperation = "source-over";
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-55" />

      {/* Ambient background glows using GPU-accelerated CSS float */}
      <div
        className="absolute left-[-14rem] top-[-12rem] h-[44rem] w-[44rem] rounded-full bg-slate-600/8 blur-[155px] animate-float"
        style={{ animationDuration: "22s" }}
      />

      <div
        className="absolute right-[-16rem] top-20 h-[48rem] w-[48rem] rounded-full bg-blue-950/20 blur-[165px] animate-float"
        style={{ animationDuration: "26s", animationDirection: "reverse" }}
      />

      <div
        className="absolute bottom-[-18rem] left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-slate-800/18 blur-[160px] animate-float"
        style={{ animationDuration: "24s" }}
      />

      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />

      <div className="noise-layer opacity-25" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.035),transparent_26%),linear-gradient(to_bottom,rgba(18,18,18,0.08)_0%,rgba(18,18,18,0.62)_70%,var(--color-ink)_100%)]" />
    </div>
  );
}