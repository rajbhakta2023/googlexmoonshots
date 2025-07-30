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

      // Update display values
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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/e53935?text=Project+Reveel">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-in-water-that-forms-a-circle-5098-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Reveel</h2>
          <p className="mt-4 text-xl md:text-2xl text-red-400 font-medium">10x Sustainable Apparel Revolution</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-red-400 mb-2">First Principles Summary</h5>
              <p>Fabrics respond to stimuli: Photo/thermochromic dyes shift colors via light/heat (molecular isomerism); re-printable via embedded nanomaterials (e.g., e-ink-like polymers). We engineer adaptive textiles for on-demand changes, tapping smart textiles market ($7.52B in 2025, to $20.76B by 2029 at 28.9% CAGR).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-red-400 mb-2">Problem & 10x Impact</h5>
              <p>Fashion pollutes: 92M tons waste yearly; consumers discard 60% clothes unused. Reveel enables infinite reuse, cutting waste 90%; e-textiles market $22.08B in 2025 (to $274.99B by 2034, 32% CAGR). 10x impact: $100B circular fashion shift; revenue via apparel lines ($50/item premium).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-red-400 mb-2">Creative Solution</h5>
              <p>App-controlled fabrics: Change colors/patterns via embedded LEDs/nano-dyes; re-print via 3D sublimation for custom designs, like "wardrobe in one shirt."</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-red-400 mb-2">Lean POC Plan & Timeline</h5>
              <p><strong className="text-stone-100">Months 1-3:</strong> 5-person team (2 materials scientists, 2 designers, 1 PM; $300K budget). Develop prototype fabric; test 50 changes.<br/><strong className="text-stone-100">Months 4-6:</strong> User pilots; target 95% durability. Total: $500K ($200K materials, $300K labor).<br/><strong className="text-stone-100">Kill Criteria:</strong> &lt;80% color stability by Month 3; >$100K overrun; no partner LOI by Month 6. Pivot to Circularity if killed.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Circular Fashion Impact Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the environmental and financial impact of adaptive textiles.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 pb-8 border-b border-stone-700">
              <div>
                <label htmlFor="garments-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Smart Garments Sold Annually</span>
                  <span id="garments-value" className="text-red-400 font-bold">1,000,000</span>
                </label>
                <input type="range" id="garments-slider" min="100000" max="10000000" defaultValue="1000000" step="100000" className="mt-2" />
              </div>
              <div>
                <label htmlFor="premium-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Price Premium per Garment</span>
                  <span id="premium-value" className="text-red-400 font-bold">$50</span>
                </label>
                <input type="range" id="premium-slider" min="10" max="200" defaultValue="50" step="5" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">New Revenue Stream</h5>
                <p id="reveel-revenue" className="text-center text-5xl font-extrabold text-red-400 my-2">$50.0M</p>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Textile Waste Averted</h5>
                <p id="reveel-waste" className="text-center text-5xl font-extrabold text-red-400 my-2">~9,000</p>
                <p className="text-center text-xs text-stone-500">Tons per year (assuming 1 smart garment replaces 10 traditional ones)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h4 className="font-bold text-2xl text-white text-center mb-8">The Reveel Workflow</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/e53935?text=1.+Design+in+App" alt="A mobile app with fashion design tools" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Design in App</h5>
                <p className="text-sm text-stone-400">Users select or create new colors, patterns, and designs in a mobile app.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/e53935?text=2.+Fabric+Activation" alt="A close-up of smart fabric with glowing threads" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Fabric Activation</h5>
                <p className="text-sm text-stone-400">The app sends a signal to the garment's embedded nanomaterials.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/e53935?text=3.+On-Demand+Change" alt="A t-shirt changing its color and pattern" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">On-Demand Change</h5>
                <p className="text-sm text-stone-400">The fabric's appearance transforms instantly to the new design.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/e53935?text=4.+Infinite+Wardrobe" alt="A person wearing the transformed t-shirt" className="rounded-md mb-3" />
                <h5 className="font-semibold text-white">Infinite Wardrobe</h5>
                <p className="text-sm text-stone-400">A single garment provides limitless styles, drastically reducing waste.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-stone-950 border border-stone-800 rounded-xl p-6">
            <h5 className="font-bold text-lg text-white mb-3">Model Assumptions & Executive Framing</h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-400">
              <li><strong className="text-stone-300">Target Cost & Durability:</strong> The primary technical challenge is developing a smart textile that is durable, washable, and affordable. The price premium in the calculator represents the target, not the current, cost of production.</li>
              <li><strong className="text-stone-300">Business Model Flexibility:</strong> The initial go-to-market could be a high-end apparel line (as modeled). However, the long-term, 10x opportunity lies in licensing the core textile technology to major fashion brands.</li>
              <li><strong className="text-stone-300">Waste Reduction Heuristic:</strong> The model assumes one smart garment replaces 10 traditional items, based on the idea of an "infinite wardrobe." Validating this consumer behavior change is a key goal of the user pilots.</li>
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