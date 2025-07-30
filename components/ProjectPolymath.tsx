export default function ProjectPolymath() {
  return (
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
            <div>
              <h5 className="font-semibold text-lg text-green-400 mb-2">Lean POC Plan & Timeline</h5>
              <p><strong className="text-stone-100">Months 1-3:</strong> 5-person team ($300K budget). Train MVP on 1K datasets; build robotic synthesizer or partner with UIUC / Argonne NL's 'Polybot'. <br />
              <strong className="text-stone-100">Months 4-6:</strong> Iterate 100 formulations; target 80% accuracy. Total: $500K. <br />
              <strong className="text-stone-100">Kill Criteria:</strong> &lt;70% accuracy by Month 3; &gt;$100K overrun; no LOI by Month 6.</p>
            </div>
            <div>
              <h5 className="font-semibold text-lg text-green-400 mb-2">Commercial Traction</h5>
              <p>Dr. Raj Bhakta can bring in a paid pilot (~$20k) and leverage his past startup's IP & customer relationships with a $10B Global Polymer leader for commercial polymer coatings & rubber formulation POCs towards commercial deployment in 1-2 years.</p>
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
          
          <div className="mt-12 bg-stone-950 border border-stone-800 rounded-xl p-6">
            <h5 className="font-bold text-lg text-white mb-3">Model Assumptions & Executive Framing</h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-stone-400">
              <li><strong className="text-stone-300">10x Speed & Cost Reduction:</strong> The calculator models a 10x improvement in both cost and time-to-market. This is the project's North Star, achieved by shifting R&D from slow, expensive physical synthesis to rapid, low-cost virtual simulation.</li>
              <li><strong className="text-stone-300">Revenue Advantage:</strong> The most significant value driver is often speed. By getting a product to market years sooner, a partner captures revenue that would otherwise not exist. This model quantifies that advantage.</li>
              <li><strong className="text-stone-300">Customer-Facing Costs:</strong> The model assumes a customer's one-time CAPEX of $500k and annual OPEX of $200k for the robotic hardware. It does not include Google's internal R&D burn for the core AI team.</li>
            </ul>
          </div>
          
          <div className="mt-16">
            <h4 className="font-bold text-2xl text-white text-center mb-8">'Prompt-to-Polymer' Workflow</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800 flex flex-col">
                <h5 className="font-semibold text-white mb-3">1. User Prompt</h5>
                <div className="flex-grow flex items-center justify-center">
                  <div className="prompt-box text-left w-full">
                    <span className="text-green-400">&gt;</span> Design a lightweight, biodegradable plastic with 5x the tensile strength of PLA for use in medical implants...
                  </div>
                </div>
                <p className="text-sm text-stone-400 mt-3">A user defines desired material properties in natural language.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800 flex flex-col">
                <h5 className="font-semibold text-white mb-3">2. AI Agent Design</h5>
                <div className="flex-grow flex items-center justify-center">
                  <img src="https://placehold.co/600x400/1c1917/34a853?text=Gemini+Agents+Simulating" alt="Abstract visualization of AI agents and neural networks" className="rounded-md object-cover w-full h-full aspect-video" />
                </div>
                <p className="text-sm text-stone-400 mt-3">Gemini agents interpret the prompt, run simulations, and generate candidate molecules.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800 flex flex-col">
                <h5 className="font-semibold text-white mb-3">3. Autonomous Synthesis</h5>
                <div className="flex-grow flex items-center justify-center">
                  <img src="https://placehold.co/600x400/1c1917/34a853?text=Robotic+Lab+Executing+Plan" alt="A robotic arm and liquid handler preparing vials" className="rounded-md object-cover w-full h-full aspect-video" />
                </div>
                <p className="text-sm text-stone-400 mt-3">The AI's chosen designs are autonomously synthesized and tested by robotic systems.</p>
              </div>
              <div className="bg-stone-900 p-4 rounded-lg border border-stone-800 flex flex-col">
                <h5 className="font-semibold text-white mb-3">4. Material Validation</h5>
                <div className="flex-grow flex items-center justify-center">
                  <img src="https://placehold.co/600x400/1c1917/34a853?text=Validated+Material+Report" alt="A chart showing the new material's superior properties" className="rounded-md object-cover w-full h-full aspect-video" />
                </div>
                <p className="text-sm text-stone-400 mt-3">A full report on the new material's properties is generated, ready for scaling.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
} 