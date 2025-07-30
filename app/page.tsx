'use client';

import Link from 'next/link';

export default function Home() {
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
            <a href="/polymath" className="nav-link hover:text-green-400 transition-colors">Polymath</a>
            <a href="/nimbus" className="nav-link hover:text-blue-400 transition-colors">Nimbus</a>
            <a href="/axon" className="nav-link hover:text-purple-400 transition-colors">Axon</a>
            <a href="/hatch" className="nav-link hover:text-cyan-400 transition-colors">Hatch</a>
            <a href="/reveel" className="nav-link hover:text-red-400 transition-colors">Reveel</a>
            <a href="/w-health" className="nav-link hover:text-yellow-400 transition-colors">W-Health</a>
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
        
        {/* Original YouTube Video Section */}
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
            <Link href="/polymath" className="memo-card polymath rounded-xl p-6 md:p-8 cursor-pointer group">
              <div className="border-t-4 border-green-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Project Polymath</h3>
              <p className="text-stone-400">10x acceleration in materials innovation through AI-powered inverse design.</p>
            </Link>
            
            <Link href="/nimbus" className="memo-card nimbus rounded-xl p-6 md:p-8 cursor-pointer group">
              <div className="border-t-4 border-blue-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Project Nimbus</h3>
              <p className="text-stone-400">10x climate resilience by using AI to orchestrate geoengineering efforts.</p>
            </Link>
            
            <Link href="/axon" className="memo-card axon rounded-xl p-6 md:p-8 cursor-pointer group">
              <div className="border-t-4 border-purple-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Project Axon</h3>
              <p className="text-stone-400">Brain-silicon hybrids for 10x adaptive AI and ultra-efficient robotics.</p>
            </Link>
            
            <Link href="/hatch" className="memo-card hatch rounded-xl p-6 md:p-8 cursor-pointer group">
              <div className="border-t-4 border-cyan-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Project Hatch</h3>
              <p className="text-stone-400">Re-engineering conception with AI-driven genomics and microfluidics.</p>
            </Link>
            
            <Link href="/reveel" className="memo-card reveel rounded-xl p-6 md:p-8 cursor-pointer group">
              <div className="border-t-4 border-red-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Project Reveel</h3>
              <p className="text-stone-400">A sustainable apparel revolution with adaptive, re-printable textiles.</p>
            </Link>
            
            <Link href="/w-health" className="memo-card w-health rounded-xl p-6 md:p-8 cursor-pointer group">
              <div className="border-t-4 border-yellow-500 -m-6 mb-6"></div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Project W-Health</h3>
              <p className="text-stone-400">10x holistic health optimization through personalized, on-demand testing.</p>
            </Link>
          </div>
        </div>
        
        <footer className="text-center py-16 text-stone-500 border-t border-stone-800">
          <p className="mb-2">Moonshots Made by Human:</p>
          <a href="https://docs.google.com/document/d/1WqGY3RfcuTgbyDYG2Dmu68gN08KYEulGpZCceCuVYLc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-yellow-400 transition-colors">Dr. Raj Bhakta</a>
          <p className="mt-4 text-sm">Visualized by Veo & Gemini</p>
        </footer>
      </div>
    </>
  );
} 