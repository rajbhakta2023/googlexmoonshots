import Link from 'next/link';

export default function Home() {
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
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black"></div>
        <div className="relative z-30 px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Moonshot Memos
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-white">Proposals for a </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              10x Future
            </span>
          </div>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Six radical ideas presented for the Google X Rapid Evaluation Team, designed to solve some of the world's most pressing problems with breakthrough technology.
          </p>
          
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/polymath" className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Project Polymath</h3>
              </div>
              <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                AI-Powered Polymer Design for 10x materials innovation
              </p>
            </Link>

            <Link href="/nimbus" className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Project Nimbus</h3>
              </div>
              <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                AI Geoengineering for 10x climate resilience
              </p>
            </Link>

            <Link href="/axon" className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Project Axon</h3>
              </div>
              <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                Brain-Silicon Hybrids for 10x adaptive AI
              </p>
            </Link>

            <Link href="/hatch" className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Project Hatch</h3>
              </div>
              <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                AI-Driven Genomics & Microfluidics for fertility
              </p>
            </Link>

            <Link href="/reveel" className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-red-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Project Reveel</h3>
              </div>
              <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                Sustainable Apparel Revolution with adaptive textiles
              </p>
            </Link>

            <Link href="/w-health" className="group bg-stone-900/50 backdrop-blur-sm border border-stone-800 hover:border-yellow-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Project W-Health</h3>
              </div>
              <p className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors">
                10x Holistic Health Optimization through AI
              </p>
            </Link>
          </div>

          {/* YouTube Embed */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Moonshot Memos Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-stone-400">
              &copy; 2024 Moonshot Memos. All rights reserved. | Created by{' '}
              <a href="#" className="text-stone-300 hover:text-white transition-colors">
                Raj Bhakta
              </a>
              {' '}with Gemini
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}