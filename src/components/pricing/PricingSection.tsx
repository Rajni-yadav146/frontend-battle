"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePricingSelector, pricingStore, PricingState } from "../../lib/pricingStore";
import { calculatePrice, CurrencyCode, BillingCycle, PlanId } from "../../lib/pricingEngine";
import { LinkSolidIcon } from "../ui/Icons";

// 1. Isolated Price Display Component
// Subscribes only to currency and billing cycle changes, re-rendering ONLY when they change.
const PriceDisplay = React.memo(({ planId }: { planId: PlanId }) => {
  const currency = usePricingSelector((state) => state.currency);
  const billingCycle = usePricingSelector((state) => state.billingCycle);
  const { formattedPrice } = calculatePrice(planId, currency, billingCycle);

  return (
    <div className="flex items-baseline gap-1 animate-fade-in">
      <span className="font-mono text-4xl md:text-5xl font-black text-white tracking-tight">
        {formattedPrice}
      </span>
      <span className="font-sans text-muted text-sm font-medium">
        /{billingCycle === "monthly" ? "mo" : "mo"}
      </span>
    </div>
  );
});
PriceDisplay.displayName = "PriceDisplay";

// 2. Isolated Billing Toggle Component
// Only re-renders when billing cycle changes.
const BillingToggle = React.memo(() => {
  const billingCycle = usePricingSelector((state) => state.billingCycle);

  const toggleBilling = () => {
    pricingStore.setState({
      billingCycle: billingCycle === "monthly" ? "annual" : "monthly",
    });
  };

  return (
    <div className="inline-flex items-center gap-3 p-1.5 rounded-full border border-border bg-surface/10 glassmorphism">
      <button
        onClick={() => pricingStore.setState({ billingCycle: "monthly" })}
        className={`px-4 py-2 rounded-full font-sans text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
          billingCycle === "monthly"
            ? "bg-primary text-background shadow-md shadow-primary/20"
            : "text-muted hover:text-white"
        }`}
        aria-pressed={billingCycle === "monthly"}
      >
        Monthly
      </button>
      <button
        onClick={() => pricingStore.setState({ billingCycle: "annual" })}
        className={`relative px-4 py-2 rounded-full font-sans text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
          billingCycle === "annual"
            ? "bg-primary text-background shadow-md shadow-primary/20"
            : "text-muted hover:text-white"
        }`}
        aria-pressed={billingCycle === "annual"}
      >
        Annual
        <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-tight uppercase ${
          billingCycle === "annual" ? "bg-background/20 text-background" : "bg-primary/25 text-primary"
        }`}>
          -20%
        </span>
      </button>
    </div>
  );
});
BillingToggle.displayName = "BillingToggle";

// 3. Isolated Custom Accessible Currency Selector Dropdown Component
// Only re-renders when currency changes.
const CurrencySelector = React.memo(() => {
  const currentCurrency = usePricingSelector((state) => state.currency);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currencies: { code: CurrencyCode; name: string }[] = [
    { code: "USD", name: "USD ($)" },
    { code: "EUR", name: "EUR (€)" },
    { code: "INR", name: "INR (₹)" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: CurrencyCode) => {
    pricingStore.setState({ currency: code });
    setIsOpen(false);
  };

  // Keyboard navigation for dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between gap-2 px-4 py-2 rounded-full border border-border bg-surface/10 glassmorphism font-sans text-xs md:text-sm font-semibold text-white hover:border-primary/40 focus:outline-none transition-colors duration-200 cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select pricing currency"
      >
        <span>Currency: {currentCurrency}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-32 rounded-2xl border border-border bg-background shadow-xl focus:outline-none z-50 overflow-hidden"
          role="listbox"
          aria-label="Currency options"
        >
          {currencies.map((currency) => (
            <li key={currency.code}>
              <button
                onClick={() => handleSelect(currency.code)}
                className={`w-full px-4 py-2.5 text-left font-sans text-xs md:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                  currentCurrency === currency.code
                    ? "bg-primary text-background font-bold"
                    : "text-muted hover:bg-surface/20 hover:text-white"
                }`}
                role="option"
                aria-selected={currentCurrency === currency.code}
              >
                {currency.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
CurrencySelector.displayName = "CurrencySelector";

// 4. Main Static Pricing Section
// Wrapped in React.memo to ensure it NEVER re-renders unless its own static props change (which they don't).
export default React.memo(function PricingSection() {
  const plansData = [
    {
      id: "starter" as PlanId,
      name: "Starter",
      description: "Ideal for validation, prototyping, and small project automation.",
      features: [
        "Core automation engine",
        "Up to 5 active AI agents",
        "Standard response execution (2s)",
        "Email support",
        "Secure cloud pipelines",
      ],
      isPopular: false,
    },
    {
      id: "professional" as PlanId,
      name: "Professional",
      description: "Perfect for scaling startups and expanding product automation.",
      features: [
        "Everything in Starter",
        "Up to 25 active AI agents",
        "Low-latency edge execution (200ms)",
        "Priority 24/7 slack support",
        "Visual visual editor",
        "Advanced custom integrations",
      ],
      isPopular: true,
    },
    {
      id: "enterprise" as PlanId,
      name: "Enterprise",
      description: "Dedicated resources for large teams requiring custom execution models.",
      features: [
        "Everything in Professional",
        "Unlimited active AI agents",
        "Ultra-low latency execution (50ms)",
        "Dedicated success engineer",
        "Custom LLM fine-tuning & vector pipelines",
        "SLA: 99.99% operational uptime",
        "Strict on-prem or VPC options",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 md:px-8 border-b border-border/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 animated-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-surface/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase">
            Flexible Pricing
          </div>
          <h2 className="font-mono text-3xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
            Predictable <span className="text-gradient">Plans</span>
          </h2>
          <p className="font-sans text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the model that fits your operational volume. Shift plans or currencies dynamically at any time.
          </p>
        </div>

        {/* Pricing Selection Controls - Isolated Re-renders */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <BillingToggle />
          <CurrencySelector />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={`glassmorphism-card rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.isPopular
                  ? "border-primary bg-surface/15 ring-1 ring-primary/20 scale-[1.02] shadow-xl shadow-primary/5"
                  : "border-border bg-surface/5 hover:border-primary/25"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-background font-mono text-[10px] font-black uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-mono text-2xl font-black text-white mb-2 uppercase tracking-wide">
                  {plan.name}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Isolated price component */}
                <div className="mb-8">
                  <PriceDisplay planId={plan.id} />
                  <span className="font-sans text-[11px] text-muted-foreground block mt-1">
                    Billed annually (-20% applied) or monthly
                  </span>
                </div>

                <div className="border-t border-border/40 pt-6 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="font-sans text-muted text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  plan.isPopular
                    ? "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/10"
                    : "bg-surface text-white border border-border hover:bg-surface/80"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
