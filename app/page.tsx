'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-stone-950/70 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-800">
        <div className="container-wide mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Moonshot Memos</h1>
                <p className="text-sm text-stone-400">Proposals for a 10x Future</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-stone-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-stone-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-stone-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Landing Page View */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="hero-video-bg absolute inset-0">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover opacity-20"
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-particle-flow-997-large.mp4"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Moonshot Memos
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto">
              Six radical ideas presented for the Google X Rapid Evaluation Team, designed to solve some of the world's most pressing problems with breakthrough technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Projects
              </Link>
              <a 
                href="#about"
                className="border border-stone-600 text-stone-300 px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects" className="py-20 bg-stone-900">
          <div className="container-wide mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Moonshots</h2>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                Each project represents a 10x improvement over existing solutions, leveraging cutting-edge technology to address critical global challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Polymath */}
              <Link href="/polymath" className="memo-card group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">Project Polymath</h3>
                      <p className="text-sm text-stone-400">AI Polymers</p>
                    </div>
                  </div>
                  <p className="text-stone-300 flex-grow">
                    Revolutionary AI-driven polymer discovery platform that accelerates material science by 10x, reducing development time from years to months.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-stone-400">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Project Nimbus */}
              <Link href="/nimbus" className="memo-card group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Project Nimbus</h3>
                      <p className="text-sm text-stone-400">Weather Modification</p>
                    </div>
                  </div>
                  <p className="text-stone-300 flex-grow">
                    Advanced weather modification system using AI-controlled drones and atmospheric seeding to prevent catastrophic storms and protect vulnerable regions.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-stone-400">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Project Axon */}
              <Link href="/axon" className="memo-card group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">Project Axon</h3>
                      <p className="text-sm text-stone-400">Neural Interface</p>
                    </div>
                  </div>
                  <p className="text-stone-300 flex-grow">
                    Revolutionary brain-computer interface technology enabling direct neural communication and control, opening new frontiers in human-computer interaction.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-stone-400">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Project Hatch */}
              <Link href="/hatch" className="memo-card group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">Project Hatch</h3>
                      <p className="text-sm text-stone-400">Fusion Energy</p>
                    </div>
                  </div>
                  <p className="text-stone-300 flex-grow">
                    Compact fusion reactor technology providing clean, limitless energy with 10x efficiency improvements over traditional nuclear and renewable sources.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-stone-400">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Project Reveel */}
              <Link href="/reveel" className="memo-card group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Project Reveel</h3>
                      <p className="text-sm text-stone-400">Holographic Display</p>
                    </div>
                  </div>
                  <p className="text-stone-300 flex-grow">
                    Next-generation holographic display technology creating immersive 3D experiences without special glasses, revolutionizing entertainment and communication.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-stone-400">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Project W-Health */}
              <Link href="/w-health" className="memo-card group">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">Project W-Health</h3>
                      <p className="text-sm text-stone-400">Wearable Health</p>
                    </div>
                  </div>
                  <p className="text-stone-300 flex-grow">
                    Advanced wearable health monitoring system with AI-powered diagnostics, providing 10x better health insights and early disease detection.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-stone-400">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-stone-950">
          <div className="container-wide mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Moonshot Memos</h2>
              <p className="text-xl text-stone-300 mb-8">
                These proposals represent cutting-edge innovations designed to address humanity's greatest challenges. Each project leverages breakthrough technology to achieve 10x improvements over existing solutions.
              </p>
              <p className="text-lg text-stone-400">
                From AI-driven material science to revolutionary energy solutions, these moonshots push the boundaries of what's possible and demonstrate the transformative potential of focused innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-stone-900">
          <div className="container-wide mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get in Touch</h2>
              <p className="text-xl text-stone-300 mb-8">
                Interested in learning more about these moonshot projects? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@moonshotmemos.com"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="#projects"
                  className="border border-stone-600 text-stone-300 px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 hover:text-white transition-all duration-300"
                >
                  Explore Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

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