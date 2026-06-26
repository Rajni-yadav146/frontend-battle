import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "Vertex Labs",
      title: "Saved us months of R&D",
      comment: "The reliability of Armory is unmatched. We've migrated our entire neural pipeline to their edge nodes with zero downtime for our users.",
      rating: 5,
    },
    {
      company: "FlowState AI",
      title: "Armature that finally scales",
      comment: "Instead of building our own agent logic from scratch, we used Armory. We went from a prototype to a global production launch in weeks.",
      rating: 5,
    },
    {
      company: "Neural Sync",
      title: "Precision in every inference",
      comment: "The observability tools allow us to monitor agent accuracy in real-time. It has become a vital part of our model evaluation workflow.",
      rating: 5,
    },
    {
      company: "Sentinel Ops",
      title: "Enterprise-grade by default",
      comment: "The node-based builder is a game changer for our team. Even our non-technical stakeholders can now help map out complex agent behaviors.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 border-b border-border/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 animated-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-surface/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            Testimonials
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
            Loved by <span className="text-gradient">Engineers</span>
          </h2>
          <p className="font-sans text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            See how scaling startups and global enterprises use Armory to choreograph their neural pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="glassmorphism-card rounded-3xl p-8 border border-border bg-surface/5 hover:border-primary/20 hover:bg-surface/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-primary">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.007-.54 1.574l3.54 3.176-1.02 4.686c-.178.817.73 1.478 1.432 1.025L10 15.555l4.081 2.372c.702.453 1.61-.208 1.432-1.025l-1.02-4.687 3.54-3.175c.61-.567.272-1.507-.54-1.574l-4.752-.38-1.83-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <h3 className="font-mono text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  &ldquo;{test.title}&rdquo;
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed mb-6">
                  {test.comment}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  {test.company}
                </span>
                <span className="font-mono text-[9px] text-muted-foreground">VERIFIED CUSTOMER</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
