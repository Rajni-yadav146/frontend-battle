import React from "react";
import { LinkIcon } from "./ui/Icons";

export default function CaseStudies() {
  const partners = [
    { name: "Cigna", style: "font-mono font-black uppercase text-white/40 hover:text-white transition-colors cursor-default text-lg tracking-wider" },
    { name: "Aetna", style: "font-sans font-black italic uppercase text-white/40 hover:text-white transition-colors cursor-default text-xl tracking-tighter" },
    { name: "Anthem", style: "font-mono font-bold uppercase text-white/40 hover:text-white transition-colors cursor-default text-lg" },
    { name: "United Healthcare", style: "font-sans font-medium uppercase text-white/40 hover:text-white transition-colors cursor-default text-xs tracking-widest" },
    { name: "CVS Pharmacy", style: "font-serif italic font-bold text-white/40 hover:text-white transition-colors cursor-default text-sm" },
  ];

  const cases = [
    {
      year: "2026",
      client: "Cigna Smart Health Systems",
      description: "Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.",
      metric: "98% diagnostic accuracy",
    },
    {
      year: "2026",
      client: "Aetna Health Data Ecosystem",
      description: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights.",
      metric: "10x faster data mapping",
    },
    {
      year: "2026",
      client: "Anthem Neural Care Network",
      description: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent.",
      metric: "-85% support response latency",
    },
  ];

  return (
    <section id="cases" className="py-24 px-4 md:px-8 border-b border-border/40 relative overflow-hidden">
      {/* Logo Cloud Sub-section */}
      <div className="max-w-6xl mx-auto mb-24 border-b border-border/20 pb-16">
        <p className="font-mono text-[10px] text-muted text-center uppercase tracking-widest mb-10">
          Trusted by Enterprise Architects At
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {partners.map((partner, idx) => (
            <div key={idx} className={partner.style}>
              {partner.name}
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies grid */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            Proven integrations
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
            Proven <span className="text-gradient">Neural Solutions</span>
          </h2>
          <p className="font-sans text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cases.map((project, idx) => (
            <div
              key={idx}
              className="glassmorphism-card rounded-3xl p-8 flex flex-col justify-between border border-border bg-surface/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-muted mb-6">
                  <span>// {project.year}</span>
                  <span className="text-primary font-bold">{project.metric}</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {project.client}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-border/40 pt-6 mt-8 flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-200">
                <span>Explore audit report</span>
                <LinkIcon size={14} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
