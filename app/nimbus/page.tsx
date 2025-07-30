'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NimbusPage() {
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

    function updateWeatherCalculator() {
      const sstDecreaseSlider = document.getElementById('sst-decrease-slider') as HTMLInputElement;
      const assetValueSlider = document.getElementById('asset-value-slider') as HTMLInputElement;
      const populationSlider = document.getElementById('population-slider') as HTMLInputElement;
      const categorySelector = document.getElementById('category-selector');
      const droneFleetSlider = document.getElementById('drone-fleet-slider') as HTMLInputElement;
      const balloonFleetSlider = document.getElementById('balloon-fleet-slider') as HTMLInputElement;
      
      if (!sstDecreaseSlider) return;
      
      const stormData: { [key: number]: { wind: number; lossRate: number; fatalityRate: number; displacementRate: number; so2Multiplier: number } } = {
        1: { wind: 85, lossRate: 0.005, fatalityRate: 0.00001, displacementRate: 0.01, so2Multiplier: 0.5 },
        2: { wind: 100, lossRate: 0.02, fatalityRate: 0.00005, displacementRate: 0.05, so2Multiplier: 0.8 },
        3: { wind: 120, lossRate: 0.08, fatalityRate: 0.0005, displacementRate: 0.25, so2Multiplier: 1.0 },
        4: { wind: 145, lossRate: 0.20, fatalityRate: 0.001, displacementRate: 0.50, so2Multiplier: 1.5 },
        5: { wind: 170, lossRate: 0.40, fatalityRate: 0.005, displacementRate: 0.85, so2Multiplier: 2.0 }
      };
      
      const costPerDrone = 150000;
      const costPerBalloon = 250000;
      const costPerTonSO2 = 1500;
      const baseTonsSO2PerDegree = 50000;
      const operationalCostPerYear = 1e6;
      const deploymentLogisticsPerStorm = 5e5;
      const numInterventionsPerYear = 3;
      const amortizationPeriodYears = 5;
      const googleProfitMargin = 0.50;
      
      const activeCatButton = categorySelector?.querySelector('.active') as HTMLElement;
      if (!activeCatButton) return;
      
      const initialCat = parseInt(activeCatButton.dataset.cat || '4');
      const sstDecrease = parseFloat(sstDecreaseSlider.value);
      const assetValue = parseFloat(assetValueSlider.value) * 1e9;
      const population = parseFloat(populationSlider.value) * 1e6;
      const fleetSizeDrones = parseInt(droneFleetSlider.value);
      const fleetSizeBalloons = parseInt(balloonFleetSlider.value);
      
      const initialWind = stormData[initialCat].wind;
      const windReduction = sstDecrease * 15;
      const newWind = Math.max(73, initialWind - windReduction);
      const intensityReductionFactor = (initialWind > 0) ? (1 - Math.pow(newWind / initialWind, 3)) : 0;
      
      const tonsSO2 = baseTonsSO2PerDegree * sstDecrease * stormData[initialCat].so2Multiplier;
      const materialCostPerStorm = tonsSO2 * costPerTonSO2;
      const totalDeploymentCostPerStorm = deploymentLogisticsPerStorm + materialCostPerStorm;
      
      const capitalCost = (fleetSizeDrones * costPerDrone) + (fleetSizeBalloons * costPerBalloon);
      const annualAmortizedCapex = capitalCost / amortizationPeriodYears;
      const totalAnnualDeploymentCost = totalDeploymentCostPerStorm * numInterventionsPerYear;
      const totalAnnualCostToGoogle = annualAmortizedCapex + operationalCostPerYear + totalAnnualDeploymentCost;
      
      const annualServiceFee = totalAnnualCostToGoogle * (1 + googleProfitMargin);
      const totalPotentialLossPerYear = assetValue * stormData[initialCat].lossRate * numInterventionsPerYear;
      const totalAvertedDamagePerYear = totalPotentialLossPerYear * intensityReductionFactor;
      
      const clientROI = (annualServiceFee > 0) ? ((totalAvertedDamagePerYear - annualServiceFee) / annualServiceFee * 100) : Infinity;
      const benefitCostRatio = (annualServiceFee > 0) ? (totalAvertedDamagePerYear / annualServiceFee) : Infinity;
      
      const potentialFatalities = population * stormData[initialCat].fatalityRate;
      const livesSaved = potentialFatalities * intensityReductionFactor;
      const potentialDisplaced = population * stormData[initialCat].displacementRate;
      const displacedSaved = potentialDisplaced * intensityReductionFactor;

      // Update display values
      const sstDecreaseValue = document.getElementById('sst-decrease-value');
      const assetValueDisplay = document.getElementById('asset-value');
      const populationValue = document.getElementById('population-value');
      const droneFleetValue = document.getElementById('drone-fleet-value');
      const balloonFleetValue = document.getElementById('balloon-fleet-value');
      const avertedDamageDisplay = document.getElementById('averted-damage-display');
      const annualServiceFeeDisplay = document.getElementById('annual-service-fee-display');
      const weatherRoiDisplay = document.getElementById('weather-roi-display');
      const benefitCostDisplay = document.getElementById('benefit-cost-display');
      const intensityReductionDisplay = document.getElementById('intensity-reduction-display');
      const livesSavedDisplay = document.getElementById('lives-saved-display');
      const displacedSavedDisplay = document.getElementById('displaced-saved-display');

      if (sstDecreaseValue) sstDecreaseValue.textContent = `${sstDecrease.toFixed(1)} °C`;
      if (assetValueDisplay) assetValueDisplay.textContent = `${formatCurrency(assetValue, true)}`;
      if (populationValue) populationValue.textContent = `${population.toLocaleString('en-US', {maximumFractionDigits: 1})} M`;
      if (droneFleetValue) droneFleetValue.textContent = fleetSizeDrones.toString();
      if (balloonFleetValue) balloonFleetValue.textContent = fleetSizeBalloons.toString();
      if (avertedDamageDisplay) avertedDamageDisplay.textContent = formatCurrency(totalAvertedDamagePerYear / numInterventionsPerYear, true);
      if (annualServiceFeeDisplay) annualServiceFeeDisplay.textContent = formatCurrency(annualServiceFee, true);
      if (weatherRoiDisplay) weatherRoiDisplay.textContent = `${clientROI.toLocaleString(undefined, {maximumFractionDigits:0})}%`;
      if (benefitCostDisplay) benefitCostDisplay.textContent = `${benefitCostRatio.toLocaleString(undefined, {maximumFractionDigits:0})} to 1`;
      if (intensityReductionDisplay) intensityReductionDisplay.textContent = `${(intensityReductionFactor * 100).toFixed(1)}%`;
      if (livesSavedDisplay) livesSavedDisplay.textContent = `~${Math.round(livesSaved).toLocaleString()}`;
      if (displacedSavedDisplay) displacedSavedDisplay.textContent = `~${Math.round(displacedSaved).toLocaleString()}`;
    }

    // Add event listeners for calculators
    const categorySelector = document.getElementById('category-selector');
    const sstDecreaseSlider = document.getElementById('sst-decrease-slider');
    const assetValueSlider = document.getElementById('asset-value-slider');
    const populationSlider = document.getElementById('population-slider');
    const droneFleetSlider = document.getElementById('drone-fleet-slider');
    const balloonFleetSlider = document.getElementById('balloon-fleet-slider');
    
    if (categorySelector) {
      const allInputs = [categorySelector, sstDecreaseSlider, assetValueSlider, populationSlider, droneFleetSlider, balloonFleetSlider];
      allInputs.forEach(input => {
        if (input) {
          const eventType = input.id === 'category-selector' ? 'click' : 'input';
          input.addEventListener(eventType, (e) => {
            const currentTarget = e.currentTarget as HTMLElement;
            if (currentTarget && currentTarget.id === 'category-selector' && (e.target as HTMLElement).tagName !== 'BUTTON') return;
            if (currentTarget && currentTarget.id === 'category-selector') {
              const currentActive = categorySelector.querySelector('.active');
              if (currentActive) currentActive.classList.remove('active');
              (e.target as HTMLElement).classList.add('active');
            }
            updateWeatherCalculator();
          });
        }
      });
    }

    // Initial calculation
    updateWeatherCalculator();
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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/4285f4?text=Project+Nimbus">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-weather-clouds-rolling-over-the-mountains-1271-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Nimbus</h2>
          <p className="mt-4 text-xl md:text-2xl text-blue-400 font-medium">AI Geoengineering for 10x Climate Defense</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-blue-400 mb-2">First Principles Summary</h5>
              <p>Weather physics: Hurricanes gain energy from SST &gt;26.5°C via latent heat (thermodynamics); AgI seeding nucleates ice in supercooled clouds, disrupting eyewall convection; SO2 aerosols boost albedo, inducing -1.5 W/m² radiative effect per Mt for SST cooling. AI optimizes via satellite predictions, scaling the $27.6B geoengineering market ($87B by 2032 at 15.5% CAGR).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-blue-400 mb-2">Problem & 10x Impact</h5>
              <p>Disasters cost $145B in insured losses (2025 est.), hurricanes averaging $123.5B/year; physics heuristic: 10% wind drop (velocity^3 scaling) yields ~27% decrease in intensity resulting in damage reduction (saves ~$30B / year). Revenue ~$10M-100M contracts for insurers/governments ($8.7B market by 2032). 10x+ ROI: $10M+ contract per storm saves $20B (e.g., Cat 4 like Harvey).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-blue-400 mb-2">Creative Solution</h5>
              <p>Loon-inspired fleets (50 drones/20 balloons+) with AI for dynamic seeding: E.g., 350kg AgI disrupts rainbands (48-hour timeline); 0.1Mt SO2 cools 0.5°C over 10,000km² Gulf (14 days) — reversible "climate-control" with ethical monitoring.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-blue-400 mb-2">Lean POC Plan & Timeline</h5>
              <p><strong className="text-stone-100">Months 1-3:</strong> 5-person team (1 meteorologist, 1 AI-E & 1 HW-E ,1 policy business lead, 1 PM; $400K budget). Simulate 100 scenarios via X Project Bellwether; perform 'cloud chamber experiment to falsify hypothesis'. <br/><strong className="text-stone-100">Months 4-6:</strong> Cloud chamber pilots; target 20%-30% intensity reduction / 0.2°C cooling. Total: $700K ($300K hardware, $400K labor).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-blue-400 mb-2">Kill Criteria</h5>
              <p>&lt;1% intensity reduction by Month 3; &gt;2% ozone depletion; &gt;$200K overrun; regulatory/ethical blocks (e.g., no EPA nod). Repurpose AI & HW to Bellwether if killed.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Climate Intervention ROI & Impact Model</h4>
            <p className="text-center text-stone-400 mb-8">Model the financial and humanitarian return of averting a major hurricane.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-stone-700 pb-8">
              <div>
                <label className="font-medium text-stone-300">Initial Storm Category</label>
                <div id="category-selector" className="grid grid-cols-5 gap-1 mt-2 bg-stone-800 rounded-lg p-1">
                  <button data-cat="1" className="category-btn py-1 rounded-md text-sm">CAT 1</button>
                  <button data-cat="2" className="category-btn py-1 rounded-md text-sm">CAT 2</button>
                  <button data-cat="3" className="category-btn py-1 rounded-md text-sm">CAT 3</button>
                  <button data-cat="4" className="category-btn py-1 rounded-md text-sm active">CAT 4</button>
                  <button data-cat="5" className="category-btn py-1 rounded-md text-sm">CAT 5</button>
                </div>
              </div>
              <div>
                <label htmlFor="sst-decrease-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Targeted SST Decrease</span>
                  <span id="sst-decrease-value" className="text-blue-400 font-bold">1.0 °C</span>
                </label>
                <input type="range" id="sst-decrease-slider" min="0.1" max="2.0" defaultValue="1.0" step="0.1" className="mt-2" />
              </div>
              <div>
                <label htmlFor="drone-fleet-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Drone Fleet Size</span>
                  <span id="drone-fleet-value" className="text-blue-400 font-bold">50</span>
                </label>
                <input type="range" id="drone-fleet-slider" min="10" max="200" defaultValue="50" step="5" className="mt-2" />
              </div>
              <div>
                <label htmlFor="balloon-fleet-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Balloon Fleet Size</span>
                  <span id="balloon-fleet-value" className="text-blue-400 font-bold">20</span>
                </label>
                <input type="range" id="balloon-fleet-slider" min="5" max="100" defaultValue="20" step="1" className="mt-2" />
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="asset-value-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Insured Asset Value in Path</span>
                  <span id="asset-value" className="text-blue-400 font-bold">$100 B</span>
                </label>
                <input type="range" id="asset-value-slider" min="10" max="1000" defaultValue="100" step="10" className="mt-2" />
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="population-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Population in Path</span>
                  <span id="population-value" className="text-blue-400 font-bold">2.0 M</span>
                </label>
                <input type="range" id="population-slider" min="0.1" max="10" defaultValue="2" step="0.1" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Client Financial Impact (Per Storm)</h5>
                <div className="space-y-3">
                  <p className="flex justify-between text-stone-300">
                    <span>Averted Damage:</span>
                    <span id="averted-damage-display" className="font-bold text-blue-400 text-lg">$5.6B</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Annual Service Fee:</span>
                    <span id="annual-service-fee-display" className="font-bold text-stone-400 text-lg">$176.4M</span>
                  </p>
                  <hr className="border-stone-700" />
                  <p className="flex justify-between text-stone-300">
                    <span>Client ROI (Annual):</span>
                    <span id="weather-roi-display" className="font-bold text-green-400 text-lg">844%</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Benefit-Cost Ratio:</span>
                    <span id="benefit-cost-display" className="font-bold text-green-400 text-lg">9 to 1</span>
                  </p>
                </div>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Humanitarian Impact (Per Storm)</h5>
                <div className="space-y-3">
                  <p className="flex justify-between text-stone-300">
                    <span>Intensity Reduction:</span>
                    <span id="intensity-reduction-display" className="font-bold text-blue-400 text-lg">28.0%</span>
                  </p>
                  <hr className="border-stone-700" />
                  <p className="flex justify-between text-stone-300">
                    <span>Est. Lives Saved:</span>
                    <span id="lives-saved-display" className="font-bold text-green-400 text-lg">~560</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>People Not Displaced:</span>
                    <span id="displaced-saved-display" className="font-bold text-green-400 text-lg">~280,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h4 className="font-bold text-2xl text-white text-center mb-8">Climate Shield Operations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/4285f4?text=1.+AI+Prediction" alt="AI analyzing satellite weather patterns" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">AI Prediction</h5>
                <p className="text-sm text-stone-400">AI models forecast storm development and identify intervention points.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/4285f4?text=2.+Fleet+Deployment" alt="A fleet of high-altitude balloons and drones" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">Fleet Deployment</h5>
                <p className="text-sm text-stone-400">An autonomous fleet of drones & balloons is dispatched to the target area.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/4285f4?text=3.+Targeted+Seeding" alt="Dispersion of micro-particles into clouds" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">Targeted Seeding</h5>
                <p className="text-sm text-stone-400">Materials are precisely released to alter albedo or nucleation.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/4285f4?text=4.+Impact+Monitoring" alt="A weather dashboard showing a weakened storm" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">Impact Monitoring</h5>
                <p className="text-sm text-stone-400">Effects are monitored in real-time to ensure safety and efficacy.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-stone-950 border border-stone-800 rounded-xl p-6">
            <h5 className="font-bold text-lg text-white mb-3">Model Assumptions & Executive Framing</h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-400">
              <li><strong className="text-stone-300">Material Costs:</strong> Seeding material (SO2) cost is modeled at <strong className="text-white">$1,500/ton</strong>. The quantity needed is estimated based on storm category and target SST decrease, representing a significant operational cost.</li>
              <li><strong className="text-stone-300">Value-Based Pricing:</strong> The "Annual Service Fee" is not based on cost, but on the immense value delivered. It's calculated to ensure the client always sees a massive ROI, aligning our incentives with saving their assets.</li>
              <li><strong className="text-stone-300">Physics Heuristic (1°C ≈ 15 mph):</strong> This linear relationship is a working model for this calculator. A primary goal of the POC is to develop a high-fidelity, probabilistic model to replace this heuristic, providing clients with confidence intervals on storm suppression.</li>
              <li><strong className="text-stone-300">Liability & Regulation (The Dragon):</strong> This model intentionally omits the immense cost of liability insurance and regulatory approvals. This is the largest non-technical risk. The POC phase would focus heavily on engaging insurers and regulators to create a viable framework, which is the true "moonshot" challenge alongside the technology.</li>
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