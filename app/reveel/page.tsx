'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ReveelPage() {
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

    function updateReveelCalculator() {
      const garmentsSlider = document.getElementById('garments-slider') as HTMLInputElement;
      const premiumSlider = document.getElementById('premium-slider') as HTMLInputElement;
      
      if (!garmentsSlider) return;
      
      const garments = parseInt(garmentsSlider.value);
      const premium = parseInt(premiumSlider.value);
      const revenue = garments * premium;
      const avgGarmentWeightKg = 0.5;
      const traditionalGarmentsReplaced = 10;
      const wasteAvertedTons = (garments * traditionalGarmentsReplaced * avgGarmentWeightKg) / 1000;

      const garmentsValue = document.getElementById('garments-value');
      const premiumValue = document.getElementById('premium-value');
      const reveelRevenue = document.getElementById('reveel-revenue');
      const reveelWaste = document.getElementById('reveel-waste');

      if (garmentsValue) garmentsValue.textContent = garments.toLocaleString();
      if (premiumValue) premiumValue.textContent = formatCurrency(premium);
      if (reveelRevenue) reveelRevenue.textContent = formatCurrency(revenue, true);
      if (reveelWaste) reveelWaste.textContent = `~${wasteAvertedTons.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
    }

    // Add event listeners for calculators
    const garmentsSlider = document.getElementById('garments-slider');
    const premiumSlider = document.getElementById('premium-slider');
    
    if (garmentsSlider) {
      [garmentsSlider, premiumSlider].forEach(s => {
        if (s) s.addEventListener('input', updateReveelCalculator);
      });
    }

    // Initial calculation
    updateReveelCalculator();
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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/6366f1?text=Project+Reveel">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-holographic-display-4632-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Reveel</h2>
          <p className="mt-4 text-xl md:text-2xl text-indigo-400 font-medium">Sustainable Apparel Revolution with Adaptive Textiles</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-indigo-400 mb-2">First Principles Summary</h5>
              <p>Textiles follow material science principles: fibers can be engineered for specific properties, dyes can be reprogrammed with light/heat, and microfluidics enable precise color control. AI-driven adaptive textiles with reprogrammable dyes create sustainable garments that replace 10 traditional items, reducing fashion waste by 90%.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-indigo-400 mb-2">Problem & 10x Impact</h5>
              <p>Fashion industry produces 92 million tons of waste annually with 10x overproduction. Our adaptive textile system creates garments that can change color and pattern on demand, replacing 10 traditional items and reducing fashion waste by 90% while commanding premium pricing.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-indigo-400 mb-2">Creative Solution</h5>
              <p>Develop AI-powered adaptive textiles with embedded microfluidics and reprogrammable dyes. These garments can change color and pattern on demand, creating a sustainable fashion revolution that reduces waste while commanding premium pricing.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Sustainable Fashion Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the revenue potential and environmental impact of adaptive textiles.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-stone-700 pb-8">
              <div>
                <label htmlFor="garments-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                  <span>Adaptive Garments Sold</span>
                  <span id="garments-value" className="text-indigo-400 font-bold">1,000,000</span>
                </label>
                <input type="range" id="garments-slider" min="100000" max="10000000" defaultValue="1000000" step="100000" />
              </div>
              <div>
                <label htmlFor="premium-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                  <span>Premium Price Per Garment</span>
                  <span id="premium-value" className="text-indigo-400 font-bold">$150</span>
                </label>
                <input type="range" id="premium-slider" min="50" max="500" defaultValue="150" step="10" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Annual Revenue</h5>
                <p className="text-center text-3xl font-extrabold text-indigo-400 my-1" id="reveel-revenue">$150M</p>
                <p className="text-center text-xs text-stone-500">From Adaptive Textiles</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Waste Averted</h5>
                <p className="text-center text-3xl font-extrabold text-green-400 my-1" id="reveel-waste">~5,000</p>
                <p className="text-center text-xs text-stone-500">Tons of Fashion Waste</p>
              </div>
            </div>
            <div className="mt-8 text-center bg-stone-800/50 p-6 rounded-lg">
              <p className="text-stone-300">Waste Reduction</p>
              <p className="text-5xl font-extrabold text-green-400 my-2">90%</p>
              <p className="text-stone-400">vs. Traditional Fashion Industry</p>
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