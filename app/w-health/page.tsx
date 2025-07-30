'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function WHealthPage() {
  useEffect(() => {
    // Calculator functions
    function formatCurrency(num: number, compact = false) {
      if (compact) {
        if (Math.abs(num) >= 1_000_000_000) return '$' + (num / 1_000_000_000).toFixed(2) + 'B';
        if (Math.abs(num) >= 1_000_000) return '$' + (num / 1_000_000).toFixed(1) + 'M';
        if (Math.abs(num) >= 1_000) return '$' + (num / 1_000).toFixed(0) + 'K';
      }
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num);
    }

    function updateWHealthCalculator() {
      const subscribersSlider = document.getElementById('subscribers-slider') as HTMLInputElement;
      const diseaseCostSlider = document.getElementById('disease-cost-slider') as HTMLInputElement;
      
      if (!subscribersSlider) return;
      
      const subscribers = parseInt(subscribersSlider.value);
      const diseaseCost = parseInt(diseaseCostSlider.value);
      const subscriptionFee = 99 * 12;
      const revenue = subscribers * subscriptionFee;
      const riskReduction = 0.5;
      const savings = subscribers * diseaseCost * riskReduction;

      // Update display values
      const subscribersValue = document.getElementById('subscribers-value');
      const diseaseCostValue = document.getElementById('disease-cost-value');
      const whealthRevenue = document.getElementById('whealth-revenue');
      const whealthSavings = document.getElementById('whealth-savings');

      if (subscribersValue) subscribersValue.textContent = subscribers.toLocaleString();
      if (diseaseCostValue) diseaseCostValue.textContent = formatCurrency(diseaseCost);
      if (whealthRevenue) whealthRevenue.textContent = formatCurrency(revenue, true);
      if (whealthSavings) whealthSavings.textContent = formatCurrency(savings, true);
    }

    // Add event listeners for calculators
    const subscribersSlider = document.getElementById('subscribers-slider');
    const diseaseCostSlider = document.getElementById('disease-cost-slider');
    
    if (subscribersSlider) {
      [subscribersSlider, diseaseCostSlider].forEach(s => {
        if (s) s.addEventListener('input', updateWHealthCalculator);
      });
    }

    // Initial calculation
    updateWHealthCalculator();
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="bg-stone-950/70 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-stone-300 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
              <path d="M18.364 5.63604L13.4142 10.5858L18.364 15.5355L15.5355 18.364L10.5858 13.4142L5.63604 18.364L2.80761 15.5355L7.75736 10.5858L2.80761 5.63604L5.63604 2.80761L10.5858 7.75736L15.5355 2.80761L18.364 5.63604Z" fill="#fbbc05"/>
              <path d="M21.1924 15.5355L19.7782 16.9497L13.4142 10.5858L19.7782 4.22183L21.1924 5.63604L16.2426 10.5858L21.1924 15.5355Z" fill="#ea4335"/>
            </svg>
            <span>Moonshot Memos</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/polymath" className="nav-link hover:text-green-400 transition-colors">Polymath</Link>
            <Link href="/nimbus" className="nav-link hover:text-blue-400 transition-colors">Nimbus</Link>
            <Link href="/axon" className="nav-link hover:text-purple-400 transition-colors">Axon</Link>
            <Link href="/hatch" className="nav-link hover:text-cyan-400 transition-colors">Hatch</Link>
            <Link href="/reveel" className="nav-link hover:text-red-400 transition-colors">Reveel</Link>
            <Link href="/w-health" className="nav-link hover:text-yellow-400 transition-colors">W-Health</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/fbbc05?text=Project+W-Health">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-lab-test-tube-being-agitated-4113-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project W-Health</h2>
          <p className="mt-4 text-xl md:text-2xl text-yellow-400 font-medium">10x Holistic Health Optimization</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-yellow-400 mb-2">First Principles Summary</h5>
              <p>Health is systemic: Genetics/microbiome influence 80% outcomes; AI integrates blood/genetic data for predictive models (e.g., polygenic risk scores). We fuse wearables with on-demand testing for custom regimens, targeting personalized medicine market ($531.7B in 2024, to $869.9B by 2030 at 8.5% CAGR).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-yellow-400 mb-2">Problem & 10x Impact</h5>
              <p>Chronic diseases cost $4T yearly; 70% preventable via personalization. W-Health boosts wellness 10x (e.g., 50% disease risk cut via AI); supplements market $14.02B in 2024 (to $35.03B by 2030). Revenue: $99/month kits; capture 5% ($1.75B by 2030).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-yellow-400 mb-2">Creative Solution</h5>
              <p>All-in-one kit: Genetic/blood/microbiome tests + wearables/AI "doctor" for custom vitamins/therapy, like "personal health OS."</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-yellow-400 mb-2">Lean POC Plan & Timeline</h5>
              <p><strong className="text-stone-100">Months 1-3:</strong> 6-person team (2 biologists, 2 AI experts, 1 PM, 1 clinician; $400K budget). Build MVP kit; test on 100 users.<br/><strong className="text-stone-100">Months 4-6:</strong> Validate 40% risk reduction. Total: $700K ($300K hardware, $400K labor).<br/><strong className="text-stone-100">Kill Criteria:</strong> &lt;30% accuracy by Month 3; &gt;$200K overrun; no FDA path by Month 6. Pivot to Verily if killed.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Preventive Healthcare Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the revenue and healthcare savings from a personalized wellness subscription.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 pb-8 border-b border-stone-700">
              <div>
                <label htmlFor="subscribers-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Number of Subscribers</span>
                  <span id="subscribers-value" className="text-yellow-400 font-bold">1,000,000</span>
                </label>
                <input type="range" id="subscribers-slider" min="100000" max="10000000" defaultValue="1000000" step="100000" className="mt-2" />
              </div>
              <div>
                <label htmlFor="disease-cost-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Avg. Annual Chronic Disease Cost</span>
                  <span id="disease-cost-value" className="text-yellow-400 font-bold">$10,000</span>
                </label>
                <input type="range" id="disease-cost-slider" min="5000" max="25000" defaultValue="10000" step="500" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Annual Recurring Revenue</h5>
                <p id="whealth-revenue" className="text-center text-5xl font-extrabold text-yellow-400 my-2">$1.2B</p>
                <p className="text-center text-xs text-stone-500">(at $99/month subscription fee)</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Healthcare Costs Averted</h5>
                <p id="whealth-savings" className="text-center text-5xl font-extrabold text-yellow-400 my-2">$5.0B</p>
                <p className="text-center text-xs text-stone-500">(assuming 50% disease risk reduction)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h4 className="font-bold text-2xl text-white text-center mb-8">The W-Health Workflow</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/fbbc05?text=1.+On-Demand+Testing" alt="An at-home blood and microbiome test kit" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">On-Demand Testing</h5>
                <p className="text-sm text-stone-400">Users perform simple, at-home genetic, blood, and microbiome tests.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/fbbc05?text=2.+AI+Analysis" alt="Data streams from wearables and tests feeding an AI model" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">AI Analysis</h5>
                <p className="text-sm text-stone-400">An AI platform integrates test data with real-time wearable stats.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/fbbc05?text=3.+Personalized+Regimen" alt="A custom-formulated pack of supplements" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Personalized Regimen</h5>
                <p className="text-sm text-stone-400">The AI generates a hyper-personalized plan of supplements and lifestyle changes.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/fbbc05?text=4.+Continuous+Optimization" alt="A health dashboard on a phone showing improved metrics" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Continuous Optimization</h5>
                <p className="text-sm text-stone-400">The system continuously monitors health data and adjusts the regimen over time.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-stone-950 border border-stone-800 rounded-xl p-6">
            <h5 className="font-bold text-lg text-white mb-3">Model Assumptions & Executive Framing</h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-400">
              <li><strong className="text-stone-300">Targeting Disease Risk Reduction:</strong> The goal of a 50% reduction in chronic disease risk is the project's North Star. This is a bold claim that must be the primary focus of clinical validation during the POC phase.</li>
              <li><strong className="text-stone-300">Subscription Business Model:</strong> The $99/month fee creates a scalable, high-margin recurring revenue stream. The value proposition is that this fee is a fraction of the potential long-term healthcare costs it helps to avert.</li>
              <li><strong className="text-stone-300">Regulatory Pathway (FDA):</strong> The biggest hurdle is the regulatory pathway for the diagnostic components of the kit. A key de-risking activity is to establish a clear strategy for FDA engagement and approval early in the project's lifecycle.</li>
            </ul>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-stone-400">&copy; 2024 Moonshot Memos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 