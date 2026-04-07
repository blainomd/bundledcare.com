"use client";

import { useState } from "react";

/* ── SVG icon components ── */

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function TrendingDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ── Main Page ── */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="font-sans">
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-navy/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight text-navy">
            bundled<span className="text-teal">care</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#bundle" className="hover:text-navy transition-colors">The Bundle</a>
            <a href="#how-it-works" className="hover:text-navy transition-colors">How It Works</a>
            <a href="#health-systems" className="hover:text-navy transition-colors">Health Systems</a>
            <a href="#families" className="hover:text-navy transition-colors">Families</a>
            <a href="#economics" className="hover:text-navy transition-colors">Economics</a>
            <a href="#contact" className="bg-navy text-white px-4 py-2 rounded-xl hover:bg-navy-light transition-colors">Partner With Us</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 text-teal px-5 py-2 rounded-full text-sm font-medium mb-8">
            <ShieldIcon className="w-4 h-4" />
            Worker-owned cooperative care
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-br from-slate-800 to-teal-700 bg-clip-text text-transparent">
            One subscription.<br />Complete home care.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Companion care, medical necessity documentation, advance care planning, and HSA/FSA-eligible wellness — bundled for health systems and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#health-systems" className="bg-navy text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-navy-light hover:shadow-xl hover:shadow-navy/20 transition-all duration-300">
              For Health Systems
            </a>
            <a href="#families" className="border-2 border-navy text-navy px-8 py-4 rounded-xl text-base font-medium hover:bg-navy hover:text-white transition-all duration-300">
              For Families
            </a>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-teal/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "$936", label: "avg. HSA savings/yr", accent: "text-emerald-400" },
            { number: "15%", label: "projected turnover", accent: "text-teal-300" },
            { number: "4-in-1", label: "bundled services", accent: "text-amber-400" },
            { number: "$59", label: "per month", accent: "text-emerald-400" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${metric.accent} mb-2`}>
                {metric.number}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE BUNDLE ── */}
      <section id="bundle" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">The Platform</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Bundle</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Four services that belong together. Integrated by design, not duct tape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Companion Care */}
            <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                <HeartIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Companion Care</h3>
              <p className="text-muted leading-relaxed mb-4">
                W-2 caregivers earning $25-28/hr with equity ownership. Not 1099 gig workers. Eyes in the home, trained and invested.
              </p>
              <div className="text-sm text-teal font-medium">$25-28/hr W-2 + equity</div>
            </div>

            {/* LMN */}
            <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                <FileTextIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Letters of Medical Necessity</h3>
              <p className="text-muted leading-relaxed mb-4">
                Physician-reviewed LMNs unlock HSA/FSA eligibility. Families save $936/yr on average. The subscription pays for itself day one.
              </p>
              <div className="text-sm text-teal font-medium">$936/yr average HSA savings</div>
            </div>

            {/* Advance Care Planning */}
            <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                <ShieldIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Advance Care Planning</h3>
              <p className="text-muted leading-relaxed mb-4">
                Legally binding advance directives completed through guided AI conversations. Not a form — a relationship built over time.
              </p>
              <div className="text-sm text-teal font-medium">Legally binding across state lines</div>
            </div>

            {/* ComfortCard */}
            <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                <WalletIcon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">ComfortCard</h3>
              <p className="text-muted leading-relaxed mb-4">
                Digital wellness wallet for HSA/FSA-eligible spending. QR-based, Apple Wallet compatible. Every dollar tracked and documented.
              </p>
              <div className="text-sm text-teal font-medium">HSA/FSA-eligible spending</div>
            </div>
          </div>

          {/* Connection line */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-full text-sm font-medium">
              <LinkIcon className="w-4 h-4" />
              All four services share one care record, one data feed, one relationship
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">The Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              From first conversation to complete care in three steps.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex-1 relative">
              <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5">1</div>
                <h3 className="text-lg font-semibold text-navy mb-2">Subscribe</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sign up for $59/mo. LMN generated immediately, unlocking $936/yr in HSA savings. Net positive from day one.
                </p>
              </div>
              {/* Arrow connector (hidden on mobile) */}
              <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 items-center justify-center">
                <ArrowRightIcon className="w-5 h-5 text-teal" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 relative md:mx-4 mt-4 md:mt-0">
              <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5">2</div>
                <h3 className="text-lg font-semibold text-navy mb-2">Match</h3>
                <p className="text-sm text-muted leading-relaxed">
                  AI-powered matching pairs you with a W-2 caregiver who fits your family. Not a stranger from a gig app.
                </p>
              </div>
              {/* Arrow connector (hidden on mobile) */}
              <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 items-center justify-center">
                <ArrowRightIcon className="w-5 h-5 text-teal" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 mt-4 md:mt-0">
              <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5">3</div>
                <h3 className="text-lg font-semibold text-navy mb-2">Care</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Companion care, advance directives, and ComfortCard activate. One relationship, one record, complete care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR HEALTH SYSTEMS / FOR SURGEONS ── */}
      <section id="health-systems" className="relative py-24 px-6 bg-surface overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">Who We Serve</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Replace 5 vendors with one partner.</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We operate the care. You get the data. FHIR-compatible, Omaha System outcomes, ready for your quality reporting.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Health Systems */}
            <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-navy/10 rounded-2xl flex items-center justify-center mb-6">
                <ChartIcon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">For Health Systems</h3>
              <ul className="space-y-4">
                {[
                  { icon: HeartIcon, text: "Reduce ER utilization with eyes in the home" },
                  { icon: ChartIcon, text: "Improve quality metrics with Omaha System outcomes" },
                  { icon: LinkIcon, text: "FHIR-compatible data feeds into your EHR" },
                  { icon: TrendingDownIcon, text: "Lower readmissions through continuity of care" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-teal" />
                    </div>
                    <span className="text-sm text-muted leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Surgeons */}
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <UsersIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Surgeons</h3>
              <ul className="space-y-4">
                {[
                  "Post-discharge companion care for your patients",
                  "Documented outcomes tied back to your procedures",
                  "Patient satisfaction and follow-up compliance",
                  "Zero admin burden — we operate, you get the data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-teal-300" />
                    </div>
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-8 md:p-12 text-center">
            <p className="text-white/60 text-sm uppercase tracking-[0.3em] font-semibold mb-3">The Operating Model</p>
            <p className="text-white text-2xl md:text-3xl font-semibold">
              &ldquo;We operate. You get the data.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── FOR FAMILIES ── */}
      <section id="families" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">For Families</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The subscription that pays for itself.</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              The app that comes with a caregiver.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl overflow-hidden max-w-lg mx-auto hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-navy to-navy-light p-8 text-center">
              <div className="text-white/70 text-sm font-medium mb-1">BundledCare Subscription</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl font-bold text-white">$59</span>
                <span className="text-white/60">/mo</span>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 font-bold text-sm">D1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Day One</p>
                    <p className="text-sm text-muted">LMN unlocks $936/yr in HSA savings. Net positive from the start.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal font-bold text-sm">M1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Month One</p>
                    <p className="text-sm text-muted">Caregiver matched. Companion care begins. Someone who knows you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 font-bold text-sm">Y1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Year One</p>
                    <p className="text-sm text-muted">Advance directives complete. Full care history documented. ComfortCard active.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ECONOMICS ── */}
      <section id="economics" className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">The Numbers</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Economics</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Side by side. Fragmented care vs. bundled care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-red-200/50 shadow-xl shadow-red-500/5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <XIcon className="w-5 h-5 text-red-400" />
                Without BundledCare
              </h3>
              <ul className="space-y-4">
                {[
                  "5 separate vendors to manage",
                  "$400-12,000/mo fragmented spending",
                  "No data integration between services",
                  "77% average caregiver turnover",
                  "No outcomes documentation",
                  "HSA/FSA savings left on the table",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <XIcon className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-teal shadow-xl shadow-teal-500/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-teal" />
                With BundledCare
              </h3>
              <ul className="space-y-4">
                {[
                  "One subscription, one partner",
                  "$59/mo integrated care platform",
                  "FHIR-compatible unified data feed",
                  "15% projected turnover (W-2 + equity)",
                  "Omaha System outcomes documentation",
                  "$936/yr HSA savings from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COOPERATIVE DIFFERENCE ── */}
      <section className="relative py-24 px-6 bg-navy overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-teal/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-navy-light/50 rounded-full blur-3xl translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <UsersIcon className="w-4 h-4" />
            The cooperative difference
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            When caregivers earn $25-28/hr W-2 + equity,<br className="hidden md:block" />
            77% turnover drops to 15%.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Worker-owned cooperative model. Caregivers stay because they are owners, not gig workers. Continuity of care is not a feature — it is a structural outcome of ownership.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "$25-28", label: "/hr W-2 wages" },
              { number: "15%", label: "projected turnover" },
              { number: "Equity", label: "caregiver ownership" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-teal-300 font-semibold mb-3">Get Started</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to bundle?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Whether you are a health system or a family, one conversation starts it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Health Systems */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">For Health Systems</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Replace fragmented vendor relationships with one integrated care partner. We bring the operations, the data, and the outcomes.
              </p>
              <a
                href="mailto:partnerships@bundledcare.com"
                className="inline-block bg-teal text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-light hover:shadow-lg hover:shadow-teal/30 transition-all duration-300"
              >
                Partner With Us
              </a>
            </div>

            {/* Families */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">For Families</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Join the waitlist for BundledCare. One subscription that pays for itself — companion care, LMN, advance directives, and wellness wallet.
              </p>
              {submitted ? (
                <div className="flex items-center gap-2 text-teal-300 font-medium">
                  <CheckIcon className="w-5 h-5" />
                  Thank you. We will be in touch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                  />
                  <button
                    type="submit"
                    className="bg-teal text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-light hover:shadow-lg hover:shadow-teal/30 transition-all duration-300 text-sm whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONNECTOR ── */}
      <section id="connector" className="relative py-24 px-6 bg-surface overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Get the BundledCare connector
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Add the SolvingHealth connector to Claude and get instant access to care tools, HSA savings estimates, and caregiver matching.
          </p>
          <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-6 text-left max-w-lg mx-auto mb-8">
            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">Claude Desktop MCP Config</p>
            <pre className="text-sm text-navy overflow-x-auto whitespace-pre font-mono leading-relaxed">{`"bundledcare": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/mcp-remote",
    "https://solvinghealth.com/mcp"]
}`}</pre>
          </div>
          <p className="text-muted text-sm">
            Don&apos;t have Claude? Get it free at{" "}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-teal font-medium hover:underline">claude.ai</a>
            {" "}or use the chat and voice widgets on this page.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-navy/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-semibold tracking-tight text-navy">
              bundled<span className="text-teal">care</span>
            </div>
            <p className="text-sm text-muted mt-1">Complete care. One subscription. Worker-owned.</p>
          </div>
          <div className="text-sm text-muted">
            A <a href="https://co-op.care" className="text-teal hover:underline">co-op.care</a> company
          </div>
        </div>
      </footer>
    </div>
  );
}
