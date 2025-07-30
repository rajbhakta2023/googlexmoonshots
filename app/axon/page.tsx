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
      
      const taskData: any = {
        grasping: { samples: 10000, time_hours: 1 },
        recognition: { samples: 50000, time_hours: 5 },
        locomotion: { samples: 250000, time_hours: 24 }
      };
      
      const bioTpuEfficiency = { samples: 1/200, power: 1/100 };
      const cost = { traditional_chip: 30000, bio_tpu: 5000, electricity_kwh: 0.15 };

      const activeTaskButton = taskSelector?.querySelector('.active') as HTMLElement;
      if (!activeTaskButton) return;

      const task = activeTaskButton.dataset.task || 'grasping';
      const fleetSize = parseInt(robotFleetSlider.value);
      const tradSamples = taskData[task].samples;
      const tradTime = taskData[task].time_hours;
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

      const robotFleetValue = document.getElementById('robot-fleet-value');
      const tradSamplesEl = document.getElementById('trad-samples');
      const tradEnergy = document.getElementById('trad-energy');
      const tradHwCostEl = document.getElementById('trad-hw-cost');
      const tradEnergyCostEl = document.getElementById('trad-energy-cost');
      const bioSamplesEl = document.getElementById('bio-samples');
      const bioEnergy = document.getElementById('bio-energy');
      const bioHwCostEl = document.getElementById('bio-hw-cost');
      const bioEnergyCostEl = document.getElementById('bio-energy-cost');
      const energySavings = document.getElementById('energy-savings');
      const costSavings = document.getElementById('cost-savings');
      const speedUpEl = document.getElementById('speed-up');

      if (robotFleetValue) robotFleetValue.textContent = fleetSize.toLocaleString();
      if (tradSamplesEl) tradSamplesEl.textContent = tradSamples.toLocaleString();
      if (tradEnergy) tradEnergy.textContent = `${tradEnergyKWH.toLocaleString(undefined, {maximumFractionDigits:0})} kWh`;
      if (tradHwCostEl) tradHwCostEl.textContent = formatCurrency(tradHwCost, true);
      if (tradEnergyCostEl) tradEnergyCostEl.textContent = formatCurrency(tradEnergyCost);
      if (bioSamplesEl) bioSamplesEl.textContent = bioSamples.toLocaleString();
      if (bioEnergy) bioEnergy.textContent = `${bioEnergyKWH.toFixed(1)} kWh`;
      if (bioHwCostEl) bioHwCostEl.textContent = formatCurrency(bioHwCost, true);
      if (bioEnergyCostEl) bioEnergyCostEl.textContent = formatCurrency(bioEnergyCost);
      if (energySavings) energySavings.textContent = `${totalEnergySavings.toFixed(1)}%`;
      if (costSavings) costSavings.textContent = formatCurrency(totalCostSavings, true);
      if (speedUpEl) speedUpEl.textContent = `${speedUp.toFixed(0)}x`;
    }

    // Add event listeners for calculators
    const robotFleetSlider = document.getElementById('robot-fleet-slider');
    const taskSelector = document.getElementById('task-selector');

    if (taskSelector) {
      const allBioInputs = [robotFleetSlider, taskSelector];
      allBioInputs.forEach(input => {
        if (!input) return;
        const eventType = input.id === 'task-selector' ? 'click' : 'input';
        input.addEventListener(eventType, (e: any) => {
          if (e.currentTarget.id === 'task-selector' && e.target.tagName !== 'BUTTON') return;
          if (e.currentTarget.id === 'task-selector') {
            const currentActive = taskSelector.querySelector('.active');
            if (currentActive) currentActive.classList.remove('active');
            e.target.classList.add('active');
          }
          updateBioTPUCalculator();
        });
      });
    }

    // Initial calculation
    updateBioTPUCalculator();
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
        <video autoPlay loop muted playsInline className="hero-video-bg" poster="https://placehold.co/1920x1080/0c0a09/8b5cf6?text=Project+Axon">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-brain-neural-network-connection-4632-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay"></div>
        <div className="relative z-30 px-6">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white">Project Axon</h2>
          <p className="mt-4 text-xl md:text-2xl text-purple-400 font-medium">Brain-Silicon Hybrids for 10x Adaptive AI</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-stone-300 mb-16">
            <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">First Principles Summary</h5>
              <p>Neural networks process information through weighted connections; biological neurons operate at 20Hz with 1000x energy efficiency vs. silicon. Brain-computer interfaces enable direct neural communication, creating hybrid systems that combine biological intelligence with computational power for 10x efficiency gains in AI training and robotics control.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">Problem & 10x Impact</h5>
              <p>Traditional AI training requires massive computational resources and energy. Our bio-TPU hybrid system achieves 10x energy efficiency and 200x faster learning through direct neural integration, enabling real-time adaptive AI for robotics and autonomous systems.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-purple-400 mb-2">Creative Solution</h5>
              <p>Develop bio-silicon hybrid processors using cultured neural networks integrated with traditional silicon circuits. These bio-TPUs enable direct neural communication, achieving 10x energy efficiency and 200x faster learning for robotics applications.</p>
            </div>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 mb-16">
            <h4 className="font-bold text-2xl text-white text-center mb-2">Bio-TPU Efficiency Calculator</h4>
            <p className="text-center text-stone-400 mb-8">Compare traditional silicon vs. bio-silicon hybrid processing for robotics tasks.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-stone-700 pb-8">
              <div>
                <label htmlFor="robot-fleet-slider" className="flex justify-between font-medium text-stone-300">
                  <span>Robot Fleet Size</span>
                  <span id="robot-fleet-value" className="text-purple-400 font-bold">100</span>
                </label>
                <input type="range" id="robot-fleet-slider" min="10" max="1000" defaultValue="100" step="10" className="mt-2" />
              </div>
              <div>
                <label className="font-medium text-stone-300">Training Task</label>
                <div id="task-selector" className="grid grid-cols-3 gap-1 mt-2 bg-stone-800 rounded-lg p-1">
                  <button data-task="grasping" className="task-btn py-2 rounded-md text-sm active">Grasping</button>
                  <button data-task="recognition" className="task-btn py-2 rounded-md text-sm">Recognition</button>
                  <button data-task="locomotion" className="task-btn py-2 rounded-md text-sm">Locomotion</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Traditional Silicon</h5>
                <div className="space-y-3">
                  <p className="flex justify-between text-stone-300">
                    <span>Training Samples:</span>
                    <span id="trad-samples" className="font-bold text-stone-400">10,000</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Energy Used:</span>
                    <span id="trad-energy" className="font-bold text-stone-400">100 kWh</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Hardware Cost:</span>
                    <span id="trad-hw-cost" className="font-bold text-stone-400">$3.0M</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Energy Cost:</span>
                    <span id="trad-energy-cost" className="font-bold text-stone-400">$15</span>
                  </p>
                </div>
              </div>
              <div className="bg-stone-950 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-white mb-4 text-center">Bio-Silicon Hybrid</h5>
                <div className="space-y-3">
                  <p className="flex justify-between text-stone-300">
                    <span>Training Samples:</span>
                    <span id="bio-samples" className="font-bold text-purple-400">50</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Energy Used:</span>
                    <span id="bio-energy" className="font-bold text-purple-400">1.0 kWh</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Hardware Cost:</span>
                    <span id="bio-hw-cost" className="font-bold text-purple-400">$500K</span>
                  </p>
                  <p className="flex justify-between text-stone-300">
                    <span>Energy Cost:</span>
                    <span id="bio-energy-cost" className="font-bold text-purple-400">$0.15</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-stone-800/50 p-6 rounded-lg">
                <p className="text-stone-300">Energy Savings</p>
                <p className="text-3xl font-extrabold text-green-400 my-2" id="energy-savings">99.0%</p>
                <p className="text-stone-400">vs. Traditional Silicon</p>
              </div>
              <div className="text-center bg-stone-800/50 p-6 rounded-lg">
                <p className="text-stone-300">Cost Savings</p>
                <p className="text-3xl font-extrabold text-green-400 my-2" id="cost-savings">$2.5M</p>
                <p className="text-stone-400">Per Fleet Deployment</p>
              </div>
              <div className="text-center bg-stone-800/50 p-6 rounded-lg">
                <p className="text-stone-300">Training Speed</p>
                <p className="text-3xl font-extrabold text-green-400 my-2" id="speed-up">200x</p>
                <p className="text-stone-400">Faster Learning</p>
              </div>
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