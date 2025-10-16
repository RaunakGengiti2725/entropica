import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        const NAV_HEIGHT = 72; // approx navbar height
        const y = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const NAV_HEIGHT = 72; // approx navbar height
      const y = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b-2 border-gray-800 shadow-sm'
          : 'bg-white/95 border-b border-gray-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="border-2 border-black px-4 py-2 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="tracking-widest text-sm" style={{ fontWeight: 700 }}>
                EntroPINN
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => scrollToSection('process')}
                className="px-4 py-2 text-xs tracking-wider hover:text-red-600 transition-colors"
              >
                THE PROBLEM
              </button>
              <button
                onClick={() => scrollToSection('specs')}
                className="px-4 py-2 text-xs tracking-wider hover:text-red-600 transition-colors"
              >
                ENTROPINN SOLUTIONS
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="px-4 py-2 text-xs tracking-wider hover:text-red-600 transition-colors"
              >
                OUR TEAM
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="px-6 py-2 bg-black text-white border-2 border-black hover:bg-gray-900 transition-colors text-xs tracking-wider">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

