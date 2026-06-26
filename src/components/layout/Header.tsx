"use client";

import React, { useState, useEffect } from "react";
import { XMarkIcon } from "../ui/Icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Case Studies", href: "#cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#06141D]/90 backdrop-blur-md border-b border-[#163041] ${
        scrolled ? "py-4 shadow-lg shadow-shadow/20" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo - JetBrains Mono */}
        <a
          href="#"
          className="font-mono text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2 focus-visible:outline-none"
        >
          <span className="text-primary font-black">→</span> armory
        </a>

        {/* Desktop Navigation - Inter */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-white text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            className="px-6 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold tracking-wide uppercase bg-primary text-background hover:bg-primary/90 transition-all duration-200 cursor-pointer shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98]"
          >
            Build A Workflow
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-primary transition-colors focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <XMarkIcon size={24} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation Overlay - Zero-Dependency Slide/Fade */}
      <div
        className={`fixed inset-0 top-[65px] bg-background/95 backdrop-blur-md z-40 transition-all duration-350 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-white text-2xl font-bold tracking-wide uppercase transition-colors duration-150 focus-visible:outline-none"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="w-4/5 py-4 text-center rounded-2xl font-sans text-sm font-black tracking-wide uppercase bg-primary text-background hover:bg-primary/95 transition-all duration-200 shadow-lg shadow-primary/10 mt-4"
          >
            Build A Workflow
          </a>
        </nav>
      </div>
    </header>
  );
}
