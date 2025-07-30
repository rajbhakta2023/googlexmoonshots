'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function AxonPage() {
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

    function updateBioTPUCalculator() {
      const robotFleetSlider = document.getElementById('robot-fleet-slider') as HTMLInputElement;
      const taskSelector = document.getElementById('task-selector');
      
      if (!robotFleetSlider) return;
      
      const taskData = {
        grasping: { samples: 10000, time_hours: 1 },
        recognition: { samples: 50000, time_hours: 5 },
        locomotion: { samples: 250000, time_hours: 24 }
      };
      
      const bioTpuEfficiency = { samples: 1/200, power: 1/100 }; // 200x fewer samples, 100x less power (10W vs 1kW)
      const cost = { traditional_chip: 30000, bio_tpu: 5000, electricity_kwh: 0.15 };
      
      const activeTaskButton = taskSelector?.querySelector('.active') as HTMLElement;
      if (!activeTaskButton) return;
      
      const task = activeTaskButton.dataset.task || 'grasping';
      const fleetSize = parseInt(robotFleetSlider.value);
      const tradSamples = taskData[task as keyof typeof taskData].samples;
      const tradTime = taskData[task as keyof typeof taskData].time_hours;
      const tradPowerKW = 1.0;
      const tradEnergyKWH = fleetSize * tradPowerKW * tradTime;
      const tradEnergyCost = tradEnergyKWH * cost.electricity_kwh;
      const tradHwCost = fleetSize * cost.traditional_chip;
      const tradTotalCost = tradHwCost + tradEnergyCost;
      
      const bioSamples = Math.ceil(tradSamples * bioTpuEfficiency.samples);
      const bioTime = tradTime * bioTpuEfficiency.samples;
      const bioPowerKW = tradPowerKW * bioTpuEfficiency.power;
      const bioEnergyKWH = fleetSize * bioPowerKW * bioTime;
      const bioEnergyCost = bioEnergyKWH * cost.electricity_kwh;
      const bioHwCost = fleetSize * cost.bio_tpu;
      const bioTotalCost = bioHwCost + bioEnergyCost;
      
      const totalCostSavings = tradTotalCost - bioTotalCost;
      const totalEnergySavings = (tradEnergyKWH > 0) ? (1 - (bioEnergyKWH / tradEnergyKWH)) * 100 : 100;
      const speedUp = tradSamples / bioSamples;

      // Update display values
      const robotFleetValue = document.getElementById('robot-fleet-value');
      const tradSamplesDisplay = document.getElementById('trad-samples');
      const tradEnergyDisplay = document.getElementById('trad-energy');
      const tradHwCostDisplay = document.getElementById('trad-hw-cost');
      const tradEnergyCostDisplay = document.getElementById('trad-energy-cost');
      const bioSamplesDisplay = document.getElementById('bio-samples');
      const bioEnergyDisplay = document.getElementById('bio-energy');
      const bioHwCostDisplay = document.getElementById('bio-hw-cost');
      const bioEnergyCostDisplay = document.getElementById('bio-energy-cost');
      const energySavingsDisplay = document.getElementById('energy-savings');
      const costSavingsDisplay = document.getElementById('cost-savings');
      const speedUpDisplay = document.getElementById('speed-up');

      if (robotFleetValue) robotFleetValue.textContent = fleetSize.toLocaleString();
      if (tradSamplesDisplay) tradSamplesDisplay.textContent = tradSamples.toLocaleString();
      if (tradEnergyDisplay) tradEnergyDisplay.textContent = `${tradEnergyKWH.toLocaleString(undefined, {maximumFractionDigits:0})} kWh`;
      if (tradHwCostDisplay) tradHwCostDisplay.textContent = formatCurrency(tradHwCost, true);
      if (tradEnergyCostDisplay) tradEnergyCostDisplay.textContent = formatCurrency(tradEnergyCost);
      if (bioSamplesDisplay) bioSamplesDisplay.textContent = bioSamples.toLocaleString();
      if (bioEnergyDisplay) bioEnergyDisplay.textContent = `${bioEnergyKWH.toFixed(1)} kWh`;
      if (bioHwCostDisplay) bioHwCostDisplay.textContent = formatCurrency(bioHwCost, true);
      if (bioEnergyCostDisplay) bioEnergyCostDisplay.textContent = formatCurrency(bioEnergyCost);
      if (energySavingsDisplay) energySavingsDisplay.textContent = `${totalEnergySavings.toFixed(1)}%`;
      if (costSavingsDisplay) costSavingsDisplay.textContent = formatCurrency(totalCostSavings, true);
      if (speedUpDisplay) speedUpDisplay.textContent = `${speedUp.toFixed(0)}x`;
    }

    // Add event listeners for calculators
    const robotFleetSlider = document.getElementById('robot-fleet-slider');
    const taskSelector = document.getElementById('task-selector');
    
    if (taskSelector) {
      const allBioInputs = [robotFleetSlider, taskSelector];
      allBioInputs.forEach(input => {
        if (input) {
          const eventType = input.id === 'task-selector' ? 'click' : 'input';
          input.addEventListener(eventType, (e) => {
            if (e.currentTarget.id === 'task-selector' && (e.target as HTMLElement).tagName !== 'BUTTON') return;
            if (e.currentTarget.id === 'task-selector') {
              const currentActive = taskSelector.querySelector('.active');
              if (currentActive) currentActive.classList.remove('active');
              (e.target as HTMLElement).classList.add('active');
            }
            updateBioTPUCalculator();
          });
        }
      });
    }

    // Initial calculation
    updateBioTPUCalculator();
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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/a78bfa?text=Project+Axon">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-neurology-3023-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Axon</h2>
          <p className="mt-4 text-xl md:text-2xl text-purple-400 font-medium">Bio-TPU: Brain-Silicon Hybrids</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">First Principles Summary</h5>
              <p>Brains compute at 20W; organoids can scale to ~11.6 TFLOPS at 233μW. Fuse with TPUs for hybrid plasticity and precision, tapping the $8.36B neuromorphic market.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">Problem & 10x Impact</h5>
              <p>Robots need 10,000+ samples for adaptation. Bio-TPU enables 1,000x efficiency (10-100 samples, 10W), cutting energy 90% and saving $1B/year (100K units) (~$2.4B market by 2034).</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">Creative Solution</h5>
              <p>Cortical Labs-inspired: Culture organoids, MEA-interface to TPUs for embodied learning—e.g., robots grasp via 50 trials, with sentience safeguards.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">Lean POC Plan & Timeline</h5>
              <p><strong className="text-stone-100">Months 1-3:</strong> 5-person team (2 neuroscientists, 2 engineers, 1 PM; $500K budget). Culture 10 organoids; integrate TPU for pattern tasks.<br/><strong className="text-stone-100">Months 4-6:</strong> Robot arm demo; target &lt;10ms latency, 1,000x efficiency. Total: $500K.<br/><strong className="text-stone-100">Kill Criteria:</strong> &lt;0.1 TFLOPS by Month 3; >50ms latency; ethics flags (EEG >0.6); no LOI by Month 6.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Robotics Training Efficiency Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Model the cost and energy savings when training a fleet of humanoid robots.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-stone-700 pb-8">
              <div>
                <label htmlFor="robot-fleet-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Robot Fleet Size</span>
                  <span id="robot-fleet-value" className="text-purple-400 font-bold">100</span>
                </label>
                <input type="range" id="robot-fleet-slider" min="10" max="1000" defaultValue="100" step="10" className="mt-2" />
              </div>
              <div>
                <label className="font-medium text-stone-300">Training Task Complexity</label>
                <div id="task-selector" className="grid grid-cols-3 gap-1 mt-2 bg-stone-800 rounded-lg p-1">
                  <button data-task="grasping" className="task-btn py-1 rounded-md text-sm active">Grasping</button>
                  <button data-task="recognition" className="task-btn py-1 rounded-md text-sm">Recognition</button>
                  <button data-task="locomotion" className="task-btn py-1 rounded-md text-sm">Locomotion</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Traditional AI (GPU/TPU)</h5>
                <div className="space-y-3">
                  <p className="flex justify-between text-stone-300">
                    <span>Training Samples / Robot:</span>
                    <span id="trad-samples" className="font-bold text-stone-400">10,000</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Power Draw / Robot:</span>
                    <span className="font-bold text-stone-400">1 kW</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Total Energy Used:</span>
                    <span id="trad-energy" className="font-bold text-stone-400">278 kWh</span>
                  </p>
                  <hr className="border-stone-700" />
                  <p className="flex justify-between text-stone-300">
                    <span>Hardware Cost:</span>
                    <span id="trad-hw-cost" className="font-bold text-red-400 text-lg">$3.0M</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Energy Cost:</span>
                    <span id="trad-energy-cost" className="font-bold text-red-400 text-lg">$42</span>
                  </p>
                </div>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg border-2 border-purple-500">
                <h5 className="text-lg font-bold text-purple-400 mb-4 text-center">Project Axon (Bio-TPU)</h5>
                <div className="space-y-3">
                  <p className="flex justify-between text-stone-300">
                    <span>Training Samples / Robot:</span>
                    <span id="bio-samples" className="font-bold text-green-400">50</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Power Draw / Robot:</span>
                    <span className="font-bold text-green-400">10 W</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Total Energy Used:</span>
                    <span id="bio-energy" className="font-bold text-green-400">0.0 kWh</span>
                  </p>
                  <hr className="border-stone-700" />
                  <p className="flex justify-between text-stone-300">
                    <span>Hardware Cost:</span>
                    <span id="bio-hw-cost" className="font-bold text-green-400 text-lg">$500K</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Energy Cost:</span>
                    <span id="bio-energy-cost" className="font-bold text-green-400 text-lg">$0</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h5 className="text-lg font-bold text-white mb-4 text-center">Total Savings</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-stone-950 p-4 rounded-lg">
                  <p className="text-sm text-stone-400">Energy Reduction</p>
                  <p id="energy-savings" className="text-2xl font-bold text-purple-400">99.9%</p>
                </div>
                <div className="bg-stone-950 p-4 rounded-lg">
                  <p className="text-sm text-stone-400">Total Cost Savings</p>
                  <p id="cost-savings" className="text-2xl font-bold text-purple-400">$2.5M</p>
                </div>
                <div className="bg-stone-950 p-4 rounded-lg">
                  <p className="text-sm text-stone-400">Adaptation Speed-Up</p>
                  <p id="speed-up" className="text-2xl font-bold text-purple-400">200x</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h4 className="font-bold text-2xl text-white text-center mb-8">The Bio-TPU Pipeline</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/a78bfa?text=1.+Organoid+Culturing" alt="A petri dish with a brain organoid" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">Organoid Culturing</h5>
                <p className="text-sm text-stone-400">Stem cells are differentiated and grown into functional cortical organoids.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/a78bfa?text=2.+MEA+Integration" alt="An organoid on a multi-electrode array" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">MEA Integration</h5>
                <p className="text-sm text-stone-400">The organoid is placed on a multi-electrode array to interface with silicon.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/a78bfa?text=3.+Embodied+Learning" alt="A robot arm connected to the Bio-TPU" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">Embodied Learning</h5>
                <p className="text-sm text-stone-400">The Bio-TPU learns a new task by controlling a robot arm through trial and error.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800">
                <img src="https://placehold.co/600x400/1c1917/a78bfa?text=4.+Adaptive+Intelligence" alt="The robot arm successfully performing a task" className="rounded-md object-cover w-full h-full aspect-video mb-3" />
                <h5 className="font-semibold text-white">Adaptive Intelligence</h5>
                <p className="text-sm text-stone-400">The system rapidly adapts to new information with extreme energy efficiency.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-stone-950 border border-stone-800 rounded-xl p-6">
            <h5 className="font-bold text-lg text-white mb-3">Model Assumptions & Executive Framing</h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-400">
              <li><strong className="text-stone-300">Target Cost for Viability:</strong> The $5,000 Bio-TPU hardware cost is not a current price but the *target unit cost* required to be competitive with silicon at scale. Achieving this cost is a primary goal of the project.</li>
              <li><strong className="text-stone-300">Focus on Operational Efficiency:</strong> This calculator models the dramatic energy and time savings during the *operational training phase* of a robot fleet. It demonstrates the core value proposition to an end-user.</li>
              <li><strong className="text-stone-300">The Biological Foundry Problem:</strong> The model does not include the significant R&D and manufacturing costs of producing stable, scalable cortical organoids. Solving this "biological foundry" problem is the central technical challenge and the key to unlocking 10x impact. The moonshot is won or lost here.</li>
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