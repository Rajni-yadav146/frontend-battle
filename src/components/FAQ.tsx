"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./ui/Icons";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the Armory platform?",
      answer: "Armory is a specialized infrastructure for building and deploying custom AI agents. We provide the neural logic and edge nodes required to run autonomous workflows at enterprise scale.",
    },
    {
      question: "Who is this platform designed for?",
      answer: "Armory is engineered for frontend developers, AI architects, and systems engineers who require robust, low-latency execution layers and a visual canvas to orchestrate complex model workflows.",
    },
    {
      question: "Does Armory provide pre-built agents?",
      answer: "Yes, we offer standard pre-built agent templates for email processing, data parsing, database mining, and Slack alert loops that you can activate and customize immediately.",
    },
    {
      question: "How does it differ from a standard chatbot?",
      answer: "Standard chatbots are simple reactive query-response nodes. Armory agents are state-preserving, multi-step visual workflows capable of autonomous logic branching, error recovery, scheduling, and database mutations.",
    },
    {
      question: "Can I use my own custom domain?",
      answer: "Absolutely. All visual endpoint triggers, webhook web handlers, and edge API routers can be mapped to your own custom domains with automated SSL generation.",
    },
    {
      question: "Is there a limit to how many agents I can build?",
      answer: "Your agent cap scales with your active tier. Starter supports up to 5 active agents, Professional supports up to 25, and Enterprise features unlimited active agent processes.",
    },
  ];

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-8 border-b border-border/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 animated-grid-bg opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-surface/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            Support
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
            Common <span className="text-gradient">Inquiries</span>
          </h2>
          <p className="font-sans text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about deploying, scaling, and securing your neural agents with Armory. Can&apos;t find an answer?{" "}
            <a href="#" className="text-primary hover:underline font-bold transition-all">
              Contact Us
            </a>
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" role="presentation">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`glassmorphism rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-primary/45 bg-surface/15" : "border-border bg-surface/5"
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-header-${idx}`}
                >
                  <span className="font-mono text-sm md:text-base font-bold text-white uppercase tracking-wider pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    size={18}
                    className={`text-muted transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Animated expandable content block */}
                <div
                  id={`faq-panel-${idx}`}
                  aria-labelledby={`faq-header-${idx}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 font-sans text-muted text-sm md:text-base leading-relaxed border-t border-border/10 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
