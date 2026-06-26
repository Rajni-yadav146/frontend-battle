"use client";

import React, { useRef, useEffect } from "react";
import { ArrowTrendingUpIcon, Cog8ToothIcon, Cube16SolidIcon } from "./ui/Icons";
import NodeGraphWorkspace from "./features/NodeGraphWorkspace";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Direct DOM manipulation of CSS variables for high-performance GPU parallax
    container.style.setProperty("--mx", `${x / 35}px`);
    container.style.setProperty("--my", `${y / 35}px`);
    container.style.setProperty("--mx-opposite", `${-x / 40}px`);
    container.style.setProperty("--my-opposite", `${-y / 40}px`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.style.setProperty("--mx", "0px");
    container.style.setProperty("--my", "0px");
    container.style.setProperty("--mx-opposite", "0px");
    container.style.setProperty("--my-opposite", "0px");
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-24 px-4 md:px-8 flex flex-col justify-center border-b border-border/40 overflow-hidden"
      style={{
        perspective: "1000px",
      } as React.CSSProperties}
    >
      {/* 1. Animated Gradient Mesh and Grid Background */}
      <div className="absolute inset-0 animated-grid-bg opacity-30 pointer-events-none z-0" />
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full bg-surface/20 blur-[100px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

      {/* Floating 3D parallax element: Gradient mesh */}
      <div
        className="absolute -right-20 top-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl opacity-50 pointer-events-none z-0 animate-mesh-slow"
        style={{
          transform: "translate3d(var(--mx-opposite, 0px), var(--my-opposite, 0px), 0)",
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Tech Pills Row */}
        <div 
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          {["Custom Agents", "Process Automation", "Data Intelligence"].map((pill, i) => (
            <span
              key={pill}
              className="px-3.5 py-1.5 rounded-full border border-border bg-surface/10 glassmorphism font-mono text-[10px] md:text-xs font-semibold text-secondary uppercase tracking-widest"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Hero Headlines */}
        <h1
          className="font-mono text-4xl md:text-7xl font-black text-center text-white uppercase tracking-tight max-w-4xl mb-8 leading-[1.05] animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          Power your <br className="md:hidden" />
          future with <span className="text-gradient">AI</span>
        </h1>

        <p
          className="font-sans text-muted text-center text-base md:text-xl max-w-2xl mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Armory today.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full sm:w-auto animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-center font-sans text-sm font-bold tracking-wide uppercase bg-primary text-background hover:bg-primary/95 transition-all duration-200 cursor-pointer shadow-lg shadow-primary/10 hover:scale-[1.03] active:scale-[0.98]"
          >
            Build A Workflow
          </a>
          <a
            href="#workflow"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-center font-sans text-sm font-bold tracking-wide uppercase bg-surface text-white border border-border hover:bg-surface/80 transition-all duration-200 cursor-pointer"
          >
            AI Strategy
          </a>
        </div>

        {/* 2. Interactive AI Dashboard Mockup (Visual Workflow Editor) */}
        <div
          className="w-full max-w-[960px] animate-slide-up"
          style={{
            transform: "translate3d(var(--mx, 0px), var(--my, 0px), 0) rotateX(1.5deg)",
            transition: "transform 0.15s ease-out",
            animationDelay: "500ms",
            perspective: "1000px",
          }}
        >
          <NodeGraphWorkspace />
        </div>

      </div>
    </section>
  );
}
