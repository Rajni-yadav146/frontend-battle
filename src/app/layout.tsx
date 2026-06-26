import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Armory | Enterprise AI-Driven Data Automation Platform",
  description: "Deploy custom enterprise agents and automate complex workflows with Armory. Scale your intelligence with low-latency, high-fidelity neural automation.",
  keywords: ["AI Automation", "Enterprise Agents", "Neural Workflows", "Visual AI Builder", "Data Automation", "Autonomous Execution", "SaaS Landing Page"],
  alternates: {
    canonical: "https://armory.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Armory | Enterprise AI-Driven Data Automation Platform",
    description: "Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with low-latency, high-fidelity neural automation.",
    url: "https://armory.ai",
    siteName: "Armory AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://armory.ai/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Armory AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armory | Enterprise AI-Driven Data Automation Platform",
    description: "Deploy custom enterprise agents and automate complex workflows with low-latency neural intelligence.",
    creator: "@armory_ai",
    images: ["https://armory.ai/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured schema data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Armory",
    "url": "https://armory.ai",
    "description": "Deploy custom enterprise agents and automate complex workflows with Armory, the low-latency, high-fidelity neural automation ecosystem.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "129.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
