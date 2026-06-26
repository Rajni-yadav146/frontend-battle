import React from "react";
import { LinkIcon, ArrowPathIcon } from "./ui/Icons";

export default function WorkflowSection() {
  const workflowFeatures = [
    {
      title: "Infinite Visual Canvas",
      description: "Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.",
    },
    {
      title: "Autonomous Execution",
      description: "Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.",
    },
    {
      title: "End-to-End Encryption",
      description: "Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.",
    },
    {
      title: "Production-Ready Stack",
      description: "Connect core business platforms and internal services through secure, ready integrations that scale with your volume.",
    },
  ];

  return (
    <section id="workflow" className="py-24 px-4 md:px-8 border-b border-border/40 relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute inset-0 animated-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Copy and Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase self-start">
              Workflow choreography
            </div>
            <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
              No Complex Coding. <br className="hidden md:block" />
              Just <span className="text-gradient">Pure Logic.</span>
            </h2>
            <p className="font-sans text-muted text-base md:text-lg mb-12 leading-relaxed">
              Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. Connect models, filters, and actions in seconds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {workflowFeatures.map((feat, idx) => (
                <div key={idx} className="glassmorphism p-6 rounded-2xl border border-border/80 hover:border-primary/30 transition-all duration-200">
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-2">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-muted text-xs leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Product Statistics & Node Health Dashboard */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md glassmorphism-card rounded-3xl p-6 border border-border relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  PRODUCT STATISTICS
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">REFRESH // REAL-TIME</span>
              </div>

              {/* Statistics grid */}
              <div className="space-y-6">
                
                {/* Metric 1 */}
                <div className="p-4 bg-surface/10 rounded-2xl border border-border/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-muted text-xs font-semibold">Average Execution Speed</span>
                    <span className="font-mono text-[10px] text-primary font-bold">OPTIMIZED</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono text-3xl font-black text-white">48</span>
                    <span className="font-mono text-sm text-primary font-bold">ms</span>
                  </div>
                  <div className="w-full bg-surface/35 h-1.5 rounded-full overflow-hidden mt-3">
                    <div className="bg-primary h-full rounded-full w-[92%] animate-pulse" />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 bg-surface/10 rounded-2xl border border-border/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-muted text-xs font-semibold">Uptime SLA Compliance</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold">EXCEEDED</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono text-3xl font-black text-white">99.999</span>
                    <span className="font-mono text-sm text-emerald-400 font-bold">%</span>
                  </div>
                  <div className="w-full bg-surface/35 h-1.5 rounded-full overflow-hidden mt-3">
                    <div className="bg-emerald-500 h-full rounded-full w-[99.9%] animate-pulse" />
                  </div>
                </div>

                {/* Live Node Status feed */}
                <div className="border border-border/40 rounded-2xl p-4 bg-background/50 font-mono text-[10px] space-y-2.5">
                  <div className="text-muted border-b border-border/20 pb-1.5 flex items-center justify-between">
                    <span>NODE INDEX</span>
                    <span>LATENCY</span>
                    <span>STATUS</span>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span>US-EAST-01_EDGE</span>
                    <span className="text-primary">12ms</span>
                    <span className="text-emerald-500 font-sans font-bold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span>EU-WEST-02_EDGE</span>
                    <span className="text-primary">28ms</span>
                    <span className="text-emerald-500 font-sans font-bold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span>AP-SOUTH-01_EDGE</span>
                    <span className="text-primary">44ms</span>
                    <span className="text-emerald-500 font-sans font-bold">ACTIVE</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
