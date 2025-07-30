'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Page Navigation
    const pageViews = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.nav-link');
    const homeLink = document.getElementById('home-link');
    const memoCards = document.querySelectorAll('.memo-card');
    const backButton = document.querySelector('.back-button');

    function showPage(pageId: string) {
      pageViews.forEach((page: any) => page.style.display = 'none');
      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.style.display = 'block';
        if (pageId === 'm1-page') updatePolymersCalculator();
        if (pageId === 'm2-page') updateWeatherCalculator();
        if (pageId === 'm3-page') updateBioTPUCalculator();
        if (pageId === 'm4-page') updateHatchCalculator();
        if (pageId === 'm5-page') updateReveelCalculator();
        if (pageId === 'm6-page') updateWHealthCalculator();
      }
      backButton?.classList.toggle('hidden', pageId === 'main-page');
      window.scrollTo(0, 0);
    }

    navLinks.forEach((link: any) => link.addEventListener('click', (e: any) => { e.preventDefault(); showPage(link.dataset.page); }));
    memoCards.forEach((card: any) => card.addEventListener('click', () => showPage(card.dataset.page)));
    homeLink?.addEventListener('click', (e: any) => { e.preventDefault(); showPage('main-page'); });
    backButton?.addEventListener('click', (e: any) => { e.preventDefault(); showPage('main-page'); });

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

    function updateWeatherCalculator() {
      const sstDecreaseSlider = document.getElementById('sst-decrease-slider') as HTMLInputElement;
      const assetValueSlider = document.getElementById('asset-value-slider') as HTMLInputElement;
      const populationSlider = document.getElementById('population-slider') as HTMLInputElement;
      const categorySelector = document.getElementById('category-selector');
      const droneFleetSlider = document.getElementById('drone-fleet-slider') as HTMLInputElement;
      const balloonFleetSlider = document.getElementById('balloon-fleet-slider') as HTMLInputElement;
      
      if (!sstDecreaseSlider) return;
      
      const stormData: any = {
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

      const sstDecreaseValue = document.getElementById('sst-decrease-value');
      const assetValueEl = document.getElementById('asset-value');
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
      if (assetValueEl) assetValueEl.textContent = `${formatCurrency(assetValue, true)}`;
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
    const formulationsSlider = document.getElementById('formulations-slider');
    const traditionalCostSlider = document.getElementById('traditional-cost-slider');
    const timeToMarketSlider = document.getElementById('time-to-market-slider');
    const marketOppSlider = document.getElementById('market-opp-slider');
    
    if (formulationsSlider) {
      [formulationsSlider, traditionalCostSlider, timeToMarketSlider, marketOppSlider].forEach(s => {
        if (s) s.addEventListener('input', updatePolymersCalculator);
      });
    }

    const categorySelector = document.getElementById('category-selector');
    const sstDecreaseSlider = document.getElementById('sst-decrease-slider');
    const assetValueSlider = document.getElementById('asset-value-slider');
    const populationSlider = document.getElementById('population-slider');
    const droneFleetSlider = document.getElementById('drone-fleet-slider');
    const balloonFleetSlider = document.getElementById('balloon-fleet-slider');

    if (categorySelector) {
      const allInputs = [categorySelector, sstDecreaseSlider, assetValueSlider, populationSlider, droneFleetSlider, balloonFleetSlider];
      allInputs.forEach(input => {
        if (!input) return;
        const eventType = input.id === 'category-selector' ? 'click' : 'input';
        input.addEventListener(eventType, (e: any) => {
          if (e.currentTarget.id === 'category-selector' && e.target.tagName !== 'BUTTON') return;
          if (e.currentTarget.id === 'category-selector') {
            const currentActive = categorySelector.querySelector('.active');
            if (currentActive) currentActive.classList.remove('active');
            e.target.classList.add('active');
          }
          updateWeatherCalculator();
        });
      });
    }

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

    const ivfMarketSlider = document.getElementById('ivf-market-slider');
    const marketShareSlider = document.getElementById('market-share-slider');
    
    if (ivfMarketSlider) {
      [ivfMarketSlider, marketShareSlider].forEach(s => {
        if (s) s.addEventListener('input', updateHatchCalculator);
      });
    }

    const garmentsSlider = document.getElementById('garments-slider');
    const premiumSlider = document.getElementById('premium-slider');
    
    if (garmentsSlider) {
      [garmentsSlider, premiumSlider].forEach(s => {
        if (s) s.addEventListener('input', updateReveelCalculator);
      });
    }

    const subscribersSlider = document.getElementById('subscribers-slider');
    const diseaseCostSlider = document.getElementById('disease-cost-slider');
    
    if (subscribersSlider) {
      [subscribersSlider, diseaseCostSlider].forEach(s => {
        if (s) s.addEventListener('input', updateWHealthCalculator);
      });
    }

    // Initial state
    showPage('main-page');
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="bg-stone-950/70 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" id="home-link" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-white hover:text-stone-300 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-400">
              <path d="M18.364 5.63604L13.4142 10.5858L18.364 15.5355L15.5355 18.364L10.5858 13.4142L5.63604 18.364L2.80761 15.5355L7.75736 10.5858L2.80761 5.63604L5.63604 2.80761L10.5858 7.75736L15.5355 2.80761L18.364 5.63604Z" fill="#fbbc05"/>
              <path d="M21.1924 15.5355L19.7782 16.9497L13.4142 10.5858L19.7782 4.22183L21.1924 5.63604L16.2426 10.5858L21.1924 15.5355Z" fill="#ea4335"/>
            </svg>
            <span>Moonshot Memos</span>
          </a>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" data-page="m1-page" className="nav-link hover:text-green-400 transition-colors">Polymath</a>
            <a href="#" data-page="m2-page" className="nav-link hover:text-blue-400 transition-colors">Nimbus</a>
            <a href="#" data-page="m3-page" className="nav-link hover:text-purple-400 transition-colors">Axon</a>
            <a href="#" data-page="m4-page" className="nav-link hover:text-cyan-400 transition-colors">Hatch</a>
            <a href="#" data-page="m5-page" className="nav-link hover:text-red-400 transition-colors">Reveel</a>
            <a href="#" data-page="m6-page" className="nav-link hover:text-yellow-400 transition-colors">W-Health</a>
          </div>
        </nav>
      </header>

      {/* Main Landing Page View */}
      <div id="main-page" className="page-view">
        <section className="container mx-auto px-6 pt-16 md:pt-24 text-center">
          <div className="relative z-30">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Proposals for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500">10x Future</span>
            </h2>
            <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-stone-400">
              Six radical ideas presented for the Google X Rapid Evaluation Team, designed to solve some of the world's most pressing problems with breakthrough technology.
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto aspect-video">
            <iframe 
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/JZe0f9kPQK8?autoplay=1&mute=1&loop=1&playlist=JZe0f9kPQK8&controls=1&showinfo=0&autohide=1"
              frameBorder="0" 
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </section>
        
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div data-page="m1-page" className="memo-card polymath rounded-xl p-6 md:p-8 cursor-pointer">
              <div className="border-t-4 border-green-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Project Polymath</h3>
              <p className="text-stone-400">10x acceleration in materials innovation through AI-powered inverse design.</p>
            </div>
            <div data-page="m2-page" className="memo-card nimbus rounded-xl p-6 md:p-8 cursor-pointer">
              <div className="border-t-4 border-blue-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Project Nimbus</h3>
              <p className="text-stone-400">10x climate resilience by using AI to orchestrate geoengineering efforts.</p>
            </div>
            <div data-page="m3-page" className="memo-card axon rounded-xl p-6 md:p-8 cursor-pointer">
              <div className="border-t-4 border-purple-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Project Axon</h3>
              <p className="text-stone-400">Brain-silicon hybrids for 10x adaptive AI and ultra-efficient robotics.</p>
            </div>
            <div data-page="m4-page" className="memo-card hatch rounded-xl p-6 md:p-8 cursor-pointer">
              <div className="border-t-4 border-cyan-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Project Hatch</h3>
              <p className="text-stone-400">Re-engineering conception with AI-driven genomics and microfluidics.</p>
            </div>
            <div data-page="m5-page" className="memo-card reveel rounded-xl p-6 md:p-8 cursor-pointer">
              <div className="border-t-4 border-red-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Project Reveel</h3>
              <p className="text-stone-400">A sustainable apparel revolution with adaptive, re-printable textiles.</p>
            </div>
            <div data-page="m6-page" className="memo-card w-health rounded-xl p-6 md:p-8 cursor-pointer">
              <div className="border-t-4 border-yellow-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Project W-Health</h3>
              <p className="text-stone-400">10x holistic health optimization through personalized, on-demand testing.</p>
            </div>
          </div>
        </div>
        
        <footer className="text-center py-16 text-stone-500 border-t border-stone-800">
          <p className="mb-2">Moonshots Made by Human:</p>
          <a href="https://docs.google.com/document/d/1WqGY3RfcuTgbyDYG2Dmu68gN08KYEulGpZCceCuVYLc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-yellow-400 transition-colors">Dr. Raj Bhakta</a>
          <p className="mt-4 text-sm">Visualized by Veo & Gemini</p>
        </footer>
      </div>

      {/* Project Pages */}
      <div id="m1-page" className="page-view">
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
      </div>

      {/* Project Nimbus */}
      <div id="m2-page" className="page-view">
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
        <article className="bg-stone-950 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 text-stone-300 mb-16">
              <h4 className="font-bold text-2xl text-white">Executive Memo</h4>
              <div>
                <h5 className="font-semibold text-lg text-blue-400 mb-2">First Principles Summary</h5>
                <p>Weather physics: Hurricanes gain energy from SST >26.5°C via latent heat (thermodynamics); AgI seeding nucleates ice in supercooled clouds, disrupting eyewall convection; SO2 aerosols boost albedo, inducing -1.5 W/m² radiative effect per Mt for SST cooling. AI optimizes via satellite predictions, scaling the $27.6B geoengineering market ($87B by 2032 at 15.5% CAGR).</p>
              </div>
              <div>
                <h5 className="font-semibold text-lg text-blue-400 mb-2">Problem & 10x Impact</h5>
                <p>Disasters cost $145B in insured losses (2025 est.), hurricanes averaging $123.5B/year; physics heuristic: 10% wind drop (velocity^3 scaling) yields ~27% decrease in intensity resulting in damage reduction (saves ~$30B / year). Revenue ~$10M-100M contracts for insurers/governments ($8.7B market by 2032). 10x+ ROI: $10M+ contract per storm saves $20B (e.g., Cat 4 like Harvey).</p>
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
          </div>
        </article>
      </div>

      {/* Back Button */}
      <a href="#" className="back-button fixed top-1/2 left-0 -translate-y-1/2 bg-stone-800 text-white p-3 rounded-r-lg z-40 hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </a>
    </>
  );
} 