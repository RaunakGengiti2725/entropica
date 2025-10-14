 

import React, { useEffect, useRef } from 'react';
import { SplineViewer } from './SplineViewer';


export function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, left: 0 });
    };
    el.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => {
      el.removeEventListener('wheel', onWheel as EventListener);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: '100vh' }}>
      <div ref={overlayRef} className="absolute inset-0">
        <SplineViewer url="https://prod.spline.design/R3lhopNgkyA9g3o1/scene.splinecode" style={{ width: '100%', height: '100%', border: 'none' }} />
      </div>
    </section>
  );
}
