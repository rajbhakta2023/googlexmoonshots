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

      // Update display values
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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/00acc1?text=Project+Hatch">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-biological-researcher-works-with-a-microscope-in-a-4009-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Hatch</h2>
          <p className="mt-4 text-xl md:text-2xl text-cyan-400 font-medium">AI-Driven Genomics & Microfluidics</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-cyan-400 mb-2">First Principles Summary</h5>
              <p>Human fertility hinges on genetic compatibility and physiology: Polygenic scores predict traits (e.g., 10.1% risk reduction in diseases via embryo screening); microfluidics enable rapid sperm-egg pairing by analyzing motility/DNA integrity. We fuse AI genomics with lab-on-chip for optimal combos, targeting declining global fertility rates (2.3 in 2023, projected to 2.1 by 2050).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-cyan-400 mb-2">Problem & 10x Impact</h5>
              <p>Fertility crises: U.S. rate at 1.58 in 2025 (down 2% yearly); treatments fail 70% in IVF cycles, costing $34.63B market (to $49.02B by 2030, 7.21% CAGR). Hatch boosts conception 10x (from 20-30% to 80% via scoring), averting demographic collapse; monthly fee ($99/user) captures 5% market ($2.45B revenue by 2030).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-cyan-400 mb-2">Creative Solution</h5>
              <p>AI optimizes health (nutrition/wearables) + polygenic screening; microfluidics tests 1,000 combos/week for ideal embryos, like "genetic matchmaking" for families.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-cyan-400 mb-2">Lean POC Plan & Timeline</h5>
              <p><strong className="text-stone-100">Months 1-3:</strong> 5-person team (2 geneticists, 2 engineers, 1 PM; $300K budget). Build MVP microfluidics; test on 100 samples.<br/><strong className="text-stone-100">Months 4-6:</strong> Pilot with clinics; target 50% success boost. Total: $500K ($200K hardware, $300K labor).<br/><strong className="text-stone-100">Kill Criteria:</strong> &lt;40% accuracy by Month 3; &gt;$100K overrun; ethics/regulatory flags (e.g., no FDA nod). Pivot to Verily if killed.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Fertility Market Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the revenue potential and societal impact of increasing IVF success rates.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 pb-8 border-b border-stone-700">
              <div>
                <label htmlFor="ivf-market-slider" className="flex justify-between font-medium text-stone-300">
                  <span>IVF Market Size (2030)</span>
                  <span id="ivf-market-value" className="text-cyan-400 font-bold">$49.0B</span>
                </label>
                <input type="range" id="ivf-market-slider" min="30" max="100" defaultValue="49" step="1" className="mt-2" />
              </div>
              <div>
                <label htmlFor="market-share-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Target Market Share</span>
                  <span id="market-share-value" className="text-cyan-400 font-bold">5.0%</span>
                </label>
                <input type="range" id="market-share-slider" min="0.5" max="10" defaultValue="5" step="0.5" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Annual Revenue Potential</h5>
                <p id="hatch-revenue" className="text-center text-5xl font-extrabold text-cyan-400 my-2">$2.45B</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">New Families Created Annually</h5>
                <p id="hatch-families" className="text-center text-5xl font-extrabold text-cyan-400 my-2">~1.6M</p>
                <p className="text-center text-xs text-stone-500">(at 80% success rate vs. 25% baseline)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h4 className="font-bold text-2xl text-white text-center mb-8">The Hatch Workflow</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/00acc1?text=1.+Health+Optimization" alt="Wearable data and nutrition plan" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Health Optimization</h5>
                <p className="text-sm text-stone-400">AI analyzes wearable and health data to optimize parental wellness pre-conception.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/00acc1?text=2.+Genetic+Screening" alt="DNA helix and polygenic risk scores" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Genetic Screening</h5>
                <p className="text-sm text-stone-400">Genomic data is used to create polygenic scores for optimal genetic compatibility.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/00acc1?text=3.+Microfluidic+Pairing" alt="Lab-on-a-chip device" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Microfluidic Pairing</h5>
                <p className="text-sm text-stone-400">A microfluidic chip rapidly tests thousands of sperm-egg combinations.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/00acc1?text=4.+Viable+Embryo" alt="A healthy embryo under a microscope" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Viable Embryo</h5>
                <p className="text-sm text-stone-400">The highest-scoring, most viable embryo is selected for implantation.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-stone-950 border border-stone-800 rounded-xl p-6">
            <h5 className="font-bold text-lg text-white mb-3">Model Assumptions & Executive Framing</h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-400">
              <li><strong className="text-stone-300">10x Success Rate:</strong> The goal is to dramatically increase IVF success from ~25% to a target of 80% by combining pre-conception health optimization with genetic screening and high-throughput pairing.</li>
              <li><strong className="text-stone-300">Business Model:</strong> A B2C subscription model ($99/month) provides ongoing health optimization, while the high-margin IVF procedure represents the primary revenue event. This captures a larger share of the total fertility market value.</li>
              <li><strong className="text-stone-300">Ethical & Regulatory Hurdles:</strong> The largest risk is navigating the complex ethical and regulatory landscape (e.g., FDA, genetic privacy laws). The POC must establish a clear ethical framework and regulatory pathway to be viable.</li>
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