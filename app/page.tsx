"use client";
import { useEffect } from 'react';

// Extend the Window interface to include particlesJS
declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    particlesJS: any;
  }
}


export default function Home() {
  const openLink = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#e2e8f0" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#cbd5e1", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div id="particles-js" className="absolute inset-0 z-0" />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center flex-1 gap-12">
          <h1 className="text-5xl md:text-6xl font-sans bg-clip-text text-gray-900 text-center mb-12 animate-fade-in-down">
            Algorithm Visualizer
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
            
            <div 
              className="relative group bg-white backdrop-filter backdrop-blur-lg bg-opacity-70 rounded-2xl shadow-lg p-8 cursor-pointer w-full md:w-96 h-64 flex flex-col justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 overflow-hidden"
              onClick={() => openLink('https://sorting-visualizer-adi.vercel.app/')}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 z-10">Sorting Visualiser</h2>
              <p className="text-gray-600 z-10">Visualize and compare different sorting algorithms in real-time</p>
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            
            
            <div 
              className="relative group bg-white backdrop-filter backdrop-blur-lg bg-opacity-70 rounded-2xl shadow-lg p-8 cursor-pointer w-full md:w-96 h-64 flex flex-col justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 overflow-hidden"
              onClick={() => openLink('https://pathfinder-adi.vercel.app/')}
            >
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 z-10">Pathfinding Visualiser</h2>
              <p className="text-gray-600 z-10">Visualize and compare different pathfinding algorithms(BFS,DFS,Dijkstra) on interactive grids</p>
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer with LinkedIn and GitHub buttons */}
        <div className="w-full flex justify-center gap-6 mt-16 mb-6">
          <a 
            href="https://www.linkedin.com/in/adi-prasan-khuntia-3944072a5/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white overflow-hidden text-blue-600 hover:text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 flex items-center space-x-2 border border-blue-200"
          >
            <span className="absolute inset-0 w-full h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
            <span className="relative z-10">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/itsadi-24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white overflow-hidden text-gray-800 hover:text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 flex items-center space-x-2 border border-gray-200"
          >
            <span className="absolute inset-0 w-full h-full bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="relative z-10">GitHub</span>
          </a>
        </div>
      </main>
    </div>
  );
}