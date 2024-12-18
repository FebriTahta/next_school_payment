'use client';

import { useEffect, useMemo, useState, useCallback } from "react";
import { Sparkle } from "lucide-react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
  particles: {
    number: { value: 20 },
    color: {
      value: ["#7c3aed", "#bae6fd", "#a78bfa", "#93c5fd", "#0284c7", "#fafafa", "#38bdf8"],
    },
    shape: {
      type: "star",
      options: { star: { sides: 4 } },
    },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 4 } },
    rotate: {
      value: { min: 0, max: 360 },
      enable: true,
      animation: { enable: true, speed: 10 },
    },
    move: { enable: true },
  },
  interactivity: { events: {} },
  fpsLimit: 120,
  background: { color: "transparent" },
  fullScreen: { enable: false },
  detectRetina: true,
};

export default function AiButton() {
  const [particleState, setParticleState] = useState<"loaded" | "ready">();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(loadFull);
      setParticleState("loaded");
    };
    initParticles();

    // Optional cleanup
    return () => {
      setParticleState(undefined);
    };
  }, []);

  const modifiedOptions = useMemo(
    () => ({
      ...particleOptions,
      autoPlay: isHovering,
    }),
    [isHovering]
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  return (
    <button
      className="group relative my-2 rounded-lg bg-gradient-to-r from-blue-300/30 via-blue-500/30 to-purple-500/30 p-1 text-white transition-transform hover:scale-110 active:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 px-6 py-2 text-white">
        <Sparkle className="size-6 animate-sparkle fill-white" />
        <span className="font-semibold text-sm">Works</span>
      </div>

      {!!particleState && (
        <Particles
            id="particles"
                className={`pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity ${
                particleState === "ready" ? "group-hover:opacity-100" : ""
                }`}
                particlesLoaded={() => Promise.resolve(setParticleState("ready"))} // Return a Promise here
                options={modifiedOptions}
            />      
      )}
    </button>
  );
}
