"use client";

import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ================================================================
   NAV DATA
   ================================================================ */

const navLinks = [
  { label: "Services", hasDropdown: true },
  { label: "Industries", hasDropdown: true },
  { label: "Partnerships", hasDropdown: true },
  { label: "About Us", hasDropdown: true },
  { label: "Careers", hasDropdown: true },
];

/* ================================================================
   NAVBAR
   ================================================================ */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white">
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/netlink-logo.png"
            alt="Netlink"
            width={120}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors duration-150"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  className="w-3.5 h-3.5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white rounded-md bg-[#1447E6] hover:bg-[#1038c2] transition-all duration-200 shadow-md shadow-[#1447E6]/20"
          >
            Let&apos;s Talk
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-gray-500 hover:text-black transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gray-200" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center justify-between py-3 text-sm text-gray-600 hover:text-black border-b border-gray-100 last:border-0 transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center gap-1.5 mt-4 py-3 text-sm font-semibold text-white rounded-full bg-[#1447E6] sm:hidden"
            >
              Let&apos;s Talk
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ================================================================
   DATA
   ================================================================ */

const trustBadges = [
  { label: "28+ Years" },
  { label: "200+ Certifications" },
  { label: "50+ Awards" },
];

const frameworkData = [
  {
    ring: "inner",
    label: "Secure Digital Foundation",
    items: [
      "Cloud Platforms",
      "Compute & Storage",
      "Networking & Connectivity",
      "Security & Identity",
      "Resilience & Continuity",
    ],
  },
  {
    ring: "middle",
    label: "Adaptive Loop",
    items: [
      "Monitoring & Signal (Sense)",
      "Pattern & Analytics (Interpretation)",
      "Automation & Orchestration (Act)",
      "Governance & Feedback (Optimize)",
    ],
  },
  {
    ring: "outer",
    label: "Outcomes",
    items: [
      "Mission-Critical Infrastructure Uptime",
      "Faster Processing",
      "Infrastructure Cost Reduction",
      "Lower Customer Churn",
    ],
  },
];

const logos = [
  { name: "AWS", abbr: "AWS" },
  { name: "Oracle Cloud (OCI)", abbr: "OCI" },
  { name: "Microsoft Azure", abbr: "Azure" },
  { name: "Google Cloud", abbr: "GCP" },
  { name: "Kubernetes", abbr: "K8s" },
  { name: "Cisco / Network", abbr: "Cisco" },
];

const services = [
  {
    title: "Cloud & Infrastructure Engineering",
    descriptor: "Elastic, telemetry-driven cloud architecture",
    bullets: [
      "Elastic, telemetry-driven cloud architecture",
      "Cloud migration & modernization",
      "Hybrid architecture design",
      "Compute & storage deployment",
      "Multi-region infrastructure",
    ],
  },
  {
    title: "Secure Connectivity & Networking",
    descriptor: "Policy-aware intelligent network fabric",
    bullets: [
      "Policy-aware intelligent network fabric",
      "Secure WAN/SD-WAN design",
      "Edge & hybrid connectivity",
      "CDN & performance acceleration",
      "Zero-trust network policy",
    ],
  },
  {
    title: "Security & Compliance Architecture",
    descriptor: "Continuous risk-aware security framework",
    bullets: [
      "Continuous risk-aware security framework",
      "Identity & access governance",
      "Encryption & key management",
      "Continuous compliance monitoring",
      "Secure hosting & managed protection",
    ],
  },
  {
    title: "Data Infrastructure & Observability",
    descriptor: "Real-time signal-driven data platforms",
    bullets: [
      "Real-time signal-driven data platforms",
      "Data lake & warehouse engineering",
      "Real-time ingestion & pipelines",
      "Observability & metrics dashboards",
      "Predictive health indicators",
    ],
  },
  {
    title: "Automation & Orchestration",
    descriptor: "Event-triggered autonomous workflow orchestration",
    bullets: [
      "Event-triggered autonomous workflow orchestration",
      "Policy-based scaling & response",
      "Self-healing infrastructure",
      "CI/CD pipeline alignment",
    ],
  },
  {
    title: "Governance, Optimization & Continuity",
    descriptor: "FinOps & predictive cost governance",
    bullets: [
      "FinOps & predictive cost governance",
      "Performance benchmarking",
      "Disaster recovery & continuity planning",
      "Operational SLA enforcement",
    ],
  },
];

const caseStudies = [
  {
    label: "Data Center Managed Services",
    headline:
      "99.99% Uptime Achieved Through Tier-3 Data Center Modernization",
  },
  {
    label: "Cloud Implementation",
    headline:
      "96% Faster Citizen Processing Enabled by Cloud-Based Municipal Automation",
  },
  {
    label: "Infrastructure Transformation",
    headline:
      "38% Infrastructure Cost Reduction Delivered via Private Cloud Transformation",
  },
];

/* ================================================================
   SECTION 1 — HERO
   ================================================================ */

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1
          className={`${GeistSans.className} text-black font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto`}
        >
          Adaptive Cloud &amp; Infrastructure for Resilient Enterprises
        </h1>

        <p className="text-gray-500 text-base lg:text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Building secure &amp; compliant cloud foundations that simply adapt
          and evolve.
        </p>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 2 — FRAMEWORK (CONCENTRIC CIRCLES + CALLOUTS)
   ================================================================ */

type RingKey = "foundation" | "loop" | "outcomes";

const callouts: { key: RingKey; label: string; items: string[] }[] = [
  { key: "foundation", label: "Secure Digital Foundation", items: frameworkData[0].items },
  { key: "loop", label: "Adaptive Loop", items: frameworkData[1].items },
  { key: "outcomes", label: "Outcomes", items: frameworkData[2].items },
];

function FrameworkSection() {
  const [activeRing, setActiveRing] = useState<RingKey | null>(null);

  const ringOpacity = (key: RingKey) => {
    if (!activeRing) return 1;
    return activeRing === key ? 1 : 0.25;
  };

  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`${GeistSans.className} text-black font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl`}
        >
          Our framework turns foundational cloud infra into connected feedback
          systems that improve over time
        </h2>

        {/* 3-column layout: left callouts | center circles | right callout */}
        <div className="mt-16 lg:mt-20 flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-12 xl:gap-16 items-center">

          {/* LEFT: 2 callouts stacked */}
          <div className="order-2 lg:order-1 flex flex-col gap-12 mt-10 lg:mt-0 w-full lg:text-right">
            {/* Callout 1 — Secure Digital Foundation */}
            <div
              className="cursor-default transition-opacity duration-300"
              style={{ opacity: activeRing && activeRing !== "foundation" ? 0.3 : 1 }}
              onMouseEnter={() => setActiveRing("foundation")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <h3 className={`${GeistSans.className} text-black font-semibold text-sm md:text-base mb-2`}>
                {callouts[0].label}
              </h3>
              <ul className="space-y-1">
                {callouts[0].items.map((item) => (
                  <li key={item} className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Callout 2 — Adaptive Loop */}
            <div
              className="cursor-default transition-opacity duration-300"
              style={{ opacity: activeRing && activeRing !== "loop" ? 0.3 : 1 }}
              onMouseEnter={() => setActiveRing("loop")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <h3 className={`${GeistSans.className} text-black font-semibold text-sm md:text-base mb-2`}>
                {callouts[1].label}
              </h3>
              <ul className="space-y-1">
                {callouts[1].items.map((item) => (
                  <li key={item} className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CENTER: Concentric circles */}
          <div className="order-1 lg:order-2 relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] shrink-0">

            {/* SVG leader lines (desktop only) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block overflow-visible"
              viewBox="0 0 420 420"
            >
              {/* Foundation — left to inner ring */}
              <line x1="0" y1="120" x2="168" y2="185" stroke="#1447E6" strokeWidth="1.5" strokeOpacity={activeRing === "foundation" ? 0.7 : 0.35} strokeDasharray="4 4" className="transition-all duration-300" />
              <circle cx="168" cy="185" r="3" fill="#1447E6" opacity={activeRing === "foundation" ? 0.8 : 0.4} className="transition-all duration-300" />

              {/* Adaptive Loop — left to middle ring */}
              <line x1="0" y1="310" x2="118" y2="290" stroke="#1447E6" strokeWidth="1.5" strokeOpacity={activeRing === "loop" ? 0.7 : 0.35} strokeDasharray="4 4" className="transition-all duration-300" />
              <circle cx="118" cy="290" r="3" fill="#1447E6" opacity={activeRing === "loop" ? 0.8 : 0.4} className="transition-all duration-300" />

              {/* Outcomes — right callout to outer ring right edge */}
              <line x1="500" y1="210" x2="420" y2="210" stroke="#1447E6" strokeWidth="1.5" strokeOpacity={activeRing === "outcomes" ? 0.7 : 0.35} strokeDasharray="4 4" className="transition-all duration-300" />
              <circle cx="420" cy="210" r="3" fill="#1447E6" opacity={activeRing === "outcomes" ? 0.8 : 0.4} className="transition-all duration-300" />
            </svg>

            {/* Outer ring — Outcomes (lightest blue fill) */}
            <div
              className="absolute inset-0 rounded-full border transition-all duration-300 flex items-end justify-center pb-[6%]"
              style={{
                borderColor: `rgba(20,71,230,${activeRing === "outcomes" ? 0.35 : 0.1})`,
                backgroundColor: `rgba(20,71,230,${activeRing === "outcomes" ? 0.06 : 0.03})`,
                opacity: ringOpacity("outcomes"),
                boxShadow: activeRing === "outcomes" ? "0 0 20px rgba(20,71,230,0.12)" : "none",
              }}
            >
              <span className={`${GeistSans.className} text-[#1447E6]/40 text-[8px] md:text-[10px] font-semibold uppercase tracking-widest`}>
                Outcomes
              </span>
            </div>

            {/* Middle ring — Adaptive Loop (medium blue fill) */}
            <div
              className="absolute rounded-full border transition-all duration-300 flex items-end justify-center pb-[5%]"
              style={{
                inset: "14%",
                borderColor: `rgba(20,71,230,${activeRing === "loop" ? 0.4 : 0.18})`,
                backgroundColor: `rgba(20,71,230,${activeRing === "loop" ? 0.1 : 0.06})`,
                opacity: ringOpacity("loop"),
                boxShadow: activeRing === "loop" ? "0 0 16px rgba(20,71,230,0.15)" : "none",
              }}
            >
              <span className={`${GeistSans.className} text-[#1447E6]/50 text-[8px] md:text-[10px] font-semibold uppercase tracking-widest`}>
                Adaptive Loop
              </span>
            </div>

            {/* Inner ring — Secure Digital Foundation (strongest blue fill) */}
            <div
              className="absolute rounded-full border-2 transition-all duration-300 flex items-center justify-center"
              style={{
                inset: "28%",
                borderColor: `rgba(20,71,230,${activeRing === "foundation" ? 0.5 : 0.3})`,
                backgroundColor: `rgba(20,71,230,${activeRing === "foundation" ? 0.14 : 0.1})`,
                opacity: ringOpacity("foundation"),
                boxShadow: activeRing === "foundation" ? "0 0 24px rgba(20,71,230,0.18)" : "none",
              }}
            >
              <span className={`${GeistSans.className} text-[#1447E6]/70 text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-center px-3 leading-tight`}>
                Secure Digital<br />Foundation
              </span>
            </div>
          </div>

          {/* RIGHT: 1 callout */}
          <div className="order-3 mt-10 lg:mt-0 w-full lg:text-left flex flex-col justify-center lg:h-full">
            <div
              className="cursor-default transition-opacity duration-300"
              style={{ opacity: activeRing && activeRing !== "outcomes" ? 0.3 : 1 }}
              onMouseEnter={() => setActiveRing("outcomes")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <h3 className={`${GeistSans.className} text-black font-semibold text-sm md:text-base mb-2`}>
                {callouts[2].label}
              </h3>
              <ul className="space-y-1">
                {callouts[2].items.map((item) => (
                  <li key={item} className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ================================================================
   SECTION 3 — TECH STACK LOGO BELT
   ================================================================ */

function TechStackBelt() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`${GeistSans.className} text-black font-semibold text-lg md:text-xl text-center mb-10`}
        >
          Enterprise cloud platforms we build on
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.abbr}
              className="flex items-center justify-center w-28 h-16 md:w-36 md:h-20 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className="text-center">
                <span className="block text-black font-semibold text-sm md:text-base tracking-wide">
                  {logo.abbr}
                </span>
                {logo.abbr !== logo.name && (
                  <span className="block text-gray-400 text-[10px] md:text-xs mt-0.5 leading-tight">
                    {logo.name.length > 18
                      ? logo.name.slice(0, 18) + "…"
                      : logo.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 4 — SERVICES GRID
   ================================================================ */

function ServicesGrid() {
  return (
    <section className="bg-[#F7F8FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`${GeistSans.className} text-black font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl text-center mb-14 lg:mb-16`}
        >
          Cognitive Cloud &amp; Infrastructure Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white border border-gray-200 rounded-xl p-7 lg:p-8 hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <h3
                className={`${GeistSans.className} text-black font-semibold text-base lg:text-lg mb-1.5`}
              >
                {svc.title}
              </h3>
              <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                {svc.descriptor}
              </p>
              <ul className="space-y-2">
                {svc.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1447E6] shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 5 — CASE STUDIES
   ================================================================ */

function CaseStudies() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`${GeistSans.className} text-black font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl text-center mb-14 lg:mb-16`}
        >
          Proven Enterprise Outcomes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.label}
              className="border border-gray-200 rounded-xl p-7 lg:p-8 hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col"
            >
              <span className="text-[#1447E6] text-xs font-semibold uppercase tracking-wider mb-4">
                {cs.label}
              </span>
              <h3
                className={`${GeistSans.className} text-black font-semibold text-base lg:text-lg leading-snug`}
              >
                {cs.headline}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION 6 — PHILOSOPHY & FINAL CTA
   ================================================================ */

function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-[#0B1F3A] to-[#071224] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
            The future belongs to enterprises whose systems can sense, respond,
            and evolve.
          </p>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            With Netlink, your cloud, network, and security foundation becomes a
            living ecosystem — continuously adapting, reducing risk, and scaling
            with enterprise demand.
          </p>
        </div>

        {/* Partnership CTA */}
        <h2
          className={`${GeistSans.className} text-white font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl mx-auto mb-10`}
        >
          Let&apos;s design a secure digital foundation that keeps you
          resilient, no matter what changes next
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3.5 bg-[#1447E6] hover:bg-[#1038c2] text-white font-semibold text-sm rounded-md transition-colors duration-200">
            Build Adaptive Infrastructure
          </button>
          <button className="px-8 py-3.5 border border-white/25 hover:border-white/50 text-white font-medium text-sm rounded-md transition-colors duration-200">
            Talk to Netlink
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PAGE EXPORT
   ================================================================ */

export default function CloudInfrastructurePage() {
  return (
    <main className={inter.className}>
      <Navbar />
      <HeroSection />
      <FrameworkSection />
      <TechStackBelt />
      <ServicesGrid />
      <CaseStudies />
      <FinalCTA />
    </main>
  );
}
