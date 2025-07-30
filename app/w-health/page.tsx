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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/14b8a6?text=Project+W-Health">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-technology-4632-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project W-Health</h2>
          <p className="mt-4 text-xl md:text-2xl text-teal-400 font-medium">10x Holistic Health Optimization</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-teal-400 mb-2">First Principles Summary</h5>
              <p>Health follows biological principles: biomarkers predict disease risk, continuous monitoring enables early detection, and AI can identify patterns invisible to humans. Advanced wearable sensors with AI-powered diagnostics provide 10x better health insights and early disease detection, revolutionizing preventive healthcare.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-teal-400 mb-2">Problem & 10x Impact</h5>
              <p>Traditional health monitoring is reactive and expensive. Our AI-powered wearable system provides 10x better health insights through continuous monitoring and predictive analytics, enabling early disease detection and reducing healthcare costs by 50%.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-teal-400 mb-2">Creative Solution</h5>
              <p>Develop advanced wearable health monitoring system with AI-powered diagnostics and predictive analytics. This platform provides continuous health insights, enabling early disease detection and personalized preventive care recommendations.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Health Monitoring Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the revenue potential and healthcare cost savings of AI-powered wearables.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-stone-700 pb-8">
              <div>
                <label htmlFor="subscribers-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                  <span>Active Subscribers</span>
                  <span id="subscribers-value" className="text-teal-400 font-bold">1,000,000</span>
                </label>
                <input type="range" id="subscribers-slider" min="100000" max="10000000" defaultValue="1000000" step="100000" />
              </div>
              <div>
                <label htmlFor="disease-cost-slider" className="flex justify-between font-medium text-stone-300 text-sm">
                  <span>Avg. Disease Treatment Cost</span>
                  <span id="disease-cost-value" className="text-teal-400 font-bold">$5,000</span>
                </label>
                <input type="range" id="disease-cost-slider" min="1000" max="20000" defaultValue="5000" step="500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Annual Revenue</h5>
                <p className="text-center text-3xl font-extrabold text-teal-400 my-1" id="whealth-revenue">$1.2B</p>
                <p className="text-center text-xs text-stone-500">From Subscription Fees</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Healthcare Savings</h5>
                <p className="text-center text-3xl font-extrabold text-green-400 my-1" id="whealth-savings">$2.5B</p>
                <p className="text-center text-xs text-stone-500">Averted Through Early Detection</p>
              </div>
            </div>
            <div className="mt-8 text-center bg-stone-800/50 p-6 rounded-lg">
              <p className="text-stone-300">Health Insight Improvement</p>
              <p className="text-5xl font-extrabold text-green-400 my-2">10x</p>
              <p className="text-stone-400">Better Health Monitoring & Early Detection</p>
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