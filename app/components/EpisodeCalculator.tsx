"use client";

import { useState } from "react";

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n).toLocaleString()}`;
}

function formatPercent(n: number): string {
  return `${n.toFixed(1)}%`;
}

// co-op.care reduces readmissions by ~35% based on post-acute coordination evidence
const REDUCTION_RATE = 0.35;

export default function EpisodeCalculator() {
  const [episodes, setEpisodes] = useState<string>("500");
  const [readmissionRate, setReadmissionRate] = useState<string>("12");
  const [readmissionCost, setReadmissionCost] = useState<string>("18000");
  const [showResults, setShowResults] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactOrg, setContactOrg] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const episodesNum = parseFloat(episodes) || 0;
  const rateNum = parseFloat(readmissionRate) || 0;
  const costNum = parseFloat(readmissionCost) || 0;

  const annualReadmissions = episodesNum * (rateNum / 100);
  const annualReadmissionCost = annualReadmissions * costNum;
  const readmissionsAvoided = annualReadmissions * REDUCTION_RATE;
  const savingsFromReduction = readmissionsAvoided * costNum;
  const coopCareCost = episodesNum * 59 * 3; // $59/patient/month × 3 months (90-day episode)
  const netSavings = savingsFromReduction - coopCareCost;
  const roi = coopCareCost > 0 ? (netSavings / coopCareCost) * 100 : 0;

  const handleCalculate = () => {
    if (episodesNum > 0 && rateNum > 0 && costNum > 0) {
      setShowResults(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-surface py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-3 text-center">
          Episode Cost Calculator
        </h2>
        <p className="text-muted text-center mb-10 max-w-xl mx-auto">
          Enter your joint replacement program data to see the financial impact of reducing readmissions with co-op.care.
        </p>

        {/* Inputs */}
        <div className="bg-white rounded-2xl border border-navy/10 p-6 md:p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Joint replacement episodes per year
              </label>
              <input
                type="number"
                min="1"
                value={episodes}
                onChange={(e) => { setEpisodes(e.target.value); setShowResults(false); }}
                className="w-full border border-navy/20 rounded-xl px-4 py-3 text-navy text-base focus:outline-none focus:border-teal transition-colors"
                placeholder="500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Current readmission rate (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={readmissionRate}
                onChange={(e) => { setReadmissionRate(e.target.value); setShowResults(false); }}
                className="w-full border border-navy/20 rounded-xl px-4 py-3 text-navy text-base focus:outline-none focus:border-teal transition-colors"
                placeholder="12"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Average readmission cost ($)
              </label>
              <input
                type="number"
                min="0"
                step="1000"
                value={readmissionCost}
                onChange={(e) => { setReadmissionCost(e.target.value); setShowResults(false); }}
                className="w-full border border-navy/20 rounded-xl px-4 py-3 text-navy text-base focus:outline-none focus:border-teal transition-colors"
                placeholder="18000"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!(episodesNum > 0 && rateNum > 0 && costNum > 0)}
            className="w-full rounded-xl bg-teal text-white py-3 font-medium hover:bg-teal-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Calculate savings
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-4 mb-8">
            {/* Summary statement */}
            <div className="bg-navy text-white rounded-2xl p-6">
              <p className="text-base leading-relaxed text-white/90">
                At{" "}
                <span className="text-teal font-semibold">{episodesNum.toLocaleString()} episodes/year</span>{" "}
                with a{" "}
                <span className="text-teal font-semibold">{formatPercent(rateNum)} readmission rate</span>,
                you spend{" "}
                <span className="text-white font-semibold">{formatCurrency(annualReadmissionCost)}</span>{" "}
                on readmissions annually. co-op.care is projected to reduce this by{" "}
                <span className="text-teal font-semibold">35%</span>{" "}
                for a 90-day episode cost of{" "}
                <span className="text-white font-semibold">{formatCurrency(coopCareCost)}</span>.
              </p>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border border-navy/10 text-center">
                <p className="text-2xl font-semibold text-navy mb-1">
                  {Math.round(annualReadmissions)}
                </p>
                <p className="text-muted text-xs">Annual readmissions</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-navy/10 text-center">
                <p className="text-2xl font-semibold text-teal mb-1">
                  {Math.round(readmissionsAvoided)}
                </p>
                <p className="text-muted text-xs">Readmissions avoided</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-navy/10 text-center">
                <p className="text-2xl font-semibold text-navy mb-1">
                  {formatCurrency(savingsFromReduction)}
                </p>
                <p className="text-muted text-xs">Gross savings</p>
              </div>
              <div className={`rounded-xl p-4 border text-center ${netSavings >= 0 ? "bg-teal-50 border-teal/20" : "bg-white border-navy/10"}`}>
                <p className={`text-2xl font-semibold mb-1 ${netSavings >= 0 ? "text-teal" : "text-navy"}`}>
                  {formatCurrency(Math.abs(netSavings))}
                </p>
                <p className="text-muted text-xs">
                  Net {netSavings >= 0 ? "savings" : "cost"} after co-op.care
                </p>
              </div>
            </div>

            {/* ROI bar */}
            <div className="bg-white rounded-xl p-5 border border-navy/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-navy">ROI on co-op.care investment</span>
                <span className={`text-lg font-semibold ${roi >= 0 ? "text-teal" : "text-navy"}`}>
                  {roi >= 0 ? "+" : ""}{Math.round(roi)}%
                </span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${roi >= 0 ? "bg-teal" : "bg-navy/30"}`}
                  style={{ width: `${Math.min(100, Math.max(0, roi))}%` }}
                />
              </div>
              <p className="text-muted text-xs mt-2">
                Based on 35% readmission reduction (post-acute care coordination evidence) and $59/patient/month over a 90-day episode window.
              </p>
            </div>
          </div>
        )}

        {/* Contact form */}
        <div className="bg-white rounded-2xl border border-navy/10 p-6 md:p-8">
          <h3 className="font-semibold text-navy text-lg mb-2">Talk to our team</h3>
          <p className="text-muted text-sm mb-5">
            Get a customized analysis for your program, including CJR-X readiness and CMS bundled payment strategy.
          </p>

          {submitted ? (
            <div className="bg-teal-50 border border-teal/20 rounded-xl p-4 text-center">
              <p className="text-teal font-medium">Thank you. We will be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Your name</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    className="w-full border border-navy/20 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="Dr. Sarah Chen"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Organization</label>
                  <input
                    type="text"
                    value={contactOrg}
                    onChange={(e) => setContactOrg(e.target.value)}
                    required
                    className="w-full border border-navy/20 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                    placeholder="Boulder Community Health"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Work email</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="w-full border border-navy/20 rounded-xl px-4 py-2.5 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                  placeholder="you@hospital.org"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-navy text-white py-3 font-medium hover:bg-navy-light transition-colors cursor-pointer"
              >
                Talk to our team
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
