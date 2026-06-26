import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="my-20 px-4 md:px-8 border-b border-[#163041] relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute inset-0 animated-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 py-16">
        <div className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
          Neural automation await
        </div>
        <h2 className="font-mono text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-tight">
          Ready to scale your <br />
          <span className="text-gradient">Intelligence?</span>
        </h2>
        <p className="font-sans text-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Deploy custom enterprise agents and automate complex workflows. Shift your resources from repetitive operations to product engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-center font-sans text-sm font-bold tracking-wide uppercase bg-primary text-background hover:bg-primary/95 transition-all duration-200 cursor-pointer shadow-lg shadow-primary/10 hover:scale-[1.03] active:scale-[0.98]"
          >
            Build A Workflow
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-center font-sans text-sm font-bold tracking-wide uppercase bg-surface text-white border border-border hover:bg-surface/80 transition-all duration-200 cursor-pointer"
          >
            Talk to Architect
          </a>
        </div>
      </div>
    </section>
  );
}
