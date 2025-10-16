import React, { useEffect, useState } from 'react';
import { HeroSection } from './HeroSection';
import { ProcessFlowSection } from './ProcessFlowSection';
import { TechnicalSpecs } from './TechnicalSpecs';
import { TeamSection } from './TeamSection';

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="size-full">
      {/* Loading overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          pointerEvents: loading ? 'auto' : 'none',
          opacity: loading ? 1 : 0,
          transition: 'opacity 500ms ease',
        }}
      >
        <img 
          src="/src/entropinn.PNG" 
          alt="EntroPINN" 
          style={{
            height: '84px',
            width: 'auto',
          }}
        />
      </div>

      <div id="hero">
        <HeroSection />
      </div>
      <div id="process">
        <ProcessFlowSection />
      </div>
      <div id="specs">
        <TechnicalSpecs />
      </div>
      <div id="team">
        <TeamSection />
      </div>
    </div>
  );
}

