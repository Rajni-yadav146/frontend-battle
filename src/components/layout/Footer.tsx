import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksGroups = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Workflow Builder", href: "#workflow" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Case Studies", href: "#cases" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Security Protocols", href: "#" },
        { name: "System Status", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "GDPR Compliance", href: "#" },
        { name: "SLA Commitments", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-[#163041] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 py-16 my-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 flex flex-col justify-start">
            <a
              href="#"
              className="font-mono text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2 mb-6"
            >
              <span className="text-primary font-black">→</span> armory
            </a>
            <p className="font-sans text-muted text-sm leading-relaxed max-w-sm mb-6">
              Low-latency edge infrastructure for autonomous AI agents. Map out, run, and scale neural workflows in production.
            </p>
            <div className="flex gap-4">
              {/* Decorative social items */}
              {["github", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-colors duration-150 text-xs font-mono uppercase font-black"
                  aria-label={`Armory on ${social}`}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {linksGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-sans text-muted hover:text-white text-sm tracking-wide transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-sans text-muted text-xs">
            &copy; {currentYear} Armory Technologies, Inc. All rights reserved.
          </div>
          <div className="font-mono text-xs text-muted/50 flex items-center gap-2">
            <span>SECURE STACK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
