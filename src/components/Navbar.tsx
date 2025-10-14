import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b-2 border-gray-800 shadow-sm'
          : 'bg-white/95 border-b border-gray-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="border-2 border-black px-4 py-2 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="tracking-widest text-sm" style={{ fontWeight: 700 }}>
                ENTROPICA SYSTEMS
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => scrollToSection('process')}
                className="px-4 py-2 text-xs tracking-wider hover:text-red-600 transition-colors"
              >
                PROCESS
              </button>
              <button
                onClick={() => scrollToSection('specs')}
                className="px-4 py-2 text-xs tracking-wider hover:text-red-600 transition-colors"
              >
                TECHNICAL SPECS
              </button>
              <button
                onClick={() => scrollToSection('data')}
                className="px-4 py-2 text-xs tracking-wider hover:text-red-600 transition-colors"
              >
                DATA VISUALIZATION
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 border border-gray-300 px-3 py-1">
              <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
              <span className="text-xs text-gray-600">ONLINE</span>
            </div>

            <button className="px-6 py-2 bg-black text-white border-2 border-black hover:bg-gray-900 transition-colors text-xs tracking-wider">
              ACCESS SYSTEM
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

