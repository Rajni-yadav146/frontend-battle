"use client";

import React, { useRef } from "react";
import { useIsMobile } from "../../hooks/useViewport";
import { 
  Cog8ToothIcon, 
  Cube16SolidIcon, 
  ArrowTrendingUpIcon, 
  SearchIcon,
  ChevronDownIcon
} from "../ui/Icons";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  gridClass: string;
}

const featuresData: FeatureItem[] = [
  {
    title: "Secure Guard",
    description: "We fortify your AI deployments with robust security protocols. Our team ensures every model adheres to strict data privacy standards.",
    icon: Cog8ToothIcon,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Agent Build",
    description: "Tailored AI agents designed for your specific needs. We develop custom logic and workflows that integrate deeply with your existing tools.",
    icon: Cube16SolidIcon,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Cloud Scale",
    description: "Infrastructure optimization for high-traffic AI apps. We ensure your systems remain fast, responsive, and ready for any level of demand.",
    icon: ArrowTrendingUpIcon,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Data Mining",
    description: "Transform raw information into actionable intelligence. We build the pipelines and vector stores that power your organization's future.",
    icon: SearchIcon,
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const isMobile = useIsMobile(768);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="features" 
      className="py-24 px-4 md:px-8 relative border-b border-border/40 overflow-hidden" 
      ref={containerRef}
    >
      {/* Decorative background grid and ambient light */}
      <div className="absolute inset-0 animated-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-surface/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            System capabilities
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
            Neural Agents that <span className="text-gradient">Understand</span>
          </h2>
          <p className="font-sans text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
          </p>
        </div>

        {isMobile ? (
          /* Mobile Accordion View */
          <div className="space-y-4" role="tablist" aria-label="Armory capabilities">
            {featuresData.map((feature, idx) => {
              const Icon = feature.icon;
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`glassmorphism rounded-2xl border transition-all duration-300 ${
                    isOpen ? "border-primary/40 bg-surface/20" : "border-border bg-surface/5"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`feature-panel-${idx}`}
                    id={`feature-header-${idx}`}
                    role="tab"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${
                        isOpen ? "bg-primary/20 text-primary" : "bg-surface/50 text-secondary"
                      }`}>
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-lg font-bold text-white tracking-wide uppercase">
                        {feature.title}
                      </span>
                    </div>
                    <ChevronDownIcon 
                      size={20} 
                      className={`text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  
                  <div 
                    id={`feature-panel-${idx}`}
                    aria-labelledby={`feature-header-${idx}`}
                    role="tabpanel"
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 font-sans text-muted text-base leading-relaxed">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop Bento Grid View */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuresData.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`glassmorphism-card rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-350 ease-out ${
                    feature.gridClass
                  } ${
                    isActive 
                      ? "border-primary/50 shadow-2xl shadow-shadow bg-surface/20 translate-y-[-4px]" 
                      : "hover:border-primary/30 border-border bg-surface/5"
                  }`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                >
                  {/* Decorative background glow for active item */}
                  <div 
                    className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 pointer-events-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`} 
                  />

                  <div>
                    <div className={`inline-flex p-4 rounded-2xl mb-8 transition-all duration-300 ${
                      isActive ? "bg-primary/20 text-primary scale-110" : "bg-surface/50 text-secondary"
                    }`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="font-mono text-xl font-bold text-white mb-4 tracking-wide uppercase">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="font-sans text-muted text-base leading-relaxed mt-auto relative z-10">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
