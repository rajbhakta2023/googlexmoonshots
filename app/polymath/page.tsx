'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function PolymathPage() {
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

    function updatePolymersCalculator() {
      const formulationsSlider = document.getElementById('formulations-slider') as HTMLInputElement;
      const traditionalCostSlider = document.getElementById('traditional-cost-slider') as HTMLInputElement;
      const timeToMarketSlider = document.getElementById('time-to-market-slider') as HTMLInputElement;
      const marketOppSlider = document.getElementById('market-opp-slider') as HTMLInputElement;
      
      if (!formulationsSlider) return;
      
      const oneTimeCapex = 500000;
      const annualOpex = 200000;
      const numFormulations = parseInt(formulationsSlider.value);
      const costPerFormulation = parseInt(traditionalCostSlider.value);
      const traditionalTimeToMarket = parseInt(timeToMarketSlider.value);
      const annualMarketOpp = parseInt(marketOppSlider.value) * 1000000;
      
      const aiCostPerFormulation = costPerFormulation * 0.10;
      const grossAnnualSavings = (numFormulations * costPerFormulation) - (numFormulations * aiCostPerFormulation);
      const netAnnualSavings = grossAnnualSavings - annualOpex;
      
      const newTimeToMarket = traditionalTimeToMarket * 0.1;
      const timeSavedMonths = traditionalTimeToMarket - newTimeToMarket;
      const revenueAdvantage = (annualMarketOpp / 12) * timeSavedMonths;
      const totalFirstYearValue = netAnnualSavings + revenueAdvantage;

      const formulationsValue = document.getElementById('formulations-value');
      const traditionalCostValue = document.getElementById('traditional-cost-value');
      const timeToMarketValue = document.getElementById('time-to-market-value');
      const marketOppValue = document.getElementById('market-opp-value');
      const savingsDisplay = document.getElementById('savings-display');
      const revenueAdvantageDisplay = document.getElementById('revenue-advantage-display');
      const timeSavedDisplay = document.getElementById('time-saved-display');
      const totalValueDisplay = document.getElementById('total-value-display');

      if (formulationsValue) formulationsValue.textContent = numFormulations.toLocaleString();
      if (traditionalCostValue) traditionalCostValue.textContent = formatCurrency(costPerFormulation);
      if (timeToMarketValue) timeToMarketValue.textContent = `${traditionalTimeToMarket} Months`;
      if (marketOppValue) marketOppValue.textContent = formatCurrency(annualMarketOpp, true);
      if (savingsDisplay) savingsDisplay.textContent = formatCurrency(netAnnualSavings, true);
      if (revenueAdvantageDisplay) revenueAdvantageDisplay.textContent = formatCurrency(revenueAdvantage, true);
      if (timeSavedDisplay) timeSavedDisplay.textContent = `${(timeSavedMonths / 12).toFixed(1)} Years`;
      if (totalValueDisplay) totalValueDisplay.textContent = formatCurrency(totalFirstYearValue, true);
    }

    // Add event listeners for calculators
    const formulationsSlider = document.getElementById('formulations-slider');
    const traditionalCostSlider = document.getElementById('traditional-cost-slider');
    const timeToMarketSlider = document.getElementById('time-to-market-slider');
    const marketOppSlider = document.getElementById('market-opp-slider');
    
    if (formulationsSlider) {
      [formulationsSlider, traditionalCostSlider, timeToMarketSlider, marketOppSlider].forEach(s => {
        if (s) s.addEventListener('input', updatePolymersCalculator);
      });
    }

    // Initial calculation
    updatePolymersCalculator();
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="bg-stone-950/70 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-800">
        <div className="container-wide mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Moonshot Memos</h1>
                <p className="text-sm text-stone-400">Proposals for a 10x Future</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-stone-300 hover:text-white transition-colors">Home</Link>
              <Link href="/nimbus" className="text-stone-300 hover:text-white transition-colors">Nimbus</Link>
              <Link href="/axon" className="text-stone-300 hover:text-white transition-colors">Axon</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/34a853?text=Project+Polymath">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-chains-of-colored-atoms-in-a-molecule-4632-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Polymath</h2>
          <p className="mt-4 text-xl md:text-2xl text-green-400 font-medium">AI-Powered Polymer Design</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-green-400 mb-2">First Principles Summary</h5>
              <p>Polymers arise from molecular bonds and entropy; properties like strength and flexibility are predictable based on molecular structure & experimental data training. Traditional trial-and-error takes months to years; inverse AI design leverages automated robotics for 100x faster iteration & active-learning, targeting the ~$800B global polymers market.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-green-400 mb-2">Problem & 10x Impact</h5>
              <p>Polymer R&D takes months to years and leads to waste. Our system enables 10x eco-polymers, slashing R&D costs 90% and decreasing time-to-market by 70% via HaaS.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-green-400 mb-2">Creative Solution</h5>
              <p>Integrate DeepMind's generative models with robotic high-throughput labs: Simulate 1,000 formulations/week, validate via micro-synthesis, yielding super-materials like 10x-stronger biodegradable plastics.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Financial Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the dual benefit of cost savings and accelerated revenue for a partner.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 pb-8 border-b border-stone-700">
              <div className="space-y-6">
                <h5 className="font-bold text-white">R&D Inputs</h5>
                <div>
                  <label htmlFor="formulations-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                    <span>Formulations / Year</span>
                    <span id="formulations-value" className="text-green-400 font-bold">5,000</span>
                  </label>
                  <input type="range" id="formulations-slider" min="100" max="20000" defaultValue="5000" step="100" />
                </div>
                <div>
                  <label htmlFor="traditional-cost-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                    <span>Avg. Traditional Cost</span>
                    <span id="traditional-cost-value" className="text-green-400 font-bold">$2,500</span>
                  </label>
                  <input type="range" id="traditional-cost-slider" min="500" max="10000" defaultValue="2500" step="100" />
                </div>
              </div>
              <div className="space-y-6">
                <h5 className="font-bold text-white">Go-to-Market Inputs</h5>
                <div>
                  <label htmlFor="time-to-market-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                    <span>Traditional Time to Market</span>
                    <span id="time-to-market-value" className="text-green-400 font-bold">36 Months</span>
                  </label>
                  <input type="range" id="time-to-market-slider" min="0" max="72" defaultValue="36" step="1" />
                </div>
                <div>
                  <label htmlFor="market-opp-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                    <span>Annual Market Opportunity</span>
                    <span id="market-opp-value" className="text-green-400 font-bold">$50M</span>
                  </label>
                  <input type="range" id="market-opp-slider" min="1" max="500" defaultValue="50" step="1" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Annual Operational Savings</h5>
                <p className="text-center text-3xl font-extrabold text-green-400 my-1" id="savings-display">$11.1M</p>
                <p className="text-center text-xs text-stone-500">vs. Traditional R&D Costs</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Go-to-Market Revenue Advantage</h5>
                <p className="text-center text-3xl font-extrabold text-green-400 my-1" id="revenue-advantage-display">$135.0M</p>
                <p className="text-center text-xs text-stone-500">Revenue captured <span id="time-saved-display">2.7 Years</span> sooner</p>
              </div>
            </div>
            <div className="mt-8 text-center bg-stone-800/50 p-6 rounded-lg">
              <p className="text-stone-300">Total First-Year Value</p>
              <p className="text-5xl font-extrabold text-green-400 my-2" id="total-value-display">$146.1M</p>
              <p className="text-stone-400">Combined Savings & Revenue Advantage</p>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-800 py-12">
        <div className="container-wide mx-auto px-6">
          <div className="text-center">
            <p className="text-stone-400">&copy; 2024 Moonshot Memos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 