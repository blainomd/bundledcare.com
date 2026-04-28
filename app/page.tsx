"use client";

import { useState } from "react";
import EpisodeCalculator from "./components/EpisodeCalculator";

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

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="13" rx="2" />
      <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

/* ── Contact Form ── */

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", org: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.org) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
          <CheckIcon className="w-6 h-6 text-teal" />
        </div>
        <p className="text-navy font-semibold text-lg">Message received.</p>
        <p className="text-muted text-sm">A member of our team will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Your Name</label>
          <input
            type="text"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Organization <span className="text-red-400">*</span></label>
          <input
            type="text"
            required
            placeholder="Health system or hospital"
            value={formData.org}
            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Work Email <span className="text-red-400">*</span></label>
        <input
          type="email"
          required
          placeholder="you@hospital.org"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">What would you like to discuss?</label>
        <textarea
          rows={3}
          placeholder="CJR-X readiness, TEAM model alignment, readmission reduction goals..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-navy text-white px-6 py-4 rounded-xl font-medium hover:bg-navy-light hover:shadow-xl hover:shadow-navy/20 transition-all duration-300 text-sm"
      >
        Request a Conversation
      </button>
    </form>
  );
}

/* ── Main Page ── */

export default function Home() {
  return (
    <div className="font-sans">
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-navy/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight text-navy">
            bundled<span className="text-teal">care</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#episode-model" className="hover:text-navy transition-colors">Episode Model</a>
            <a href="#cjrx" className="hover:text-navy transition-colors">CJR-X / TEAM</a>
            <a href="#readmissions" className="hover:text-navy transition-colors">Readmissions</a>
            <a href="#economics" className="hover:text-navy transition-colors">Economics</a>
            <a href="#contact" className="bg-navy text-white px-4 py-2 rounded-xl hover:bg-navy-light transition-colors">For Health Systems</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 text-teal px-5 py-2 rounded-full text-sm font-medium mb-8">
            <BuildingIcon className="w-4 h-4" />
            Value-based surgical bundles · CJR-X &amp; TEAM aligned
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-br from-slate-800 to-teal-700 bg-clip-text text-transparent">
            The price of your episode.<br />Known before day one.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            Surgical bundles work when every dollar has an address.
          </p>
          <p className="text-base text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            BundledCare adds physician-attested home care to your 90-day episode — $177 flat, tracked in real time, ICD-coded at discharge. No surprise costs. No readmission roulette.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-navy text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-navy-light hover:shadow-xl hover:shadow-navy/20 transition-all duration-300">
              Request a Conversation
            </a>
            <a href="#cjrx" className="border-2 border-navy text-navy px-8 py-4 rounded-xl text-base font-medium hover:bg-navy hover:text-white transition-all duration-300">
              CJR-X and TEAM Alignment
            </a>
          </div>
        </div>
      </section>

      {/* ── EXAMPLE BUNDLE ── */}
      <section id="example-bundle" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">Example Bundle</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Total Knee Replacement — 90-Day Episode</h2>
            <p className="text-muted text-base max-w-2xl mx-auto">
              A populated example of what one BundledCare episode looks like, end to end. Drop-in pricing for a CJR-X joint replacement.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-teal-100/60 shadow-xl shadow-teal-500/5 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Left column — price */}
              <div className="bg-gradient-to-br from-navy to-navy-light p-8 md:p-10 text-white flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-teal-300 font-semibold mb-3">Bundle Price</div>
                  <div className="text-5xl md:text-6xl font-bold mb-1">$177</div>
                  <div className="text-white/70 text-sm mb-6">per patient, full 90-day episode</div>
                  <div className="text-xs text-white/50 leading-relaxed">
                    Billed as $59/month × 3 months. One avoidable readmission ($15K+ avg) funds 84+ episodes.
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-xs uppercase tracking-wider text-teal-300 mb-1">CMS Episode Reference</div>
                  <div className="text-sm text-white/80">CJR-X · MS-DRG 469 / 470</div>
                </div>
              </div>

              {/* Right column — what's included */}
              <div className="md:col-span-2 p-8 md:p-10">
                <div className="text-xs uppercase tracking-wider text-muted font-semibold mb-4">What&apos;s Included</div>
                <ul className="space-y-3 mb-8">
                  {[
                    { label: "48-hour post-discharge home deployment", detail: "W-2 coordinator on site within 2 days" },
                    { label: "Daily check-ins for 14 days, then 3×/week", detail: "Vitals, wound, pain, mobility, fall risk" },
                    { label: "Wound inspection and documented protocol", detail: "Photo capture, escalation to attending via FHIR" },
                    { label: "Physical therapy adherence coaching", detail: "Home exercise program tracked against PT plan" },
                    { label: "Medication reconciliation and refill alerts", detail: "DVT prophylaxis, pain step-down, anticoagulation" },
                    { label: "24/7 escalation pathway to surgeon on call", detail: "Structured triage — wound, pain, fall, fever" },
                    { label: "Omaha System outcomes coded to your EHR", detail: "No manual abstraction, audit-ready quality data" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-teal-50 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-teal" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy leading-snug">{item.label}</div>
                        <div className="text-xs text-muted leading-snug">{item.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-navy/10">
                  <div>
                    <div className="text-2xl font-bold text-navy">$15,000+</div>
                    <div className="text-xs text-muted uppercase tracking-wider">avg readmission cost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">90 days</div>
                    <div className="text-xs text-muted uppercase tracking-wider">episode window</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal">84×</div>
                    <div className="text-xs text-muted uppercase tracking-wider">break-even ratio</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#calculator" className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-navy-light transition-colors">
                    Run your own numbers
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-xl text-sm font-medium hover:bg-navy hover:text-white transition-colors">
                    Request a pilot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-teal/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "$59", label: "per patient per month", accent: "text-emerald-400" },
            { number: "90-day", label: "episode coverage", accent: "text-teal-300" },
            { number: "2,500+", label: "hospitals under CJR-X", accent: "text-amber-400" },
            { number: "FHIR", label: "compatible data feed", accent: "text-emerald-400" },
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

      {/* ── EPISODE MODEL ── */}
      <section id="episode-model" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">The Model</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Post-Acute Home Care as Episode Infrastructure</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Bundled payment programs reward health systems for outcomes across the full care episode. Home care is the last mile — and the highest-risk window for readmissions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: ClockIcon,
                title: "90-Day Episode Coverage",
                body: "We deploy a W-2 care coordinator to the patient home within 48 hours of discharge. Daily check-ins, vitals tracking, and physician escalation pathways built in.",
                stat: "48-hour deployment",
              },
              {
                Icon: ActivityIcon,
                title: "Clinical Escalation Pathways",
                body: "Structured protocols for wound change, pain escalation, and fall risk. Every escalation documented and transmitted to the attending via FHIR-compatible feed.",
                stat: "Zero-gap handoff",
              },
              {
                Icon: DatabaseIcon,
                title: "Omaha System Outcomes",
                body: "All care coded in the Omaha System — the same taxonomy your quality reporting requires. Data flows directly into your EHR, no manual abstraction.",
                stat: "EHR-ready data",
              },
            ].map(({ Icon, title, body, stat }) => (
              <div key={title} className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
                <p className="text-muted leading-relaxed mb-4">{body}</p>
                <div className="text-sm text-teal font-medium">{stat}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-full text-sm font-medium">
              <LinkIcon className="w-4 h-4" />
              We operate the home care. You get the outcomes data.
            </div>
          </div>
        </div>
      </section>

      {/* ── CJR-X / TEAM ── */}
      <section id="cjrx" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">Regulatory Alignment</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Built for CJR-X and the TEAM Model</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              CMS proposed mandatory nationwide joint replacement episodes in 2025. The TEAM model expands bundled payments to five surgical categories. BundledCare is designed to operate inside both structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CJR-X */}
            <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-navy/10 rounded-2xl flex items-center justify-center mb-6">
                <BuildingIcon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">CJR-X</h3>
              <p className="text-muted text-sm mb-6">Comprehensive Joint Replacement — Expanded</p>
              <ul className="space-y-4">
                {[
                  "Nationwide mandatory coverage for 2,500+ hospitals",
                  "90-day episodes for hip and knee replacement",
                  "Target price includes post-acute services",
                  "Readmission penalties erode shared savings",
                  "Home care reduces SNF utilization and cost",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-teal" />
                    </div>
                    <span className="text-sm text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TEAM */}
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <ActivityIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TEAM Model</h3>
              <p className="text-white/60 text-sm mb-6">Transforming Episode Accountability Model</p>
              <ul className="space-y-4">
                {[
                  "Expands bundled payments to five surgical categories",
                  "CABG, LEJR, spinal fusion, hip fracture, major bowel",
                  "Performance-based reconciliation, upside and downside",
                  "Quality metrics include 30-day readmission rates",
                  "Post-acute coordination is a direct cost lever",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-teal-300" />
                    </div>
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-8 md:p-12 text-center">
            <p className="text-white/60 text-sm uppercase tracking-[0.3em] font-semibold mb-3">The Strategic Position</p>
            <p className="text-white text-2xl md:text-3xl font-semibold">
              &ldquo;Home care is the post-acute lever that most bundled payment programs have not yet operationalized.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── READMISSIONS ── */}
      <section id="readmissions" className="relative py-24 px-6 bg-surface overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">The Clinical Case</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Readmission Reduction</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              The highest-cost events in a 90-day episode are unplanned readmissions. Structured in-home follow-up reduces the most common causes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                Icon: HeartIcon,
                cause: "Wound Complications",
                intervention: "Daily wound inspection and documented care protocol with escalation pathway to attending",
              },
              {
                Icon: ActivityIcon,
                cause: "Medication Non-Adherence",
                intervention: "In-home medication reconciliation and adherence monitoring at every visit",
              },
              {
                Icon: UsersIcon,
                cause: "Fall Risk",
                intervention: "Home environment assessment and fall prevention protocol within 48 hours of discharge",
              },
              {
                Icon: ClockIcon,
                cause: "Missed Follow-Up",
                intervention: "Coordination of outpatient follow-up appointments and transportation barrier identification",
              },
            ].map(({ Icon, cause, intervention }) => (
              <div key={cause} className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{cause}</h3>
                <p className="text-sm text-muted leading-relaxed">{intervention}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "$15,000+", label: "avg. cost of an unplanned readmission", note: "CMS claims data" },
                { number: "1 in 5", label: "joint replacement patients readmitted within 90 days", note: "NEJM bundled payment studies" },
                { number: "$59/mo", label: "per patient cost of home care coverage", note: "BundledCare subscription" },
              ].map(({ number, label, note }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-teal mb-2">{number}</div>
                  <p className="text-navy font-medium text-sm mb-1">{label}</p>
                  <p className="text-muted text-xs">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ECONOMICS ── */}
      <section id="economics" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">Episode Cost Analysis</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Episode Economics</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              What home care costs versus what a readmission costs. The math is straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Without */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-red-200/50 shadow-xl shadow-red-500/5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-navy mb-2">Without Structured Home Care</h3>
              <p className="text-muted text-sm mb-6">Fragmented post-acute. No eyes in the home.</p>
              <ul className="space-y-4">
                {[
                  "SNF utilization averages 18-22 days per episode",
                  "No systematic wound or medication monitoring",
                  "Readmission rate 18-22% within 90 days",
                  "Each readmission costs $15,000+ in episode budget",
                  "Quality score penalties on readmission metric",
                  "No usable home-care data in EHR",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <TrendingDownIcon className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-teal shadow-xl shadow-teal-500/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-navy mb-2">With BundledCare</h3>
              <p className="text-muted text-sm mb-6">$59/patient/month. 90-day episode. Fully documented.</p>
              <ul className="space-y-4">
                {[
                  "W-2 care coordinator in home within 48 hours",
                  "Daily wound, medication, and vital sign documentation",
                  "Escalation pathway reduces avoidable readmissions",
                  "Episode home-care cost: $177 per patient (3 months)",
                  "Omaha System outcomes feed directly to your EHR",
                  "FHIR-compatible data for quality reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                    <span className="text-sm text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-8 md:p-10 text-center">
            <p className="text-white/60 text-sm uppercase tracking-[0.3em] font-semibold mb-4">The Business Case</p>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Preventing one readmission in a 100-patient cohort saves $15,000 in episode cost. BundledCare costs $17,700 to cover that same cohort for the full 90-day episode. One avoidable readmission prevented funds the program.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE INTEGRATE ── */}
      <section className="relative py-24 px-6 bg-surface overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-teal/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold mb-3">Integration</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Integrate With Your Program</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Three steps from discharge to active home care coverage.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Patient Referral",
                body: "Your care coordinator identifies eligible patients at discharge. We receive a referral — name, diagnosis, discharge date, and attending. No integration required to start.",
              },
              {
                step: "2",
                title: "Deployment",
                body: "A W-2 care coordinator contacts the patient within 24 hours. In-home assessment completed within 48 hours. Episode documentation begins immediately.",
              },
              {
                step: "3",
                title: "Data Return",
                body: "Weekly structured reports delivered to your care team. Full FHIR-compatible data export available. Outcomes tied to CJR-X and TEAM quality metrics.",
              },
            ].map((s, i) => (
              <div key={s.step} className="flex-1 relative mt-4 md:mt-0 first:mt-0">
                <div className="bg-white/70 backdrop-blur-xl border border-teal-100/50 shadow-xl shadow-teal-500/5 rounded-3xl p-8 h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5">{s.step}</div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 items-center justify-center">
                    <ArrowRightIcon className="w-5 h-5 text-teal" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episode Calculator */}
      <div id="calculator">
        <EpisodeCalculator />
      </div>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-teal-50/30" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-teal font-semibold mb-3">For Health Systems</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Talk to us about your bundled payment program.</h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              We work with health system administrators and care coordinators to design home care coverage that fits your episode structure and quality reporting requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: contact form */}
            <div className="bg-white/80 backdrop-blur-xl border border-navy/5 shadow-2xl shadow-navy/5 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-navy mb-6">Request a Conversation</h3>
              <ContactForm />
            </div>

            {/* Right: what to expect */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-navy">What to expect</h3>
              {[
                {
                  Icon: ClockIcon,
                  title: "Response within one business day",
                  body: "A member of our clinical operations team will respond to confirm your inquiry and schedule a discovery call.",
                },
                {
                  Icon: FileTextIcon,
                  title: "Episode cost analysis",
                  body: "We will prepare a customized episode cost model based on your patient volume, procedure mix, and current readmission rate.",
                },
                {
                  Icon: DatabaseIcon,
                  title: "Integration assessment",
                  body: "We will review your EHR and quality reporting requirements to confirm FHIR compatibility and data return format.",
                },
                {
                  Icon: ChartIcon,
                  title: "Pilot design",
                  body: "For qualified health systems, we can design a 90-day pilot with a defined patient cohort and measurable readmission endpoints.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{title}</p>
                    <p className="text-muted text-sm leading-relaxed mt-0.5">{body}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-navy/5">
                <p className="text-xs text-muted">
                  Prefer to reach us directly? Send inquiries to{" "}
                  <span className="font-medium text-navy">partnerships@bundledcare.com</span>
                  {" "}or visit{" "}
                  <a href="https://harnesshealth.ai/health-systems" target="_blank" rel="noopener noreferrer" className="text-teal font-medium hover:underline">
                    harnesshealth.ai/health-systems
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-navy/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-semibold tracking-tight text-navy">
              bundled<span className="text-teal">care</span>
            </div>
            <p className="text-sm text-muted mt-1">Post-acute home care for bundled payment programs.</p>
          </div>
          <div className="text-sm text-muted flex items-center gap-4">
            <span>A <a href="https://co-op.care" className="text-teal hover:underline">co-op.care</a> company</span>
            <a href="https://co-op.care/manifesto" className="text-teal hover:underline">Read the manifesto →</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
