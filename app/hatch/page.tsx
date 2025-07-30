'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HatchPage() {
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

    function updateHatchCalculator() {
      const ivfMarketSlider = document.getElementById('ivf-market-slider') as HTMLInputElement;
      const marketShareSlider = document.getElementById('market-share-slider') as HTMLInputElement;
      
      if (!ivfMarketSlider) return;
      
      const marketSize = parseInt(ivfMarketSlider.value) * 1e9;
      const marketShare = parseFloat(marketShareSlider.value) / 100;
      const revenue = marketSize * marketShare;
      const avgIvfCost = 20000;
      const successfulCycles = revenue / avgIvfCost;

      const ivfMarketValue = document.getElementById('ivf-market-value');
      const marketShareValue = document.getElementById('market-share-value');
      const hatchRevenue = document.getElementById('hatch-revenue');
      const hatchFamilies = document.getElementById('hatch-families');

      if (ivfMarketValue) ivfMarketValue.textContent = formatCurrency(marketSize, true);
      if (marketShareValue) marketShareValue.textContent = `${marketShareSlider.value}%`;
      if (hatchRevenue) hatchRevenue.textContent = formatCurrency(revenue, true);
      if (hatchFamilies) hatchFamilies.textContent = `~${(successfulCycles * 0.8 / 0.25).toLocaleString(undefined, {maximumFractionDigits: 0})}`;
    }

    // Add event listeners for calculators
    const ivfMarketSlider = document.getElementById('ivf-market-slider');
    const marketShareSlider = document.getElementById('market-share-slider');
    
    if (ivfMarketSlider) {
      [ivfMarketSlider, marketShareSlider].forEach(s => {
        if (s) s.addEventListener('input', updateHatchCalculator);
      });
    }

    // Initial calculation
    updateHatchCalculator();
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
              <Link href="/polymath" className="text-stone-300 hover:text-white transition-colors">Polymath</Link>
              <Link href="/nimbus" className="text-stone-300 hover:text-white transition-colors">Nimbus</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/f97316?text=Project+Hatch">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sunrise-over-mountains-1271-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Hatch</h2>
          <p className="mt-4 text-xl md:text-2xl text-orange-400 font-medium">Re-engineering Conception with AI-Driven Genomics</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-orange-400 mb-2">First Principles Summary</h5>
              <p>Fertility follows biological principles: egg quality declines with age, genetic screening improves success rates, and microfluidics enable precise control. AI-driven genomics and advanced microfluidics can optimize every step of the IVF process, achieving 10x success rates and reducing costs by 90%.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-orange-400 mb-2">Problem & 10x Impact</h5>
              <p>IVF success rates are only 30-40% with costs averaging $20,000 per cycle. Our AI-driven system achieves 10x success rates through precision genomics and microfluidic automation, making fertility treatment accessible to millions more families.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-orange-400 mb-2">Creative Solution</h5>
              <p>Develop AI-powered microfluidic IVF system with real-time genetic screening and automated embryo selection. This platform reduces costs by 90% while achieving 10x success rates through precision genomics and automated optimization.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">IVF Market Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the market potential and family impact of 10x improved IVF success rates.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-stone-700 pb-8">
              <div>
                <label htmlFor="ivf-market-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                  <span>Global IVF Market Size</span>
                  <span id="ivf-market-value" className="text-orange-400 font-bold">$25B</span>
                </label>
                <input type="range" id="ivf-market-slider" min="5" max="100" defaultValue="25" step="1" />
              </div>
              <div>
                <label htmlFor="market-share-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                  <span>Target Market Share</span>
                  <span id="market-share-value" className="text-orange-400 font-bold">10%</span>
                </label>
                <input type="range" id="market-share-slider" min="1" max="50" defaultValue="10" step="1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Projected Revenue</h5>
                <p className="text-center text-3xl font-extrabold text-orange-400 my-1" id="hatch-revenue">$2.5B</p>
                <p className="text-center text-xs text-stone-500">Annual Revenue Potential</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Families Helped</h5>
                <p className="text-center text-3xl font-extrabold text-orange-400 my-1" id="hatch-families">~80,000</p>
                <p className="text-center text-xs text-stone-500">Successful Pregnancies Per Year</p>
              </div>
            </div>
            <div className="mt-8 text-center bg-stone-800/50 p-6 rounded-lg">
              <p className="text-stone-300">Success Rate Improvement</p>
              <p className="text-5xl font-extrabold text-green-400 my-2">10x</p>
              <p className="text-stone-400">From 30% to 90% Success Rate</p>
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