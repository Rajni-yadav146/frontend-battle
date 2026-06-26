import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/features/FeatureSection";
import WorkflowSection from "../components/WorkflowSection";
import CaseStudies from "../components/CaseStudies";
import PricingSection from "../components/pricing/PricingSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <FeatureSection />
        <WorkflowSection />
        <CaseStudies />
        <PricingSection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
