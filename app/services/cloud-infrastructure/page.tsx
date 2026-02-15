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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17l4.59-4.58L16 11l-6 6z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.611 3.611 0 0112 15.6z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
      </svg>
    ),
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
    tags: ["Cloud", "Data Center", "Uptime"],
    headline:
      "99.99% Uptime Achieved Through Tier-3 Data Center Modernization",
    gradient: "from-[#0B1F3A] via-[#1447E6] to-[#3B6EF0]",
    icon: (
      <svg className="w-16 h-16 text-white/30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
      </svg>
    ),
  },
  {
    tags: ["Cloud", "Automation", "Gov-Tech"],
    headline:
      "96% Faster Citizen Processing Enabled by Cloud-Based Municipal Automation",
    gradient: "from-[#6366F1] via-[#818CF8] to-[#A5B4FC]",
    icon: (
      <svg className="w-16 h-16 text-white/30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    tags: ["Infrastructure", "Cost", "Private Cloud"],
    headline:
      "38% Infrastructure Cost Reduction Delivered via Private Cloud Transformation",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#5EEAD4]",
    icon: (
      <svg className="w-16 h-16 text-white/30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
      </svg>
    ),
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
   SECTION 1.5 — STATS BANNER
   ================================================================ */

const stats = [
  { value: "20%", label: "Improvement In Case Tracking Efficiency" },
  { value: "35%", label: "Reduction In Patient Wait Times" },
  { value: "3×", label: "Faster Identification, Lowering Rehospitalizations" },
];

function StatsBanner() {
  return (
    <section className="bg-[#1447E6]/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7 lg:py-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center">
              <span
                className={`${GeistSans.className} text-white font-bold text-2xl md:text-3xl lg:text-[38px] tracking-tight`}
              >
                {stat.value}
              </span>
              <span className="text-white/70 text-xs md:text-sm mt-2 max-w-[260px] leading-relaxed italic">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
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
    return activeRing === key ? 1 : 0.2;
  };

  const labelIsActive = (key: RingKey) => activeRing === key;
  const labelIsDimmed = (key: RingKey) => activeRing !== null && activeRing !== key;

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
              className="cursor-pointer transition-all duration-300 group"
              style={{ opacity: labelIsDimmed("foundation") ? 0.25 : 1, transform: labelIsActive("foundation") ? "translateX(-4px)" : "translateX(0)" }}
              onMouseEnter={() => setActiveRing("foundation")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <h3
                className={`${GeistSans.className} font-semibold text-sm md:text-base mb-2 transition-colors duration-300`}
                style={{ color: labelIsActive("foundation") ? "#1447E6" : "#000" }}
              >
                {callouts[0].label}
              </h3>
              <ul className="space-y-1">
                {callouts[0].items.map((item) => (
                  <li
                    key={item}
                    className="text-xs md:text-sm leading-relaxed transition-colors duration-300"
                    style={{ color: labelIsActive("foundation") ? "#4B6FE0" : "#6B7280" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {/* Active indicator bar */}
              <div
                className="hidden lg:block mt-3 ml-auto h-0.5 rounded-full transition-all duration-300"
                style={{
                  width: labelIsActive("foundation") ? "40px" : "0px",
                  backgroundColor: "#1447E6",
                  opacity: labelIsActive("foundation") ? 1 : 0,
                }}
              />
            </div>

            {/* Callout 2 — Adaptive Loop */}
            <div
              className="cursor-pointer transition-all duration-300 group"
              style={{ opacity: labelIsDimmed("loop") ? 0.25 : 1, transform: labelIsActive("loop") ? "translateX(-4px)" : "translateX(0)" }}
              onMouseEnter={() => setActiveRing("loop")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <h3
                className={`${GeistSans.className} font-semibold text-sm md:text-base mb-2 transition-colors duration-300`}
                style={{ color: labelIsActive("loop") ? "#1447E6" : "#000" }}
              >
                {callouts[1].label}
              </h3>
              <ul className="space-y-1">
                {callouts[1].items.map((item) => (
                  <li
                    key={item}
                    className="text-xs md:text-sm leading-relaxed transition-colors duration-300"
                    style={{ color: labelIsActive("loop") ? "#4B6FE0" : "#6B7280" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="hidden lg:block mt-3 ml-auto h-0.5 rounded-full transition-all duration-300"
                style={{
                  width: labelIsActive("loop") ? "40px" : "0px",
                  backgroundColor: "#1447E6",
                  opacity: labelIsActive("loop") ? 1 : 0,
                }}
              />
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
              <line x1="0" y1="120" x2="168" y2="185" stroke="#1447E6" strokeWidth={activeRing === "foundation" ? 2 : 1.5} strokeOpacity={activeRing === "foundation" ? 0.85 : 0.25} strokeDasharray={activeRing === "foundation" ? "none" : "4 4"} className="transition-all duration-300" />
              <circle cx="168" cy="185" r={activeRing === "foundation" ? 5 : 3} fill="#1447E6" opacity={activeRing === "foundation" ? 1 : 0.3} className="transition-all duration-300" />

              {/* Adaptive Loop — left to middle ring */}
              <line x1="0" y1="310" x2="118" y2="290" stroke="#1447E6" strokeWidth={activeRing === "loop" ? 2 : 1.5} strokeOpacity={activeRing === "loop" ? 0.85 : 0.25} strokeDasharray={activeRing === "loop" ? "none" : "4 4"} className="transition-all duration-300" />
              <circle cx="118" cy="290" r={activeRing === "loop" ? 5 : 3} fill="#1447E6" opacity={activeRing === "loop" ? 1 : 0.3} className="transition-all duration-300" />

              {/* Outcomes — right callout to outer ring right edge */}
              <line x1="445" y1="210" x2="420" y2="210" stroke="#1447E6" strokeWidth={activeRing === "outcomes" ? 2 : 1.5} strokeOpacity={activeRing === "outcomes" ? 0.85 : 0.25} strokeDasharray={activeRing === "outcomes" ? "none" : "4 4"} className="transition-all duration-300" />
              <circle cx="420" cy="210" r={activeRing === "outcomes" ? 5 : 3} fill="#1447E6" opacity={activeRing === "outcomes" ? 1 : 0.3} className="transition-all duration-300" />
            </svg>

            {/* Outer ring — Outcomes (lightest blue fill) */}
            <div
              className="absolute inset-0 rounded-full border cursor-pointer transition-all duration-300 flex items-end justify-center pb-[6%]"
              style={{
                borderColor: `rgba(20,71,230,${activeRing === "outcomes" ? 0.6 : 0.1})`,
                borderWidth: activeRing === "outcomes" ? "2px" : "1px",
                backgroundColor: `rgba(20,71,230,${activeRing === "outcomes" ? 0.08 : 0.03})`,
                opacity: ringOpacity("outcomes"),
                boxShadow: activeRing === "outcomes" ? "0 0 30px rgba(20,71,230,0.2), inset 0 0 20px rgba(20,71,230,0.06)" : "none",
                transform: activeRing === "outcomes" ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={() => setActiveRing("outcomes")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <span
                className={`${GeistSans.className} text-[8px] md:text-[10px] font-semibold uppercase tracking-widest transition-all duration-300`}
                style={{ color: activeRing === "outcomes" ? "rgba(20,71,230,0.8)" : "rgba(20,71,230,0.4)" }}
              >
                Outcomes
              </span>
            </div>

            {/* Middle ring — Adaptive Loop (medium blue fill) */}
            <div
              className="absolute rounded-full border cursor-pointer transition-all duration-300 flex items-end justify-center pb-[5%]"
              style={{
                inset: "14%",
                borderColor: `rgba(20,71,230,${activeRing === "loop" ? 0.65 : 0.18})`,
                borderWidth: activeRing === "loop" ? "2px" : "1px",
                backgroundColor: `rgba(20,71,230,${activeRing === "loop" ? 0.12 : 0.06})`,
                opacity: ringOpacity("loop"),
                boxShadow: activeRing === "loop" ? "0 0 28px rgba(20,71,230,0.22), inset 0 0 18px rgba(20,71,230,0.07)" : "none",
                transform: activeRing === "loop" ? "scale(1.03)" : "scale(1)",
              }}
              onMouseEnter={() => setActiveRing("loop")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <span
                className={`${GeistSans.className} text-[8px] md:text-[10px] font-semibold uppercase tracking-widest transition-all duration-300`}
                style={{ color: activeRing === "loop" ? "rgba(20,71,230,0.85)" : "rgba(20,71,230,0.5)" }}
              >
                Adaptive Loop
              </span>
            </div>

            {/* Inner ring — Secure Digital Foundation (strongest blue fill) */}
            <div
              className="absolute rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center"
              style={{
                inset: "28%",
                borderColor: `rgba(20,71,230,${activeRing === "foundation" ? 0.7 : 0.3})`,
                borderWidth: activeRing === "foundation" ? "3px" : "2px",
                backgroundColor: `rgba(20,71,230,${activeRing === "foundation" ? 0.18 : 0.1})`,
                opacity: ringOpacity("foundation"),
                boxShadow: activeRing === "foundation" ? "0 0 32px rgba(20,71,230,0.25), inset 0 0 24px rgba(20,71,230,0.08)" : "none",
                transform: activeRing === "foundation" ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setActiveRing("foundation")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <span
                className={`${GeistSans.className} text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-center px-3 leading-tight transition-all duration-300`}
                style={{ color: activeRing === "foundation" ? "rgba(20,71,230,0.9)" : "rgba(20,71,230,0.7)" }}
              >
                Secure Digital<br />Foundation
              </span>
            </div>
          </div>

          {/* RIGHT: 1 callout */}
          <div className="order-3 mt-10 lg:mt-0 w-full lg:text-left flex flex-col justify-center lg:h-full">
            <div
              className="cursor-pointer transition-all duration-300 group"
              style={{ opacity: labelIsDimmed("outcomes") ? 0.25 : 1, transform: labelIsActive("outcomes") ? "translateX(4px)" : "translateX(0)" }}
              onMouseEnter={() => setActiveRing("outcomes")}
              onMouseLeave={() => setActiveRing(null)}
            >
              <h3
                className={`${GeistSans.className} font-semibold text-sm md:text-base mb-2 transition-colors duration-300`}
                style={{ color: labelIsActive("outcomes") ? "#1447E6" : "#000" }}
              >
                {callouts[2].label}
              </h3>
              <ul className="space-y-1">
                {callouts[2].items.map((item) => (
                  <li
                    key={item}
                    className="text-xs md:text-sm leading-relaxed transition-colors duration-300"
                    style={{ color: labelIsActive("outcomes") ? "#4B6FE0" : "#6B7280" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="hidden lg:block mt-3 h-0.5 rounded-full transition-all duration-300"
                style={{
                  width: labelIsActive("outcomes") ? "40px" : "0px",
                  backgroundColor: "#1447E6",
                  opacity: labelIsActive("outcomes") ? 1 : 0,
                }}
              />
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
    <section className="bg-gray-100/60 py-6 lg:py-8 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <span
              key={logo.abbr}
              className="text-gray-400 font-semibold text-sm md:text-base tracking-wide hover:text-gray-600 transition-colors duration-200"
            >
              {logo.abbr}
            </span>
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
    <section className="bg-gradient-to-b from-[#EEF2FF] via-[#E8EEFF] to-[#F0F4FF] py-20 lg:py-28">
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
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#1447E6]/10 flex items-center justify-center text-[#1447E6] shrink-0">
                  {svc.icon}
                </div>
                <h3
                  className={`${GeistSans.className} text-black font-semibold text-base lg:text-lg`}
                >
                  {svc.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs mb-5 leading-relaxed pl-[52px]">
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
    <section className="bg-white py-16 lg:py-22">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className={`${GeistSans.className} text-black font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl text-center mb-14 lg:mb-16`}
        >
          Proven Enterprise Outcomes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.headline}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col bg-white group"
            >
              {/* Image / gradient area */}
              <div className={`relative h-48 bg-gradient-to-br ${cs.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {cs.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] font-medium text-[#1447E6] bg-[#1447E6]/8 border border-[#1447E6]/15 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Headline */}
                <h3
                  className={`${GeistSans.className} text-black font-semibold text-sm lg:text-base leading-snug`}
                >
                  {cs.headline}
                </h3>
              </div>
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
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#E8EEFF] rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center overflow-hidden">
          {/* Subtle decorative curves */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
              <path d="M-50 300 Q200 200 400 250 T850 200" stroke="#1447E6" strokeWidth="0.8" strokeOpacity="0.15" />
              <path d="M-50 350 Q250 250 500 300 T850 250" stroke="#1447E6" strokeWidth="0.8" strokeOpacity="0.1" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2
              className={`${GeistSans.className} text-[#0B1F3A] font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-tight max-w-2xl mx-auto mb-10`}
            >
              Let&apos;s design a secure &amp; adaptive cloud infrastructure that keeps you resilient, no matter what changes next
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-7 py-3 bg-[#1447E6] hover:bg-[#1038c2] text-white font-semibold text-sm rounded-lg transition-colors duration-200 shadow-md shadow-[#1447E6]/20"
              >
                Start Your Transformation
              </a>
              <a
                href="#"
                className="px-7 py-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium text-sm rounded-lg transition-all duration-200 shadow-sm"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */

const footerColumns = [
  {
    title: "COMPANY",
    links: ["About", "Leadership", "Careers", "Contact"],
  },
  {
    title: "SERVICES",
    links: [
      "Infrastructure & Cloud",
      "ERP & Core Platforms",
      "Data & Intelligence",
      "Agentic Applications & Workflows",
      "Automation & Orchestration",
      "Security & Governance",
    ],
  },
  {
    title: "INDUSTRIES",
    links: ["Healthcare", "Insurance", "Automotive", "Manufacturing", "Supply Chain"],
  },
  {
    title: "RESOURCES",
    links: ["Case Studies", "Blog", "Point of View"],
  },
];

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:pr-8">
            <div className="mb-4">
              <Image
                src="/netlink-logo.png"
                alt="Netlink"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Engineering AI-first enterprises. Breaking silos. Connecting systems. Driving tangible outcomes.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className={`${GeistSans.className} text-[#0B1F3A] font-semibold text-xs tracking-wider mb-4`}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-[#1447E6] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Netlink. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
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
      <StatsBanner />
      <FrameworkSection />
      <TechStackBelt />
      <ServicesGrid />
      <CaseStudies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
